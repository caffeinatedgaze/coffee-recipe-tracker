const state = {
  entries: [],
  filter: "all",
  highlightOnly: false,
  search: "",
  sort: "newest",
};

const nodes = {
  entries: document.getElementById("entries"),
  entryCount: document.getElementById("entryCount"),
  highlightCount: document.getElementById("highlightCount"),
  latestStamp: document.getElementById("latestStamp"),
  featureTitle: document.getElementById("featureTitle"),
  featureOriginal: document.getElementById("featureOriginal"),
  featureSummary: document.getElementById("featureSummary"),
  featureRecipe: document.getElementById("featureRecipe"),
  featureGrind: document.getElementById("featureGrind"),
  featureNext: document.getElementById("featureNext"),
  resultMeta: document.getElementById("resultMeta"),
  filterBar: document.getElementById("filterBar"),
  searchInput: document.getElementById("searchInput"),
  highlightOnly: document.getElementById("highlightOnly"),
  sortSelect: document.getElementById("sortSelect"),
  template: document.getElementById("entryTemplate"),
};

function getEnglishTitle(entry) {
  const f = entry.fields;
  return (
    f["English title"] ||
    f["English Title"] ||
    f["English title (EN)"] ||
    f["Recipe name"] ||
    entry.headingLabel ||
    entry.title
  );
}

function getOriginalTitle(entry) {
  const f = entry.fields;
  return (
    f["Original title"] ||
    f["Original Title"] ||
    f["Original text"] ||
    f["Original Text"] ||
    f["Original"] ||
    ""
  );
}

function parseMarkdown(markdown) {
  const lines = markdown.split(/\r?\n/);
  const entries = [];
  let current = null;

  const finish = () => {
    if (!current) return;
    current.raw = current.buffer.join("\n").trim();
    current.searchText = [
      current.title,
      current.headingDate,
      current.fields["Recipe name"],
      current.fields.Bean,
      current.fields.Grind,
      current.fields.Ratio,
      current.fields["Water temp"],
      current.fields.Method,
      current.fields.Timing,
      current.fields["Tasting notes"],
      current.fields.Outcome,
      current.fields["Next adjustment"],
      current.fields.Highlight,
      current.fields["Related entries"],
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    entries.push(current);
  };

  for (const line of lines) {
    if (line.startsWith("### ")) {
      finish();
      const title = line.slice(4).trim();
      const dateMatch = title.match(/^(\d{4}-\d{2}-\d{2})\s+-\s+(.+)$/);
      current = {
        title,
        headingDate: dateMatch ? dateMatch[1] : "",
        headingLabel: dateMatch ? dateMatch[2] : title,
        fields: {},
        buffer: [line],
      };
      continue;
    }

    if (!current) continue;
    current.buffer.push(line);

    const match = line.match(/^- ([^:]+): (.*)$/);
    if (match) {
      current.fields[match[1]] = match[2];
    }
  }

  finish();
  return entries;
}

function byDate(a, b) {
  return parseStamp(b) - parseStamp(a);
}

function parseStamp(entry) {
  const stamp = entry.fields.Timestamp || entry.headingDate;
  if (!stamp) return 0;

  const match = stamp.match(
    /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?/,
  );
  if (!match) return Date.parse(stamp) || 0;

  const [, year, month, day, hour = "0", minute = "0", second = "0"] = match;
  return new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute),
    Number(second),
  ).getTime();
}

function renderFilters() {
  const counts = new Map();
  for (const entry of state.entries) {
    const type = (entry.fields.Type || "other").toLowerCase();
    counts.set(type, (counts.get(type) || 0) + 1);
  }

  const chips = [
    { value: "all", label: `All (${state.entries.length})` },
    ...Array.from(counts.entries()).map(([value, count]) => ({
      value,
      label: `${value} (${count})`,
    })),
  ];

  nodes.filterBar.innerHTML = "";
  for (const chip of chips) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip${state.filter === chip.value ? " active" : ""}`;
    button.textContent = chip.label;
    button.addEventListener("click", () => {
      state.filter = chip.value;
      render();
    });
    nodes.filterBar.appendChild(button);
  }
}

function matches(entry) {
  const type = (entry.fields.Type || "other").toLowerCase();
  const highlight = (entry.fields.Highlight || "no").toLowerCase() === "yes";
  const typeOk = state.filter === "all" || state.filter === type;
  const highlightOk = !state.highlightOnly || highlight;
  const searchOk = !state.search || entry.searchText.includes(state.search);
  return typeOk && highlightOk && searchOk;
}

function formatDate(entry) {
  const stamp = entry.fields.Timestamp || entry.headingDate;
  if (!stamp) return entry.headingDate || "";
  const time = parseStamp(entry);
  if (!time) return stamp;
  return new Date(time).toLocaleString([], {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function factRow(label, value) {
  if (!value) return "";
  return `<dt>${label}</dt><dd>${escapeHtml(value)}</dd>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function cardText(entry) {
  const f = entry.fields;
  return [
    `Title: ${getEnglishTitle(entry)}`,
    `Recipe: ${f["Recipe name"] || ""}`,
    `Bean: ${f.Bean || ""}`,
    `Grind: ${f.Grind || ""}`,
    `Ratio: ${f.Ratio || ""}`,
    `Water temp: ${f["Water temp"] || ""}`,
    `Method: ${f.Method || ""}`,
    `Timing: ${f.Timing || ""}`,
    `Tasting notes: ${f["Tasting notes"] || ""}`,
    `Outcome: ${f.Outcome || ""}`,
    `Next adjustment: ${f["Next adjustment"] || ""}`,
  ]
    .filter((line) => !line.endsWith(": "))
    .join("\n");
}

function renderCards(filtered) {
  nodes.entries.innerHTML = "";

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent =
      "No entries match that filter. Try loosening the search or show all entries.";
    nodes.entries.appendChild(empty);
    return;
  }

  const fragment = document.createDocumentFragment();

  for (const entry of filtered) {
    const node = nodes.template.content.firstElementChild.cloneNode(true);
    const f = entry.fields;
    const highlight = (f.Highlight || "no").toLowerCase() === "yes";
    const type = f.Type || "other";
    const englishTitle = getEnglishTitle(entry);
    const originalTitle = getOriginalTitle(entry);

    node.querySelector(".card-date").textContent = formatDate(entry);
    node.querySelector(".card-title").textContent = englishTitle;
    node.querySelector('[data-field="type"]').textContent = type;
    node.querySelector('[data-field="highlight"]').textContent = highlight ? "highlight" : "";
    node.querySelector('[data-field="highlight"]').style.display = highlight
      ? "inline-flex"
      : "none";
    node.querySelector(".card-summary").textContent =
      f.Outcome || f["Tasting notes"] || "No summary captured yet.";

    const facts = node.querySelector(".facts");
    facts.innerHTML =
      factRow("Recipe", f["Recipe name"]) +
      factRow("Bean", f.Bean) +
      factRow("Grind", f.Grind) +
      factRow("Ratio", f.Ratio) +
      factRow("Water", f["Water temp"]) +
      factRow("Method", f.Method) +
      factRow("Timing", f.Timing) +
      factRow("Notes", f["Tasting notes"]);

    node.querySelector(".card-next").textContent =
      f["Next adjustment"] || "No next move recorded.";

    const originalWrap = node.querySelector(".original-toggle");
    const originalText = node.querySelector(".card-original");
    if (originalTitle) {
      originalText.textContent = originalTitle;
      originalWrap.hidden = false;
    } else {
      originalWrap.hidden = true;
    }

    node.querySelector(".copy-btn").addEventListener("click", async () => {
      await navigator.clipboard.writeText(cardText(entry));
      node.querySelector(".copy-btn").textContent = "Copied";
      setTimeout(() => {
        node.querySelector(".copy-btn").textContent = "Copy card";
      }, 1200);
    });

    fragment.appendChild(node);
  }

  nodes.entries.appendChild(fragment);
}

function renderFeature() {
  const highlight = state.entries.find(
    (entry) => (entry.fields.Highlight || "no").toLowerCase() === "yes",
  );
  const latest = state.entries[0];
  const entry = highlight || latest;

  if (!entry) {
    nodes.featureTitle.textContent = "No entries yet";
    nodes.featureOriginal.hidden = true;
    nodes.featureSummary.textContent = "";
    nodes.featureRecipe.textContent = "--";
    nodes.featureGrind.textContent = "--";
    nodes.featureNext.textContent = "--";
    return;
  }

  const f = entry.fields;
  nodes.featureTitle.textContent = getEnglishTitle(entry);
  const originalTitle = getOriginalTitle(entry);
  if (originalTitle) {
    nodes.featureOriginal.textContent = originalTitle;
    nodes.featureOriginal.hidden = false;
  } else {
    nodes.featureOriginal.hidden = true;
  }
  nodes.featureSummary.textContent =
    f.Outcome || f["Tasting notes"] || "Current reference cup.";
  nodes.featureRecipe.textContent = f["Recipe name"] || "unknown";
  nodes.featureGrind.textContent = f.Grind || "unknown";
  nodes.featureNext.textContent = f["Next adjustment"] || "unknown";
}

function renderStats(filtered) {
  const highlights = state.entries.filter(
    (entry) => (entry.fields.Highlight || "no").toLowerCase() === "yes",
  );
  nodes.entryCount.textContent = String(state.entries.length);
  nodes.highlightCount.textContent = String(highlights.length);
  nodes.latestStamp.textContent = state.entries[0] ? formatDate(state.entries[0]) : "--";
  nodes.resultMeta.textContent = `${filtered.length} visible / ${state.entries.length} total`;
}

function render() {
  const filtered = state.entries
    .filter(matches)
    .sort((a, b) => (state.sort === "newest" ? byDate(a, b) : byDate(b, a)));

  renderFilters();
  renderFeature();
  renderStats(filtered);
  renderCards(filtered);
}

async function init() {
  const response = await fetch("./KAFFEEREZEPTE.md");
  const markdown = await response.text();
  state.entries = parseMarkdown(markdown).sort(byDate);

  nodes.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    render();
  });

  nodes.highlightOnly.addEventListener("change", (event) => {
    state.highlightOnly = event.target.checked;
    render();
  });

  nodes.sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    render();
  });

  render();
}

init().catch((error) => {
  console.error(error);
  nodes.entries.innerHTML =
    '<div class="empty-state">Could not load the tracker file. GitHub Pages will serve it fine, but local file previews need a small web server.</div>';
});

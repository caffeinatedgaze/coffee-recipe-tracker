# Kaffeerezepte Tracker

Working tracker for coffee recipes and brew results.

## Capture Rules

- Capture every recipe or result as one entry.
- Keep unknown fields as `unknown`; do not invent details.
- Preserve the user's wording for tasting notes when useful, then add a short normalized outcome.
- If a post updates a prior recipe, add a new dated result and cross-reference the recipe name.
- Always include a next adjustment recommendation from me first; if the user suggests one, keep it as optional secondary context instead of replacing mine.
- On request, summarize patterns across bean, grind, ratio, water temp, method, timing, tasting notes, and outcomes.

## Preference Profile

- Default target: clear cup with strong body, but not heavy.
- Keep coffee names and package-label wording distinct and exact in the log.
- If the label has origin, varietal, or process details, preserve them separately instead of collapsing them into one name.

## Entry Template

### YYYY-MM-DD - Recipe or Result Name

- Source: Telegram topic `Kaffeerezepte` / manual handoff
- Type: recipe | result | adjustment
- Recipe name: unknown
- Bean: unknown
- Grind: unknown
- Ratio: unknown
- Water temp: unknown
- Method: unknown
- Timing: unknown
- Tasting notes: unknown
- Outcome: unknown
- Next adjustment: unknown
- Related entries: none

## Entries

No entries yet.

### 2026-07-31 - Brew Result

- Source: Telegram topic `Kaffeerezepte` / voice transcript
- Type: result
- Recipe name: unknown
- Bean: The Barn - Ivan dos Santos Typica
- Grind: Opus grinder setting 4
- Ratio: unknown
- Water temp: 93 C
- Method: press method
- Timing: steep 2 minutes; press for 20 seconds
- Tasting notes: "taste quite clear but still fairly boring. Although, nice."
- Outcome: clear, pleasant, but a bit boring
- Next adjustment: try a slightly finer grind or extend the steep a little, then change only one variable on the next brew
- Related entries: none

### 2026-07-31 - Aeropress Recipe

- Source: Telegram topic `Kaffeerezepte` / voice transcript
- Type: recipe
- Recipe name: unknown
- Bean: Brazilian beans
- Grind: Opus grinder setting 4
- Ratio: 12 g coffee to unknown water
- Water temp: 93 C
- Method: Aeropress
- Timing: steep 1 minute 45 seconds; press 25 seconds
- Tasting notes: unknown
- Outcome: brewed and waiting on tasting feedback
- Next adjustment: after tasting, keep the same setup if it is balanced; if it feels thin, go slightly finer for more body and sweetness; if it feels heavy, back off one click for more clarity
- Related entries: 2026-07-31 - Brew Result

## Pattern Notes

- Two brew entries captured.

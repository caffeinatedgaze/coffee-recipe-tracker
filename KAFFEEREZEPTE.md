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
- Default brew method: mini portable Aeropress unless stated otherwise.
- Aeropress water cap: 150 g unless the user says otherwise.
- Keep coffee names and package-label wording distinct and exact in the log.
- If the label has origin, varietal, or process details, preserve them separately instead of collapsing them into one name.

## Entry Template

### YYYY-MM-DD - Recipe or Result Name

- Source: Telegram topic `Kaffeerezepte` / manual handoff
- Timestamp: YYYY-MM-DD HH:MM local
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
- Highlight: no
- Related entries: none

## Entries

No entries yet.

### 2026-08-03 - Aeropress Recipe Update

- Source: Telegram topic `Kaffeerezepte` / voice transcript
- Timestamp: 2026-08-03 07:52 local
- Type: recipe/result
- Recipe name: unknown
- Bean: unknown
- Grind: Opus grinder setting 3.4
- Ratio: 12 g coffee to 150 g water
- Water temp: 93 C
- Method: mini portable Aeropress
- Timing: 1 minute 50 seconds steep; 25 seconds press
- Tasting notes: "this is a very smooth coffee. A little floral, a little fruity. Almost no bitterness in the aftertaste."
- Outcome: very smooth cup with light floral and fruity notes, and almost no aftertaste bitterness
- Next adjustment: keep this recipe as-is for these beans to preserve the smoothness and low bitterness
- Highlight: yes
- Related entries: 2026-08-02 - The Barn - Ivan dos Santos Typica Session

### 2026-08-03 - Brazilian Beans Aeropress Update

- Source: Telegram topic `Kaffeerezepte` / voice transcript
- Timestamp: 2026-08-03 12:39 local
- Type: adjustment
- Recipe name: Brazilian beans Aeropress
- Bean: Brazilian beans
- Grind: Opus grinder setting 3.5
- Ratio: 12 g coffee to 140 g water
- Water temp: 90 C
- Method: mini portable Aeropress
- Timing: 2:05 steep; 25 seconds press; no swirl
- Tasting notes: unknown
- Outcome: updated working recipe for the Brazilian beans
- Next adjustment: keep this as the baseline until the next tasting
- Highlight: no
- Related entries: 2026-07-31 - Aeropress Recipe; 2026-07-31 - Brew Result

### 2026-08-03 - Colombia Pacamara Base Recipe

- Source: Telegram topic `Kaffeerezepte` / voice transcript + image
- Timestamp: 2026-08-03 16:01 local
- Type: recipe
- Recipe name: Colombia Pacamara
- Bean: Colombia Pacamara; natural process; light roast; roast date 2026-07-18
- Grind: Opus grinder setting 3.25
- Ratio: 12 g coffee to 150 g water
- Water temp: 93 C
- Method: mini portable Aeropress
- Timing: 1:50 steep; 25 seconds press
- Tasting notes: unknown
- Outcome: logged base recipe for the Pacamara beans
- Next adjustment: use this as the baseline, then taste for whether the fruit needs more lift or the cup needs more calm
- Highlight: no
- Related entries: 2026-08-03 - Aeropress Recipe Update

### 2026-08-03 - Colombia Pacamara Brew Result

- Source: Telegram topic `Kaffeerezepte` / voice transcript
- Timestamp: 2026-08-03 16:05 local
- Type: result
- Recipe name: Colombia Pacamara
- Bean: Colombia Pacamara; natural process; light roast; roast date 2026-07-18
- Grind: Opus grinder setting 3.25
- Ratio: 12 g coffee to 150 g water
- Water temp: 93 C
- Method: mini portable Aeropress
- Timing: 1:50 steep; 25 seconds press
- Tasting notes: "slightly over-extracted"
- Outcome: the cup came through a bit too far on extraction
- Next adjustment: go 1 click coarser on the Opus, then keep the rest the same to see if the cup stays bright but loses the excess extraction
- Highlight: no
- Related entries: 2026-08-03 - Colombia Pacamara Base Recipe

### 2026-08-02 - The Barn - Ivan dos Santos Typica Session

- Source: Telegram topic `Kaffeerezepte` / voice transcript + image
- Timestamp: 2026-08-02 08:21-17:12 local
- Type: recipe/result
- Recipe name: The Barn - Ivan dos Santos Typica
- Bean: The Barn - Ivan dos Santos Typica
- Image notes: bag photo shows The Barn label, Ivan dos Santos Typica, São Paulo, Brazil, Typica, Natural, and the package notes "plum. vanilla. smooth."; filter, 250g
- Grind: Opus grinder setting 3.5 to 4, then 3.5 exactly, then 3.4
- Ratio: 12 g coffee to up to 150 g water in the mini Aeropress
- Water temp: 93 C, then 92 C
- Method: mini portable Aeropress
- Timing: 1 minute 50 seconds steep; 20 to 25 seconds press, then 30 seconds press; gentle swirl at the beginning
- Tasting notes: plum, vanilla, smooth; very stable, smooth, pleasant, no plum; good taste, smooth, a little bitter in the aftertaste; plum notes still weak; bright coffee with a shade of bitterness, perhaps a little over extracted
- Outcome: one coffee session; smooth and stable, but the plum note still did not show and the cup is reading bright with a slight bitterness
- Next adjustment: go 1 click coarser on the Opus to soften the bitterness while keeping the brightness and clarity
- Related entries: 2026-07-31 - Brew Result

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
- Tasting notes: "acidic with a well-defined body, but not overboard; not tasting plum"
- Outcome: clean acidity, solid structure, plum note not yet showing
- Next adjustment: keep Opus 4 but extend the steep 10-15 seconds to push sweetness and fruit clarity, especially plum, without adding much heaviness
- Highlight: yes
- Related entries: 2026-07-31 - Brew Result

## Pattern Notes

- Three brew sessions captured.

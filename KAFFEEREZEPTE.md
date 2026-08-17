# Kaffeerezepte Tracker

Working tracker for coffee recipes and brew results.

## Capture Rules

- Capture every recipe or result as one entry.
- Keep unknown fields as `unknown`; do not invent details.
- Preserve the user's wording for tasting notes when useful, then add a short normalized outcome.
- If a post updates a prior recipe, add a new dated adjustment/result entry and cross-reference the recipe name.
- When an adjustment exists for a bean, treat the most recent adjustment as the active recipe and keep the original recipe as historical context.
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

### 2026-08-06 - The Barn - La Colina Washed Label Capture

- Source: Telegram topic `Kaffeerezepte` / image
- Timestamp: 2026-08-06 07:03 local
- Type: adjustment
- Recipe name: The Barn - La Colina Washed
- Bean: The Barn; La Colina Washed; Chimaltenango, Guatemala; Caturra; washed
- Grind: Opus grinder setting 3.5
- Ratio: 12 g coffee to 150 g water
- Water temp: 91 C
- Method: mini portable Aeropress
- Timing: 2:05 steep; 30 seconds press
- Stirring: one gentle stir only if it feels too thin
- Tasting notes: milk chocolate; pear; silky; package label notes from the bag photo
- Outcome: package label captured for the current La Colina brew context; added the full origin and varietal detail from the photo
- Next adjustment: keep the brew baseline unchanged; if the next cup still feels a bit hollow, go 1 click finer first
- Highlight: no
- Related entries: 2026-08-05 - La Colina Washed Conclusion Update; 2026-08-05 - La Colina Washed Result; 2026-08-05 - La Colina Washed Steep Adjustment

### 2026-08-06 - The Barn - La Colina Washed Body Boost Adjustment

- Source: Telegram topic `Kaffeerezepte` / voice transcript
- Timestamp: 2026-08-06 07:20 local
- Type: adjustment
- Recipe name: The Barn - La Colina Washed
- Bean: The Barn; La Colina Washed; Chimaltenango, Guatemala; Caturra; washed
- Grind: Opus grinder setting 3.25
- Ratio: 12 g coffee to 150 g water
- Water temp: 91 C
- Method: mini portable Aeropress
- Timing: 10-25 seconds steep; 30 seconds press
- Stirring: no stirring
- Tasting notes: very pleasant; smooth; significantly on the extracted perhaps; wants stronger body
- Outcome: tightened the grind a touch to push more strength and body without changing the rest of the cup
- Next adjustment: brew this version first; if it still feels too soft, keep the same setup and go one more click finer next time to keep building body
- Highlight: no
- Related entries: 2026-08-06 - The Barn - La Colina Washed Label Capture; 2026-08-05 - La Colina Washed Conclusion Update; 2026-08-05 - La Colina Washed Result

### 2026-08-06 - The Barn - La Colina Washed German Note

- Source: Telegram topic `Kaffeerezepte` / voice transcript
- Timestamp: 2026-08-06 07:27 local
- Type: adjustment
- Recipe name: The Barn - La Colina Washed
- Bean: The Barn; La Colina Washed; Chimaltenango, Guatemala; Caturra; washed
- Grind: Opus grinder setting 3.25
- Ratio: 12 g coffee to 150 g water
- Water temp: 91 C
- Method: mini portable Aeropress
- Timing: 10-25 seconds steep; 30 seconds press
- Stirring: no stirring
- Tasting notes: user wants the recipe written down in German
- Outcome: stored the current La Colina body-boost recipe as a German-facing note for easier reuse
- Next adjustment: keep brewing this version as the working baseline unless the cup shifts again
- Highlight: no
- Related entries: 2026-08-06 - The Barn - La Colina Washed Body Boost Adjustment; 2026-08-06 - The Barn - La Colina Washed Label Capture

### 2026-08-06 - The Barn - La Colina Washed Press Tune

- Source: Telegram topic `Kaffeerezepte` / voice transcript
- Timestamp: 2026-08-06 12:06 local
- Type: adjustment
- Recipe name: The Barn - La Colina Washed
- Bean: The Barn; La Colina Washed; Chimaltenango, Guatemala; Caturra; washed
- Grind: Opus grinder setting 3.25
- Ratio: 12 g coffee to 150 g water
- Water temp: 92 C
- Method: mini portable Aeropress
- Timing: 1:50 steep; 20 seconds press
- Stirring: no stirring
- Tasting notes: user asked to save the recipe and expect the result
- Outcome: updated the working La Colina version with a slightly warmer brew and a shorter press to keep the cup strong while staying smooth
- Next adjustment: brew this version first; if it still feels a bit soft, keep the rest the same and go 1 click finer or return to a longer press only if clarity starts to drop
- Highlight: no
- Related entries: 2026-08-06 - The Barn - La Colina Washed German Note; 2026-08-06 - The Barn - La Colina Washed Body Boost Adjustment

### 2026-08-06 - The Barn - La Colina Washed Result + Hot Water Check

- Source: Telegram topic `Kaffeerezepte` / voice transcript
- Timestamp: 2026-08-06 12:11-12:12 local
- Type: result
- Recipe name: The Barn - La Colina Washed
- Bean: The Barn; La Colina Washed; Chimaltenango, Guatemala; Caturra; washed
- Grind: Opus grinder setting 3.25
- Ratio: 12 g coffee to 150 g water
- Water temp: 92 C
- Method: mini portable Aeropress
- Timing: 1:50 steep; 20 seconds press
- Stirring: no stirring
- Tasting notes: extremely underextracted; user clarified the fix should move hotter, not colder
- Outcome: the 12:11 result and the 12:12 correction are one session; the cup needed more extraction, and the fix stayed in the hot direction rather than backing off
- Next adjustment: keep the water hot, move to Opus 3.0, and extend the steep to 2:05 if it still reads thin before changing anything else
- Highlight: no
- Related entries: 2026-08-06 - The Barn - La Colina Washed Press Tune; 2026-08-06 - The Barn - La Colina Washed German Note; 2026-08-06 - The Barn - La Colina Washed Body Boost Adjustment

### 2026-08-06 - The Barn - Sundrop Recipe

- Source: Telegram topic `Kaffeerezepte` / image
- Timestamp: 2026-08-06 11:48 local
- Type: recipe
- Recipe name: The Barn - Sundrop
- Bean: The Barn; Sundrop; Cerrado, Brazil; mixed varietals; natural
- Grind: Opus grinder setting 3.75
- Ratio: 12 g coffee to 150 g water
- Water temp: 92 C
- Method: mini portable Aeropress
- Timing: 1:50 steep; 25 seconds press
- Stirring: none
- Tasting notes: fig; black tea; elegant; package label notes from the bag photo
- Outcome: first-pass recipe for Sundrop based on the earlier Brazilian natural baseline, tuned to stay elegant and tea-like; superseded by the 2026-08-07 adjustment
- Next adjustment: brew this version first; if it still feels a bit soft, go 1 click finer next time to add body without losing the black-tea line
- Highlight: no
- Related entries: 2026-08-07 - The Barn - Sundrop New Recipe; 2026-08-05 - The Barn - Ivan dos Santos Typica Recipe; 2026-08-05 - The Barn - Ivan dos Santos Typica Highlight Result

### 2026-08-07 - The Barn - Sundrop New Recipe

- Source: Telegram topic `Kaffeerezepte` / voice transcript
- Timestamp: 2026-08-07 11:13 local
- Type: adjustment
- Recipe name: The Barn - Sundrop
- Bean: The Barn; Sundrop; Cerrado, Brazil; mixed varietals; natural
- Grind: Opus grinder setting 3.25
- Ratio: 13 g coffee to 150 g water
- Water temp: 95 C
- Method: mini portable Aeropress
- Timing: 1:50 steep; 20 seconds press
- Stirring: none
- Tasting notes: expect 3
- Outcome: new Sundrop adjustment captured with a higher dose, finer grind, hotter water, and shorter press; this now overrides the original Sundrop recipe as the active baseline
- Next adjustment: brew this as written first; if it feels too heavy, back the temperature down to 93 C next time to keep the fig and black-tea line cleaner
- Highlight: no
- Related entries: 2026-08-06 - The Barn - Sundrop Recipe

### 2026-08-10 - The Barn - Sundrop Press-Time Update

- Source: Telegram topic `Kaffeerezepte` / voice transcript
- Timestamp: 2026-08-10 07:45 local
- Type: result
- Recipe name: The Barn - Sundrop
- Bean: The Barn; Sundrop; Cerrado, Brazil; mixed varietals; natural
- Grind: Opus grinder setting 3.0
- Ratio: 13 g coffee to 150 g water
- Water temp: 95 C
- Method: mini portable Aeropress
- Timing: 1:50 steep; 30 seconds press
- Stirring: none
- Tasting notes: fairly pleasant; quite smooth; no bitter notes
- Outcome: the 30-second press stayed clean and smooth, with no explicit bitterness
- Next adjustment: keep this as the current baseline; only shorten the press back to 20 seconds if a later cup starts reading heavy or muddy
- Highlight: no
- Related entries: 2026-08-07 - The Barn - Sundrop New Recipe

### 2026-08-05 - The Barn - Ivan dos Santos Typica Highlight Result

- Source: Telegram topic `Kaffeerezepte` / voice transcript
- Timestamp: 2026-08-05 08:01 local
- Type: result
- Recipe name: The Barn - Ivan dos Santos Typica
- Bean: The Barn; Ivan dos Santos Typica; São Paulo, Brazil; Typica; natural
- Grind: Opus grinder setting 3.75
- Ratio: 12 g coffee to 150 g water
- Water temp: 92 C
- Method: mini portable Aeropress
- Timing: 1:55 steep; 25 seconds press
- Stirring: none
- Tasting notes: very smooth; best it can possibly be
- Outcome: highlight cup for these beans and this recipe; keep this as the reference version
- Next adjustment: keep this recipe as-is unless a future cup drifts softer, then only fine-tune one variable at a time
- Highlight: yes
- Related entries: 2026-08-05 - The Barn - Ivan dos Santos Typica Adjustment; 2026-08-05 - The Barn - Ivan dos Santos Typica Recipe

### 2026-08-05 - The Barn - Ivan dos Santos Typica Adjustment

- Source: Telegram topic `Kaffeerezepte` / voice transcript
- Timestamp: 2026-08-05 07:52-07:57 local
- Type: adjustment
- Recipe name: The Barn - Ivan dos Santos Typica
- Bean: The Barn; Ivan dos Santos Typica; São Paulo, Brazil; Typica; natural
- Grind: Opus grinder setting 3.75
- Ratio: 12 g coffee to 150 g water
- Water temp: 92 C
- Method: mini portable Aeropress
- Timing: 1:50-1:55 steep; 25 seconds press
- Stirring: none
- Tasting notes: unknown
- Outcome: merged the base adjustment and the follow-up steep tweak into one session; the cup stayed smooth while settling on a slightly longer steep
- Next adjustment: try this version first; if it still reads a little soft, keep the press the same and nudge the grind slightly finer next time to add body and plum
- Highlight: no
- Related entries: 2026-08-05 - The Barn - Ivan dos Santos Typica Recipe

### 2026-08-05 - The Barn - Ivan dos Santos Typica Recipe

- Source: Telegram topic `Kaffeerezepte` / image
- Timestamp: 2026-08-05 07:46 local
- Type: recipe
- Recipe name: The Barn - Ivan dos Santos Typica
- Bean: The Barn; Ivan dos Santos Typica; São Paulo, Brazil; Typica; natural
- Grind: Opus grinder setting 3.4
- Ratio: 12 g coffee to 150 g water
- Water temp: 93 C
- Method: mini portable Aeropress
- Timing: 1:50 steep; 25 seconds press
- Stirring: none
- Tasting notes: plum, vanilla, smooth
- Outcome: first-pass recipe for a Brazilian natural with smooth sweetness and fruit
- Next adjustment: if the cup feels too soft, go 1 click finer on the Opus next time to pull more plum and body without losing the smooth finish
- Highlight: no
- Related entries: 2026-08-03 - Aeropress Recipe Update; 2026-07-31 - Brew Result

### 2026-08-04 - The Barn - Kayon Mountain Result

- Source: Telegram topic `Kaffeerezepte` / voice transcript
- Timestamp: 2026-08-04 15:39 local
- Type: result
- Recipe name: The Barn - Kayon Mountain
- Bean: The Barn; Kayon Mountain; Guji, Ethiopia; mixed heirloom; washed
- Grind: Opus grinder setting 3.5
- Ratio: 12 g coffee to 150 g water
- Water temp: 92 C
- Method: mini portable Aeropress
- Timing: 1:50 steep; 25 seconds press
- Stirring: none
- Tasting notes: a little over-extracted, a bit too strong, bitter
- Outcome: cup is slightly over-extracted
- Next adjustment: increase grind size one click on the Opus next time; keep everything else the same
- Highlight: no
- Related entries: 2026-08-04 - The Barn - Kayon Mountain Recipe

### 2026-08-05 - La Colina Washed Steep Adjustment

- Source: Telegram topic `Kaffeerezepte` / voice transcript
- Timestamp: 2026-08-05 16:24 local
- Type: adjustment
- Recipe name: La Colina Washed
- Bean: La Colina; Guatemala; washed
- Grind: Opus grinder setting 3.5
- Ratio: 12 g coffee to 150 g water
- Water temp: 91 C
- Method: mini portable Aeropress
- Timing: 2:05 steep; 30 seconds press
- Stirring: one gentle stir only if it feels too thin
- Tasting notes: unknown
- Outcome: updated working recipe with a slightly longer steep while keeping the rest of the La Colina recipe unchanged
- Next adjustment: wait for the cup and record the conclusion before changing anything else
- Highlight: no
- Related entries: none

### 2026-08-05 - La Colina Washed Result

- Source: Telegram topic `Kaffeerezepte` / voice transcript
- Timestamp: 2026-08-05 16:29 local
- Type: result
- Recipe name: La Colina Washed
- Bean: La Colina; Guatemala; washed
- Grind: Opus grinder setting 3.5
- Ratio: 12 g coffee to 150 g water
- Water temp: 91 C
- Method: mini portable Aeropress
- Timing: 2:05 steep; 30 seconds press
- Stirring: one gentle stir only if it feels too thin
- Tasting notes: very silky; smells like pickled tomatoes; no bitterness at all
- Outcome: conclusion cup came through silky and clean with no bitterness
- Next adjustment: keep this as the current reference unless you want to chase the tomato note or shift the texture later
- Highlight: no
- Related entries: 2026-08-05 - La Colina Washed Steep Adjustment

### 2026-08-05 - La Colina Washed Conclusion Update

- Source: Telegram topic `Kaffeerezepte` / voice transcript
- Timestamp: 2026-08-05 16:38 local
- Type: adjustment
- Recipe name: La Colina Washed
- Bean: La Colina; Guatemala; washed
- Grind: Opus grinder setting 3.5
- Ratio: 12 g coffee to 150 g water
- Water temp: 91 C
- Method: mini portable Aeropress
- Timing: 2:05 steep; 30 seconds press
- Stirring: one gentle stir only if it feels too thin
- Tasting notes: very silky; smells like pickled tomatoes; may be underextracted
- Outcome: the cup is clean and silky, but the finish may be a little underdone
- Next adjustment: go 1 click finer first; if it still feels hollow, try 1 to 2 C hotter next time, but not both at once
- Highlight: no
- Related entries: 2026-08-05 - La Colina Washed Result; 2026-08-05 - La Colina Washed Steep Adjustment

### 2026-08-04 - The Barn - Kayon Mountain Recipe

- Source: Telegram topic `Kaffeerezepte` / image
- Timestamp: 2026-08-04 15:38 local
- Type: recipe
- Recipe name: The Barn - Kayon Mountain
- Bean: The Barn; Kayon Mountain; Guji, Ethiopia; mixed heirloom; washed
- Grind: Opus grinder setting 3.5
- Ratio: 12 g coffee to 150 g water
- Water temp: 92 C
- Method: mini portable Aeropress
- Timing: 1:50 steep; 25 seconds press
- Stirring: none
- Tasting notes: peach, iced tea, floral
- Outcome: first-pass recipe for a washed Ethiopian with bright fruit and floral character
- Next adjustment: increase grind size one click on the Opus next time; keep everything else the same
- Highlight: no
- Related entries: none

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

### 2026-08-04 - SOUTH - Colombia Pacamara Next Adjustment

- Source: Telegram topic `Kaffeerezepte` / image + voice transcript
- Timestamp: 2026-08-04 12:45 local
- Type: adjustment
- Recipe name: SOUTH - Colombia Pacamara
- Bean: SOUTH - Colombia Pacamara; Colombia; Pacamara; natural process; light roast; roast date 2026-07-18
- Grind: Opus grinder setting 3.75
- Ratio: 12 g coffee to 150 g water
- Water temp: 93 C
- Method: mini portable Aeropress
- Timing: 1:50 steep; 30 seconds press
- Tasting notes: unknown
- Outcome: updated test recipe to back off bitterness while keeping the rest unchanged
- Next adjustment: brew this version as-is and check whether the extra 5 seconds on the press keeps the cup clear while smoothing the finish
- Highlight: no
- Related entries: 2026-08-03 - Colombia Pacamara Brew Result; 2026-08-03 - Colombia Pacamara Base Recipe

### 2026-08-04 - SOUTH - Colombia Pacamara Coarser Adjustment

- Source: Telegram topic `Kaffeerezepte` / voice transcript
- Timestamp: 2026-08-04 12:58 local
- Type: adjustment
- Recipe name: SOUTH - Colombia Pacamara
- Bean: SOUTH - Colombia Pacamara; Colombia; Pacamara; natural process; light roast; roast date 2026-07-18
- Grind: Opus grinder setting 3.75, then 2 clicks coarser next time
- Ratio: 12 g coffee to 150 g water
- Water temp: 93 C
- Method: mini portable Aeropress
- Timing: 1:50 steep; 30 seconds press
- Tasting notes: "still a little bitter"
- Outcome: the cup still needs a bit less extraction
- Next adjustment: go 2 clicks coarser on the Opus and keep everything else the same to soften the bitter edge, especially if the roast is reading darker
- Highlight: no
- Related entries: 2026-08-04 - SOUTH - Colombia Pacamara Next Adjustment; 2026-08-03 - Colombia Pacamara Brew Result; 2026-08-03 - Colombia Pacamara Base Recipe

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
- Highlight: no
- Related entries: 2026-07-31 - Brew Result

### 2026-08-06 - Brazilian Beans Context Correction

- Source: Telegram topic `Kaffeerezepte` / voice transcript
- Timestamp: 2026-08-06 16:39 local
- Type: adjustment
- Recipe name: Brazilian beans Aeropress
- Bean: Brazilian beans
- Grind: Opus grinder setting 3.5
- Ratio: 12 g coffee to 140 g water
- Water temp: 90 C
- Method: mini portable Aeropress
- Timing: 2:05 steep; 25 seconds press; no swirl
- Tasting notes: user corrected that this discussion is about Brazilian beans, not the Guatemala La Colina cup
- Outcome: separated the Brazilian baseline from the Guatemala recipe so future suggestions stay bean-specific
- Next adjustment: keep the Brazilian baseline for now; if it still tastes thin, move one click finer or add a touch more heat, but do not carry over the Guatemala recipe unchanged
- Highlight: no
- Related entries: 2026-08-03 - Brazilian Beans Aeropress Update; 2026-07-31 - Aeropress Recipe

### 2026-08-06 - The Barn - La Colina Washed Body Dose Bump

- Source: Telegram topic `Kaffeerezepte` / voice transcript
- Timestamp: 2026-08-06 16:47 local
- Type: adjustment
- Recipe name: The Barn - La Colina Washed
- Bean: The Barn; La Colina Washed; Chimaltenango, Guatemala; Caturra; washed
- Grind: Opus grinder setting 3.0
- Ratio: 13 g coffee to 150 g water
- Water temp: 93 C
- Method: mini portable Aeropress
- Timing: 2:05 steep; 20-30 seconds press
- Stirring: no stirring
- Tasting notes: user wants more body
- Outcome: kept the hotter, finer underextraction fix and added a slightly larger dose to make the cup fuller and stronger
- Next adjustment: brew this as the next body-focused version; if it still feels light, keep everything else fixed and only trim water a little or go one click finer on the following round
- Highlight: no
- Related entries: 2026-08-06 - The Barn - La Colina Washed Result + Hot Water Check

### 2026-08-07 - Guatemala Working Recipe

- Source: Telegram topic `Kaffeerezepte` / voice transcript
- Timestamp: 2026-08-07 07:53-07:57 local
- Type: recipe
- Recipe name: Guatemala working recipe
- Bean: Guatemala
- Grind: Opus grinder setting 3.0
- Ratio: 12 g coffee to 150 g water
- Water temp: 95 C
- Method: mini portable Aeropress
- Timing: 1:50 steep; 30 seconds press
- Stirring: no stirring
- Tasting notes: unknown
- Outcome: saved the current Guatemala baseline with a hotter, slightly finer setup; the 07:57 follow-up kept it as the active working recipe without changing the recipe
- Next adjustment: brew this version first; if it still feels thin, keep the same setup and only go one click finer next time to build more body
- Highlight: no
- Related entries: 2026-08-06 - The Barn - La Colina Washed Result + Hot Water Check

### 2026-08-09 - Guatemala Working Recipe Result

- Source: Telegram topic `Kaffeerezepte` / voice transcript
- Timestamp: 2026-08-09 09:52 local; follow-up 2026-08-16 12:23 local
- Type: highlight result
- Recipe name: Guatemala working recipe
- Bean: Guatemala
- Grind: Opus grinder setting 3.0
- Ratio: 12 g coffee to 150 g water
- Water temp: 95 C
- Method: mini portable Aeropress
- Timing: 1:55 steep; 25 seconds press
- Stirring: no stirring
- Tasting notes: smooth but bright
- Outcome: highlight cup for this Guatemala line; keep this as the reference version
- Next adjustment: keep this recipe as-is; only fine-tune one variable if a future cup drifts softer or thinner
- Highlight: yes
- Related entries: 2026-08-07 - Guatemala Working Recipe; 2026-08-06 - The Barn - La Colina Washed Result + Hot Water Check

## Pattern Notes

- Multiple brew sessions captured.

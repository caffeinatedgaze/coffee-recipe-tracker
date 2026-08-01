---
name: coffee-recipe-tracker
description: Track and tune coffee brew recipes and tasting notes. Use when a user wants a coffee recipe normalized from voice text, wants the current recipe captured cleanly, or is iterating on grind, dose, water, temperature, steep time, agitation, or press time.
---

# Coffee Recipe Tracker

## Workflow

1. Normalize messy transcript text into a clean recipe.
2. Preserve the current recipe as the working baseline.
3. Change one variable at a time unless the user explicitly asks for a bigger jump.
4. After each tasting note, infer the next smallest tweak.
5. If the user says to note it down and wait, acknowledge briefly and stop suggesting changes.

## Recipe Capture

Capture the working recipe in this order:

- dose
- water
- temperature
- grind setting
- brew device and filter
- steep or bloom time
- agitation or stirring
- press or drawdown time

Use concise bullets and keep numbers explicit. If a value is unclear, state the best likely reading instead of inventing detail.

## Tasting Feedback

Translate common feedback into the next adjustment:

- bitter or dry: go coarser or lower temperature
- flat or muted: go slightly finer or raise temperature a little
- sour or under-extracted: finer, hotter, or longer
- thin: slightly more dose or less water
- fruit not showing: favor lower temperature, shorter steep, and cleaner extraction

For washed, fruity coffees, prefer clarity over body: lighter extraction, no unnecessary stirring, and conservative changes.

## Reply Style

- Keep replies short and practical.
- Show the current recipe first, then one next tweak.
- Avoid recommending multiple variables unless the user asks for a full reset.
- Mirror the user's language when they are clearly using a brewing workflow.

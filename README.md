# Family Potluck Sign-Up

A one-page potluck sign-up sheet. Family members tap an item to claim it, and
everyone sees the list update live (synced through Firebase Realtime Database).

The same page runs any event — Christmas in July, Thanksgiving, birthdays — from
a small settings file per event.

| Event | Link |
| --- | --- |
| Thanksgiving 2026 (default) | `index.html` or `index.html?event=thanksgiving-2026` |
| Christmas in July 2026 | `index.html?event=christmas-in-july-2026` |

The exact page used for Christmas in July 2026 is saved under the git tag
`christmas-in-july-2026`.

## Features

- Tap to claim, tap your own item to release it (with a confirmation), or ✕ to
  release someone else's.
- Claims are saved atomically, so two people can't grab the last spot at once.
- Items can need several people (`slots: 2` → "Need 2", "1 more needed").
- Optional note ("Grandma's garlic mashed") and dietary tags on each claim.
- **Bringing Something Else** — add a dish that isn't on the list.
- **Who's Coming** — RSVPs with adult / kid headcount.
- **What's Covered** — progress bar, "You're bringing…", and a "Still needed"
  list with a button that copies it for the group chat.

The last three can be switched on or off per event with `features`.

## Setting up a new event

1. Copy an existing file in `events/` — e.g. `events/thanksgiving-2026.js` →
   `events/christmas-in-july-2027.js`.
2. In the new file, change the id on the `window.POTLUCK_EVENTS['…']` line to
   match the file name, and set a **new `dbPath`** (e.g.
   `'events/christmas-in-july-2027'`). Every event needs its own `dbPath` so old
   claims don't show up on the new list.
3. Edit the title, date, theme colors, host-provided items, footer, and the
   sections/items.
   - Give every item a unique `id` and don't change ids after people start
     claiming — claims are stored by id.
   - `slots: 2` lets two people sign up for the same item.
   - `tags: ['vegetarian', 'gluten-free']` shows typical dietary info.
     Available tags: `vegetarian`, `vegan`, `gluten-free`, `dairy-free`, `nuts`.
   - `food: true` on a section turns on the dietary picker for its items.
   - `optional: true` on a section (e.g. games) leaves it out of the progress
     bar and "Still needed" list.
   - `layout: 'grid'` shows the items in two columns.
4. Share `index.html?event=<your-event-id>`, or make it the default by changing
   `DEFAULT_EVENT_ID` near the top of the script in `index.html`.

## Firebase database rules

The database rules must allow the page to read and write. Rules created in
Firebase's "test mode" expire after 30 days, and then the page shows
"Connection error" with a note about permission denied.

To set them:

1. Open the [Firebase console](https://console.firebase.google.com/) →
   project **chirstmas-in-july** → **Realtime Database** → **Rules**.
2. Replace the rules with the contents of `database.rules.json` from this repo
   and click **Publish**.

These rules let anyone with the link read and change the sign-up lists (the
same trust model as before), but nothing else: the database can't be wiped as a
whole, and names, notes and headcounts are length-checked.

## Running locally

Open `index.html` in a browser, or serve the folder with any static server
(e.g. `npx http-server .`). Keep the `events/` folder next to `index.html` —
the page loads the event file from there.

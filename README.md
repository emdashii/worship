# worship

A searchable table of hymns and contemporary worship songs, each row linking out
to lyrics and to chords. The site is static: plain HTML, one stylesheet, and one
script with the song list inlined. There is no build step and no dependencies to
install.

The list currently holds 66 songs. To recount after an edit:

```bash
grep -c "lyrics: '" script.js
```

## Files

| File | Contents |
| --- | --- |
| `index.html` | Page structure, the theme toggle, and the Giscus comment embed |
| `script.js` | The `songList` array, plus search, sort, and theme logic |
| `styles.css` | Flexoki colour tokens and all layout rules |
| `blessedAssurance.pdf` | A local chord chart, linked from one row of `songList` |

## Run it locally

Open `index.html` in a browser. Nothing compiles, so a refresh shows your edit.

Giscus and the external link targets need a real origin, so serve the directory
over HTTP to exercise those:

```bash
python -m http.server 8000
```

## Add a song

1. Open `script.js` and find the `songList` array.
2. Append an entry. The key is the title as it appears in the table:

	```javascript
	{
		'Song Title': {
			lyrics: 'https://example.com/lyrics',
			chords: 'https://example.com/chords',
		},
	},
	```

3. Refresh the page and confirm both links open.

The number column is the position in the array, so a song added at the end takes
the next number. Inserting a song in the middle renumbers every song after it.
Either field can point at a file in this repository instead of an external site;
`blessedAssurance.pdf` is the existing example.

## Sorting and search

`songList` is the master array and is never reordered. `allSongs` holds the
current filtered and sorted view, and the table renders from it. Search matches a
substring of the title. Clicking the `#` or `title` header sorts the current view
and flips that column between ascending and descending.

## Theming

Two hidden radio inputs, `#theme-light` and `#theme-dark`, drive the theme
through CSS sibling selectors on `main`. `initializeTheme` reads
`localStorage.getItem('theme')` on load and falls back to the
`prefers-color-scheme` media query when nothing is stored. Each toggle writes the
choice back to `localStorage`.

Colours come from [Flexoki](https://stephango.com/flexoki). The `:root` block in
`styles.css` defines one variable per theme value and names the Flexoki step in a
comment beside it. Orange carries the links in both themes: `orange-600`
(`#BC5215`) on light, `orange-400` (`#DA702C`) on dark. The two ramps are strict
mirrors of each other, step for step. Change a colour in `:root` and nowhere
else.

## Comments

Each page carries a [Giscus](https://giscus.app) thread backed by the
Announcements discussion category of this repository. The embed is configured
inline in `index.html`, keyed on the page title.

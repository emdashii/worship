const songList = [
	{ 'song title 1': { lyrics: 'google.com', chords: 'https://example.com/1' } },
	{ 'song title 2': { lyrics: 'google.com', chords: 'https://example.com/2' } },
	{ 'song title 3': { lyrics: 'google.com', chords: 'https://example.com/3' } },
];

function generateContent() {
	const contentDiv = document.getElementById('content');
	const list = document.createElement('ol');

	songList.forEach((item, index) => {
		const listItem = document.createElement('li');
		const lyrics = document.createElement('a');
		const chords = document.createElement('a');

		listItem.textContent = Object.keys(item)[0];
		lyrics.href = item.lyrics;
		lyrics.textContent = 'lyrics';
		chords.href = item.chords;
		chords.textContent = 'chords';

		listItem.appendChild(document.createElement('br'));
		listItem.appendChild(lyrics);
		listItem.appendChild(document.createElement('br'));
		listItem.appendChild(chords);
		list.appendChild(listItem);
	});

	contentDiv.appendChild(list);
}

document.addEventListener('DOMContentLoaded', generateContent);

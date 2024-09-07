const songList = [
	{ 'What a Beautiful Name': { lyrics: 'https://example.com/lyrics/1', chords: 'https://example.com/chords/1' } },
	{ 'The Blessing': { lyrics: 'https://example.com/lyrics/2', chords: 'https://example.com/chords/2' } },
	{ 'Way Maker': { lyrics: 'https://example.com/lyrics/3', chords: 'https://example.com/chords/3' } },
	{ 'Good Good Father': { lyrics: 'https://example.com/lyrics/4', chords: 'https://example.com/chords/4' } },
	{
		"How Deep the Father's Love": {
			lyrics: 'https://example.com/lyrics/5',
			chords: 'https://example.com/chords/5',
		},
	},
	{ 'Be Thou My Vision': { lyrics: 'https://example.com/lyrics/6', chords: 'https://example.com/chords/6' } },
	{
		'Tis So Sweet to Trust in Jesus': {
			lyrics: 'https://example.com/lyrics/7',
			chords: 'https://example.com/chords/7',
		},
	},
	{
		'What a Friend We Have in Jesus': {
			lyrics: 'https://example.com/lyrics/8',
			chords: 'https://example.com/chords/8',
		},
	},
	{ 'You Are Holy': { lyrics: 'https://example.com/lyrics/9', chords: 'https://example.com/chords/9' } },
	{ 'Mighty to Save': { lyrics: 'https://example.com/lyrics/10', chords: 'https://example.com/chords/10' } },
	{ 'Revelation Song': { lyrics: 'https://example.com/lyrics/11', chords: 'https://example.com/chords/11' } },
	{ 'Above All': { lyrics: 'https://example.com/lyrics/12', chords: 'https://example.com/chords/12' } },
	{ Sanctuary: { lyrics: 'https://example.com/lyrics/13', chords: 'https://example.com/chords/13' } },
	{ 'Come Thou Fount': { lyrics: 'https://example.com/lyrics/14', chords: 'https://example.com/chords/14' } },
	{ '10,000 Reasons': { lyrics: 'https://example.com/lyrics/15', chords: 'https://example.com/chords/15' } },
	{ 'Better is One Day': { lyrics: 'https://example.com/lyrics/16', chords: 'https://example.com/chords/16' } },
	{ 'Blessed Assurance': { lyrics: 'https://example.com/lyrics/17', chords: 'https://example.com/chords/17' } },
	{ 'To God Be the Glory': { lyrics: 'https://example.com/lyrics/18', chords: 'https://example.com/chords/18' } },
	{
		'Leaning on the Everlasting Arms': {
			lyrics: 'https://example.com/lyrics/19',
			chords: 'https://example.com/chords/19',
		},
	},
	{ 'From the Inside Out': { lyrics: 'https://example.com/lyrics/20', chords: 'https://example.com/chords/20' } },
	{ 'Seek Ye First': { lyrics: 'https://example.com/lyrics/21', chords: 'https://example.com/chords/21' } },
	{ 'Whom Shall I Fear': { lyrics: 'https://example.com/lyrics/22', chords: 'https://example.com/chords/22' } },
	{ "I'll Fly Away": { lyrics: 'https://example.com/lyrics/23', chords: 'https://example.com/chords/23' } },
	{ 'You are My All in All': { lyrics: 'https://example.com/lyrics/24', chords: 'https://example.com/chords/24' } },
	{ 'Forever Reign': { lyrics: 'https://example.com/lyrics/25', chords: 'https://example.com/chords/25' } },
	{ 'Your Love Never Fails': { lyrics: 'https://example.com/lyrics/26', chords: 'https://example.com/chords/26' } },
	{ 'It is Well': { lyrics: 'https://example.com/lyrics/27', chords: 'https://example.com/chords/27' } },
	{ 'Jesus Paid it All': { lyrics: 'https://example.com/lyrics/28', chords: 'https://example.com/chords/28' } },
	{
		'In Christ Alone/On Christ the Solid Rock': {
			lyrics: 'https://example.com/lyrics/29',
			chords: 'https://example.com/chords/29',
		},
	},
	{ 'The Goodness of God': { lyrics: 'https://example.com/lyrics/30', chords: 'https://example.com/chords/30' } },
	{ 'Shout to the Lord': { lyrics: 'https://example.com/lyrics/31', chords: 'https://example.com/chords/31' } },
	{ 'How Great is Our God': { lyrics: 'https://example.com/lyrics/32', chords: 'https://example.com/chords/32' } },
	{
		'Amazing Grace (My Chains Are Gone)': {
			lyrics: 'https://example.com/lyrics/33',
			chords: 'https://example.com/chords/33',
		},
	},
	{ 'Build My Life': { lyrics: 'https://example.com/lyrics/34', chords: 'https://example.com/chords/34' } },
	{ 'Who You Say I Am': { lyrics: 'https://example.com/lyrics/35', chords: 'https://example.com/chords/35' } },
	{ Cornerstone: { lyrics: 'https://example.com/lyrics/36', chords: 'https://example.com/chords/36' } },
	{ 'Reckless Love': { lyrics: 'https://example.com/lyrics/37', chords: 'https://example.com/chords/37' } },
	{ 'How Great Thou Art': { lyrics: 'https://example.com/lyrics/38', chords: 'https://example.com/chords/38' } },
	{ 'Here I Am to Worship': { lyrics: 'https://example.com/lyrics/39', chords: 'https://example.com/chords/39' } },
	{ 'Blessed Be Your Name': { lyrics: 'https://example.com/lyrics/40', chords: 'https://example.com/chords/40' } },
	{ 'Our God': { lyrics: 'https://example.com/lyrics/41', chords: 'https://example.com/chords/41' } },
	{ Hosanna: { lyrics: 'https://example.com/lyrics/42', chords: 'https://example.com/chords/42' } },
	{ 'Heart of Worship': { lyrics: 'https://example.com/lyrics/43', chords: 'https://example.com/chords/43' } },
	{ 'Your Grace is Enough': { lyrics: 'https://example.com/lyrics/44', chords: 'https://example.com/chords/44' } },
	{ 'Days of Elijah': { lyrics: 'https://example.com/lyrics/45', chords: 'https://example.com/chords/45' } },
	{
		'Before the Throne of God Above': {
			lyrics: 'https://example.com/lyrics/46',
			chords: 'https://example.com/chords/46',
		},
	},
	{ 'How He Loves': { lyrics: 'https://example.com/lyrics/47', chords: 'https://example.com/chords/47' } },
	{ 'One Thing Remains': { lyrics: 'https://example.com/lyrics/48', chords: 'https://example.com/chords/48' } },
	{
		'At the Cross (Love Ran Red)': {
			lyrics: 'https://example.com/lyrics/49',
			chords: 'https://example.com/chords/49',
		},
	},
	{ 'At the Cross (Hymn)': { lyrics: 'https://example.com/lyrics/50', chords: 'https://example.com/chords/50' } },
];

function generateContent() {
	const tableBody = document.querySelector('#songTable tbody');

	songList.forEach((item, index) => {
		const row = document.createElement('tr');
		const title = Object.keys(item)[0];
		const { lyrics, chords } = item[title];

		row.innerHTML = `
      <td>${index + 1}</td>
      <td>${title}</td>
      <td><a href="${lyrics}" target="_blank">lyrics</a></td>
      <td><a href="${chords}" target="_blank">chords</a></td>
    `;

		tableBody.appendChild(row);
	});
}

document.addEventListener('DOMContentLoaded', generateContent);

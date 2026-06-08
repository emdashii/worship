const songList = [
	{
		'What a Beautiful Name': {
			lyrics: 'https://www.azlyrics.com/lyrics/hillsongworship/whatabeautifulname.html',
			chords: 'https://www.worshiptogether.com/songs/what-a-beautiful-name-hillsong-worship/',
		},
	},
	{
		'The Blessing': {
			lyrics: 'https://www.azlyrics.com/lyrics/elevationworship/theblessing.html',
			chords: 'https://www.worshiptogether.com/songs/the-blessing-kari-jobe-cody-carnes-elevation-worship/',
		},
	},
	{
		'Way Maker': {
			lyrics: 'https://www.azlyrics.com/lyrics/sinach/waymaker.html',
			chords: 'https://pnwchords.com/way-maker-leeland-sinach/',
		},
	},
	{
		'Good Good Father': {
			lyrics: 'https://www.azlyrics.com/lyrics/christomlin/goodgoodfather.html',
			chords: 'https://www.worshiptogether.com/songs/good-good-father-chris-tomlin/',
		},
	},
	{
		"How Deep the Father's Love": {
			lyrics: 'https://www.azlyrics.com/lyrics/citizens/howdeepthefathersloveforus.html',
			chords: 'https://www.worshiptogether.com/songs/how-deep-the-fathers-love-for-us/',
		},
	},
	{
		'Be Thou My Vision': {
			lyrics: 'https://www.azlyrics.com/lyrics/audreyassad/bethoumyvision.html',
			chords: 'https://tabs.ultimate-guitar.com/tab/misc-praise-songs/be-thou-my-vision-chords-1410139',
		},
	},
	{
		'Tis So Sweet to Trust in Jesus': {
			lyrics: 'https://www.azlyrics.com/lyrics/alanjackson/tissosweettotrustinjesus.html',
			chords: 'https://www.worshipchords.net/guitar/sda-hymns/tis-so-sweet-to-trust-in-jesus',
		},
	},
	{
		'What a Friend We Have in Jesus': {
			lyrics: 'https://www.azlyrics.com/lyrics/alanjackson/whatafriendwehaveinjesus.html',
			chords: 'https://www.worshiptogether.com/songs/what-a-friend-we-have-in-jesus-stephen-mcwhirter/',
		},
	},
	{
		'You Are Holy (Prince of Peace)': {
			lyrics: 'https://www.azlyrics.com/lyrics/michaelwsmith/youareholyprinceofpeace.html',
			chords: 'https://www.worshipchords.net/guitar/michael-w-smith/you-are-holy-prince-of-peace',
		},
	},
	{
		Praise: {
			lyrics: 'https://www.azlyrics.com/lyrics/elevationworship/praise.html',
			chords: 'https://pnwchords.com/praise-elevation-worship/',
		},
	},
	{
		'Mighty to Save': {
			lyrics: 'https://www.azlyrics.com/lyrics/hillsongunited/mightytosave.html',
			chords: 'https://pnwchords.com/mighty-to-save-hillsong-worship/',
		},
	},
	{
		'Revelation Song': {
			lyrics: 'https://www.azlyrics.com/lyrics/karijobe/revelationsong.html',
			chords: 'https://tabs.ultimate-guitar.com/tab/kari-jobe/revelation-song-chords-976879',
		},
	},
	{
		'Above All': {
			lyrics: 'https://www.azlyrics.com/lyrics/michaelwsmith/aboveall.html',
			chords: 'https://pnwchords.com/above-all-michael-w-smith/',
		},
	},
	{
		Sanctuary: {
			lyrics: 'https://www.azlyrics.com/lyrics/cecewinans/sanctuary.html',
			chords: 'https://tabs.ultimate-guitar.com/tab/oasis-worship/lord-prepare-me-to-be-a-sanctuary-chords-3076037',
		},
	},
	{
		'Come Thou Fount': {
			lyrics: 'https://www.azlyrics.com/lyrics/saragroves/comethoufount.html',
			chords: 'https://www.worshiptogether.com/songs/come-thou-fount/',
		},
	},
	{
		'10,000 Reasons': {
			lyrics: 'https://www.azlyrics.com/lyrics/rendcollective/10000reasons.html',
			chords: 'https://www.worshiptogether.com/songs/10-000-reasons-bless-the-lord',
		},
	},
	{
		'Better is One Day': {
			lyrics: 'https://www.azlyrics.com/lyrics/kutless/betterisoneday.html',
			chords: 'https://www.worshiptogether.com/songs/better-is-one-day/',
		},
	},
	{
		'Blessed Assurance (in 6/8)': {
			lyrics: 'https://www.azlyrics.com/lyrics/carrieunderwood/blessedassurance.html',
			chords: 'blessedAssurance.pdf',
		},
	},
	{
		'To God Be the Glory': {
			lyrics: 'https://www.azlyrics.com/lyrics/williammurphy/togodbetheglory.html',
			chords: 'https://tabs.ultimate-guitar.com/tab/misc-praise-songs/to-god-be-the-glory-chords-1704945',
		},
	},
	{
		'Leaning on the Everlasting Arms': {
			lyrics: 'https://www.azlyrics.com/lyrics/alanjackson/leaningontheeverlastingarms.html',
			chords: 'https://tabs.ultimate-guitar.com/tab/misc-praise-songs/leaning-on-the-everlasting-arms-chords-820703',
		},
	},
	{
		'From the Inside Out': {
			lyrics: 'https://www.azlyrics.com/lyrics/hillsongunited/fromtheinsideout98883.html',
			chords: 'https://www.worshiptogether.com/songs/from-the-inside-out/',
		},
	},
	{
		'Seek Ye First': {
			lyrics: 'https://gccsatx.com/hymns/seek-ye-first/',
			chords: 'https://tabs.ultimate-guitar.com/tab/misc-praise-songs/seek-ye-first-chords-1846955',
		},
	},
	{
		'Whom Shall I Fear': {
			lyrics: 'https://www.azlyrics.com/lyrics/christomlin/whomshallifeargodofangelarmies.html',
			chords: 'https://www.worshiptogether.com/songs/whom-shall-i-fear-chris-tomlin/',
		},
	},
	{
		"I'll Fly Away": {
			lyrics: 'https://genius.com/Religious-music-hymns-ill-fly-away-lyrics',
			chords: 'https://www.worshiptogether.com/songs/ill-fly-away-tommee-profitt-fleurie/',
		},
	},
	{
		'You are My All in All': {
			lyrics: 'https://www.azlyrics.com/lyrics/nicholenordeman/youaremyallinall.html',
			chords: 'https://pnwchords.com/you-are-my-all-in-all-nicole-nordeman/',
		},
	},
	{
		'Lord I Lift Your Name On High': {
			lyrics: 'https://www.azlyrics.com/lyrics/mercyme/lordiliftyournameonhigh.html',
			chords: 'https://www.worshiptogether.com/songs/lord-i-lift-your-name-on-high-shane-shane/',
		},
	},
	{
		'Forever Reign': {
			lyrics: 'https://www.azlyrics.com/lyrics/hillsonglive/foreverreign.html',
			chords: 'https://www.worshiptogether.com/songs/forever-reign/',
		},
	},
	{
		'Your Love Never Fails': {
			lyrics: 'https://www.azlyrics.com/lyrics/jesusculture/yourloveneverfails.html',
			chords: 'https://www.worshiptogether.com/songs/your-love-never-fails-jesus-culture/',
		},
	},
	{
		'It is Well': {
			lyrics: 'https://www.azlyrics.com/lyrics/bethelmusic/itiswell.html',
			chords: 'https://www.worshiptogether.com/songs/it-is-well-with-my-soul-matt-redman/',
		},
	},
	{
		'Jesus Paid it All': {
			lyrics: 'https://www.azlyrics.com/lyrics/kimwalkersmith/jesuspaiditall.html',
			chords: 'https://pnwchords.com/jesus-paid-it-all-hymn/',
		},
	},
	{
		'In Christ Alone/On Christ the Solid Rock': {
			lyrics: 'https://www.azlyrics.com/lyrics/nataliegrant/inchristalone.html',
			chords: 'https://www.worshiptogether.com/songs/in-christ-alone-the-solid-rock-travis-cottrell/',
			alt: 'https://pnwchords.com/in-christ-alone-keith-getty-stuart-townend-passion-cover/',
		},
	},
	{
		'The Goodness of God': {
			lyrics: 'https://www.azlyrics.com/lyrics/shaneshane/goodnessofgod.html',
			chords: 'https://pnwchords.com/the-goodness-of-god-bethel-worship/',
		},
	},
	{
		'Shout to the Lord': {
			lyrics: 'https://www.azlyrics.com/lyrics/darlenezschech/shouttothelord.html',
			chords: 'https://pnwchords.com/shout-to-the-lord-hillsong-worship-darlene-zschech/',
		},
	},
	{
		'How Great is Our God': {
			lyrics: 'https://www.azlyrics.com/lyrics/christomlin/howgreatisourgod.html',
			chords: 'https://pnwchords.com/how-great-is-our-god-chris-tomlin/',
		},
	},
	{
		'Amazing Grace (My Chains Are Gone)': {
			lyrics: 'https://www.azlyrics.com/lyrics/christomlin/amazinggracemychainsaregone.html',
			chords: 'https://tabs.ultimate-guitar.com/tab/chris-tomlin/amazing-grace-my-chains-are-gone-chords-502982',
		},
	},
	{
		'Build My Life': {
			lyrics: 'https://www.azlyrics.com/lyrics/bethelmusic/buildmylife.html',
			chords: 'https://pnwchords.com/build-my-life-housefires/',
		},
	},
	{
		'Who You Say I Am': {
			lyrics: 'https://www.azlyrics.com/lyrics/hillsongworship/whoyousayiam.html',
			chords: 'https://pnwchords.com/who-you-say-i-am-hillsong/',
		},
	},
	{
		Cornerstone: {
			lyrics: 'https://www.azlyrics.com/lyrics/hillsonglive/cornerstone.html',
			chords: 'https://www.worshiptogether.com/songs/cornerstone-hillsong-worship/',
		},
	},
	{
		'Reckless Love': {
			lyrics: 'https://www.azlyrics.com/lyrics/coryasbury/recklesslove.html',
			chords: 'https://pnwchords.com/reckless-love-bethel-worship/',
		},
	},
	{
		'How Great Thou Art': {
			lyrics: 'https://www.azlyrics.com/lyrics/carrieunderwood/howgreatthouart.html',
			chords: 'https://pnwchords.com/how-great-thou-art-hymn/',
		},
	},
	{
		'Here I Am to Worship': {
			lyrics: 'https://www.azlyrics.com/lyrics/christomlin/hereiamtoworship.html',
			chords: 'https://pnwchords.com/here-i-am-to-worship-tim-hughes/',
		},
	},
	{
		'Blessed Be Your Name': {
			lyrics: 'https://genius.com/Matt-redman-blessed-be-your-name-lyrics',
			chords: 'https://pnwchords.com/blessed-be-your-name-matt-redman/',
		},
	},
	{
		'Our God': {
			lyrics: 'https://www.azlyrics.com/lyrics/christomlin/ourgod.html',
			chords: 'https://www.worshiptogether.com/songs/our-god-chris-tomlin/',
		},
	},
	{
		Hosanna: {
			lyrics: 'https://www.azlyrics.com/lyrics/hillsongunited/hosanna.html',
			chords: 'https://pnwchords.com/hosanna-hillsong/',
		},
	},
	{
		'Heart of Worship': {
			lyrics: 'https://www.azlyrics.com/lyrics/michaelwsmith/theheartofworship.html',
			chords: 'https://pnwchords.com/heart-of-worship-matt-redman/',
		},
	},
	{
		'Your Grace is Enough': {
			lyrics: 'https://www.azlyrics.com/lyrics/mattmaher/yourgraceisenough.html',
			chords: 'https://www.worshiptogether.com/songs/your-grace-is-enough-chris-tomlin/',
		},
	},
	{
		'Days of Elijah': {
			lyrics: 'https://www.azlyrics.com/lyrics/donniemcclurkin/daysofelijah.html',
			chords: 'https://tabs.ultimate-guitar.com/tab/paul-wilbur/days-of-elijah-chords-433565',
		},
	},
	{
		'Before the Throne of God Above': {
			lyrics: 'https://www.azlyrics.com/lyrics/shaneshane/beforethethroneofgodabove.html',
			chords: 'https://tabs.ultimate-guitar.com/tab/sovereign-grace-music/before-the-throne-of-god-above-chords-3019781',
		},
	},
	{
		'How He Loves': {
			lyrics: 'https://www.azlyrics.com/lyrics/johnmarkmcmillan/howheloves.html',
			chords: 'https://pnwchords.com/how-he-loves-us-david-crowder-band-john-mark-mcmillan-jesus-culture/',
		},
	},
	{
		'One Thing Remains': {
			lyrics: 'https://www.azlyrics.com/lyrics/jesusculture/onethingremains.html',
			chords: 'https://pnwchords.com/one-thing-remains-bethel-worship/',
		},
	},
	{
		'At the Cross (Love Ran Red)': {
			lyrics: 'https://www.azlyrics.com/lyrics/shaneshane/atthecrossloveranred.html',
			chords: 'https://tabs.ultimate-guitar.com/tab/chris-tomlin/at-the-cross-love-ran-red-chords-1457273',
		},
	},
	{
		'At the Cross (Hymn)': {
			lyrics: 'https://www.hymnlyrics.org/mostpopularhymns/at_the_cross.php',
			chords: 'https://tabs.ultimate-guitar.com/tab/misc-praise-songs/at-the-cross-chords-1483591',
		},
	},
	{
		'More than Able': {
			lyrics: 'https://www.azlyrics.com/lyrics/elevationworship/morethanable.html',
			chords: 'https://www.worshiptogether.com/songs/more-than-able-elevation-worship/',
		},
	},
	{
		'Elohim (the God who goes before me)': {
			lyrics: 'https://www.azlyrics.com/lyrics/bethelmusic/elohimlive.html',
			chords: 'https://tabs.ultimate-guitar.com/tab/bethel-music/elohim-chords-5707559',
		},
	},
	{
		'Elohim (God is patient)': {
			lyrics: 'https://www.azlyrics.com/lyrics/hillsongworship/elohim.html',
			chords: 'https://www.worshiptogether.com/songs/elohim-hillsong-worship/',
		},
	},
	{
		'Who Else (is worthy)': {
			lyrics: 'https://www.azlyrics.com/lyrics/shaneshane/whoelse.html',
			chords: 'https://www.worshiptogether.com/songs/who-else-gateway-worship/',
		},
	},
	{
		'Hope of the World': {
			lyrics: 'https://www.azlyrics.com/lyrics/redrocksworship/hopeoftheworld.html',
			chords: 'https://essentialworship.com/songs/red-rocks-worship/hope-of-the-world-2/',
		},
	},
	{
		"Firm Foundation (He Won't)": {
			lyrics: 'https://www.azlyrics.com/lyrics/codycarnes/firmfoundationhewont.html',
			chords: 'https://www.worshiptogether.com/songs/firm-foundation-he-wont-cody-carnes/',
		},
	},
	{
		'Holy Forever': {
			lyrics: 'https://www.azlyrics.com/lyrics/christomlin/holyforever.html',
			chords: 'https://www.worshiptogether.com/songs/holy-forever-chris-tomlin/',
		},
	},
	{
		'Ever Be': {
			lyrics: 'https://www.azlyrics.com/lyrics/shaneshane/everbe.html',
			chords: 'https://tabs.ultimate-guitar.com/tab/bethel-music/ever-be-chords-1701894',
		},
	},
	{
		'House of Miracles': {
			lyrics: 'https://www.azlyrics.com/lyrics/brandonlake/houseofmiracles.html',
			chords: 'https://tabs.ultimate-guitar.com/tab/brandon-lake/house-of-miracles-chords-3312011',
			alt: 'https://pnwchords.com/house-of-miracles-brandon-lake/',
		},
	},
	{
		Gratitude: {
			lyrics: 'https://www.azlyrics.com/lyrics/brandonlake/gratitude.html',
			chords: 'https://pnwchords.com/gratitude-brandon-lake/',
		},
	},
	{
		'I speak Jesus': {
			lyrics: 'https://www.azlyrics.com/lyrics/charitygayle/ispeakjesus.html',
			chords: 'https://pnwchords.com/i-speak-jesus-charity-gayle/',
		},
	},
	{
		'Worthy of it All': {
			lyrics: 'https://www.azlyrics.com/lyrics/cecewinans/worthyofitalllive.html',
			chords: 'https://pnwchords.com/worthy-of-it-all-david-brymer/',
		},
	},
	{
		'O Come to the Alter': {
			lyrics: 'https://www.azlyrics.com/lyrics/elevationworship/ocometothealtar.html',
			chords: 'https://www.worshipchords.net/guitar/elevation-worship/o-come-to-the-altar',
		},
	},
	{
		'O Praise The Name (Anastasis)': {
			lyrics: 'https://www.azlyrics.com/lyrics/hillsongworship/opraisethenameanstasis.html',
			chords: 'https://pnwchords.com/o-praise-the-name-anastasis-hillsong/',
		},
	},
];

let titleSortOrder = 'asc';
let numberSortOrder = 'asc';
let allSongs = [];

function generateContent(filteredList = songList) {
	const tableBody = document.querySelector('#songTable tbody');
	tableBody.innerHTML = '';

	filteredList.forEach((item, index) => {
		const row = document.createElement('tr');
		const title = Object.keys(item)[0];
		const { lyrics, chords } = item[title];

		row.innerHTML = `
      <td>${songList.indexOf(item) + 1}</td>
      <td>${title}</td>
      <td><a href="${lyrics}" target="_blank">lyrics</a></td>
      <td><a href="${chords}" target="_blank">chords</a></td>
    `;

		tableBody.appendChild(row);
	});
}

function sortTableByTitle() {
	const sortedList = [...allSongs].sort((a, b) => {
		const titleA = Object.keys(a)[0].toLowerCase();
		const titleB = Object.keys(b)[0].toLowerCase();

		if (titleSortOrder === 'asc') {
			return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
		} else {
			return titleA > titleB ? -1 : titleA < titleB ? 1 : 0;
		}
	});

	titleSortOrder = titleSortOrder === 'asc' ? 'desc' : 'asc';
	const arrow = titleSortOrder === 'asc' ? '↑' : '↓';
	document.getElementById('titleHeader').innerHTML = `title ${arrow}`;
	document.getElementById('numberHeader').innerHTML = '# ↕';

	generateContent(sortedList);
	allSongs = sortedList;
}

function sortTableByNumber() {
	const sortedList = [...allSongs].sort((a, b) => {
		const indexA = songList.indexOf(a);
		const indexB = songList.indexOf(b);

		if (numberSortOrder === 'asc') {
			return indexA - indexB;
		} else {
			return indexB - indexA;
		}
	});

	numberSortOrder = numberSortOrder === 'asc' ? 'desc' : 'asc';
	const arrow = numberSortOrder === 'asc' ? '↑' : '↓';
	document.getElementById('numberHeader').innerHTML = `# ${arrow}`;
	document.getElementById('titleHeader').innerHTML = 'title ↕';

	generateContent(sortedList);
	allSongs = sortedList;
}

function searchSongs() {
	const searchTerm = document.getElementById('searchInput').value.toLowerCase();
	const filtered = songList.filter(item => {
		const title = Object.keys(item)[0].toLowerCase();
		return title.includes(searchTerm);
	});

	generateContent(filtered);
	allSongs = filtered;
}

function initializeTheme() {
	const savedTheme = localStorage.getItem('theme');
	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

	if (savedTheme) {
		document.getElementById(savedTheme).checked = true;
	} else if (prefersDark) {
		document.getElementById('theme-dark').checked = true;
	}

	document.getElementById('theme-light').addEventListener('change', () => {
		localStorage.setItem('theme', 'theme-light');
	});

	document.getElementById('theme-dark').addEventListener('change', () => {
		localStorage.setItem('theme', 'theme-dark');
	});
}

document.addEventListener('DOMContentLoaded', function () {
	initializeTheme();

	allSongs = [...songList];
	generateContent();

	document.getElementById('titleHeader').addEventListener('click', sortTableByTitle);
	document.getElementById('numberHeader').addEventListener('click', sortTableByNumber);
	document.getElementById('searchInput').addEventListener('input', searchSongs);
});

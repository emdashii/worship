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
			chords: 'https://worshipchords.com/way-maker-chords/',
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
			chords: 'https://worshipchords.com/be-thou-my-vision-chords/',
		},
	},
	{
		'Tis So Sweet to Trust in Jesus': {
			lyrics: 'https://www.azlyrics.com/lyrics/alanjackson/tissosweettotrustinjesus.html',
			chords: 'https://worshipchords.com/tis-so-sweet-to-trust-in-jesus-chords/',
		},
	},
	{
		'What a Friend We Have in Jesus': {
			lyrics: 'https://www.azlyrics.com/lyrics/alanjackson/whatafriendwehaveinjesus.html',
			chords: 'https://worshipchords.com/what-a-friend-we-have-in-jesus-chords/',
		},
	},
	{
		'You Are Holy': {
			lyrics: 'https://www.azlyrics.com/lyrics/jjhairstonyouthfulpraise/youareholy.html',
			chords: 'https://worshipchords.com/you-are-holy',
		},
	},
	{
		'Mighty to Save': {
			lyrics: 'https://www.azlyrics.com/lyrics/hillsongunited/mightytosave.html',
			chords: 'https://worshipchords.com/mighty-to-save/',
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
			chords: 'https://worshipchords.com/above-all/',
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
			chords: 'https://worshipchords.com/come-thou-fount/',
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
		'Blessed Assurance': {
			lyrics: 'https://www.azlyrics.com/lyrics/carrieunderwood/blessedassurance.html',
			chords: 'https://worshipchords.com/blessed-assurance/',
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
			chords: 'https://worshipchords.com/leaning-on-the-everlasting-arms-chords/',
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
			chords: 'https://worshipchords.com/ill-fly-away-chords/',
		},
	},
	{
		'You are My All in All': {
			lyrics: 'https://www.azlyrics.com/lyrics/nicholenordeman/youaremyallinall.html',
			chords: 'https://worshipchords.com/you-are-my-all-in-all-chords/',
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
			chords: 'https://worshipchords.com/jesus-paid-it-all/',
		},
	},
	{
		'In Christ Alone/On Christ the Solid Rock': {
			lyrics: 'https://www.azlyrics.com/lyrics/nataliegrant/inchristalone.html',
			chords: 'https://worshipchords.com/in-christ-alone/',
		},
	},
	{
		'The Goodness of God': {
			lyrics: 'https://www.azlyrics.com/lyrics/shaneshane/goodnessofgod.html',
			chords: 'https://worshipchords.com/goodness-of-god-chords/',
		},
	},
	{
		'Shout to the Lord': {
			lyrics: 'https://www.azlyrics.com/lyrics/darlenezschech/shouttothelord.html',
			chords: 'https://worshipchords.com/shout-to-the-lord-chords/',
		},
	},
	{
		'How Great is Our God': {
			lyrics: 'https://www.azlyrics.com/lyrics/christomlin/howgreatisourgod.html',
			chords: 'https://worshipchords.com/how-great-is-our-god-chords/',
		},
	},
	{
		'Amazing Grace (My Chains Are Gone)': {
			lyrics: 'https://www.azlyrics.com/lyrics/christomlin/amazinggracemychainsaregone.html',
			chords: 'https://worshipchords.com/amazing-grace-my-chains-are-gone/',
		},
	},
	{
		'Build My Life': {
			lyrics: 'https://www.azlyrics.com/lyrics/bethelmusic/buildmylife.html',
			chords: 'https://worshipchords.com/build-my-life/',
		},
	},
	{
		'Who You Say I Am': {
			lyrics: 'https://www.azlyrics.com/lyrics/hillsongworship/whoyousayiam.html',
			chords: 'https://worshipchords.com/who-you-say-i-am-chords/',
		},
	},
	{
		Cornerstone: {
			lyrics: 'https://www.azlyrics.com/lyrics/hillsonglive/cornerstone.html',
			chords: 'https://worshipchords.com/cornerstone/',
		},
	},
	{
		'Reckless Love': {
			lyrics: 'https://www.azlyrics.com/lyrics/coryasbury/recklesslove.html',
			chords: 'https://worshipchords.com/reckless-love/',
		},
	},
	{
		'How Great Thou Art': {
			lyrics: 'https://www.azlyrics.com/lyrics/carrieunderwood/howgreatthouart.html',
			chords: 'https://worshipchords.com/how-great-thou-art/',
		},
	},
	{
		'Here I Am to Worship': {
			lyrics: 'https://www.azlyrics.com/lyrics/christomlin/hereiamtoworship.html',
			chords: 'https://worshipchords.com/here-i-am-to-worship/',
		},
	},
	{
		'Blessed Be Your Name': {
			lyrics: 'https://genius.com/Matt-redman-blessed-be-your-name-lyrics',
			chords: 'https://worshipchords.com/blessed-be-your-name-chords/',
		},
	},
	{
		'Our God': {
			lyrics: 'https://www.azlyrics.com/lyrics/christomlin/ourgod.html',
			chords: 'https://worshipchords.com/our-god-chords/',
		},
	},
	{
		Hosanna: {
			lyrics: 'https://www.azlyrics.com/lyrics/hillsongunited/hosanna.html',
			chords: 'https://worshipchords.com/hosanna/',
		},
	},
	{
		'Heart of Worship': {
			lyrics: 'https://www.azlyrics.com/lyrics/michaelwsmith/theheartofworship.html',
			chords: 'https://worshipchords.com/heart-of-worshipi-love-you-lord-chords/',
		},
	},
	{
		'Your Grace is Enough': {
			lyrics: 'https://www.azlyrics.com/lyrics/mattmaher/yourgraceisenough.html',
			chords: 'https://worshipchords.com/your-grace-is-enough/',
		},
	},
	{
		'Days of Elijah': {
			lyrics: 'https://www.azlyrics.com/lyrics/donniemcclurkin/daysofelijah.html',
			chords: 'https://worshipchords.com/days-of-elijah/',
		},
	},
	{
		'Before the Throne of God Above': {
			lyrics: 'https://www.azlyrics.com/lyrics/shaneshane/beforethethroneofgodabove.html',
			chords: 'https://worshipchords.com/before-the-throne-of-god-above/',
		},
	},
	{
		'How He Loves': {
			lyrics: 'https://www.azlyrics.com/lyrics/johnmarkmcmillan/howheloves.html',
			chords: 'https://worshipchords.com/how-he-loves/',
		},
	},
	{
		'One Thing Remains': {
			lyrics: 'https://www.azlyrics.com/lyrics/jesusculture/onethingremains.html',
			chords: 'https://worshipchords.com/one-thing-remains/',
		},
	},
	{
		'At the Cross (Love Ran Red)': {
			lyrics: 'https://www.azlyrics.com/lyrics/shaneshane/atthecrossloveranred.html',
			chords: 'https://worshipchords.com/at-the-cross/',
		},
	},
	{
		'At the Cross (Hymn)': {
			lyrics: 'https://www.hymnlyrics.org/mostpopularhymns/at_the_cross.php',
			chords: 'https://tabs.ultimate-guitar.com/tab/misc-praise-songs/at-the-cross-chords-1483591',
		},
	},
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

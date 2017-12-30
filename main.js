const cardImages = [
	'images/bear.jpg',
	'images/cat.jpg',
	'images/cow.jpg',
	'images/elephant.jpg',
	'images/giraffe.jpg',
	'images/meerkats.jpg',
	'images/panda.jpg',
	'images/redpanda.jpg',
	'images/tiger.png'
];
initializeApp();



function initializeApp(){
	const outlets = {
		game : '#game',
		'gameCount':'#totalGames',
		'accuracy':'#accuracy',
		'matches':'#matches'
	}
	window.game = new MMController(cardImages, outlets);
}
















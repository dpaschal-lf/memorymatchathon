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
	window.game = new MemoryMatchGame(cardImages, document.querySelector('#game'));
}
















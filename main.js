const cardImages = [
	'bear.jpg',
	'cat.png',
	'cow.jpg',
	'elephant.jpg',
	'giraffe.jpg',
	'meerkats.jpg',
	'panda.jpg',
	'redpanda.jpg',
	'tiger.png'
];

function initializeApp(){

}
/*
		<div class="cardContainer">
			<div class="card">
				<div class="back"></div>
				<div class="front"></div>
			</div>
		</div>

*/

function createCards(imageArray){
	const totalArray = [...imageArray,...imageArray];
	const ce = document.createElement;
	const cardContainer = ce('DIV');
	cardContainer.classList.add('cardContainer');
	const card = ce('DIV');
	card.classList.add('card');
	const front = ce('DIV');
	card.classList.add('front');
	const back = ce('DIV');
	card.classList.add('back');
}






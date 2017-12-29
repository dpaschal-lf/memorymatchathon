const cardImages = [
	'bear.jpg',
	'cat.jpg',
	'cow.jpg',
	'elephant.jpg',
	'giraffe.jpg',
	'meerkats.jpg',
	'panda.jpg',
	'redpanda.jpg',
	'tiger.png'
];
let firstCardClicked = null;
let totalCards = 18;
let matches = 0;
let cardsCanClick = true;
initializeApp();

function initializeApp(){
	createCards( randomizeArray(cardImages) );
}
/*
		<div class="cardContainer">
			<div class="card">
				<div class="back"></div>
				<div class="front"></div>
			</div>
		</div>

*/

function randomizeArray(targetArray){
	const newArray = [];
	const array = targetArray.slice();
	while(array.length){
		let randomNum = (Math.random() * array.length) >> 0;
		newArray[newArray.length] = array.splice(randomNum,1)[0];
	}
	return newArray;
}

function createCards(imageArray){
	const totalArray = [...imageArray,...imageArray];
	//let ce = document.createElement;  why won't this work?

	totalArray.forEach(image=>{
		console.log(image);
		const cardContainer = document.createElement('DIV');
		cardContainer.classList.add('cardContainer');
		const card = document.createElement('DIV');
		card.classList.add('card');
		const front = document.createElement('DIV');
		front.style.backgroundImage= `url(images/${image})`;
		front.classList.add('front');
		const back = document.createElement('DIV');
		back.classList.add('back');

		back.addEventListener('click', handleClick);

		cardContainer.appendChild(card);
		card.appendChild(front);
		card.appendChild(back);
		document.querySelector('#game').appendChild(cardContainer);
	})
}

function handleClick(){
	if(!cardsCanClick){
		return;
	}

	revealCard(this);
	if(firstCardClicked===null){
		firstCardClicked = this;
		return;
	}
	let secondCardClicked = this;
	if(firstCardClicked.parentElement.childNodes[0].style.backgroundImage 
		=== 
		secondCardClicked.parentElement.childNodes[0].style.backgroundImage){
		matches++;
		if(matches === totalCards){
			win();
		}
	}
	else {
		cardsCanClick = false;
		setTimeout(revertCards,3000, firstCardClicked, secondCardClicked);
		firstCardClicked = null;
		secondCardClicked = null;
	}
}

function revealCard(card){
	card.classList.add('hide');
}

function revertCards(card1, card2=null){
	card1.classList.remove('hide');
	if(card2){
		card2.classList.remove('hide')
	}
	cardsCanClick = true;
}

function win(){
	alert('you win!');
	const game = document.querySelector('#game');
	while (game.firstChild) {
	  game.removeChild(game.firstChild);
	}
	cardsCanClick= true;
	matches = 0;
	initializeApp();
}






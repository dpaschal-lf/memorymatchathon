

class MMCardView{
	constructor(gameBoard, clickCallback){
		this.gameBoard = gameBoard;
		this.clickedCards = [];
		this.controllerClickCallback = clickCallback;
	}
	createCards(imageArray){
		const totalArray = [...imageArray,...imageArray];
		//let ce = document.createElement;  why won't this work?
		const cardObjs = [];
		totalArray.forEach(image=>{
			let card = new MMCard(image, this.handleClick.bind(this));
			this.gameBoard.appendChild( card.create() );
			cardObjs.push(card);
		})
		return cardObjs;
	}
	revealCard(card){
		card.reveal();
	}
	revertCard(card){
		card.revert();
	}
	handleClick(card){
		this.controllerClickCallback(card);
	}
	getCardID(card){
		return card.getID();
	}
	resetGameBoard(){
		while (this.gameDomElement.firstChild) {
		  this.gameBoard.removeChild(game.firstChild);
		}
	}
}
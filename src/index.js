if(require) {
	alertify = require('alertify.js')
}

alertify.logPosition('top right')

if(!localStorage.getItem('score')) {
	localStorage.setItem('score', 10)
	localStorage.setItem('games', JSON.stringify([]))

  _games = []

	document.getElementById('gameScore')
		.innerHTML = localStorage.getItem('score')
} else {
  _games = JSON.parse(localStorage.getItem('games'))
	document.getElementById('gameScore')
		.innerHTML = localStorage.getItem('score')
}

play = (side) => {
	const num = Math.floor((Math.random() * 10))

	switch(side) {
		case 'right':
			if(num > 5) {
				won(side)
			} else {
				lose()
			}
			break;
		case 'left':
			if(num < 6) {
				won()
			} else {
				lose()
			}
			break;
	}
}

won = (side) => {
	console.log('won')
	let afterScore = parseInt(localStorage.getItem('score')) + 7

	localStorage.setItem('score', afterScore)

	pushGame('won')

	alertify.success('You won +1')

	document.getElementById('gameScore')
		.innerHTML = localStorage.getItem('score')
}

lose = (side) => {
	console.log('lose')
	let afterScore = parseInt(localStorage.getItem('score')) - 5

	localStorage.setItem('score', afterScore)

	pushGame('lose')

	alertify.error('You lose! -1')

	document.getElementById('gameScore')
		.innerHTML = localStorage.getItem('score')
}

pushGame = (result) => {
	_games.push({
		result
	})

  localStorage.setItem('games', JSON.stringify(_games))

  callAchievement()
}

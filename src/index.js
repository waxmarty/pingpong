if(require) {
	alertify = require('alertify.js')
}

if(!localStorage.getItem('score')) {
  localStorage.setItem('score', 10)
	localStorage.setItem('games', JSON.stringify({}))

  document.getElementById('gameScore')
    .innerHTML = localStorage.getItem('score')
} else {
  document.getElementById('gameScore')
    .innerHTML = localStorage.getItem('score')
}

alertify.logPosition('top right')

play = (side) => {
  const num = Math.floor((Math.random() * 10))

  switch(side) {
    case 'right':
      if(num > 5) {
        won()
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

won = () => {
  console.log('won')
  let afterScore = parseInt(localStorage.getItem('score')) + 7

  localStorage.setItem('score', afterScore)

  alertify.success('You won +1')

  document.getElementById('gameScore')
    .innerHTML = localStorage.getItem('score')
}

lose = () => {
  console.log('lose')
  let afterScore = parseInt(localStorage.getItem('score')) - 5

  localStorage.setItem('score', afterScore)

  alertify.error('You lose! -1')

  document.getElementById('gameScore')
    .innerHTML = localStorage.getItem('score')
}

pushGame = (side, result) => {
	_games.push({
		side,
		result
	})
}

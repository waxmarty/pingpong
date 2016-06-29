callAchievement = () => {
  let score = localStorage.getItem('score')
  let gamesPlayed = JSON.parse(localStorage.getItem('games')).length

  if(score >= 100 && !localStorage.getItem('firstAchievement')) {
    alertify.success('You got more than 100 points!')
    localStorage.setItem('firstAchievement', true)
  }

  if(score >= 200 && !localStorage.getItem('secondAchievement')) {
    alertify.success('You got more than 200 points!')
    localStorage.setItem('secondAchievement', true)
  }

  if(gamesPlayed === 50 && !localStorage.getItem('50gAchievement')) {
    alertify.success('You played 50 games!')
    localStorage.setItem('50gAchievement', true)
  }

  if(gamesPlayed === 100 && !localStorage.getItem('100gAchievement')) {
    alertify.success('You played 100 games!')
    localStorage.setItem('100gAchievement', true)
  }
}

callAchievement = () => {
  let score = localStorage.getItem('score')

  if(score >= 100 && !localStorage.getItem('firstAchievement')) {
    alertify.success('You got more than 100 points!')
    localStorage.setItem('firstAchievement', true)
  }
  if(score >= 200 && !localStorage.getItem('secondAchievement')) {
    alertify.success('You got more than 200 points!')
    localStorage.setItem('secondAchievement', true)
  }
}

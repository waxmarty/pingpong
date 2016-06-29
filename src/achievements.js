callAchievement() {
  let score = localStorage.getItem('score')

  if(score >= 100) {
    alertify.success('You got more than 100 points!')
  }
}

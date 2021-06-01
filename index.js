// Code your solutions in this file
function writeCards(namesArray, event) {
  let thankYouCards = [];
  for (let i = 0; i < namesArray.length; i++) {
    thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
  }
  return thankYouCards;
}

function countDown() {
  let countDown = 11
  while (countDown >= 11) {
    console.log(countDown--)
  }
}

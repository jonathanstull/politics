const MESSAGE_TO_CONSERVATIVE = 'You are a conservative!'
const MESSAGE_TO_MODERATE = "You are a moderate!"
const MESSAGE_TO_LIBERAL = "You are a liberal!"
const MESSAGE_TO_UNDECIDED = "You are undecided!"

$(document).ready(function () {
  $("#politics").submit(function () {
    event.preventDefault();
    const healthValue = parseInt($("input:radio[name=healthcare]:checked").val())
    const nationalValue = parseInt($("input:radio[name=national-state]:checked").val())
    const wealthValue = parseInt($("input:radio[name=wealth-redistribution]:checked").val())
    const totalScore = healthValue + nationalValue + wealthValue
    let messageToAnswerer

    if (Number.isNaN(totalScore)) {
      messageToAnswerer = MESSAGE_TO_UNDECIDED
    } else if (totalScore <= 1) {
      messageToAnswerer = MESSAGE_TO_CONSERVATIVE
    } else if (totalScore === 2) {
      messageToAnswerer = MESSAGE_TO_MODERATE
    } else {
      messageToAnswerer = MESSAGE_TO_LIBERAL
    }
    $("#output").text(messageToAnswerer)
  })
})


// If {
//   value <= 1
// } else {
//   value === 2
// } else {
//   value >= 3
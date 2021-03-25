const MESSAGE_TO_CONSERVATIVE = 'You are a conservative!'
const MESSAGE_TO_MODERATE = "You are a moderate!"
const MESSAGE_TO_LIBERAL = "You are a liberal!"

$(document).ready(function () {
  $("#politics").submit(function () {
    const healthValue = parseInt($("#input:radio[name=healthcare]:checked").val())
    const nationalValue = parseInt($("#input:radio[name=national-state]:checked").val())
    const wealthValue = parseInt($("#input:radio[name=wealth-distribution]:checked").val())
    const score = healthValue + nationalValue + wealthValue

    if (score <= 1) {
      $("#output").text(MESSAGE_TO_CONSERVATIVE)
    } else if (score === 2) {
      $("#output").text(MESSAGE_TO_MODERATE)
    } else {
      $("#output").text(MESSAGE_TO_LIBERAL)
    }
  })
})


// If {
//   value <= 1
// } else {
//   value === 2
// } else {
//   value >= 3
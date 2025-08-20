// const magicNumber = Math.floor(Math.random() * 11)
// let attampts = 0

// function checkGuess() {
//   const userGeguss = Number(document.getElementById("guessInput").value)
//   attampts++
//   const magicDiv = document.getElementById("message")

//   if (userGeguss < magicNumber) {
//     magicDiv.textContent = "عدد بزرگتر است 🔺"
//   } else if (userGeguss > magicNumber) {
//     magicDiv.textContent = "عدد کوچکتر است 🔻"
//   } else {
//     magicDiv.textContent = `🎉 تبریک! عدد درست را حدس زدی: ${magicNumber} - تعداد حدس‌ها: ${attampts}`
//   }
//   document.getElementById("guessInput").value = ""
//   document.getElementById("guessInput").focus()
// }
// عدد جادویی بین 0 تا 10
const magicNumber = Math.floor(Math.random() * 10) + 1
let attempts = 0

function checkGuess() {
  const inputEl = document.getElementById("guessInput")
  const userGuess = Number(inputEl.value)
  const messageDiv = document.getElementById("message")

  attempts++

  if (userGuess < magicNumber) {
    messageDiv.textContent = "عدد بزرگتر است 🔺"
    messageDiv.className = "hint"
  } else if (userGuess > magicNumber) {
    messageDiv.textContent = "عدد کوچکتر است 🔻"
    messageDiv.className = "hint"
  } else {
    messageDiv.textContent = `🎉 باریکلا! درست حدس زدی: ${magicNumber} - تعداد حدس‌ها: ${attempts}`
    messageDiv.className = "correct"
  }

  // پاک کردن input و فوکوس برای حدس بعدی
  inputEl.value = ""
  inputEl.focus()
}

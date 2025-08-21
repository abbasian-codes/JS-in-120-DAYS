// عدد جادویی بین 0 تا 10
// const magicNumber = Math.floor(Math.random() * 10) + 1
// let attempts = 0

// function checkGuess() {
//   const inputEl = document.getElementById("guessInput")
//   const userGuess = Number(inputEl.value)
//   const messageDiv = document.getElementById("message")

//   attempts++

//   if (userGuess < magicNumber) {
//     messageDiv.textContent = "عدد بزرگتر است 🔺"
//     messageDiv.className = "hint"
//   } else if (userGuess > magicNumber) {
//     messageDiv.textContent = "عدد کوچکتر است 🔻"
//     messageDiv.className = "hint"
//   } else {
//     messageDiv.textContent = `🎉 باریکلا! درست حدس زدی: ${magicNumber} - تعداد حدس‌ها: ${attempts}`
//     messageDiv.className = "correct"
//   }

//   // پاک کردن input و فوکوس برای حدس بعدی
//   inputEl.value = ""
//   inputEl.focus()
// }

function calculator() {
  const num1 = Number(document.getElementById("num1").value)
  const num2 = Number(document.getElementById("num2").value)
  const op = document.getElementById("oprator").value
  let res = 0
  if (op === "+") {
    res = num1 + num2
    console.log(res)
  } else if (op === "-") {
    res = num1 - num2
  } else if (op === "*") {
    res = num1 * num2
  } else if (op === "/") {
    res = num1 / num2
  } else if (op === "%") {
    res = num1 % num2
  }
  document.getElementById("result").textContent = ` نتیجه :  ${res}`
}

const keys = document.querySelectorAll('#calculator span')
const operators = ['+', '-', '*', '/']
let pointAdd = false

for (let i = 0; i < keys.length; i++) (
	keys[i].onclick = function () {
		const input = document.querySelector('.screen')
		let inputVal = input.innerHTML
		let btnVal = this.innerHTML
		console.log(inputVal, btnVal)
		if (btnVal === 'C') {
			input.innerHTML = ''
			pointAdd = false
		}
		else if (btnVal === '=') {
			let equation = inputVal
			let lastChar = equation[equation.length - 1]
			if (operators.indexOf(lastChar) > -1) equation = equation.replace(/.$/, '')
			if (equation) input.innerHTML = eval(equation)
			pointAdd = false
		}
		else if (operators.indexOf(btnVal) > -1) {
			let lastChar = inputVal[inputVal.length - 1]
			if (inputVal !== '') input.innerHTML += btnVal
			if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) input.innerHTML = inputVal.replace(/.$/, btnVal)
		}
		else if (btnVal === '.') {
			if (!pointAdd) {
				input.innerHTML += btnVal
				pointAdd = true
			}
		} else input.innerHTML += btnVal
	}
)
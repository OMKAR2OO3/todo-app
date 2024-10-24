
let btn = document.querySelector("#button")
let emptyarray = []
btn.addEventListener("click", function () {
	let usergivedata = document.querySelector("#use").value
	if (usergivedata == "") {
		alert("write the task")
		return
	}
	else {
		emptyarray.push(usergivedata)
	}
	html = `<div class="subcontainer">`
	for (let singlevalue of emptyarray) {
		html += `<h6 class="h6">${singlevalue} <button class="todel">del</button></h6>`
	}
	html += `</div>`
	document.querySelector(".forcontainer").innerHTML = html
	let delvar = document.querySelectorAll(".todel")
	delvar.forEach((value, index) => {
		value.addEventListener("click", function () {
			console.log(value)
			this.parentNode.remove()

		})
	})
})



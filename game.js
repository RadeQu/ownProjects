const randomPage = (min, max) => {
	min = Math.min(min, max);
	max = Math.max(min, max);
	return Math.floor(Math.random() * (max - min)) + min;
};

const catFactOutput = document.querySelector(".catFact");
const userText = document.getElementById("UserText");
const resetBtn = document.querySelector(".reset");
async function catFact() {
	const requestURL = `https://catfact.ninja/facts?page=${randomPage(1, 34)}`;
	const request = new Request(requestURL);
	userText.value = ""
	const response = await fetch(request);
	const catFacts = await response.json();
	let factCount = 0;
	catFactOutput.textContent = "";
	if (factCount <= 0) {
		console.log(catFacts.data);
		const arr = catFacts.data;
		arr.forEach(el => {
			const factArray = [...el.fact];
			factCount++;
			if (factCount < 2) {
				for (let i = 0; i < factArray.length; i++) {
					const span = document.createElement("span");
					span.appendChild(document.createTextNode(factArray[i]));
					catFactOutput.appendChild(span);
				}
			}
		});
	}
}
let startDate = 0
let endDate = 0;
let seconds = 0;
let minutes = 0;
let miliseconds = 0;
let differenece = 0;
const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const checkText = () => {
	const textGenerated = [...catFactOutput.textContent];
	const userTextWrited = [...userText.value];
	let countErr = 0;

	for (let i = 0; i < userTextWrited.length; i++) {
		const spans = document.querySelectorAll("span");
		
		if (equals(textGenerated[i], userTextWrited[i])) {
			// console.log("work");
			// console.log(spans[i]);
	
			spans[i].classList.add("green");
			spans[i].classList.remove("red");
		} else {
			// console.log("not work");
		
			spans[i].classList.add("red");
			spans[i].classList.remove("green");
			countErr++;
		} 
		// console.log(countErr);
	}
	if (userTextWrited.length == true) {
		startDate = 0;
		startDate = Date.now();
		console.log(startDate);
	} else if (textGenerated.length == userTextWrited.length || userTextWrited.length >=  textGenerated.length && textGenerated.length != 0) {
		endDate = Date.now();
		console.log(endDate);
		differenece = ((endDate - startDate) / 360);
		console.log(differenece)
		seconds = parseFloat(differenece.toFixed(0)) 
		miliseconds = [...differenece.toFixed(2)].slice(-2).join("")
		if(miliseconds >= 60){
			--seconds 
		}
		console.log(miliseconds)
		if(differenece >= 60){
			numMin = (seconds % 60)
			console.log(numMin)
			minutes = (seconds / 60).toFixed(0)
			console.log(minutes)
			seconds -= 60 * minutes
			differenece -= 60 * minutes
			console.log(differenece);
			if(differenece < 0){
				minutes -= 1;
				seconds += Math.abs(differenece.toFixed(0))
			}
		}
		if(minutes != 0){
			document.querySelector(".minutes").textContent = `${minutes} minute/s,`
		}
		document.querySelector(".seconds").textContent = `${seconds}`
		document.querySelector(".miliseconds").textContent = `${miliseconds}`
		document.querySelector(".misstakes").textContent = `${countErr}`
		document.querySelector(".popUp").classList.add("popUpActive")
	}
};

userText.addEventListener("keyup", checkText);
document.querySelector(".catFactBtn").addEventListener("click", catFact);
resetBtn.addEventListener("click", () => {
	location.reload()
	// startDate = 0;
	// endDate = 0;
	// catFactOutput.textContent = "";
	// userText.value = "";
});

document.querySelector(".refreshBtn").addEventListener("click", () => {
	window.location.reload()
})
const modalShadow = document.querySelector(".modal-shadow")

const showModal = () => {
	if(modalShadow.style.visibility === "hidden"){
		modalShadow.style.visibility = "visible";
	} else {
		modalShadow.style.visibility = "hidden"
	}
}
console.log(modalShadow)
const closeBtn = document.querySelector(".close")
closeBtn.addEventListener('click', showModal)
const infoBtn = document.querySelector(".info")
infoBtn.addEventListener("click", showModal)
window.addEventListener("click", e =>  e.target === modalShadow ? showModal() : false)
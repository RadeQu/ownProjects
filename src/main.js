const data = require("./data.json");
const themeBtn = document.querySelector(".colorSwitch");
const ghostTable = document.querySelector(".ghostsTable");

const openPopup = document.querySelector(".popup");
const modal = document.querySelector(".modal-shadow");
const closePopupBtn = document.querySelector(".closePopup");

let color = true;
const evidenceArr = [
	"EMF5",
	"Spirit Box",
	"Fingerprints",
	"Ghost Orb",
	"Ghost writing",
	"Freezing temperature",
	"D.O.T.S.",
];
const setTheme = theme => (document.documentElement.className = theme);

let active = [];
let notPosbbileArr = [];

themeBtn.addEventListener("click", () => {
	if (color == true) {
		setTheme("light"), (color = false);
	} else {
		setTheme("dark");
		color = true;
	}
});

const handlePopup = () => {
	if (modal.style.visibility === "visible") {
		setTimeout(() => {
			modal.style.visibility = "hidden";
		}, 300);
		modal.style.opacity = 0;
	} else {
		modal.style.visibility = "visible";
		modal.style.opacity = 1;
	}
};

window.addEventListener("click", e =>
	e.target === modal ? handlePopup() : false
);

openPopup.addEventListener("click", handlePopup);
closePopupBtn.addEventListener("click", handlePopup);
const createGhostsTable = () => {
	data.forEach(el => {
		const div = document.createElement("div");
		div.classList.add("ghostBox");
		const ghostName = document.createElement("h3");
		ghostName.classList.add("ghostName");
		ghostName.textContent = el.name;
		const ul = document.createElement("ul");
		ghostTable.appendChild(div);
		div.appendChild(ghostName);
		div.appendChild(ul);
		evidenceArr.forEach(elem => {
			const li = document.createElement("li");
			li.appendChild(document.createTextNode(`${elem}`));
			li.classList.add(el.evidence[elem]);
			li.classList.add("evidence");
			ul.appendChild(li);
			ul.classList.add("ghost");
		});
	});
};
createGhostsTable();
const ghosts = document.querySelectorAll(".ghost");
let ghostRemaining = [...ghosts];


const checkGhosts = () => {
	ghostRemaining.forEach(el => {
		let ghostArr = [];
		for (let i = 0; i < el.childNodes.length; i++) {
			if (el.childNodes[i].classList.contains("true")) {
				ghostArr.push(el.childNodes[i].textContent);
			}
			const found = active.every(r => ghostArr.indexOf(r) >= 0);
			if (found === true) {
				el.parentElement.style.background = "green";
			} else {
				el.parentElement.style.background = "gray";
			}
			if (active.length === 0 && notPosbbileArr.length === 0) {
				el.parentElement.style.background = "none";
			}
		}
	});
};

const checkNotPossible = () => {
	ghostRemaining.forEach(el => {
		let notGhostArr = [];
		for (let i = 0; i < el.childNodes.length; i++) {
			if (el.childNodes[i].classList.contains("false")) {
				notGhostArr.push(el.childNodes[i].textContent);
			}
			let foundNot = notPosbbileArr.every(r => notGhostArr.indexOf(r) >= 0);
			if (foundNot === true) {
				el.parentElement.style.background = "green";
			} else {
				el.parentElement.style.background = "gray";
			}
			if (active.length === 0 && notPosbbileArr.length === 0) {
				el.parentElement.style.background = "none";
			}
		}
	});
};

const addEvidence = (x, e, z) => {
	let value = x;
	if (active.includes(value)) {
		active = active.filter(item => item !== value);
		e.classList.remove("activeEvidence");
	} else if(notPosbbileArr.includes(value) || notPosbbileArr.length >= 0){
		active.push(value);
		e.classList.add("activeEvidence");
		notPosbbileArr = notPosbbileArr.filter(item => item !== value);
		z.classList.remove("excludedEvidence");
	}
	checkGhosts();
};

const checkNotPossibleGhosts = (x, e, z) => {
	let value = x;
	if (notPosbbileArr.includes(value)) {
		notPosbbileArr = notPosbbileArr.filter(item => item !== value);
		console.log(notPosbbileArr);
		z.classList.remove("excludedEvidence");
	} else if (active.includes(value) || active.length >= 0) {
		active = active.filter(item => item !== value);
		e.classList.remove("activeEvidence");
		notPosbbileArr.push(value);
		z.classList.add("excludedEvidence");
		console.log(notPosbbileArr);
	}
	checkNotPossible();
};

const excludedEvidences = document.querySelectorAll(".excluded");
const confirmedEvidences = document.querySelectorAll(".confirmed");

const handleConfirmed = (el) => {
	confirmedEvidences.forEach(ele => {
		addEvidence(`${el.innerHTML}`, el, ele)
	})
}

confirmedEvidences.forEach(el => {
	el.addEventListener("click", () => {
		handleConfirmed(el)
	})
})
 

const handleExcluded = (el) => {
	confirmedEvidences.forEach(ele => {
	checkNotPossibleGhosts(`${el.innerHTML}`, ele, el)
	});
};
excludedEvidences.forEach(el => {
	el.addEventListener("click", () => {
		handleExcluded(el)
	} )
})

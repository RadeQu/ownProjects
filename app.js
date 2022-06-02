const inputArea = document.querySelector(".input");
const checkArea = () => {
    let countWords = inputArea.value.match(/(\w+\S+)/ig)
    let countSigns = inputArea.value.replace(/^\s+|\s+$|\s+(?=\s)/g, "").split("");
    countSigns = countSigns.filter(function(str) {
    return /\S/.test(str);
});
if(inputArea.value.length === 1){
    document.querySelector(".signs").textContent = 1
    document.querySelector(".text").textContent = 1
} else if(inputArea.value.length === 0){
    document.querySelector(".text").textContent = 0
    document.querySelector(".signs").textContent = 0
}
    console.log(countSigns.length) // <-- Znaki liczb
    console.log(countWords.length) // <-- słowa liczb
    let Signs = () => {
        if(countSigns.length == 0){
            return 0
        } else {
            return countSigns.length
        }
    }
    let Words = () =>{
        if(countWords.length == 0){
            return 0
        } else {
            return countWords.length
        }
    }
    
    document.querySelector(".text").textContent = Words()
    document.querySelector(".signs").textContent =  Signs()

}

inputArea.addEventListener("keyup", checkArea)
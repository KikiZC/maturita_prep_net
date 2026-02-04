const formEl = document.querySelector("form");
const test1El = document.querySelector("#test");
const test2El = document.getElementById("test2");
const checkboxEl = document.querySelector("#copy")

formEl.addEventListener("submit", (e) => {
    e.preventDefault()

    const test2 = test2El.value;
    console.log(test2)
});

checkboxEl.addEventListener("click", () =>{
    test1El.value = test2El.value;
})

let value = "123";
console.log(value)
console.log(typeof value)
value = parseInt(value)
console.log(value)
console.log(typeof value)

addEventListener("keydown", (e) => {
    if (e.key === "k") {
        console.log("zdarec")
    }
})

checkboxEl.addEventListener("mouseover", (e) => {
    console.log("test")
})

addEventListener("keypress")
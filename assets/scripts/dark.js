console.log("dark")

var dk = document.querySelector (".drk-btn");
console.log(dk)


dk.addEventListener("click", function() {
    console.log("at Event Listener")
    document.querySelector(".wrapper").style.backgroundColor = "#0E1717";
    document.querySelector("h1").style.color = "white";
    document.querySelector(".card-body").style.backgroundColor = "orange";
})


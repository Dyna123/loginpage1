let string = "";
let button = document.querySelectorAll(".btn");
Array.from(button).forEach((button) => {

    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector("input").value = string;
        }
        else if (e.target.innerHTML == "C") {
            string = "";
            document.querySelector("input").value = string;
        }
        else {
            console.log(button);
            string += e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    })
})
//Comment is added!!

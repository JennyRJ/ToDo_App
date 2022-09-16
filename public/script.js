document.addEventListener("click", function(e) {
    if (e.target.classList.contains("edit-me")) {
        let userInput = prompt("Enter your desired words");
        // console.log(userInput);
        axios
            .post("/update-item", { text: userInput, id: e.target.getAttribute() })
            .then(function() {
                //something loading
            })
            .catch(function() {
                console.log("Please try again");
            });
    }
});
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("edit-me")) {
        let userInput = prompt("Enter your desired words");
        // console.log(userInput);
        axios
            .post("/update-item", { text: userInput })
            .then(function() {})
            .catch(function() {
                console.log("");
            });
    }
});
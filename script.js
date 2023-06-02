// Genre arrays 
let comedy=["https://link-hosting-curriciulum-dev.glitch.me/uploaded/2254c5d6a60c3373096d1e1d9248612f.jpg","https://whsat-imagehosting.glitch.me/uploaded/2730edfc300541103fb9733348090cee.jpg"];

let drama=["https://whsat-imagehosting.glitch.me/uploaded/85d559bc3cceb05efd043c92a6346115.jpg","https://whsat-imagehosting.glitch.me/uploaded/ee850ff3ec8319e958dd8d14e89720ec.jpg"];

let action=["https://whsat-imagehosting.glitch.me/uploaded/c89d8e2e912042e43c278c7eff24435f.jpg","https://whsat-imagehosting.glitch.me/uploaded/d0ee69b99156627ee05c4d91d91b7178.jpg"];
// Make sure to declare the shows div as a variable
let shows = document.querySelector(".shows"); 

//Submit Button 
let submitButton = document.querySelector(".submit-button"); 
submitButton.onclick = function() {
	let genreInput = document.querySelector(".get-suggestions").value;
	if (genreInput === "comedy") {
		for (let show of comedy) {
        	shows.insertAdjacentHTML("afterbegin", "<img src='" + show + "'/>");
        } 
	} else if (genreInput === "drama") {
    	for (let show of drama) {
        shows.insertAdjacentHTML("afterbegin", "<img src='" + show + "'/>");
        }
    } else if (genreInput === "action") {
    	for (let show of action) {
        shows.insertAdjacentHTML("afterbegin", "<img src='" + show + "'/>"); 
        }
    }
}; 

// Suggestion Button
let suggestionButton = document.querySelector(".suggestion-button"); 
suggestionButton.onclick = function() {
	let suggestion = document.querySelector(".give-suggestions").value; 
    shows.append("Thanks for your suggestion! Check the console to see that it was added!"); 
    comedy.push(suggestion); 
    drama.push(suggestion);
    action.push(suggestion); 
    console.log(comedy);
    console.log(drama);
    console.log(action); 
}; 

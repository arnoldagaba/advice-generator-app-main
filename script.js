const fetchAdvice = () => {
	fetch("https://api.adviceslip.com/advice")
		.then((response) => response.json())
		.then((advice) => {
			// Extract the advice ID and message to use them in the card
			const adviceId = advice.slip.id;
			const adviceMessage = advice.slip.advice;

			// Get the relevant card elements
			const adviceNum = document.querySelector(".advice-number");
			const adviceText = document.querySelector(".advice-text");

			// Update the card with the fetched advice
			adviceNum.textContent = `Advice #${adviceId}`;
			adviceText.textContent = adviceMessage;
		})
		.catch((error) => {
			console.error("Error fetching advice:", error);
		});
};

// Add a new advice when the dice button is clicked
document.getElementById("roll-btn").addEventListener("click", fetchAdvice);

// Load a quote when the page loads
window.addEventListener("DOMContentLoaded", fetchAdvice);

function addRecommendation() {
    // Get the value of the new recommendation
    const recommendationInput = document.getElementById("new_recommendation");
    const newRecommendationText = recommendationInput.value.trim();

    if (newRecommendationText !== "") {
        // Task 9: Pop-up confirmation message (confirmation dialogue)
        const confirmSubmit = confirm("Are you sure you want to submit this recommendation?");

        if (confirmSubmit) {
            // Task 7: Add new recommendation to the existing list
            const recommendationList = document.getElementById("recommendation-list");
            
            const newCard = document.createElement("div");
            newCard.classList.add("recommendation-card");
            newCard.innerHTML = `"${newRecommendationText}"`;
            
            recommendationList.appendChild(newCard);

            // Clear the textarea and show a success message
            recommendationInput.value = "";
            alert("Thank you for submitting a recommendation!");
        }
    } else {
        alert("Please write a recommendation before submitting.");
    }
}
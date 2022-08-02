const countries = [
    "canada",
    "australia",
    "russia",
    "brasil",
    "alemanha",
    "belgica",
    "portugal",
    "espanha",
    "hungria",
    "austria",
    "italia",
    "mexico",
    "panama",
    "argentina",
    "colombia",
    "inglaterra",
    "vaticano",
    "servia",
    "croacia",
    "albania",
    "macedonia",
    "grecia",
    "turquia",
    "iran"
];

const autocompleteBox = document.getElementById("autocomplete-box");
const inputSelector = document.getElementById("autocomplete-input");

const shuffleList = (list) => list.sort(() => Math.random() - 0.5);
const capitalizeWord = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const addToInput = (suggestion) => {
    const splittedInputValue = inputSelector.value.trim().split(",");
    splittedInputValue.pop();
    splittedInputValue.push(suggestion);

    inputSelector.value = splittedInputValue.map(query => query.trim()).join(", ");
    autocompleteBox.innerHTML = "";
}

const buildAutocompleteList = (query) => {
    autocompleteBox.innerHTML = "";

    const queries = query.toLowerCase().trim().split(",");
    const lastQuery = queries.at(-1).trim();

    if (!lastQuery) {
        return;
    }

    const suggestions = countries.filter((country) => country.includes(lastQuery));
    const shuffledSuggestions = shuffleList(suggestions).slice(0, 5);

    for (const suggestion of shuffledSuggestions) {
        const capitalizedSuggestion = capitalizeWord(suggestion);
        autocompleteBox.innerHTML += `
            <div onclick="addToInput(this.textContent);" class="autocomplete-option">${capitalizedSuggestion}</div>
        `;
    }
}

inputSelector.addEventListener("input", (evt) => {
    buildAutocompleteList(evt.target.value);
})
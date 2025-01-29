
const searchInput = document.querySelector("[data-search]");


let cell = [];



searchInput.addEventListener("input", (e) => {
    const value =e.target.value.toLowerCase();
    cell.forEach(cell => {
        const isVisible = 
        character.name.toLowerCase().includes(value) || 
        character.race.toLowerCase().includes(value);
        character.element.classList.toggle("hide", !isVisible );
    });
});
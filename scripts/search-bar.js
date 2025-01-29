
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("[data-search]");
    if (!searchInput) {
        console.error("Search input not found!");
        return;
    }

    const cells = document.querySelectorAll("span"); // Select all span elements
    const image = document.querySelectorAll(".img-div");
    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();
        image.forEach((img) => {
            const isVisible = img.textContent.toLowerCase().includes(value);
            img.classList.toggle("hide", !isVisible);

        });
        cells.forEach((cell) => {
            const isVisible = cell.textContent.toLowerCase().includes(value);
            cell.classList.toggle("hide", !isVisible);

        });
    });
});

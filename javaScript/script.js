const sign = document.getElementById("sign");

function updateStoreSign() {
    const now = new Date();
    const hour = now.getHours();

    const isOpen = hour >= 9 && hour < 18;

    if (isOpen) {
        sign.classList.remove("flipped");
    } else {
        sign.classList.add("flipped");
    }
}

updateStoreSign();

// Check every minute
setInterval(updateStoreSign, 60000)





// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {

    // Variables for HTML elements
    const grid = document.getElementById("eventList");
    const seasonFilter = document.getElementById("seasonFilter");
    const searchInput = document.getElementById("eventSearch");

    // Function to render event cards
    function render(list) {
        grid.innerHTML = "";

        if (list.length === 0) {
            grid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <p class="text-muted fs-5">No events match your search or filter.</p>
                </div>
            `;
            return;
        }

        list.forEach(function (event) {
            const col = document.createElement("div");
            col.className = "col-sm-6 col-md-4 col-lg-3";

            col.innerHTML = `
                <div class="card h-100 shadow-sm border-uf-orange">
                    <div class="card-body text-center">
                        <h5 class="card-title uf-blue-text">${event.eventName}</h5>
                        <p class="card-text mb-1"><strong>Season:</strong> ${event.season}</p>
                        <p class="text-muted small">${event.date}</p>
                        <p class="mt-2">${event.description}</p>
                    </div>
                </div>
            `;

            grid.appendChild(col);
        });
    }

    // Filter function (ONLY season + optional search)
    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        const seasonValue = seasonFilter.value;

        const filteredList = events.filter(function (e) {

            const nameMatch = e.eventName.toLowerCase().includes(searchTerm);

            const seasonMatch =
                seasonValue === "All" || e.season === seasonValue;

            return nameMatch && seasonMatch;
        });

        render(filteredList);
    }

    // Event listeners
    searchInput.addEventListener("input", applyFilters);
    seasonFilter.addEventListener("change", applyFilters);

    // Initial render
    render(events);
});
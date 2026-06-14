/* ========================================
   HOLLOW CREEK FARM - STORE SIGN DISPLAY
======================================== */

const sign = document.getElementById("sign");

function updateStoreSign() {
    if (!sign) return;

    const now = new Date();
    const hour = now.getHours();

    const isOpen = hour >= 9 && hour < 18;

    if (isOpen) {
        sign.classList.remove("flipped");
    } else {
        sign.classList.add("flipped");
    }
}

if (sign) {
    updateStoreSign();
    setInterval(updateStoreSign, 60000);
}


/* ========================================
   EVENT FILTERING & DISPLAY SYSTEM
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    const grid = document.getElementById("eventList");
    const seasonFilter = document.getElementById("seasonFilter");
    const searchInput = document.getElementById("eventSearch");

    console.log("Grid:", grid);
    console.log("Season Filter:", seasonFilter);
    console.log("Search Input:", searchInput);
    console.log("Events:", events);

    if (!grid || !seasonFilter || !searchInput) {
        console.error("One or more HTML elements were not found.");
        return;
    }

    if (typeof events === "undefined") {
        console.error("events array is not loaded.");
        return;
    }

    function render(list) {

        console.log("render() called");
        console.log("Rendering", list.length, "events");

        grid.innerHTML = "";

        if (list.length === 0) {
            grid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <p class="text-muted fs-5">
                        No events match your search or filter.
                    </p>
                </div>
            `;
            return;
        }

        list.forEach(function (event) {

            console.log("Creating card:", event.eventName);

            const col = document.createElement("div");
            col.className = "col-sm-6 col-md-4 col-lg-3";

            col.innerHTML = `
                <div class="card h-100 shadow-sm">

                    ${
                        event.image
                            ? `<img src="${event.image}" class="card-img-top" alt="${event.imageAlt || event.eventName}">`
                            : ""
                    }

                    <div class="card-body text-center">
                        <h5 class="card-title">${event.eventName}</h5>

                        <p class="card-text mb-1">
                            <strong>Season:</strong> ${event.season}
                        </p>

                        <p class="text-muted small">${event.date}</p>

                        <p class="mt-2">${event.description}</p>
                        ${event.imageCredit ? `<p class="text-muted small mb-0">Image credit: ${event.imageCredit}</p>` : ""}
                    </div>
                </div>
            `;

            grid.appendChild(col);
        });

        console.log("Grid HTML after render:");
        console.log(grid.innerHTML);
    }

    function applyFilters() {

        const searchTerm = searchInput.value.toLowerCase().trim();
        const seasonValue = seasonFilter.value.toLowerCase();

        const filteredList = events.filter(function (e) {

            const nameMatch =
                e.eventName.toLowerCase().includes(searchTerm);

            const seasonMatch =
                seasonValue === "all" ||
                e.season.toLowerCase() === seasonValue;

            return nameMatch && seasonMatch;
        });

        console.log("Filtered events:", filteredList.length);

        render(filteredList);
    }

    searchInput.addEventListener("input", applyFilters);
    seasonFilter.addEventListener("change", applyFilters);

render(events);
});
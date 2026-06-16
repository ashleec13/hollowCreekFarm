/* ========================================================================
   HOLLOW CREEK FARM — CORE JAVASCRIPT LOGIC
   This file waits for the HTML document to fully load before running.
   ======================================================================== */

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Run the function to check if the farm is open/closed
    initStoreSignClock();
    
    // 2. Run the function to handle the contact form (if we are on the Home page)
    initContactForm();

    // 3. Only run the Event Gallery Logic if the eventList div exists (meaning we are on the Events page)
    if (document.getElementById("eventList")) {
        initEventGallery();
    }
});


/* ========================================================================
   FEATURE: 3D OPEN/CLOSED SIGN LOGIC
   Checks the user's computer clock. If it's between 9 AM and 6 PM, 
   the sign shows OPEN. Otherwise, it flips to CLOSED.
   ======================================================================== */
function initStoreSignClock() {
    const signElement = document.getElementById("sign");
    
    // Safety check: If the sign doesn't exist on this page, stop running the function.
    if (!signElement) return;

    function checkTime() {
        const now = new Date();
        const currentHour = now.getHours(); // Returns 0-23
        
        // 9 = 9:00 AM, 18 = 6:00 PM
        const isOpen = currentHour >= 9 && currentHour < 18;
        
        if (isOpen) {
            signElement.classList.remove("flipped"); // Shows Green Side
        } else {
            signElement.classList.add("flipped");    // Shows Red Side
        }
    }

    checkTime(); // Run it immediately on page load
    setInterval(checkTime, 60000); // Check again every 60 seconds (60000 milliseconds)
}


/* ========================================================================
   FEATURE: EVENT GALLERY RENDERING & FILTERING
   Takes data from eventList.js and turns it into HTML Bootstrap Cards.
   ======================================================================== */
function initEventGallery() {
    // Grab the HTML elements we need to manipulate
    const displayGrid = document.getElementById("eventList");
    const searchInput = document.getElementById("eventSearch");
    const seasonDropdown = document.getElementById("seasonFilter");

    // Safety check to ensure the 'events' array from eventList.js loaded properly
    if (typeof events === "undefined") {
        console.error("The events array is missing! Make sure eventList.js is linked in the HTML.");
        return;
    }

    // --- FUNCTION TO DRAW HTML CARDS ON THE SCREEN ---
    function renderCards(listToDraw) {
        displayGrid.innerHTML = ""; // Clear the grid completely before drawing

        // If the user searches for something that doesn't exist, show a message
        if (listToDraw.length === 0) {
            displayGrid.innerHTML = `<h4 class="text-center mt-5 text-muted">No events match your search.</h4>`;
            return;
        }

        // Loop through the array. For every event object, create a column and a card.
        listToDraw.forEach(function(eventObj) {
            
            // Create a new div element for the Bootstrap column
            const col = document.createElement("div");
            col.className = "col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch";

            // Use Template Literals (backticks) to write the HTML block
            // We inject object data using ${variable} syntax
            col.innerHTML = `
                <div class="card w-100 shadow-sm">
                    <img src="${eventObj.image}" class="card-img-top card-fixed-img" alt="${eventObj.eventName}">
                    
                    <div class="card-body d-flex flex-column">
                        <span class="badge bg-secondary mb-2 align-self-start text-uppercase">${eventObj.season}</span>
                        <h3 class="h5 card-title mb-1">${eventObj.eventName}</h3>
                        <p class="text-muted small mb-3"><em>${eventObj.date}</em></p>
                        <p class="card-text small">${eventObj.description}</p>
                    </div>
                </div>
            `;
            
            // Add the created column into the main displayGrid div
            displayGrid.appendChild(col);
        });
    }

    // --- FUNCTION TO FILTER THE DATA ---
    function applyFilters() {
        // Grab the current value of the text box and the dropdown (make them lowercase to avoid case-sensitivity issues)
        const searchText = searchInput.value.toLowerCase().trim();
        const selectedSeason = seasonDropdown.value.toLowerCase();

        // The .filter() method creates a brand new array containing only the items that return 'true'
        const filteredArray = events.filter(function(eventObj) {
            
            // Check if the event name OR description includes the typed text
            const matchesText = eventObj.eventName.toLowerCase().includes(searchText) || 
                                eventObj.description.toLowerCase().includes(searchText);
            
            // Check if the event season matches the dropdown (or if dropdown is set to "all")
            const matchesSeason = selectedSeason === "all" || eventObj.season.toLowerCase() === selectedSeason;

            // Only keep this event if it matches BOTH the text search and the dropdown
            return matchesText && matchesSeason;
        });

        // Take the newly filtered array and send it to the render function to draw it
        renderCards(filteredArray);
    }

    // Listen for the user typing in the box, or changing the dropdown
    searchInput.addEventListener("input", applyFilters);
    seasonDropdown.addEventListener("change", applyFilters);

    // When the page first loads, draw ALL events immediately
    renderCards(events);
}


/* ========================================================================
   FEATURE: CONTACT FORM HANDLING
   Prevents the page from refreshing when the user clicks 'Submit'
   ======================================================================== */
function initContactForm() {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("formSuccess");
    
    // Safety check
    if (!form || !successMessage) return;

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Stop the default page-reload behavior
        
        // Show the green success alert box by removing Bootstrap's 'd-none' class
        successMessage.classList.remove("d-none");
        
        // Clear all text out of the input boxes
        form.reset();

        // Hide the success message again after 5 seconds
        setTimeout(function() {
            successMessage.classList.add("d-none");
        }, 5000);
    });
}
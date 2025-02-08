// Assuming you have a data array that holds all the pantry information
const data = [
    // Example data (replace this with your actual data source)
    { orgName: "Life Changers International Church", 
        contactName: "Jojo Bloh", 
        phone: "847-645-9100", 
        category: "Food Distribution", 
        zipCode: "60608" 
    },
    { orgName: "Our Lady of the Holy Family", 
        contactName: "David Deutsch", 
        phone: "312-519-6200", 
        category: "Pantry/Grocery Distribution", 
        zipCode: "60607" 
    },
    { orgName: "St Pius V Parish", 
        contactName: "Hot Meal Program", 
        phone: "312-226-6161", 
        category: "Pantry/Grocery Distribution", 
        zipCode: "60608" 
    },
    { orgName: "Pilsen Food Pantry", 
        contactName: "Steve Wiley", 
        phone: "773-812-3150", 
        category: "Nutrition Education/Services", 
        zipCode: "60608" 
    },
    { orgName: "Chicago Temple Corps Community Center", 
        contactName: "Kiarar Herry", 
        phone: "312-492-6803", 
        category: "Pantry/Grocery Distribution", 
        zipCode: "60607" 
    },
    { orgName: "First Baptist Congregational Church of Chicago", 
        contactName: "Parker Turner", 
        phone: "312-243-8047", 
        category: "Pantry/Grocery Distribution", 
        zipCode: "60616" 
    },
    { orgName: "Pilgrim Rest MBC", 
        contactName: "Lionel Jackson", 
        phone: "773-398-9249", 
        category: "Pantry/Grocery Distribution", 
        zipCode: "60612" 
    },
    { orgName: "Instituto del Progreso Latino", 
        contactName: "Viviana Gonzalez", 
        phone: "773-890-0055", 
        category: "Health and Wellness Services", 
        zipCode: "60608" 
    },
    { orgName: "Northwestern University Settlement Association", 
        contactName: "Yasmin Rodriguez", 
        phone: "773-278-7471", 
        category: "Pantry/Grocery Distribution", 
        zipCode: "60622" 
    },
    { orgName: "Wells Temple of Deliverance Community Dev Center", 
        contactName: "Sereta Deal", 
        phone: "773-533-6807", 
        category: "Pantry/Grocery Distribution", 
        zipCode: "60613" 
    },
    { orgName: "St Matthew Child Advocate", 
        contactName: "Mr. Arthur Marbly", 
        phone: "773-448-1810", 
        category: "Pantry/Grocery Distribution", 
        zipCode: "60610" 
    },
    // Add more records as needed
];

// Function to create the table with specific columns
function createTable(data) {
    const table = document.createElement("table");

    // Create the table header
    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th>Organization Name</th>
            <th>Contact Name</th>
            <th>Phone Number</th>
        </tr>
    `;
    table.appendChild(thead);

    // Create the table body
    const tbody = document.createElement("tbody");
    data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.orgName}</td>
            <td>${item.contactName}</td>
            <td>${item.phone}</td>
        `;
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    return table;
}

// Function to filter data by search input
function searchFilter() {
    const searchText = document.getElementById("search").value.toLowerCase();

    // Filter the data based on the search text
    return data.filter(item => 
        item.orgName.toLowerCase().includes(searchText) || 
        item.contactName.toLowerCase().includes(searchText)
    );
}

//

// Function to filter data by category and zip code
function filterData() {
    const categoryFilter = document.getElementById("category").value;
    const zipCodeFilterValue = document.getElementById("zipCodeFilter").value;

    // Filter data based on category and zip code
    let filteredData = data.filter(item => {
        const matchesCategory = categoryFilter ? item.category === categoryFilter : true;
        const matchesZipCode = zipCodeFilterValue ? item.zipCode === zipCodeFilterValue : true;
        return matchesCategory && matchesZipCode;
    });

    // Clear previous content
    const categoryContent = document.getElementById("category-content");
    categoryContent.innerHTML = '';

    if (categoryFilter === "") {
        // Show all categories
        const categories = [...new Set(filteredData.map(item => item.category))];
        categories.forEach(category => {
            const categoryHeading = document.createElement("div");
            categoryHeading.classList.add("category-heading");
            categoryHeading.innerText = `Category: ${category}`;
            categoryContent.appendChild(categoryHeading);
            
            const categoryData = filteredData.filter(item => item.category === category);
            categoryContent.appendChild(createTable(categoryData));
        });
    } else {
        // Show filtered category
        const categoryHeading = document.createElement("div");
        categoryHeading.classList.add("category-heading");
        categoryHeading.innerText = `Category: ${categoryFilter}`;
        categoryContent.appendChild(categoryHeading);
        
        categoryContent.appendChild(createTable(filteredData));
    }
}

// Event listeners for filters
document.getElementById("category").addEventListener("change", filterData);
document.getElementById("zipCodeFilter").addEventListener("change", filterData);

// Initial population of zip code filter
const zipCodes = ["60608", "60607", "60612", "60616", "60622", "60613", "60610"];
const zipCodeFilter = document.getElementById("zipCodeFilter");
// Clear any previous options
zipCodeFilter.innerHTML = '';

// Create the default "All" option
const defaultOption = document.createElement("option");
defaultOption.value = "";
defaultOption.textContent = "All";
zipCodeFilter.appendChild(defaultOption);

// Add zip code options
zipCodes.forEach(zip => {
    const option = document.createElement("option");
    option.value = zip;
    option.textContent = zip;
    zipCodeFilter.appendChild(option);
});

// Initial population of category filter
const categoryFilter = document.getElementById("category");
// Clear any previous options
categoryFilter.innerHTML = '';

// Create the default "All" option
const defaultCategoryOption = document.createElement("option");
defaultCategoryOption.value = "";
defaultCategoryOption.textContent = "All";
categoryFilter.appendChild(defaultCategoryOption);

// Dynamically populate categories from the data
const categories = [...new Set(data.map(item => item.category))];
categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
});

// Initial load
filterData();


//map
const mapAddresses = {
    "60608": [
      { lat: 41.850, lng: -87.670, address: "1337 W. 15th Street Chicago, IL" },
      { lat: 41.852, lng: -87.675, address: "1919 S Ashland Ave Chicago, IL" },
      { lat: 41.852, lng: -87.675, address: "2124 S Ashland Ave Chicago, IL"  },
      { lat: 41.852, lng: -87.675, address: "2750 W Roosevelt Rd Chicago, IL" },
    ],
    "60607": [
      { lat: 41.874, lng: -87.654, address: "1 N Ogden Ave Chicago, IL" },
      { lat: 41.874, lng: -87.654, address: "1334 W. Flournoy St. Chicago, IL" },
    ],
    "60612": [
      { lat: 41.852, lng: -87.675, address: "1613 W Washington Blvd Chicago, IL" },
      { lat: 41.852, lng: -87.675, address: "2658 W Jackson Blvd Chicago, IL" },
      { lat: 41.852, lng: -87.675, address: "20 S Campbell Ave Chicago, IL" },
    ],
    "60616": [
      { lat: 41.874, lng: -87.654, address: "218 W 26th St Chicago, IL" },
    ],
    "60622": [
      { lat: 41.874, lng: -87.654, address: "1400 W Augusta Blvd Chicago, IL" },
    ],
    "60610": [
      { lat: 41.874, lng: -87.654, address: "1000 N Orleans St Chicago, IL" },
    ],
    "60613": [
      { lat: 41.874, lng: -87.654, address: "2739 W Madison St Chicago, IL" },
    ],
    // Add more ZIP codes and addresses as needed
};

// Update both table and map
function updateTableAndMap(zipCode) {
    // Filter the data based on the selected zip code
    const filteredData = data.filter(item => item.zipCode === zipCode || zipCode === "");
    
    // Update the table
    const tableContainer = document.getElementById("table-container");
    tableContainer.innerHTML = '';  // Clear the existing table
    tableContainer.appendChild(createTable(filteredData));

    // Update the map markers
    updateMapMarkers(zipCode);
}

// Populate the ZIP code dropdown for the map
const zipCodeFilterMap = document.getElementById('mapZipCode');
for (const zipCode in mapAddresses) {
    const option = document.createElement('option');
    option.value = zipCode;
    option.textContent = zipCode;
    zipCodeFilterMap.appendChild(option);
}

// Initialize the map
const map = L.map('map').setView([41.874, -87.654], 13); // Default map center (Chicago coordinates)

// Add tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to display markers based on ZIP code
function updateMap(zipCode) {
    // Clear existing markers
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    if (zipCode && mapAddresses[zipCode]) {
        // Add new markers for the selected zip code
        mapAddresses[zipCode].forEach(location => {
            L.marker([location.lat, location.lng]).addTo(map)
                .bindPopup(location.address);
        });
    }
}

// Listen for changes on the ZIP code dropdown for the map
zipCodeFilterMap.addEventListener('change', (e) => {
    updateMap(e.target.value);
});

// Initialize with the first ZIP code or show all markers if empty
updateMap('');
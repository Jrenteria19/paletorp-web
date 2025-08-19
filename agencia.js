// Código JavaScript para generar los vehículos
const vehicles = [
    // Gama Baja
    {
        name: "Chevrolet Impala SS 1994",
        price: "GRATIS",
        category: "baja",
        tags: ["free", "baja"],
        image: "imgs/vehicles/impala.jpg"
    },
    {
        name: "Ford Crown Victoria 2003",
        price: "GRATIS",
        category: "baja",
        tags: ["free", "baja"],
        image: "imgs/vehicles/crown-victoria.jpg"
    },
    {
        name: "Chevrolet Tahoe LT 2002",
        price: "GRATIS",
        category: "baja",
        tags: ["free", "baja"],
        image: "imgs/vehicles/tahoe-2002.jpg"
    },
    {
        name: "Jeep Cherokee 1995",
        price: "GRATIS",
        category: "baja",
        tags: ["free", "baja"],
        image: "imgs/vehicles/cherokee-1995.jpg"
    },
    {
        name: "Chevrolet Caprice 2009",
        price: "GRATIS",
        category: "baja",
        tags: ["free", "baja"],
        image: "imgs/vehicles/caprice.jpg"
    },
    {
        name: "Ford Traveller 2003",
        price: "$3,200",
        category: "baja",
        tags: ["baja"],
        image: "imgs/vehicles/traveller-2003.jpg"
    },
    {
        name: "Toyota Tacoma 1995",
        price: "$3,700",
        category: "baja",
        tags: ["baja"],
        image: "imgs/vehicles/tacoma-1995.jpg"
    },
    {
        name: "Chevrolet L/15 1981",
        price: "$4,175",
        category: "baja",
        tags: ["baja"],
        image: "imgs/vehicles/l15.jpg"
    },
    {
        name: "Toyota Prius 2009",
        price: "$4,460",
        category: "baja",
        tags: ["baja"],
        image: "imgs/vehicles/prius.jpg"
    },
    {
        name: "Honda Civic 2014",
        price: "$4,750",
        category: "baja",
        tags: ["baja"],
        image: "imgs/vehicles/civic.jpg"
    },
    {
        name: "Chevrolet Avalanche 2007",
        price: "$4,875",
        category: "baja",
        tags: ["baja"],
        image: "imgs/vehicles/avalanche.jpg"
    },
    {
        name: "Chevrolet K5 Blazer 1981",
        price: "$4,990",
        category: "baja",
        tags: ["baja"],
        image: "imgs/vehicles/k5-blazer.jpg"
    },
    {
        name: "Nissan Altima 2020",
        price: "$5,625",
        category: "baja",
        tags: ["baja"],
        image: "imgs/vehicles/altima.jpg"
    },
    {
        name: "Chevrolet Express 1500 Cargo",
        price: "$6,250",
        category: "baja",
        tags: ["baja"],
        image: "imgs/vehicles/express.jpg"
    },

    // Gama Media
    {
        name: "Chinese Cadillac SLS 201",
        price: "$6,875",
        category: "media",
        tags: ["media"],
        image: "imgs/vehicles/cadillac-sls.jpg"
    },
    {
        name: "Chevrolet Tahoe LT 2008",
        price: "$7,010",
        category: "media",
        tags: ["media"],
        image: "imgs/vehicles/tahoe-2008.jpg"
    },
    {
        name: "Dodge Ram 1500 2009",
        price: "$7,625",
        category: "media",
        tags: ["media"],
        image: "imgs/vehicles/ram-2009.jpg"
    },
    {
        name: "Lincoln Continental 1968",
        price: "$8,110",
        category: "media",
        tags: ["media"],
        image: "imgs/vehicles/continental.jpg"
    },
    {
        name: "Ford Fusion 2015",
        price: "$8,550",
        category: "media",
        tags: ["media"],
        image: "imgs/vehicles/fusion.jpg"
    },
    {
        name: "Chevrolet Tahoe 2018",
        price: "$8,625",
        category: "media",
        tags: ["media"],
        image: "imgs/vehicles/tahoe-2018.jpg"
    },
    {
        name: "Ford F-150 XTL 2018",
        price: "$9,625",
        category: "media",
        tags: ["media"],
        image: "imgs/vehicles/f150-2018.jpg"
    },
    {
        name: "Toyota MR2 1984",
        price: "$9,750",
        category: "media",
        tags: ["media"],
        image: "imgs/vehicles/mr2.jpg"
    },
    {
        name: "Ford Explorer 2016",
        price: "$9,925",
        category: "media",
        tags: ["media"],
        image: "imgs/vehicles/explorer.jpg"
    },
    {
        name: "Hummer H3 2005",
        price: "$10,000",
        category: "media",
        tags: ["media"],
        image: "imgs/vehicles/h3.jpg"
    },
    {
        name: "Jeep Grand Cherokee 2011",
        price: "$10,500",
        category: "media",
        tags: ["media"],
        image: "imgs/vehicles/j2011.jpg"
    },
    {
        name: "Jeep Wrangler 2006",
        price: "$10,675",
        category: "media",
        tags: ["media"],
        image: "imgs/vehicles/wrangler.jpg"
    },
    {
        name: "Crysler 300C 2005",
        price: "$10,750",
        category: "media",
        tags: ["media"],
        image: "imgs/vehicles/crylser.jpg"
    },
    {
        name: "Toyota 4Runner 2020",
        price: "$11,300",
        category: "media",
        tags: ["media"],
        image: "imgs/vehicles/4runner.jpg"
    },
    {
        name: "Dogde Charger 2011",
        price: "$11,500",
        category: "media",
        tags: ["media"],
        image: "imgs/vehicles/DC2011.jpg"
    },
    // Gama Alta
    {
        name: "Nissan Frontier 2022",
        price: "$11,500",
        category: "alta",
        tags: ["alta", "roblox"],
        image: "imgs/vehicles/frontier2022.jpg"
    },
    {
        name: "Tesla Model Y 2023",
        price: "$11,695",
        category: "alta",
        tags: ["alta", "roblox"],
        image: "imgs/vehicles/model-y.jpg"
    },
    {
        name: "Pontiac Fiero 1977",
        price: "$23,550",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/Pontiac-1977.jpg"
    },
    {
        name: "Ford Raptor 2017",
        price: "$22,580",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/raptor.jpg"
    },
    {
        name: "Jeep Cheroke SFP 2020",
        price: "$23,000",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/sfp.jpg"
    },
    {
        name: "Dodge Challenger 2022",
        price: "$23,550",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/challenger-2022.jpg"
    },
    {
        name: "Ford F-150 XTL 2022",
        price: "$26,000",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/f150-2022.jpg"
    },
    {
        name: "Dodge Charger 2020",
        price: "$26,250",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/charger-2020.jpg"
    },
    {
        name: "Cadillac Escalade 2015",
        price: "$31,225",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/escalade.jpg"
    },
    {
        name: "Dodge Challenger SFP 2022",
        price: "$31,750",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/challenger-sfp.jpg"
    },
    {
        name: "Audi S5 Cabriolet 2010",
        price: "$33,200",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/s5.jpg"
    },
    {
        name: "Ford Mustang 350 2015",
        price: "$34,750",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/mustang-350.jpg"
    },
    {
        name: "Porsche Cayenne Turbo",
        price: "$36,250",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/cayenne.jpg"
    },
    {
        name: "BMW X5M Sport",
        price: "$39,000",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/x5m.jpg"
    },
    {
        name: "Land Rover 2022",
        price: "$40,000",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/land-rover.jpg"
    },
    {
        name: "Mercedes AMG GT",
        price: "$40,500",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/amg-gt.jpg"
    },
    {
        name: "Audi RS3 2020",
        price: "$42,250",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/rs3.jpg"
    },
    {
        name: " Tesla CyberTruck",
        price: "$39,000",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/cyber.jpg"
    },
    {
        name: "Audi Q8 2022",
        price: "$47,500",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/q8.jpg"
    },
    {
        name: "Nissan GTR 2013",
        price: "$49,625",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/gtr.jpg"
    },
    {
        name: "Toyota Supra MK5",
        price: "$49,955",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/supra.jpg"
    },
    {
        name: "Mercedes Clase G",
        price: "$62,500",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/clase-g.jpg"
    },
    {
        name: "Cadillac LTS5-V",
        price: "$64,000",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/lts5v.jpg"
    },
    {
        name: "Chevrolet Corvette TZ",
        price: "$87,500",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/corvette-tz.jpg"
    },
    {
        name: "Chevrolet Corvette C8",
        price: "$102,500",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/corvette-c8.jpg"
    },
    {
        name: "Ford GT",
        price: "$155,000",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/ford-gt.jpg"
    },
    {
        name: "Audi R8",
        price: "$150,125",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/r8.jpg"
    },
    {
        name: "McLaren 720s",
        price: "$222,500",
        category: "alta",
        tags: ["alta"],
        image: "imgs/vehicles/720s.jpg"
    },
    {
        name: "Bugatti Chiron Sport",
        price: "$375,000",
        category: "alta",
        tags: ["alta", "premium"],
        image: "imgs/vehicles/chiron.jpg"
    }
];

function createVehicleCard(vehicle) {
    return `
        <div class="vehicle-card" data-category="${vehicle.category}">
            <div class="vehicle-image">
                <img src="${vehicle.image}" alt="${vehicle.name}">
            </div>
            <div class="vehicle-info">
                <h3 class="vehicle-name">${vehicle.name}</h3>
                <div class="vehicle-price">
                    ${vehicle.price === "GRATIS" 
                        ? '<i class="fas fa-gift"></i>' 
                        : '<i class="fas fa-dollar-sign"></i>'} 
                    ${vehicle.price}
                </div>
                <div class="vehicle-tags">
                    ${vehicle.tags.map(tag => `
                        <span class="vehicle-tag tag-${tag}">
                            ${tag === 'free' ? 'GRATIS' : 
                              tag === 'roblox' ? 'PASE ROBLOX' : 
                              tag.toUpperCase()}
                        </span>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Función para filtrar vehículos
function filterVehicles(category) {
    const cards = document.querySelectorAll('.vehicle-card');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Función de búsqueda
function searchVehicles(query) {
    const cards = document.querySelectorAll('.vehicle-card');
    cards.forEach(card => {
        const name = card.querySelector('.vehicle-name').textContent.toLowerCase();
        if (name.includes(query.toLowerCase())) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const vehiclesGrid = document.getElementById('vehiclesGrid');
    const searchInput = document.getElementById('searchVehicles');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Render all vehicles initially
    renderVehicles(vehicles);
    
    // Add event listener for search
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        searchVehicles(searchTerm);
    });
    
    // Add event listeners for filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.dataset.category;
            filterVehicles(category);
        });
    });
    
    // Function to render vehicles
    function renderVehicles(vehiclesToRender) {
        // Clear the container
        vehiclesGrid.innerHTML = '';
        
        if (vehiclesToRender.length === 0) {
            vehiclesGrid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-car-crash"></i>
                    <p>No se encontraron vehículos que coincidan con tu búsqueda</p>
                    <div class="florida-logo-watermark"></div>
                </div>
            `;
            return;
        }
        
        // Create and append vehicle cards with improved design
        vehiclesToRender.forEach((vehicle, index) => {
            const vehicleCard = document.createElement('div');
            vehicleCard.className = 'vehicle-card';
            vehicleCard.dataset.category = vehicle.category;
            
            // Add animation delay based on index
            vehicleCard.style.opacity = '0';
            vehicleCard.style.transform = 'translateY(20px)';
            
            vehicleCard.innerHTML = `
                <div class="vehicle-image">
                    <img src="${vehicle.image}" alt="${vehicle.name}">
                    <div class="florida-badge"></div>
                    <div class="category-label ${vehicle.category}">
                        ${vehicle.category === 'baja' ? 'GAMA BAJA' : 
                          vehicle.category === 'media' ? 'GAMA MEDIA' : 'GAMA ALTA'}
                    </div>
                </div>
                <div class="vehicle-info">
                    <h3 class="vehicle-name">${vehicle.name}</h3>
                    <div class="vehicle-details">
                        <div class="vehicle-price">
                            ${vehicle.price === "GRATIS" 
                                ? '<i class="fas fa-gift"></i>' 
                                : '<i class="fas fa-dollar-sign"></i>'} 
                            <span>${vehicle.price}</span>
                        </div>
                        <div class="vehicle-divider"></div>
                        <div class="vehicle-tags">
                            ${vehicle.tags.map(tag => `
                                <span class="vehicle-tag tag-${tag}">
                                    ${tag === 'free' ? 'GRATIS' : 
                                      tag === 'roblox' ? 'PASE ROBLOX' : 
                                      tag === 'premium' ? 'PREMIUM' :
                                      tag.toUpperCase()}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                    <div class="vehicle-footer">
                        <span class="vehicle-id">ID: paleto-${index + 100}</span>
                        <span class="florida-brand">PaletoRP</span>
                    </div>
                </div>
            `;
            
            vehiclesGrid.appendChild(vehicleCard);
            
            // Apply animation with delay based on index
            setTimeout(() => {
                vehicleCard.style.transition = 'all 0.5s ease';
                vehicleCard.style.opacity = '1';
                vehicleCard.style.transform = 'translateY(0)';
            }, 50 * index);
        });
    }
    
    // Function to filter vehicles by category
    function filterVehicles(category) {
        if (category === 'all') {
            renderVehicles(vehicles);
        } else {
            const filteredVehicles = vehicles.filter(vehicle => vehicle.category === category);
            renderVehicles(filteredVehicles);
        }
    }
    
    // Function to search vehicles by name
    function searchVehicles(query) {
        if (!query) {
            // If search is empty, show all vehicles (respecting current category filter)
            const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
            filterVehicles(activeCategory);
            return;
        }
        
        // Filter by search term and current category
        const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
        let filteredVehicles = vehicles;
        
        if (activeCategory !== 'all') {
            filteredVehicles = filteredVehicles.filter(vehicle => vehicle.category === activeCategory);
        }
        
        filteredVehicles = filteredVehicles.filter(vehicle => 
            vehicle.name.toLowerCase().includes(query) || 
            vehicle.price.toLowerCase().includes(query)
        );
        
        renderVehicles(filteredVehicles);
    }
});
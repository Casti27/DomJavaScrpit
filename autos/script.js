document.addEventListener('DOMContentLoaded', function () {
            const ctx = document.getElementById('consumptionChart').getContext('2d');
            const consumptionChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Chevrolet', 'Renault', 'Audi', 'Mazda', 'BMW', 'Mercedes-Benz'],  
                    datasets: [{
                        label: 'Ventas de Vehículos en Colombia (Unidades)',
                        data: [35000, 27000, 22000, 15000, 12000, 11000],  
                        backgroundColor: [
                            '#1E90FF',  // Chevrolet
                            '#FF6347',  // Renault
                            '#32CD32',  // Audi
                            '#FFD700',  // Mazda
                            '#8A2BE2',  // BMW
                            '#FF4500'   // Mercedes-Benz
                        ],
                        fill: false,
                    }]
                },
                options: {
                    responsive: true,
                    aspectRatio: 2,  
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        tooltip: {
                            callbacks: {
                                label: function(tooltipItem) {
                                    return tooltipItem.label + ': ' + tooltipItem.raw.toLocaleString() + ' unidades';
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            display: false,  
                        },
                        y: {
                            display: false,  
                        }
                    }
                }
            });
        });


        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('rental-form').addEventListener('submit', function(e) {
                e.preventDefault();
                const carSelect = document.getElementById('car-select');
                const rentalDays = parseInt(document.getElementById('rental-days').value);
                const cars = {
                    'bmw-azul': { name: 'BMW Azul', img: 'bmw.jpg' },
                    'mercedes-negro': { name: 'Mercedes Negro', img: 'mercedes-negro.jpg' },
                    'twingo-verde': { name: 'Twingo Verde', img: 'twingo-verde.jpg' },
                    'megane-rojo': { name: 'Megane Rojo', img: 'megane-rojo.jpg' },
                    'chevrolet-gris': { name: 'Chevrolet Gris', img: 'chevrolet-gris.jpg' }
                };
                const selectedCar = cars[carSelect.value];
                let backgroundColor = '';
                if (rentalDays <= 2) {
                    backgroundColor = 'orange';
                } else if (rentalDays <= 5) {
                    backgroundColor = '#DAA520';
                } else if (rentalDays <= 10) {
                    backgroundColor = 'green';
                } else {
                    backgroundColor = 'blue';
                }
                document.getElementById('car-name').textContent = selectedCar.name;
                document.getElementById('car-image').src = `../assets/${selectedCar.img}`;
                document.getElementById('car-image').alt = selectedCar.name;
                document.getElementById('rental-info').textContent = `Días de alquiler: ${rentalDays}`;
                document.getElementById('price-info').textContent = `Precio total: $${rentalDays * 50}`;
                const summaryDiv = document.getElementById('rental-summary');
                summaryDiv.style.backgroundColor = backgroundColor;
                summaryDiv.style.color = 'white';
            });
        });
        
        
        
        
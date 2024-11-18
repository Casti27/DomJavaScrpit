document.getElementById('dog-competition-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let dog1 = document.getElementById('dog1').value;
    let dog2 = document.getElementById('dog2').value;
    let dog3 = document.getElementById('dog3').value;

    const prices = {
        firstPlace: 1000,   
        secondPlace: 750,   
        thirdPlace: 500
    };

    document.getElementById('first-dog').textContent = 'Raza: ' + dog1;
    document.getElementById('first-price').textContent = 'Precio: €' + prices.firstPlace;
    
    document.getElementById('second-dog').textContent = 'Raza: ' + dog2;
    document.getElementById('second-price').textContent = 'Precio: €' + prices.secondPlace;

    document.getElementById('third-dog').textContent = 'Raza: ' + dog3;
    document.getElementById('third-price').textContent = 'Precio: €' + prices.thirdPlace;
});

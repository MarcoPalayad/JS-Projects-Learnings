    function handleCostKeyDown (event) {
        if (event.key === 'Enter') {
            calcTotal()
        }
    }

    function calcTotal () {
        const inputElement = document.querySelector('.js-cost')
        let  cost = Number(inputElement.value);

        const totalCostElement = document.querySelector('.totalCost');

        if (cost < 0) {
            totalCostElement.innerHTML = `Error: cost cannot be less than zero`
            totalCostElement.classList.add('error-message')
            return;
        } 

        totalCostElement.classList.remove('error-message');

        let totalCost;

        if (cost < 40) {
            totalCost = cost + 10;
        } else {
            totalCost = cost;
        }

        totalCostElement.innerHTML = `Total Cost: $${totalCost.toFixed(2)}`;

    }


    function subscribe() {

        const buttonElement = document.querySelector('.js-subscribe-btn')

        if (buttonElement.innerText === 'Subscribe') {
            buttonElement.innerHTML = 'Subscribed'
            buttonElement.classList.add('is-subscribed')
        } else {
            buttonElement.innerHTML = 'Subscribe'
            buttonElement.classList.remove('.is-subscribed')
        }
    
    }



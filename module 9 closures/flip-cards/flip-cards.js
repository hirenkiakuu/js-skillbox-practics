(() => {
    function generateArray(arrayLength) {
        const array = [];
        for (let i = 1; i <= arrayLength; i++) {
            array.push(i, i);
        }

        return array;
    }

    function shuffleArray(array) {
        let currentIndex = array.length; 

        while(currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    function handleCardClick(event, openedCards) {
        const card = event.target;

        if (!card.classList.contains('hidden') || openedCards.length === 2) {
            return;
        }

        card.classList.remove('hidden');
        card.textContent = card.dataset.value;
        openedCards.push(card);

        if (openedCards.length === 2) {
            setTimeout(() => checkMatch(openedCards), 1500);
        }
    }

    function checkMatch(openedCards) {
        const [card1, card2] = openedCards;

        console.log(card1, card2);

        if (card1.dataset.value === card2.dataset.value) {
            openedCards.length = 0;
            card1.removeEventListener('click', handleCardClick);
            card2.removeEventListener('click', handleCardClick);

            if (isGameFinished()) {
                restartGame();
            }

        } else {
            card1.textContent = '';
            card2.textContent = '';
            card1.classList.add('hidden');
            card2.classList.add('hidden');

            openedCards.length = 0;
        }
    }

    function createCards(numberOfCards, openedCards) {
        const cardsArray = shuffleArray(generateArray(numberOfCards));

        const cards = [];

        cardsArray.forEach((value) => {
            const card = document.createElement('div');
            card.dataset.value = value;
            card.classList.add('hidden');

            cards.push(card);
        });

        return cards;
    }

    function isGameFinished() {
        return document.querySelectorAll('.hidden').length === 0;
    }

    function createGame() {
        const optionsContainer = document.querySelector('.options-container');

        const rangeInput = document.createElement('input');
        rangeInput.type = 'range';
        rangeInput.min = 2;
        rangeInput.max = 10;
        rangeInput.step = 2;
        rangeInput.value = rangeInput.min;

        const confirmButton = document.createElement('button');
        confirmButton.textContent = 'Начать игру';
        confirmButton.classList.add('confirm-button');

        const span = document.createElement('span');
        span.textContent = 'Количество карт: ' + rangeInput.min * 2;
        span.style.margin = '5px 0px 7px 0px';

        rangeInput.addEventListener('input', () => {
            span.textContent = 'Количество карт: ' + rangeInput.value * 2;
        });

        
        
        confirmButton.addEventListener('click', () => {
            optionsContainer.innerHTML = '';
            startGame(rangeInput.value);
        });

        optionsContainer.append(rangeInput, span, confirmButton);
    }

    function restartGame() {
        console.log('Game restarted!');
        const container = document.querySelector('.container');
        const restartButton = document.createElement('button');
        restartButton.textContent = 'Начать заново';
        restartButton.classList.add('confirm-button');
        restartButton.addEventListener('click', () => {
            container.innerHTML = '';
            createGame();
        });
        container.append(restartButton);
    }

    function startGame(numberOfCards) {
        const openedCards = [];

        const container = document.querySelector('.container');

        createCards(numberOfCards, openedCards).forEach((card) => {
            container.append(card);
        });


        container.addEventListener('click', (event) => handleCardClick(event, openedCards));
    }

    window.createCardsGame = createGame;
})();
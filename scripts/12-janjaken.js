    let  score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
    }

    updateScoreElement()

    let isAutoPlaying = false;
    let intervalId = 

    function autoPlay () {
        if (!isAutoPlaying) {
                intervalId = setInterval(function () {
                const playerMove = pickCompMove()
                playGame(playerMove)
            }, 1000)
            isAutoPlaying = true
        } else {
            clearInterval(intervalId);
            isAutoPlaying = false
        }

    }

    function playGame(playerMove) {
                
                
    compMove = ''; result = ''; pickCompMove();

    if (playerMove === 'Scissors') {

        if (compMove === 'Scissors') {
            result = 'Tie.';
        } else if (compMove === 'Rock') {
            result = 'You Lose';
        } else if (compMove === 'Paper') {
            result = 'You Win';
        }



        } else if (playerMove == 'Paper') {

            if (compMove === 'Paper') {
                result = 'Tie.';
            } else if (compMove === 'Scissors') {
                result = 'You Lose';
            } else if (compMove === 'Rock') {
                result = 'You Win'
            }


        
        } else if (playerMove === 'Rock') {

            if (compMove === 'Rock') {
                result = 'Tie.';
            } else if (compMove === 'Paper') {
                result = 'You Lose';
            } else if (compMove === 'Scissors') {
                result = 'You Win';
            }

        };

            if (result === 'You Win') {
                score.wins += 1
            } else if (result === 'You Lose') {
                score.losses += 1
            } else if (result === "Tie.") {
                score.ties += 1
            }

        localStorage.setItem('score', JSON.stringify(score))

        document.querySelector('.js-result').innerHTML = result

        function getMoveImage(move) {
            if (move === 'Rock') return 'Rock.png';
            if (move === 'Paper') return 'Paper.png';
            if (move === 'Scissors') return 'Scissors.png';
            return ''; // Fallback
        }

        const playerImageFile = getMoveImage(playerMove);
        const compImageFile = getMoveImage(compMove);

        document.querySelector('.js-moves').innerHTML = `You
        <img src="Images/${playerImageFile}" class="player-moves">
        <img src="Images/${compImageFile}" class="player-moves">
        Computer`


        updateScoreElement()

    }

    function updateScoreElement () {
        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
    }

    function pickCompMove () {

        let randomNum = Math.random(); 


        if (randomNum >= 0 && randomNum < 1/3) {
            compMove = 'Scissors';

            } else if (randomNum >= 1/3 && randomNum < 2/3) {
                compMove = 'Rock';
            } else if (randomNum >= 2/3 && randomNum < 1) {
                compMove = 'Paper';
            }

        return compMove;

    }



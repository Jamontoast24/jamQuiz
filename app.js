const playGame = () => {

    let userGuess
    let score = 0
    let attempts = 3

    let scoreDisplay = document.getElementById('scoreNum')
    let attemptsDisplay = document.getElementById('attemptsNum')

    let authorText = document.querySelector('.author')
    let quoteText = document.querySelector('.quote')

    let answerBtn = document.getElementById('answerButton')
    let restartBtn = document.querySelector('.restart')
    let nextBtn = document.querySelector('.next')

    const quotes = [

    {quote : 'If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.', author : 'sirius black',},

    {quote : 'Why, dear boy, we don’t send wizards to Azkaban just for blowing up their aunts.', author : 'cornelius fudge'},

    {quote : 'Can I have a look at Uranus too, Lavender?', author : 'ron weasley'},

    {quote : 'Honestly, if you were any slower, you’d be going backward.', author : 'draco malfoy'},

    {quote : 'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends', author : 'albus dumbledore'},

    {quote : 'Twitchy little ferret, aren’t you, Malfoy?', author : 'hermione granger'},

    {quote : 'I am what I am, an’ I’m not ashamed. ‘Never be ashamed,’ my ol’ dad used ter say, ‘there’s some who’ll hold it against you, but they’re not worth botherin’ with.', author : 'rubeus hagrid'},

    {quote : 'Time is Galleons, little brother', author : 'fred weasley'},

    {quote : 'Your devotion is nothing more than cowardice. You would not be here if you had anywhere else to go.', author : 'voldemort'},

    {quote : 'I think I\'ll just go down and have some pudding and wait for it all to turn up — it always does in the end.', author : 'luna lovegood'}

    ]

    userGuess = document.querySelector('.answerText')

    let currentQuestion = 0

    const displayNext = () =>  {
        quoteText.innerHTML = quotes[currentQuestion].quote
        authorText.innerHTML = 'Who said this ? '
    }
     displayNext()


    const nextClick = () => {

        answerBtn.addEventListener('click', function() {

            const nextQuote = () => {

                if (currentQuestion < quotes.length){
                    if (userGuess.value != quotes[currentQuestion].author) {
                        console.log('wrong')
                        attemptsDisplay.innerHTML--
                        attempts--
                        console.log(attempts)
                        if (attempts < 1) {
                            answerBtn.disabled = true
                            authorText.innerHTML = 'the correct answer was ' + quotes[currentQuestion].author
                            if (currentQuestion == quotes.length - 1) {
                                quoteText.innerHTML = 'The quiz is over'
                                authorText.innerHTML = 'Your score is ' + scoreDisplay.innerHTML
                            }
                        }
                        return
                    } else if (userGuess.value === quotes[currentQuestion].author) {
                        console.log('Correct')
                        userGuess.value = ''
                        scoreDisplay.innerHTML++
                        if (currentQuestion == quotes.length - 1) {
                            answerBtn.disabled = true
                            return
                        }
                    }
                    currentQuestion++
                }
                displayNext()
            }
            nextQuote()
        })

    }
    nextClick()

    const clickNext = () => {

        nextBtn.addEventListener('click', function() {

            currentQuestion++
            attempts = 3
            attemptsDisplay.innerHTML = attempts
            quoteText.innerHTML = quotes[currentQuestion].quote
            authorText.innerHTML = 'Who said this? '
            answerBtn.disabled = false
            userGuess.value = ''

            if (currentQuestion == quotes.length - 1){
                nextBtn.disabled = true
            }

        })

    }
    clickNext()

    const restartGame = () => {

        restartBtn.addEventListener('click', function() {
            userGuess.value = ''
            attempts = 3
            score = 0
            scoreDisplay.innerHTML = score
            attemptsDisplay.innerHTML = attempts
            currentQuestion = 0
            quoteText.innerHTML = quotes[currentQuestion].quote
            authorText.innerHTML = 'Who said this ? '
            answerBtn.disabled = false
            nextBtn.disabled = false
        })

    }
    restartGame()

}
playGame()

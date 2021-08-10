// STEP ONE:
// -make an array that contains quotes DONE
// -make a function that prints one of those quotes at random(OPTIONAL) DONE
// -when that works, print them in the order we want. DONE

// STEP TWO: 
// -decide on how many attempts the user has DONE
// -use DOM to display the quotes on screen
// -create a submit form to guess who the quote is from (add features like a limited amount of guesses before lock out and moving on to next quote)
// -use if/else statements to see if guess is right or wrong, attempts-- if wrong answer, move on to next quote with answer++ if correct
// -when user reaches 0 attempts the user must restart the game or quit.

// STEP THREE:
// -make sure html is properly tagged
// -style to liking
// -make responsive styling so it looks good on phone and tablet devices
// -make sure everything is working as intended

// STEP 4: (OPTIONAL)
// -Give user choice between easy and hard difficulties: Easy difficulty consists of chosing the right answer on screen as opposed to typing it out.Have an intro screen where the user would chose this.
// -make transitions between each quote to make it look nicer
// -add sound effects if answer is right or wrong
// -add different IP's (like other films, games) to chose from at the beginning


// const playGame = () => {

//     let userGuess
//     let score = 0
//     let scoreDisplay = document.getElementById('.scoreNum')
//     let attemptsPerQuestion = 3
//     let attemptsDisplay = document.getElementById('.attemptsNum')
//     let answer = document.getElementById('.answerButton')

//     const logAttempts = () => {
//         console.log('You have' + ' ' + attemptsPerQuestion + ' attempts remaining')
//     }
//     logAttempts()

//     const logScore = () => {
//         console.log('Your score is' + ' ' + score)
//     }
//     logScore()

//     const quotes = [

//         {quote : 'If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.', author : 'Sirius Black',},

//         {quote : 'It matters not what someone is born, but what they grow to be.', author : 'Albus Dumbledore'},

//         {quote : 'Can I have a look at Uranus too, Lavender?', author : 'Ron Weasley'},

//         {quote : 'Family…Whatever yeh say, blood’s important. . . .', author : 'Rubeus Hagrid'},

//         {quote : 'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends', author : 'Albus Dumbledore'},

//         {quote : 'Books! And cleverness! There are more important things — friendship and bravery.', author : 'Hermione Granger'},

//         {quote : 'I am what I am, an’ I’m not ashamed. ‘Never be ashamed,’ my ol’ dad used ter say, ‘there’s some who’ll hold it against you, but they’re not worth botherin’ with.', author : 'Rubeus Hagrid'},

//         {quote : 'Time is Galleons, little brother', author : 'Fred Weasley'},

//         {quote : 'Ah, of course. There is no need to say any more, Miss Granger. Tell me, which of you will be dying this year?', author : 'Minerva McGonagall'},

//         {quote : 'You know, Minister, I disagree with Dumbledore on many counts . . . but you cannot deny he’s got style . . .', author : 'Phineas Nigellus'},

//     ]



//     const guessAnswers = () => {
        
//         for (i = 0; i < quotes.length; i++) {

//             let quote = quotes[i].quote
//             let author = quotes[i].author
//             const logQuestion = () => {console.log(quote)} 
//             logQuestion()
            
//             const logAuthor = () => {
//                 console.log('the author is' + ' ' + author)
//             }
//             logAuthor()

//             while (true && attemptsPerQuestion != 0) {
//                 userGuess = prompt('Who is the author? ' + 'Score : ' + score + ' ' + '|' + ' ' +  'Attempts this question : ' + attemptsPerQuestion)

//                 if (userGuess === author) {
//                     console.log('You guessed right')
//                     alert('You guessed right')
//                     attemptsPerQuestion = 3
//                     score++
//                     logScore()
//                     logAttempts()
//                     break
//                 }
//                 alert('Wrong answer')
//                 attemptsPerQuestion--
//                 logAttempts()
//                 logScore()
//             }
//             attemptsPerQuestion = 3
//         }
//     }
//     guessAnswers()



//     const displayResults = () => {
//         if (score === 5 && score < 7) {
//             alert('Your score is ' + score + ' and you have ' + attemptsPerQuestion + ' attempts remaining. You did just enough but you could do better')
//         } else if (score >= 7) {
//             alert('Your score is ' + score + ' and you have ' + attemptsPerQuestion + ' attempts remaining. You did great ! You\'re not far off a perfect score. Play again to try and get them all right !')
//         } else if (score < 2 ) {
//             alert('Your score is ' + score + ' and you have ' + attemptsPerQuestion + ' attempts remaining. You did terrible, you don\'t know much about this subject')
//         } else if (score >= 3 && score < 5) {
//             alert('You did below average')
//         } else if (score === 10){
//             alert('You got all the answers right !')
//         }
//     }
//     displayResults()
// }
// playGame()



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

    // const logScore = () => {
    //     console.log('Your score is ' + score)
    // }
    // logScore()

    // const logAttempts = () => {
    //     console.log('You have ' + attempts + ' attempts remaining')
    // }
    // logAttempts()

    const quotes = [

    {quote : 'If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.', author : 'Sirius Black',},

    {quote : 'It matters not what someone is born, but what they grow to be.', author : 'Albus Dumbledore'},

    {quote : 'Can I have a look at Uranus too, Lavender?', author : 'Ron Weasley'},

    {quote : 'Family…Whatever yeh say, blood’s important. . . .', author : 'Rubeus Hagrid'},

    {quote : 'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends', author : 'Albus Dumbledore'},

    {quote : 'Books! And cleverness! There are more important things — friendship and bravery.', author : 'Hermione Granger'},

    {quote : 'I am what I am, an’ I’m not ashamed. ‘Never be ashamed,’ my ol’ dad used ter say, ‘there’s some who’ll hold it against you, but they’re not worth botherin’ with.', author : 'Rubeus Hagrid'},

    {quote : 'Time is Galleons, little brother', author : 'Fred Weasley'},

    {quote : 'Ah, of course. There is no need to say any more, Miss Granger. Tell me, which of you will be dying this year?', author : 'Minerva McGonagall'},

    {quote : 'You know, Minister, I disagree with Dumbledore on many counts . . . but you cannot deny he’s got style . . .', author : 'Phineas Nigellus'}

    ]

    // i = 0
    // userGuess = document.querySelector('.answerText')
    // const guessAnswer = () => {

    //     for (let i in quotes) {
    //         console.log(quotes[i].quote + quotes[i].author)
    //     }

    // }
    // guessAnswer()

    // const quotes = [

    //     {quote: 'default', author : 'pog'},
    //     {quote: 'default2', author : 'kek'},
    //     {quote: 'default3', author : 'lol'}

    // ]

    

    // let i = 0

    userGuess = document.querySelector('.answerText')

    // const nextOne = () => {
    //     let i = 0

    //     const displayQuote = () => {
    //     quoteText.innerHTML = quotes[i].quote
    //     authorText.innerHTML = quotes[i].author
    //     }
    //     displayQuote()
    //     console.log(quotes[i])

    //     answerBtn.addEventListener('click', function() {

    //         while (i < quotes.length) {
    //             if (userGuess.value != authorText.innerHTML) {
    //                 displayQuote()
    //                 console.log(quotes[i].quote)
    //                 console.log('wrong')
    //                 break
    //             } else if (userGuess.value === authorText.innerHTML) {
    //                 console.log('correct')
    //                 console.log(quotes[i])
    //                 i++
    //                 i = i % quotes.length
    //                 displayQuote()
    //                 if (i === quotes.length) {
    //                     answerBtn.disabled = true
    //                 }
                    
    //                 break
                    
    //             }

    //         }


    //     })
    //     // i = 0
    // }
    // nextOne()

    const nextClick = () => {

        let currentQuestion = 0

        const displayNext = () =>  {
            quoteText.innerHTML = quotes[currentQuestion].quote
            authorText.innerHTML = quotes[currentQuestion].author
        }
        displayNext()

        answerBtn.addEventListener('click', function() {

            const nextQuote = () => {
                // if (i == quotes.length) {
                //     i = 0
                //     answerBtn.disabled = true
                //     document.querySelector('.quote').innerHTML = 'The quiz is over ! '
                //     return
                // }
                if (currentQuestion < quotes.length){
                    if (userGuess.value != authorText.innerHTML) {
                        console.log('wrong')
                        attemptsDisplay.innerHTML--
                        // if (attemptsDisplay.innerHTML < 1) {
                        //     currentQuestion++
                        //     displayNext()
                        //     attemptsDisplay.innerHTML = 3
                        // }
                        return
                    } else if (userGuess.value === authorText.innerHTML) {
                        console.log('Correct')
                        scoreDisplay.innerHTML++
                        if (currentQuestion == quotes.length - 1) {
                            currentQuestion = 0
                            answerBtn.disabled = true
                            document.querySelector('.quote').innerHTML = 'The quiz is over ! '
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


    // const nextQuote = () => {

    //     let i = 0
    //     const quoteDisplay = () => {
    //         quoteText.innerHTML = quotes[i].quote
    //         authorText.innerHTML = quotes[i].author
    //     }
    //     quoteDisplay()

        
    //     userGuess = document.querySelector('.answerText')
        
    //     answerBtn.addEventListener('click', function() {

    //         quoteDisplay()
    //         console.log(quotes[i].quote)

    //         while (true){


    //             // console.log(author.innerHTML)
    //             if (userGuess.value === authorText.innerHTML){
    //                 console.log('You guessed right')
    //                 i++
    //                 quoteDisplay()
    //                 scoreDisplay.innerHTML++
    //                 break
                    
    //             } else if (userGuess.value != authorText.innerHTML) {
    //                 // console.log('WRONG ANSWER')
    //                 quoteDisplay()
    //                 attemptsDisplay.innerHTML--

    //                 if (attemptsDisplay.innerHTML < 1){

    //                     i++
    //                     quoteDisplay()
                        
    //                     attemptsDisplay.innerHTML = 3
    //                 }
    //                 if (i == quotes.length - 1 && attemptsDisplay.innerHTML == 2){
    //                     i = 0
    //                     return
    //                 }
                    
    //                 break
    //             }
    //         // i++
    //         break
            
    //         }
            
    //     })

    // }
    // nextQuote()

    // const nums = [ 'hee', 'heee'
    // ]
    //     i = 0

    //     quoteText.innerHTML = quotes[i].quote
    //     authorText.innerHTML = quotes[i].author
    // const next = () => {

    // answerBtn.addEventListener('click', function() {

    //     while (i < quotes.length) {
    //         // i++
    //         console.log(quotes[i].quote)
    //         // i++
    //         // break

    //     if (userGuess.value === authorText.innerHTML){
    //         console.log('correct')
    //         i++
    //         quoteText.innerHTML = quotes[i].quote
    //         authorText.innerHTML = quotes[i].author
            
    //     }else if (userGuess.value != authorText.innerHTML) {
    //         console.log('incorrect')
    //     }
    //     break
    //     }




    // })    


    // }
    // next()
    // console.log(quotes)



    const restartGame = () => {

        restartBtn.addEventListener('click', function() {
            i = 0 
            scoreDisplay.innerHTML = 0
            attemptsDisplay.innerHTML = 3
            answerBtn.disabled = false
            nextClick()
        })

    }
    restartGame()


}
playGame()


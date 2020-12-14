let questions = document.getElementsByClassName("questions");
let scores = document.querySelector(".scores");
console.log(scores)
let score = 0
let total = (questions.length - 1) * 10
scores.innerHTML = `Score: ${score}\\${total}`

let index = 1;
let done = [true]

function plusSlides(n) {
    let questions = document.getElementsByClassName("questions");
    let length = questions.length
    index += n;
    showQuestion(index);
    let counterDiv = document.querySelector(".counter")
    let scoresDiv = document.querySelector(".scores")
    counterDiv.innerHTML = `Question: ${index}\\${length-1}`
    if (index == length) {
        counterDiv.innerHTML = ""
        scoresDiv.innerHTML = ""
        let result = document.querySelector(".result");
        console.log(result)
        let content = `Thanks for going through this course. <br/> You were able 
        to answer ${score/(length-1)} question(s) correctly and your total score is ${score}\\${total} `
        result.innerHTML = content
    } else {
        scoresDiv.innerHTML = `Score: ${score}\\${total}`
    }
    // if (num > questions.length) { index = 1 };
    // if (n < 1) { index = questions.length };
    const displayanswer = document.querySelector(`#displayanswer${index}`)
    displayanswer.innerHTML = ""
    displayanswer.style.backgroundColor = "white"
        // displayanswer.style.display = "none"

}


showQuestion(1);

function showQuestion(n) {
    let questions = document.getElementsByClassName("questions");
    let length = questions.length
    let counterDiv = document.querySelector(".counter")
    counterDiv.innerHTML = `Question: 1\\${length-1}`
    let i;

    if (n > length) { index = 1 };
    if (n < 1) { index = length };
    for (i = 0; i < length; i++) {

        questions[i].style.display = "none";

    }
    questions[index - 1].style.display = "block";

}


const checkAnswer = (id) => {
    const displayanswer = document.querySelector(`#displayanswer${id}`)
    let passed = false
    let checked = false
    let answer = ""
    const target = `answer${id}`
    console.log(target)
    let answersDiv = document.querySelector(`#${target}`).querySelectorAll('input')
    for (const elem of answersDiv) {
        if (elem.value == "true") {
            answer = elem.nextElementSibling.innerText.toLowerCase()
        }
        if (elem.checked) {
            checked = true
            if (elem.value == "true") {
                passed = true
            }
        }
    }
    if (done[id] == undefined && done[id] != true) {
        if (checked) {
            // displayanswer.style.display = "block"
            done.push(true)
            if (passed) {
                score += 10
                displayanswer.innerHTML = `Your are right the answer is <strong> ${answer} </strong>`
                displayanswer.style.color = "white";
                displayanswer.style.backgroundColor = "green"

            } else {
                displayanswer.innerHTML = `Your are wrong the answer is <strong> ${answer} </strong>`
                displayanswer.style.color = "white";
                displayanswer.style.backgroundColor = "red"
            }
        } else {
            alert("Please select one from the options")
        }
        scores.innerHTML = `Score: ${score}\\${total}`
    } else {
        alert("You can only attempt once")
    }

}
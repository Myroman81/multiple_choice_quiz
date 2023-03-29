
var startQuiz = document.querySelector(".strt_button");
var info = document.querySelector(".information");
var questionContainer = document.querySelector(".question-container");
var questionTitle = document.getElementById("title");
var options = document.querySelector(".options");

var questionCount = 0;

startQuiz.addEventListener("click", function(event) {
    event.beginQuiz();
    // we want to hide the info and start button
    startQuiz.classList.add("hide");
    info.classList.add("hide");
    // we want to show (unhide)our questions container
    questionContainer.classList.remove("hide");
    // we want to show the first question set
    questionTitle.textContent = questions[questionCount].question;   // here we tareted an EXISTING HTML element
})
// some dynamic creation of content

var btn1 = document.createElement("button");
console.log(btn1);
btn1.textContent = questions[0].options[0];
var btn2 = document.createElement("button");
btn2.textContent = questions[1].options[1];
options.append(btn1, btn2);
questionCount++;







//options.addEventListener("click", function (event) 






// increment our question counter
var interval;

function countdown() {
    clearInterval(interval);
    interval = setInterval(function () {

        var timer = $('.timer').html();
        timer = 75
        timer.split(':');
        var seconds = timer[1];
        seconds -= 1;
    });
}

var questions = [
    {
        num: 1,
        question: "Which of the following is true about typeof operator in JavaScript?",
        answer: "C- Both of the Above",
        options: [
            "A - The typeof is a unary operator that is placed before its single operand, which can be of any type.",
            "B - Its value is a string indicating the data type of the operand.",
            "C - Both of the above.",
            "D - None of the above.",
        ]
    },
    {
        num: 2,
        question: "Which of the following is the correct syntax to create a cookie using JavaScript?",
        answer: "A- document.cookie = 'key1 = value1; key2 = value2; expires = date';",
        options: [
            "A - document.cookie = 'key1 = value1; key2 = value2; expires = date';",
            "B - browser.cookie = 'key1 = value1; key2 = value2; expires = date';",
            "C - window.cookie = 'key1 = value1; key2 = value2; expires = date';",
            "D - navigator.cookie = 'key1 = value1; key2 = value2; expires = date';",
        ]
    },
    {
        num: 3,
        question: "Which of the following is correct about callbacks?",
        answer: "C- Both of the above.",
        options: [
            "A - A callback is a plain JavaScript function passed to some method as an argument or option.",
            "B - Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.",
            "C - Both of the above.",
            "D - None of the above.",
        ]
    },
    {
        num: 4,
        question: "Which of the following code creates and object?",
        answer: "B- var book = new Object();",
        options: [
            "A - var book = Object();",
            "B - var book = new Object();",
            "C - var book = new OBJECT();",
            "D - var book = new Book();",
        ]
    },
    {
        num: 5,
        question: "Which of the following function of String object combines the text of two strings and returns a new string?",
        answer: "C- concat()",
        options: [
            "A - add()",
            "B - merge()",
            "C - concat()",
            "D - append()",
        ]
    },
    {
        num: 6,
        question: "Which of the following function of String object extracts a section of a string and returns a new string?",
        answer: "A- slice()",
        options: [
            "A - slice()",
            "B - split()",
            "C - replace()",
            "D - search()",
        ]
    },
    {
        num: 7,
        question: "Which of the following function of String object returns the calling string value converted to upper case?",
        answer: "B- toUpperCase()",
        options: [
            "A - toLocaleUpperCase()",
            "B - toUpperCase()",
            "C - toString()",
            "D - substring()",
        ]
    },
    {
        num: 8,
        question: "Which of the following function of String object causes a string to be displayed as struck-out text, as if it were in a <strike> tag?",
        answer: "C- strike()",
        options: [
            "A - sup()",
            "B - small()",
            "C - strike()",
            "D - sub()",
        ]
    }
]
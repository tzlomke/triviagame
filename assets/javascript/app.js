//Variables
var right = 0;
var wrong = 0;
var unanswered = 0;

var questions = [{
        question: "Who killed John Lennon?",
        answers: {
            a: "Mark David Chapman",
            b: "Charles Manson",
            c: "Cristin Keleher",
        },
        correctAnswer: "a",
    },
    {
        question: "What year did the Beatles play Red Rocks?",
        answers: {
            a: "1965",
            b: "1963",
            c: "1964",
            d: "1961",
        },
        correctAnswer: "c",
    },
    {
        question: "What song did the Beatles <em>not</em> play on the Ed Sullivan Show?",
        answers: {
            a: "I Want To Hold Your Hand",
            b: "I Saw Her Standing There",
            c: "All My Loving",
            d: "Love Me Do",
        },
        correctAnswer: "d",
    },
]

// Document Ready
$(document).ready(function () {

    $("#quiz").hide();
    $("#stats").hide();

    // Generate Quiz
    function generateQuiz() {

        // Store Answers
        var answers;

        // Store Output to Append to DOM
        var output = [];

        for (i = 0; i < questions.length; i++) {
            answers = [];
            for (letter in questions[i].answers) {

                // Create Radio Buttons
                answers.push(
                    "<label>" +
                    "<input type='radio' name=question" + i + " value=" + letter + ">" +
                    questions[i].answers[letter] +
                    "</label>"
                )
            }

            // Push Questions and Possible Answers to Output
            output.push(
                "<div class='question'><h1>" + questions[i].question + "</h1></div>" +
                "<div class='answers'>" + answers.join(" ") + "</div>"
            )
        }

        // Append to DOM Element
        $("#quiz").append(output.join("") + "<br>" + "<button type='button' id='done'>DONE</button>");
    }

    // Quiz Start
    $("#start").on("click", function () {

        // Generate Quiz
        generateQuiz()

        // Displays Quiz on DOM, Hides Start Button
        $("#quiz").show();
        $("#start").hide();

        // Score Quiz
        function scoreQuiz() {
            for (i = 0; i < questions.length; i++) {

                console.log(questions[i].correctAnswer);
                console.log($("input[name=question" + i + "]:checked").val());

                if ($("input[name=question" + i + "]").is(":checked")) {
                    if ($("input[name=question" + i + "]:checked").val() === questions[i].correctAnswer) {
                        right++;
                    } else {
                        wrong++;
                    }
                } else {
                    unanswered++;
                }                 
            }

            // Write Results to DOM
            $("#right").text(right);
            $("#wrong").text(wrong);
            $("#unanswered").text(unanswered);
        }

        

        // Timer Start
        setTimeout(function () {
            scoreQuiz();
            $("#quiz").hide();
            $("#stats").show();
        }, 120000);

        // Done Button
        $("#done").on("click", function () {
            scoreQuiz();
            $("#quiz").hide();
            $("#stats").show();
        });
    })
})
//Global Variables
var right = 0;
var wrong = 0;
var unanswered = 0;

// Questions and Answers Object
var questions = [{
        question: "Who killed John Lennon?",
        answers: {
            a: "Mark David Chapman",
            b: "Charles Manson",
            c: "Cristin Keleher",
            d: "Brian Epstein"
        },
        correctAnswer: "a"
    },
    {
        question: "What year did the Beatles play Red Rocks?",
        answers: {
            a: "1965",
            b: "1963",
            c: "1964",
            d: "1961"
        },
        correctAnswer: "c"
    },
    {
        question: "What song did the Beatles <em>not</em> play on the Ed Sullivan Show?",
        answers: {
            a: "I Want To Hold Your Hand",
            b: "I Saw Her Standing There",
            c: "All My Loving",
            d: "Love Me Do"
        },
        correctAnswer: "d"
    },
    {
        question: "Which Beatle crossed Abbey Road first?",
        answers: {
            a: "Paul McCartney",
            b: "George Harrison",
            c: "John Lennon",
            d: "Ringo Starr"
        },
        correctAnswer: "c"
    },
    {
        question: "Who was the original drummer for the Beatles?",
        answers: {
            a: "Ringo Starr",
            b: "Pete Best",
            c: "Ginger Baker",
            d: "Stuart Sutcliffe"
        },
        correctAnswer: "b"
    },
    {
        question: "Which Beatle did some fans believe had died and been replaced by a body double?",
        answers: {
            a: "George Harrison",
            b: "John Lennon",
            c: "Paul McCartney",
            d: "Ringo Starr"
        },
        correctAnswer: "c"
    },
    {
        question: "What does the song title 'Penny Lane' refer to?",
        answers: {
            a: "A girl John loved in high school",
            b: "The bus terminal John and Paul used to get to visit each other",
            c: "A street in the band's hometown of Liverpool",
            d: "The location of the studio where the band recorded the song"
        },
        correctAnswer: "b"
    },
    {
        question: "What record label was founded by the Beatles?",
        answers: {
            a: "EMI",
            b: "Universal Music Group",
            c: "Capitol Records",
            d: "Apple Records"
        },
        correctAnswer: "d"
    },
    {
        question: "On which Beatles song did Eric Clapton play lead guitar?",
        answers: {
            a: "While My Guitar Gently Weeps",
            b: "Here Comes the Sun",
            c: "Norwegian Wood",
            d: "Blackbird"
        },
        correctAnswer: "a"
    },
    {
        question: "Which song from the album <em>Sgt. Pepper's Lonely Hearts Club Band</em> was banned by the BBC due to lyrical content that could 'encourage a permissive attitude towards drug-taking'?",
        answers: {
            a: "A Day in the Life",
            b: "Lucy in the Sky with Diamonds",
            c: "Getting Better",
            d: "Fixing a Hole"
        },
        correctAnswer: "a"
    }]

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
                    "</label><br><br>"
                )
            }

            // Push Questions and Possible Answers to Output
            output.push(
                "<div class='question'><h2>" + questions[i].question + "</h2></div>" +
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
//Declare variables that link to html elements
    let text_box = document.querySelector("#text-box")
    let input_box = document.querySelector("#input-box");
    let progress = document.querySelector("#progress")
    let time_count = document.querySelector("#timer")
    let wpm_count = document.querySelector("#wpm-count")

//Declare and initialise global variables
    let timer = null;
    let time = 0;
    let text = "";
    let wpm = 0;
    let accuracy = 0;
    let errors = 0;
    let chars_typed = 0;
    let correct_chars = 0
    let game_in_progress = false;

//Prepares typing test when started
function start() {

    if (!game_in_progress) {

        game_in_progress = true

        //to be changed
        text = "This is a text that you need to type quickly."

        clearInterval(timer);
        timer = null;
        if (!timer) {
            timer = setInterval(updateTimer_WPM, 1000);
        }

        reset_values();

        //Add text
        text_box.textContent = null;

        text.split('').forEach(char => {
            const charSpan = document.createElement('span')
            charSpan.innerText = char
            text_box.appendChild(charSpan)
        })
    }
}

//Updates the timer calculates
function updateTimer_WPM() {
    if (game_in_progress)
    {
        time++;
        time_count.textContent = time + "s";

        wpm = Math.round((((correct_chars / 5) / time) * 60));
        wpm_count.textContent = wpm + "WPM";
    }
}

//Reset variables to default values
function reset_values() {
    time = 0;
    wpm = 0;
    accuracy = 0;
    errors = 0;
    total_errors = 0;
    chars_typed = 0;
    correct_chars = 0
    input_box.textContent = "";
    progress.style.width= "0%"
    text_box.textContent = "Click on the area below to start";
}

//Process input
function take_input() {
    curr_input = input_box.textContent;
    input_array = curr_input.split('');

    chars_typed++;

    errors = 0;

    quoteSpanArray = text_box.querySelectorAll('span');
    quoteSpanArray.forEach((char, index) => {
    let typed_char = input_array[index]

    //Change colour if correct/incorrect
    if (typed_char == null) {
        char.classList.remove('correct');
        char.classList.remove('incorrect');

    } else if (typed_char === char.innerText) {
        char.classList.add('correct');
        char.classList.remove('incorrect');

    } else {
        char.classList.add('incorrect');
        char.classList.remove('correct');

          // increment number of errors
        errors++;
    }
    });

    correct_chars = (input_array.length - errors);

    //Check if finished
    if (curr_input.length == text.length) {
        finish()
    }

    //Update progress bar
    progress.style.width= ((curr_input.length/text.length)*100) + "%"

}

//Finish game state
function finish(){
    game_in_progress = false
    clearInterval(timer);
    timer = null;
    input_box.textContent = ""
    input_box.contentEditable = false;
    input_box.contentEditable = true;
}




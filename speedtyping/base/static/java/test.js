    let text_box = document.querySelector("#text-box")
    let input_box = document.querySelector("#input-box");
    let progress = document.querySelector("#progress")
    let time_count = document.querySelector("#timer")
    let wpm_count = document.querySelector("#wpm-count")


    let timer = 0;
    let text = "";
    let wpm = 0;
    let accuracy = 0;
    let errors = 0;
    let chars_typed = 0;
    let correct_chars = 0
    let game_in_progress = false;


function start() {

    if (!game_in_progress) {

        game_in_progress = true

        //to be changed
        text = "This is a text that you need to type quickly."

        clearInterval(timer);
        timer = setInterval(updateTimer_WPM, 1000);

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

function updateTimer_WPM() {
    if (game_in_progress)
    {
        timer++;
        time_count.textContent = timer + "s";

        wpm = Math.round((((correct_chars / 5) / timer) * 60));
        wpm_count.textContent = wpm + "WPM";
    }
}


function reset_values() {
    timer = 0;
    wpm = 0;
    accuracy = 0;
    errors = 0;
    total_errors = 0;
    chars_typed = 0;
    correct_chars = 0
    input_box.textContent = "";
    text_box.textContent = "Click on the area below to start";
}

function take_input() {
    curr_input = input_box.textContent;
    input_array = curr_input.split('');

    chars_typed++;

    errors = 0;

    quoteSpanArray = text_box.querySelectorAll('span');
    quoteSpanArray.forEach((char, index) => {
    let typed_char = input_array[index]

        // characters not currently typed
    if (typed_char == null) {
        char.classList.remove('correct');
        char.classList.remove('incorrect');

      // correct characters
    } else if (typed_char === char.innerText) {
        char.classList.add('correct');
        char.classList.remove('incorrect');

      // incorrect characters
    } else {
        char.classList.add('incorrect');
        char.classList.remove('correct');

          // increment number of errors
        errors++;
    }
    });

    correct_chars = (chars_typed - errors);

    if (curr_input.length == text.length) {
        finish()
    }

    progress.style.width= ((curr_input.length/text.length)*100) + "%"

}

function finish(){
    game_in_progress = false
    clearInterval(timer);
    input_box.textContent = ""
    input_box.contentEditable = false;
    input_box.contentEditable = true;
}




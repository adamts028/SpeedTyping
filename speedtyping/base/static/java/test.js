    let text_box = document.querySelector("#text-box")
    let input_box = document.querySelector("#input-box");
    let progress = document.querySelector("#progress")
    let time_count = document.querySelector("#timer")
    let wpm_count = document.querySelector("#wpm-count")

    let time = 0;
    let timer = null;
    let wpm = 0;
    let accuracy = 0;
    let errors = 0;
    let total_errors = 0;
    let chars_typed = 0;


function start() {
    //to be changed
    let text = "This is a text that you need to type quickly."

    clearInterval(timer);
    //timer = setInterval(updateTimer, 1000);

    //Add text
    text_box.textContent = null;

    text.split('').forEach(char => {
        const charSpan = document.createElement('span')
        charSpan.innerText = char
        text_box.appendChild(charSpan)
    })

}
function take_input() {
    curr_input = input_box.textContent;
    input_array = curr_input.split('');

    chars_typed++;

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


}





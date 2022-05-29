    let text_box = document.querySelector("#text-box")
    let input_box = document.querySelector("#input-box");
    let progress = document.querySelector("#progress")
    let time = 0;
    let wpm = 0;
    let accuracy = 0;
    let errors = 0;
    let chars_typed = 0;

function start() {
    //variable initialisation
    let text = "This is a text that you need to type quickly."
    time = 0;
    wpm = 0;
    accuracy = 0;
    errors = 0;
    chars_typed = 0;

    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);

    //Add text
    text_box.textContent = null;

    text.split('').forEach(char => {
        const charSpan = document.createElement('span')
        charSpan.innerText = char
        text_box.appendChild(charSpan)
    })

}

function take_input() {
    input = input_box.value;
    input_array = input.split('');
    chars_typed++;

    quote_array = quote_text.querySelectorAll('span');
    quote_array.forEach((char, index) => {
    let typed_char = input_array[index]

        // characters not currently typed
    if (typed_char == null) {
      char.classList.remove('correct');
      char.classList.remove('incorrect');

      // correct characters
    } else if (typedChar === char.innerText) {
      char.classList.add('correct');
      char.classList.remove('incorrect');

      // incorrect characters
    } else {
      char.classList.add('incorrect');
      char.classList.remove('correct');

      // increment number of errors
      errors++;
}
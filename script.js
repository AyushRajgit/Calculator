const appendValue = function(val) {
    const Screen = document.querySelector(".Display_Screen");
    Screen.value += val;
}

const Calculate = function() {
    const Screen = document.querySelector(".Display_Screen");
    // eval(String) is an inbuilt function which evaluates the mathematical expressions.
    // Safety measure should be taken to only evaluate valid expression.
        
    try {
        Screen.value = eval(Screen.value);
    } catch (error) {
        // For invalid expression : gives error
        Screen.value = "Invalid Expression";
    }
}

const Clear = function() {
    const Screen = document.querySelector(".Display_Screen");
    Screen.value = "";
}

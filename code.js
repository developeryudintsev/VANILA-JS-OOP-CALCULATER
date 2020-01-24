let calculator = {
    number1: document.querySelector('#number1'),
    number2: document.querySelector('#number2'),
    result: document.querySelector('#result'),

    btn: function () {
        let currentThis = this;
        addEventListener('click', currentThis.engine)
    },

    engine: function (key) {
        result.style.opacity = '0';

        let valeu = key.target.value;
        if (valeu === "+" || valeu === "-" || valeu === "*" || valeu === "/") {
            result.style.opacity = '1';
            result.innerHTML = eval(number1.value + valeu + number2.value)
        }
    }
}
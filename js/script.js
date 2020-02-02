// задача на доходы и расходы.

// вызываем функцию при клике на кнопку.
document.getElementById('raz').onclick = function() {
    var zatr = document.getElementById('zat').value;
    var prib = document.getElementById('pr').value;
    var potr = zatr - prib;
    var poluch = prib - zatr;

    if (prib < zatr) {
        document.getElementById('out').innerHTML = 'Вы потратили' + ': ' + potr;
    } else if (prib > zatr) {
        document.getElementById('out').innerHTML = 'Ваши доходы составили' + ': ' + poluch;
    } else {
        document.getElementById('out').innerHTML = 'Вы ничего не получили';
    };
};
// спасибо за внимание!
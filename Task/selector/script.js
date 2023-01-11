var selected = document.querySelector('.selected');
var optionContainer = document.querySelector('.optionContainer');

var option = document.querySelectorAll('.option');

selected.addEventListener('click', function(e) {
    optionContainer.classList.toggle('active');
})

option.forEach(function(ele) {
    ele.addEventListener('click', function(e) {
        selected.innerHTML = ele.querySelector('label').innerHTML;
        optionContainer.classList.remove('active');
    })
})


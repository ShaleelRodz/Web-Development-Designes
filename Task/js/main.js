$(document).ready(function () {

    $('.testimonialSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    centerMode: true,
                }
            }
        ]
    });

    var selected = document.querySelector('.selected');
    var faqSelected = document.querySelector('.faqSelected');
    var optionContainer = document.querySelector('.optionContainer');
    var faqOptionContainer = document.querySelector('.faqOptionContainer');

    var option = optionContainer.querySelectorAll('.option');

    selected.addEventListener('click', function (e) {
        optionContainer.classList.toggle('active');
    })

    faqSelected.addEventListener('click', function (e) {
        faqOptionContainer.classList.toggle('active');

        if (faqOptionContainer.classList.contains('active')) {
            $('.faqOptionContainer .dropDownPath').show();
            faqSelected.style.borderBottom = "none";
            faqOptionContainer.style.borderTop = "none"
        } else {
            $('.faqOptionContainer .dropDownPath').hide()
            faqSelected.style.borderBottom = "solid 1px #d7d7d7";
            faqOptionContainer.style.borderTop = "solid 1px #d7d7d7";
        }
    })

    $('.faqQuestion h2').on('click', function (e) {
        $(this).parent().next().toggle();
    })

    option.forEach(function (ele) {
        ele.addEventListener('click', function (e) {
            var HTML = '<h4>'+ele.querySelector('label').innerHTML;

            selected.innerHTML = HTML;
            optionContainer.classList.remove('active');

            if (ele.querySelector('label').innerHTML.length >= 20) {
                $('.selected h4').css('padding-right','150px')
            } else {
                $('.selected h4').css('padding-right','235px')
            }
        })
    })

});
$(document).ready(function(){
    slider = $('.emi-slider');
    sliderIn = $('.slider-input');

    slider.on("input", function(){
        var x = $(this).val();
        var color = `linear-gradient(90deg, #F5821F ${x}%, rgb(239 239 239 / 0%) ${x}%)`;
        $(this).css("background", color);
    })
    sliderIn.on("input", function(){
        var x = $(this).parents('.range-slider-div').find('.emi-slider').val();
        var color = `linear-gradient(90deg, #F5821F ${x}%, rgb(239 239 239 / 0%) ${x}%)`;
        $(this).parents('.range-slider-div').find('.emi-slider').css("background", color);
    })
    
    // Pie chart
    let ctx = document.getElementById('emiChart').getContext('2d');
    let labels = ['Interest Payable', 'Principal'];
    let colorHex = ['#ef701f', '#1285c2'];

    let emiChart = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
        data: [70, 30],
        backgroundColor: colorHex
        }],
        labels: labels
    },
    options: {
        responsive: true,
        legend: {
        position: 'bottom'
        },
        plugins: {
        datalabels: {
            color: '#fff',
            anchor: 'end',
            align: 'start',
            offset: -10,
            borderWidth: 2,
            borderColor: '#fff',
            borderRadius: 25,
            backgroundColor: (context) => {
            return context.dataset.backgroundColor;
            },
            font: {
            weight: 'bold',
            size: '10'
            },
            formatter: (value) => {
            return value + ' %';
            }
        }
        }
    }
    })


    
})
function loanAmt(amount){
    var slid = document.getElementById('loanAmount');
    slid.value = amount;
  }

function loanAmtinp(amount){
    var disp_amt = document.getElementById('loan-slider');
    disp_amt.value = amount;
  }

  
var response;

var CountryListArr;
var StateListArr;
var CityListArr;
var responseArr = [];
var selectedstate;
var CityListArrs;
var modal = document.getElementById("ovelay-model");
$("#login-btn").click(function () {
    $(".ovelay-model").addClass("dsp-block");
    $(".ovelay-model").removeClass("dsp-none");
    $(".table-data").addClass("dsp-none");
    if($("#table-data").text() == 'Hide Table'){
        $("#table-data").text("View Table Data");
       }
})
window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.add("dsp-none");
        modal.classList.remove("dsp-block");
    }
}

$(".sign-in-btn").click(function () {
    var name = $(".input-user").val();
    var pass = $(".input-pass").val();
    if (name == "rashid") {
        $('.Login-form').submit();
        $('.user-error-msg').addClass("dsp-none");
    }
    else {
        $(".user-error-msg").text("wrong username");
        $('.user-error-msg').addClass("dsp-block");
        $('.user-error-msg').removeClass("dsp-none");
    }
    if (name == "") {
        $(".user-error-msg").text("Please Enter your Name");
        $('.user-error-msg').addClass("dsp-block");
        $('.user-error-msg').removeClass("dsp-none");
    }
    if (pass == "pass123") {
        $('.Login-form').submit();
        $('.pass-error-msg').addClass("dsp-none");
    }
    else {
        $(".pass-error-msg").text("wrong password");
        $('.pass-error-msg').addClass("dsp-block");
        $('.pass-error-msg').removeClass("dsp-none");
    }
    if (pass == "") {
        $(".pass-error-msg").text("Please Enter Your Password");
        $('.pass-error-msg').addClass("dsp-block");
        $('.pass-error-msg').removeClass("dsp-none");
    }
    if (name == "rashid" && pass == "pass123") {
        $('.Login-form').addClass("dsp-none");
        $('.btn-form').removeClass("dsp-none");
    }
})
$("#drop").click(function () {
    $(".btn-form").addClass("dsp-none");
    $(".drop-down").removeClass("dsp-none");
})

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        response = JSON.parse(this.response)
        CountryListArr = Object.keys(response.CountryList); 

        populate(CountryListArr);
        populateCourtyCol();
    }
};
xhttp.open("GET", "json/data_json.json", true);
xhttp.send();

function populate(countrys) {
    var countryList = '';
    countrys.forEach(function (country) {
        countryList += '<option value="' + country + '">' + country + '</option>';
    });

    $("#country").append(countryList)


}
//  country

$("#country").change(function () {
    selectedstate = $("#country option:selected").text();
    populateState(selectedstate)
    selectedcity = $("#statelist option:selected").text();
    populateCity(selectedcity)
})
function populateState(country) {
    $("#statelist").empty();
    $("#citylist").empty();
    StateListArr = Object.keys(response['CountryList'][`${country}`]);
    var stateList = '';
    StateListArr.forEach(function (state) {
        stateList += '<option value="' + state + '">' + state + '</option>';
    });
    $("#statelist").append(stateList)

}

$("#statelist").change(function () {
    var citylistname = $("#statelist option:selected").text();
    populateCity(citylistname)
})

function populateCity(state) {
    $("#citylist").empty();
    CityListArr = response['CountryList'][`${selectedstate}`][`${state}`];
    var cityList = '';
    CityListArr.forEach(function (city) {
        cityList += '<option value="' + city + '">' + city + '</option>';
    })
    $("#citylist").append(cityList)
}
/*table hide show*/
$("#table-data").click(function(){
   $(".table-data").toggleClass("dsp-none");
   if($(this).text() == 'Hide Table'){
    $(this).text("View Table Data");
   }
   else{
   $(this).text("Hide Table");
   }
})
/** populate table start */
function populateCourtyCol() {
    CountryListArr.forEach(function (country) {
        var countrylists = '';
        // countryList += '<option value="'+ country +'">' + country+ '</option>';
        countrylists += '<tr><td>' + country + '</td></tr>';
        $(".countery-Section").append(countrylists)
        populateStateCol(country)
    });
}

function populateStateCol(country) {
    StateListArr = Object.keys(response['CountryList'][`${country}`]);
    StateListArr.forEach(function (state) {
        var stateLists = '';
        stateLists += '<tr><td >' + state + '</td></tr>';
        $(".states-Section").append(stateLists)
        populateCityCol(country, state)
    });
}

function populateCityCol(country, state) {
    var citylists = '';
    var citys = '';
    CityListArr = response['CountryList'][`${country}`][`${state}`];
    CityListArr.forEach(function (city) {
        citys += city +' , ';
    })
    citylists += '<tr><td>' + citys + '</td></tr>';
    $(".city-Section").append(citylists);
}
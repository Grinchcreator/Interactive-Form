
let card_name = document.getElementById("card_name");
let card_number = document.getElementById("card_number");
let card_month = document.getElementById("card_month");
let card_year = document.getElementById("card_year");
let card_cvc = document.getElementById("card_cvc");
let error_Name = document.querySelector(".error_Name");
let error_Number = document.querySelector(".error_Number")
let error_Month = document.querySelector(".error_Month")
let error_Year = document.querySelector(".error_Year")
let error_CVC = document.querySelector(".error_CVC")


//input value clearing on click only once and checking on change
card_name.onclick = function clear(){
card_name.value="";
card_name.style.color="black";
card_name.onclick=null;   
}

card_name.onchange = function check (){
card_name.checkValidity()
if (card_name.checkValidity()===false){
error_Name.innerHTML="Please, put the correct name";
error_Name.style.display="flex";
card_name.style.border="2px solid rgba(206, 14, 14, 0.785)"} else {
 error_Name.style.opacity="0"
 card_name.style.border="2px solid rgb(197, 196, 196)"
}
}

card_number.onclick = function clear(){
card_number.value="";
card_number.style.color="black";
card_number.onclick=null;
}

card_number.onchange = function check (){
card_number.checkValidity()
if (card_number.checkValidity()===false){
error_Number.innerHTML="Wrong format, numbers only";
error_Number.style.display="flex";
card_number.style.border="2px solid rgba(206, 14, 14, 0.785)";
} else {
 error_Number.style.opacity="0"
 card_number.style.border="2px solid rgb(197, 196, 196)"
}
}

card_month.onclick = function clear(){
card_month.value="";
card_month.style.color="black";
card_month.onclick=null;
}

card_month.onchange = function check (){
if (card_month.checkValidity()===false){
error_Month.innerHTML="Wrong format,<br> numbers only";
error_Month.style.display="flex";
card_month.style.border="2px solid rgba(206, 14, 14, 0.785)"
} 
else if (card_month.value >12){
error_Month.innerHTML="Please, put the <br> correct month <br> number";
error_Month.style.display="flex";
card_month.style.border="2px solid rgba(206, 14, 14, 0.785)"
}
else {
 error_Month.style.opacity="0";
 card_month.style.border="2px solid rgb(197, 196, 196)"
} 
}

card_year.onclick = function clear(){
card_year.value="";
card_year.style.color="black";
card_year.onclick=null;
}

card_year.onchange = function check (){
card_year.checkValidity()
if (card_year.checkValidity()===false){
error_Year.innerHTML="Wrong format,<br> numbers only";
error_Year.style.display="flex";
card_year.style.border="2px solid rgba(206, 14, 14, 0.785)"} 
else {
 error_Year.style.opacity="0"
 card_year.style.border="2px solid rgb(197, 196, 196)"
}
}

card_cvc.onclick = function clear(){
card_cvc.value="";
card_cvc.style.color="black";
card_cvc.onclick = null;
}

card_cvc.onchange = function check (){
card_cvc.checkValidity()
if (card_cvc.checkValidity()===false){
error_CVC.innerHTML="Wrong format,<br> numbers only";
error_CVC.style.display="flex";
card_cvc.style.border="2px solid rgba(206, 14, 14, 0.785)"} 
else {
 error_CVC.style.opacity="0"
 card_cvc.style.border="2px solid rgb(197, 196, 196)"
}
}


//JQuery code goes here
let $confirmAll = $("#submit");
let $close_Window1 = $(".input-wrapper1");
let $close_Window2 = $(".input-wrapper2");
let $Thank_You_Window = $(".thank_you");

//open & close on click by checking if the conditions are true
$confirmAll.on("click", function confirmCheck(){
if($("#card_month").length > 0 && $("#card_month").val() <= 12 && $("#card_month").val().length == 2 && $("#card_month").val() !=0 &&
$("#card_cvc").val() !=0 && $("#card_cvc").val().length == 3 &&
$("#card_number").val() !=0 && $("#card_number").val().length == 16 &&
$("#card_year").val() !=0 && $("#card_year").val().length == 2 && $("#card_year").val() > 0 &&
/^[0-9]+$/.test($("#card_number").val()) &&
/^[0-9]+$/.test($("#card_cvc").val()) &&
/^[a-zA-Z]+ [a-zA-Z]+$/.test($("#card_name").val())
)
{
$close_Window1.hide();
$close_Window2.hide();
$confirmAll.hide();
$Thank_You_Window.show();} else {console.log("One of the conditions holds false");}
});
//jquery code finishes here


//fron and back card get values
let front_number = document.getElementById("front_number");
let front_name = document.getElementById("front_name");
let front_month = document.getElementById("front_month");
let front_year = document.getElementById("front_year");
let back_cvc = document.getElementById("back_cvc");

function number_Set() {
front_number.innerText = card_number.value;
}
function name_Set() {
front_name.innerText = card_name.value;
}
function month_Set() {
front_month.innerText = card_month.value;
}
function year_Set() {
front_year.innerText = card_year.value;
}
function cvc_Set() {
back_cvc.innerText = card_cvc.value;
}

card_number.addEventListener("keyup", number_Set);
card_name.addEventListener("keyup", name_Set);
card_month.addEventListener("keyup", month_Set);
card_year.addEventListener("keyup", year_Set);
card_cvc.addEventListener("keyup", cvc_Set);
let fromRuble = document.getElementById('input-from-ruble');
let toUan = document.getElementById('input-to-uan');
let fromUan = document.getElementById('input-from-uan');
let toRuble = document.getElementById('input-to-ruble');

document.getElementById('button-to').addEventListener('click', function() {
   toUan.value = fx(fromRuble.value).from("RUB").to("CNY");
 });


 document.getElementById('button-from').addEventListener('click', function() {
    toRuble.value = fx(fromUan.value).from("CNY").to("RUB");
 });
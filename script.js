function addNumber(val) {
    var number = val;
    document.getElementById('number').value += number;
}
function operat(val) {
    var number = val;
    document.getElementById('number').value += number;
}
function egal(){
    var reponse= eval(document.getElementById ('number').value)
     document.getElementById ('number').value =reponse;
}
function delect() {
    var bsp = document.getElementById('number').value;
    document.getElementById('number').value = bsp.substring(bsp.length -0);
}
function backspace(){
    var bsp = document.getElementById('number').value;
     document.getElementById('number').value = bsp.substring(1,bsp.length);
}
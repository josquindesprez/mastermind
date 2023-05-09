

var n1;
var n2;
var n3;
var n4;

var punteggio = 0;
var tentativo = 1;
function start(){
    n1 = document.getElementById('n1').value
    n2 = document.getElementById('n2').value
    n3 = document.getElementById('n4').value
    n4 = document.getElementById('n4').value
    const modalElement = document.getElementById("modal");
    modalElement.classList.remove("is-active");
    code = [n1,n2,n3,n4]
    
    /*const inputElements = document.getElementsByClassName("try1");
    for (let i = 0; i < inputElements.length; i++) {
        inputElements[i].disabled = false;}*/ 
    allowinput(tentativo)
}

function allowinput(x){
    const inputElements = document.getElementsByClassName(`try${x}`)
    ris = []
    for (let i = 0; i < inputElements.length; i++) {
    inputElements[i].disabled = false;}
    alert('ciao')
    //for (let i = 0; i < inputElements.length; i++) {
    //inputElements[i].disabled = true;}
    
console.log(ris)
    }
/*document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      ris.push(inputElements[i].value)} 
      const inputValue1 = inputElements[0].value;
      const inputValue2 = inputElements[1].value;
      const inputValue3 = inputElements[2].value;
      const inputValue4 = inputElements[3].value;
      console.log(`Input values: ${inputValue1}, ${inputValue2}, ${inputValue3}, ${inputValue4}`);
     for(let element in inputElements){ 
     inputElements[element].disabled = true;} 
      
});*/




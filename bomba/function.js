let btn = document.getElementById("btn");

btn.addEventListener('click', function(e){
  let t_bomba =  document.getElementById("inputBomba").value;
  alert("Corra en 5 segundos se activará la Bomba");
  setTimeout(function(){
  cuentaRegre(t_bomba); }, 5000); // llamado diferido 
 });

function cuentaRegre(i) {
    let intervalo = setInterval(function() {
        document.getElementById("bomba").innerHTML = i;
        if (i === 0) {
            clearInterval(intervalo); // limpio intervalo para detener
            alert('BOOOOOM!!');
        }
        else {
            i--;
        }
    }, 1000);
}


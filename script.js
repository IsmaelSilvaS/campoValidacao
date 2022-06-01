function mudarCor(){
    var campoUsuario = document.getElementById('campoUsuario').style.backgroundColor = 'yellow'
}

function validar(){
    var valorUsuario = document.getElementById('campoUsuario').value

    if(valorUsuario.length <= 3){
        campoUsuario.style.backgroundColor = 'red'
    }else{
        campoUsuario.style.backgroundColor = 'green'
    }
}

var usuarios = [
    { 
        login: 'bill',
        pass: 'b111'
    },
    {
        login: 'luiz',
        pass: 'luiz'
    },
    {   login: 'jose',
        pass: '1234'

    },
    {
       login: 'carlos',
       pass:  '1234'
    },

] 
function valida() {
//var botao = document.getElementById('validar');

 //botao.addEventListener('click', function logar(){

    var pegUsuario = document.getElementById('user').value
    var pegSenha = document.getElementById('ipass').value
    var validaLogin = ''

    for(var i in usuarios) {

        if(pegUsuario == usuarios[i].login && pegSenha == usuarios[i].pass) {
            validaLogin = true
            break
            

        }  
        } if (validaLogin == true) {
            location.href = 'Entrar.html'
        } else {
            alert('usuario ou senha incorretos')
    }
}
 

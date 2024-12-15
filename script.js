let usuarios = []
function ircadastro() {
    if (document.getElementById('cadastro').style.display == 'block') {

        document.getElementById('cadastro').style.display = 'none'

    } else {

        document.getElementById('cadastro').style.display = 'block'

    }

    if (document.getElementById('logarir').style.display == 'none') {

        document.getElementById('logarir').style.display = 'block'

    } else {

        document.getElementById('logarir').style.display = 'none'

    }

    if (document.getElementById('deletarir').style.display == 'none') {

        document.getElementById('deletarir').style.display = 'block'

    } else {

        document.getElementById('deletarir').style.display = 'none'

    }

    if (document.getElementById('listarir').style.display == 'none') {

        document.getElementById('listarir').style.display = 'block'

    } else {

        document.getElementById('listarir').style.display = 'none'

    }

    if (document.getElementById('editarir').style.display == 'none') {

        document.getElementById('editarir').style.display = 'block'

    } else {

        document.getElementById('editarir').style.display = 'none'

    }
    document.getElementById("email").value = ''
    document.getElementById("password").value = ''
}
function irlogin() {
    if (document.getElementById('login').style.display == 'block') {

        document.getElementById('login').style.display = 'none'

    } else {

        document.getElementById('login').style.display = 'block'

    }


    if (document.getElementById('cadastroir').style.display == 'none') {

        document.getElementById('cadastroir').style.display = 'block'

    } else {

        document.getElementById('cadastroir').style.display = 'none'

    }

    if (document.getElementById('deletarir').style.display == 'none') {

        document.getElementById('deletarir').style.display = 'block'

    } else {

        document.getElementById('deletarir').style.display = 'none'

    }

    if (document.getElementById('listarir').style.display == 'none') {

        document.getElementById('listarir').style.display = 'block'

    } else {
        document.getElementById('listarir').style.display = 'none'

    }

    if (document.getElementById('editarir').style.display == 'none') {

        document.getElementById('editarir').style.display = 'block'

    } else {

        document.getElementById('editarir').style.display = 'none'

    }
    document.getElementById("loginn").value = ''
    document.getElementById("senhaa").value = ''
}

function ireditar() {
    if (document.getElementById('editar').style.display == 'block') {

        document.getElementById('editar').style.display = 'none'

    } else {

        document.getElementById('editar').style.display = 'block'

    }
    if(document.getElementById("editar2").style.display = 'block'){
        document.getElementById("editar2").style.display = 'none'
    }
    if(document.getElementById("editar3").style.display = 'block'){
        document.getElementById("editar3").style.display = 'none'
    }
    document.getElementById("procurar").style.display = 'block'
    if (document.getElementById('cadastroir').style.display == 'none') {

        document.getElementById('cadastroir').style.display = 'block'

    } else {

        document.getElementById('cadastroir').style.display = 'none'

    }

    if (document.getElementById('logarir').style.display == 'none') {

        document.getElementById('logarir').style.display = 'block'

    } else {

        document.getElementById('logarir').style.display = 'none'

    }

    if (document.getElementById('deletarir').style.display == 'none') {

        document.getElementById('deletarir').style.display = 'block'

    } else {

        document.getElementById('deletarir').style.display = 'none'

    }

    if (document.getElementById('listarir').style.display == 'none') {

        document.getElementById('listarir').style.display = 'block'

    } else {

        document.getElementById('listarir').style.display = 'none'

    }
    document.getElementById("loginnn").value = ''
    document.getElementById("senhaaa").value = ''

}
function irdeletar() {
    if (document.getElementById('deletar').style.display == 'block') {

        document.getElementById('deletar').style.display = 'none'

    } else {

        document.getElementById('deletar').style.display = 'block'

    }

    if (document.getElementById('logarir').style.display == 'none') {

        document.getElementById('logarir').style.display = 'block'

    } else {

        document.getElementById('logarir').style.display = 'none'

    }

    if (document.getElementById('cadastroir').style.display == 'none') {

        document.getElementById('cadastroir').style.display = 'block'

    } else {

        document.getElementById('cadastroir').style.display = 'none'

    }

    if (document.getElementById('editarir').style.display == 'none') {

        document.getElementById('editarir').style.display = 'block'

    } else {

        document.getElementById('editarir').style.display = 'none'

    }

    if (document.getElementById('listarir').style.display == 'none') {

        document.getElementById('listarir').style.display = 'block'

    } else {

        document.getElementById('listarir').style.display = 'none'

    }
    document.getElementById("deletarEmail").value = ''
    document.getElementById("deletarSenha").value = ''
}
function cadastro() {
    let usuario = gerarUsuario();
    for (let u of usuarios) {
        if (u.email === usuario.email) {
            alert("Este email já está cadastrado.");
            return;
        }
    }
    usuarios.push(usuario);
    alert("Cadastro Efetuado com sucesso!");
    if (document.getElementById('cadastro').style.display == 'block') {
        document.getElementById('cadastro').style.display = 'none';
    } else {
        document.getElementById('cadastro').style.display = 'block';
    }
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
    document.getElementById("logarir").style.display = "block";
    document.getElementById("deletarir").style.display = "block";
    document.getElementById("listarir").style.display = "block";
    document.getElementById("editarir").style.display = "block";
}



function logar() {
    let loginn = document.getElementById("loginn").value
    let senhaa = document.getElementById("senhaa").value
    let usuario = autenticar(loginn, senhaa)
    if (usuario == null) {
        alert("Login ou senha incorreta!")
    }
    else {
        alert("Bem vindo, " + usuario.email)
    }
    if (document.getElementById('login').style.display == 'block') {

        document.getElementById('login').style.display = 'none'

    } else {

        document.getElementById('login').style.display = 'block'

    }
    document.getElementById("loginn").value = ''
    document.getElementById("senhaa").value = ''
    document.getElementById("cadastroir").style.display = "block"
    document.getElementById("deletarir").style.display = "block"
    document.getElementById("listarir").style.display = "block"
    document.getElementById("editarir").style.display = "block"
}

function gerarUsuario() {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let usuario = { email, password }
    return usuario

}

function autenticar(Login, senha) {
    for (let usuario of usuarios) {
        if (Login == usuario.email && senha == usuario.password) {
            return usuario
        }
    }
    return null
}


function deletar() {
    let email = document.getElementById("deletarEmail").value
    let senha = document.getElementById("deletarSenha").value
    let pos = -1
    for (let usuario of usuarios) {
        if (email == usuario.email && senha == usuario.password) {
            pos = usuarios.indexOf(usuario)
        }
    }
    if (pos != -1) {
        usuarios.splice(pos, 1)
        alert(email + " foi excluido com sucesso!")
    }
    else {
        alert("Esse email não foi encontrado!")
    }
    if (document.getElementById('deletar').style.display == 'block') {

        document.getElementById('deletar').style.display = 'none'

    } else {

        document.getElementById('deletar').style.display = 'block'

    }
    document.getElementById("deletarEmail").value = ''
    document.getElementById("deletarSenha").value = ''
    document.getElementById("logarir").style.display = "block"
    document.getElementById("cadastroir").style.display = "block"
    document.getElementById("listarir").style.display = "block"
    document.getElementById("logarir").style.display = "block"
    document.getElementById("editarir").style.display = "block"


}
function listar() {
    let tabela = "Usuarios!"
    for (let usuario of usuarios) {
        tabela += "\n" + usuario.email
        console.log(usuario);
    }
    alert(tabela)
}

function procurar() {
    let email = document.getElementById("loginnn").value;
    let senha = document.getElementById("senhaaa").value;
    for (let usuario of usuarios) {
        if (email == usuario.email) {
            if (senha == usuario.password) {
                alert("Usuário encontrado e senha correta!");
                document.getElementById("procurar").style.display = "none";
                document.getElementById("editar2").style.display = "block";
                document.getElementById("editar3").style.display = "block "
                return;
            }
            else {
                alert("Senha incorreta!");
                return
            }
        }
    }
    alert("Esse email não foi encontrado!");
}

function editar() {
    let novoEmail = document.getElementById("loginnn").value;
    for (let usuario of usuarios) {
        if(novoEmail == usuario.email){
            alert("Esse email já existe!")
            break
        }
        else{
            usuario.email = novoEmail
            alert("Email atualizado com sucesso!");
            document.getElementById("editar").style.display = "none";
            document.getElementById("editar2").style.display = "none"
            document.getElementById("editar3").style.display = "none"
            document.getElementById("cadastroir").style.display = "block";
            document.getElementById("logarir").style.display = "block";
            document.getElementById("deletarir").style.display = "block";
            document.getElementById("listarir").style.display = "block";
            document.getElementById("procurar").style.display = "block"
            break
        }
    }
}

function editar2() {
    let novaSenha = document.getElementById("senhaaa").value;
    for (let usuario of usuarios) {
        usuario.password = novaSenha;
        alert("Senha atualizada com sucesso!");
        document.getElementById("editar").style.display = "none";
        document.getElementById("editar2").style.display = "none"
        document.getElementById("cadastroir").style.display = "block";
        document.getElementById("logarir").style.display = "block";
        document.getElementById("deletarir").style.display = "block";
        document.getElementById("listarir").style.display = "block";
        document.getElementById("procurar").style.display = "block"
        break
    }
}
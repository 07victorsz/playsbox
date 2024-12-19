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
    document.getElementById("Username").value = ''
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
    if (document.getElementById("editarNome").style.display = 'block') {
        document.getElementById("editarNome").style.display = 'none'
    }
    if (document.getElementById("editarSenha").style.display = 'block') {
        document.getElementById("editarSenha").style.display = 'none'
    }
    if (document.getElementById("editarEmail").style.display = 'block') {
        document.getElementById("editarEmail").style.display = 'none'
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
    document.getElementById("Usernameedi").value = ''
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
    document.getElementById("Usernamedel").value = ''
    document.getElementById("deletarEmail").value = ''
    document.getElementById("deletarSenha").value = ''
}
function cadastro() {
    let usuario = gerarUsuario()
    if(usuario.nome == null || usuario.nome == ""){
        alert("Porfavor coloque um nome de usuário")
    }
    else if(usuario.email == null || usuario.email == ""){
        alert("Porfavor coloque um email")
    }
    else if (usuario.password == null || usuario.password == "") {
        alert("Porfavor coloque uma senha")
    }
    else {
        for (let u of usuarios) {
            if(u.nome == usuario.nome){
                alert("Este nome de usuário já existe")
                return
            }
            if (u.email == usuario.email) {
                alert("Este email já está cadastrado.")
                return
            }
        }
        usuarios.push(usuario)
        alert("Cadastro Efetuado com sucesso!")
        if (document.getElementById('cadastro').style.display == 'block') {
            document.getElementById('cadastro').style.display = 'none'
        } else {
            document.getElementById('cadastro').style.display = 'block'
        }
        document.getElementById("Username").value = ''
        document.getElementById("email").value = ''
        document.getElementById("password").value = ''
        document.getElementById("logarir").style.display = "block"
        document.getElementById("deletarir").style.display = "block"
        document.getElementById("listarir").style.display = "block"
        document.getElementById("editarir").style.display = "block"
        listar()

    }
}


function logar() {
    let loginn = document.getElementById("loginn").value
    let senhaa = document.getElementById("senhaa").value
    let usuario = autenticar(loginn, senhaa)
    if (usuario == null) {
        alert("Email ou senha incorreta!")
    }
    else {
        alert("Bem vindo, " + usuario.nome)
    }
    if (document.getElementById('login').style.display == 'block') {

        document.getElementById('login').style.display = 'none'

    } else {

        document.getElementById('login').style.display = 'block'

    }
    listar()
    document.getElementById("loginn").value = ''
    document.getElementById("senhaa").value = ''
    document.getElementById("cadastroir").style.display = "block"
    document.getElementById("deletarir").style.display = "block"
    document.getElementById("listarir").style.display = "block"
    document.getElementById("editarir").style.display = "block"
}

function gerarUsuario() {
    let nome = document.getElementById("Username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let usuario = { nome ,email, password }
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
    let nome = document.getElementById("Usernamedel").value
    let email = document.getElementById("deletarEmail").value
    let senha = document.getElementById("deletarSenha").value
    let pos = -1
    for (let usuario of usuarios) {
        if (nome == usuario.nome && email == usuario.email && senha == usuario.password) {
            pos = usuarios.indexOf(usuario)
        }
    }
    if (pos != -1) {
        usuarios.splice(pos, 1)
        alert(nome + " foi excluido com sucesso!")
    }
    else {
        alert("Esse usuário não foi encontrado!")
    }
    if (document.getElementById('deletar').style.display == 'block') {

        document.getElementById('deletar').style.display = 'none'

    } else {

        document.getElementById('deletar').style.display = 'block'

    }
    listar()
    document.getElementById("Usernamedel").value = ''
    document.getElementById("deletarEmail").value = ''
    document.getElementById("deletarSenha").value = ''
    document.getElementById("logarir").style.display = "block"
    document.getElementById("cadastroir").style.display = "block"
    document.getElementById("listarir").style.display = "block"
    document.getElementById("logarir").style.display = "block"
    document.getElementById("editarir").style.display = "block"


}
function listar() {
    let tabela = "Usuários "
    let elementoDivListagem = document.getElementById('divLista')
    for (let usuario of usuarios) {
        tabela +=  "\n" +'<br>' +"Username: "+ usuario.nome + " - Senha: " + usuario.password + " - Email: " + usuario.email + '<br>'
    }
    elementoDivListagem.innerHTML = tabela
}



function procurar() {
    let nome = document.getElementById("Usernameedi").value
    let email = document.getElementById("loginnn").value
    let senha = document.getElementById("senhaaa").value
    for (let usuario of usuarios) {
        if (nome == usuario.nome){
            if (email == usuario.email) {
                if (senha == usuario.password) {
                    alert("Usuário encontrado e senha correta!")
                    document.getElementById("procurar").style.display = "none"
                    document.getElementById("editarNome").style.display = "block"
                    document.getElementById("editarEmail").style.display = "block"
                    document.getElementById("editarSenha").style.display = "block "
                    return
                }
                else {
                    alert("Senha incorreta!")
                    return
                }
            }
            else{
                alert("Esse email não foi encontrado!")
                return
            }

        }
    }
    alert("Esse Username não foi encontrado!")
}
function editarNome() {
    let novoUsername = document.getElementById("Usernameedi").value
    if (novoUsername == null || novoUsername == "") {
        alert("Por favor, coloque um novo Username")
    }
     else {
        for (let usuario of usuarios) {
            if (novoUsername === usuario.nome) {
                alert("Esse Username já existe!")
                return
            }
        }
        for (let usuario of usuarios) {
                usuario.nome = novoUsername
                alert("Username atualizado com sucesso!")
                break
        }
        document.getElementById("editar").style.display = "none"
        document.getElementById("editarNome").style.display = "none"
        document.getElementById("editarSenha").style.display = "none"
        document.getElementById("editarEmail").style.display = "none"
        document.getElementById("cadastroir").style.display = "block"
        document.getElementById("logarir").style.display = "block"
        document.getElementById("deletarir").style.display = "block"
        document.getElementById("listarir").style.display = "block"
        document.getElementById("procurar").style.display = "block"

        listar()
    }
}

function editarEmail() {
    let novoEmail = document.getElementById("loginnn").value
    if (novoEmail == null || novoEmail == "") {
        alert("Por favor, coloque um novo Email")
    }
     else {
        for (let usuario of usuarios) {
            if (novoEmail === usuario.email) {
                alert("Esse Email já existe!")
                return
            }
        }
        for (let usuario of usuarios) {
                usuario.email = novoEmail
                alert("Email atualizado com sucesso!")
                break
        }
        document.getElementById("editar").style.display = "none"
        document.getElementById("editarNome").style.display = "none"
        document.getElementById("editarSenha").style.display = "none"
        document.getElementById("editarEmail").style.display = "none"
        document.getElementById("cadastroir").style.display = "block"
        document.getElementById("logarir").style.display = "block"
        document.getElementById("deletarir").style.display = "block"
        document.getElementById("listarir").style.display = "block"
        document.getElementById("procurar").style.display = "block"

        listar()
    }
}

function editarSenha() {
    let novaSenha = document.getElementById("senhaaa").value
    if(novaSenha == null || novaSenha == ""){
        alert("Porfavor coloque uma nova senha")
    }
    else{
        for (let usuario of usuarios) {
            usuario.password = novaSenha
            alert("Senha atualizada com sucesso!")
            document.getElementById("editar").style.display = "none"
            document.getElementById("editarNome").style.display = "none"
            document.getElementById("editarEmail").style.display = "none"
            document.getElementById("editarSenha").style.display = "none"
            document.getElementById("cadastroir").style.display = "block"
            document.getElementById("logarir").style.display = "block"
            document.getElementById("deletarir").style.display = "block"
            document.getElementById("listarir").style.display = "block"
            document.getElementById("procurar").style.display = "block"
            break
        }
        listar()
    }
}
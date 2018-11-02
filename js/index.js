submitContato = () => {
    
    const firebaseRef = firebase.database().ref('contato/')
    
    let nome = document.querySelector('input.nome').value
    let email = document.querySelector('input.email').value
    let mensagem = document.querySelector('textarea.mensagem').value

    if(!nome && !email && !mensagem){
        alert("Preencha todos os campos!")
    } else {
        firebaseRef.push({
            nome: nome,
            email: email,
            mensagem: mensagem
        })
    
        alert('Obrigado, sua mensagem foi enviada!')
        document.querySelector('input.nome').value = ""
        document.querySelector('input.email').value = ""
        document.querySelector('textarea.mensagem').value = ""
    }  
}

submitOrcamento = () => {

    const firebaseRef = firebase.database().ref('orçamento/')

    let nome = document.querySelector('input.nome').value
    let email = document.querySelector('input.email').value
    let cidade = document.querySelector('input.cidade').value
    let telefone = document.querySelector('input.telefone').value
    let servico = document.querySelector('select.servico').value
    let area = document.querySelector('select.area').value
    let descricao = document.querySelector('textarea.descricao').value

    if(nome === ""){
        alert("Preencha todos os campos!")
    }else if(email === ""){
        alert("Preencha todos os campos!")
    }
    else if(cidade === ""){
        alert("Preencha todos os campos!")
    }
    else if(telefone === ""){
        alert("Preencha todos os campos!")
    }
    else if(servico === ""){
        alert("Preencha todos os campos!")
    }
    else if(area === ""){
        alert("Preencha todos os campos!")
    }
    else if(descricao === ""){
        alert("Preencha todos os campos!")
    } else {
        firebaseRef.push({
            nome: nome,
            email: email,
            cidade: cidade,
            telefone: telefone,
            servico: servico,
            area: area,
            descricao: descricao
        })

        alert('Obrigado, sua mensagem foi enviada!')
        document.querySelector('input.nome').value = ""
        document.querySelector('input.email').value = ""
        document.querySelector('input.cidade').value = ""
        document.querySelector('input.telefone').value = ""
        document.querySelector('select.servico').value = ""
        document.querySelector('select.area').value = ""
        document.querySelector('textarea.descricao').value = ""
    }
}
 
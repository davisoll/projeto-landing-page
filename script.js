const coletarInfo = () =>{
    let inputNome = document.getElementById ('nome-input')
    let inputTelefone = document.getElementById('telefone-input')
    let inputEmail = document.getElementById ('email-input')

    if (inputEmail.value === '' || inputNome.value === '' || inputTelefone.value ==='') {
        alert ('Por favor, preencha todos os campos.')

    } else {
        alert(`Entraremos em contato ${inputNome.value} através do email ${inputEmail.value} ou pelo telefone ${inputTelefone.value}. Obrigado!`)

        document.getElementById("email").value = "";
        document.getElementById("nome").value = "";
        document.getElementById("telefone").value = "";
    }  
}



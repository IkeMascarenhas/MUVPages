//*Variáveis------------------------
const btn_cadastro = document.querySelector('#cadastrar-bttn')
if(document.querySelector('#data')){
    const age = document.querySelector('#data')
}else{
    const age = false
}
let nowadays = new Date()
console.log(nowadays.getSeconds())

//*---------------------------------


// Função para validar o formulário
btn_cadastro.addEventListener('click',(event)=>{
     // Evitar o envio padrão do formulário
     event.preventDefault();
  
     // Obter os valores dos campos
     if(document.getElementById('nome')){
     var nome = document.getElementById('nome').value;
     }
     let email = document.querySelector('input[type=email]').value;
     if(document.querySelector('input[type=password')){
     var senha = document.querySelector('input[type=password').value;
     }

 
   
     // Realizar validação dos campos
     if (nome === '' || email === '' || senha === '') {
       alert('Por favor, preencha todos os campos.');
       return false; // Impede o envio do formulário
     }
   
     // Validar o formato do email usando uma expressão regular simples
     var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     if (!emailRegex.test(email)) {
       alert('Por favor, insira um endereço de email válido.');
       return false; // Impede o envio do formulário
     }
   
     //!Validação idade do usuário--------------------------------------------
     if(age){
        let data_number = Date.parse(age.value)
        console.log(age.value)
        let user_birth = new Date(data_number)
        console.log(user_birth.getMilliseconds())
        if(nowadays.getTime() - user_birth.getTime()  <= 567648000000){
            alert("Você não pode concluir o cadastro pois é menor de idade!")
           return false
       }
     }
     
 //! ----------------------------------------------------------------------
 
     // Se todos os campos estiverem válidos, você pode permitir o envio do formulário
     document.querySelector('form').submit();
     //Descomente esta linha para enviar o formulário
   
     // Ou você pode executar qualquer outra ação desejada aqui
   
     return true; // Permite o envio do formulário
   
   // Adicione um ouvinte de eventos para o formulário
 //   document.getElementById('meuFormulario').addEventListener('submit', validarFormulario);
})
   


// Requisito: Função Temporal para Saudação
document.addEventListener("DOMContentLoaded", function() {
    const elementoSaudacao = document.getElementById("saudacao");
    
    // Verifica se o elemento existe na página (só existe na página de cadastro)
    if (elementoSaudacao) {
        const horaAtual = new Date().getHours();
        let texto = "";

        if (horaAtual < 12) {
            texto = "Bom dia! Pronto para agendar o banho do seu pet?";
        } else if (horaAtual < 18) {
            texto = "Boa tarde! Que tal deixar seu pet cheiroso hoje?";
        } else {
            texto = "Boa noite! Agende agora para amanhã, que tal?";
        }

        elementoSaudacao.innerText = texto;
    }
});

// Requisito: Validação de Formulário via JavaScript
function validarFormulario(event) {
    event.preventDefault(); // Impede o envio real para não recarregar a página
    
    const nome = document.getElementById("nome").value;
    const pet = document.getElementById("nomePet").value;
    const data = document.getElementById("dataAgendamento").value;

    if(nome && pet && data) {
        alert(`Obrigado, ${nome}! O agendamento para o pet ${pet} foi realizado com sucesso.`);
        // Aqui você poderia enviar os dados para um servidor real
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
    }
}
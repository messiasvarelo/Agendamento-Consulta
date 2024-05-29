// Seleciona o formulário
let form = document.getElementById('appointmentForm'); /* formulário */
// Seleciona o modal
let modal = document.getElementById('myModal'); /* modal */
// Seleciona o botão de fechar do modal
let closeBtn = document.querySelector('.close'); /* botão de fechar */
// Seleciona o botão "Confirmar Agendamento" Editar Agendamento"
let confirmButton = document.getElementById('confirmButton');
// Seleciona o botão Editar Agendamento" 
let editButton = document.getElementById('editButton');

// Variáveis para armazenar os valores dos campos
let name, dob, appointmentDate, notes;

// Função para formatar a data no formato dd/mm/yyyy
function formatDate(date) {
    let parts = date.split('-');
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

// Adiciona um manipulador de evento do formulário
form.addEventListener('submit', function (event) {
    // Previne o comportamento padrão de submissão do formulário
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    name = document.getElementById('name').value;
    dob = document.getElementById('dob').value;
    appointmentDate = document.getElementById('appointment_date').value;
    notes = document.getElementById('notes').value;

    // Preenche o modal com os dados do agendamento
    let modalData = document.getElementById('modal-data');
    modalData.innerHTML = `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Data de Nascimento:</strong> ${formatDate(dob)}</p>
        <p><strong>Data do Agendamento:</strong> ${formatDate(appointmentDate)}</p>
        <p><strong>Observações:</strong> ${notes}</p>
    `;

    // Exibe o modal
    modal.style.display = 'block';
});

// Adiciona um manipulador de evento ao botão de fechar do modal
closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Adiciona um manipulador de evento nos botões "Confirmar Agendamento"
confirmButton.addEventListener('click', function () {
    alert('Agendamento confirmado com sucesso!');
    modal.style.display = 'none';
    form.reset();
});

// Adiciona um manipulador de evento no botão "Cancelar/Editar Agendamento"
editButton.addEventListener('click', function () {
    modal.style.display = 'none';

    // Repopula o formulário com os dados anteriormente inseridos
    document.getElementById('name').value = name;
    document.getElementById('dob').value = dob;
    document.getElementById('appointment_date').value = appointmentDate;
    document.getElementById('notes').value = notes;
});


/*
// Adiciona um manipulador de evento para fechar o modal quando clicar fora dele
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

*/
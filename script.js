document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contato');
    const tabela = document.getElementById('tabelaContatos').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('numero').value;

        const newRow = tabela.insertRow();

        const cellNome = newRow.insertCell(0);
        const cellTelefone = newRow.insertCell(1);

        cellNome.textContent = nome;
        cellTelefone.textContent = telefone;

        form.reset();
    });
});
const API_VIACEP = 'https://viacep.com.br/ws';

async function buscarCEP() {
    const cep = document.getElementById('cep').value;
    if (!cep) {
        alert('Por favor, digite um CEP.');
        return;
    }

    try {
        // Buscar informações do CEP usando ViaCEP
        const responseViaCEP = await fetch(`${API_VIACEP}/${cep}/json/`);
        const dataViaCEP = await responseViaCEP.json();

        if (dataViaCEP.erro) {
            alert('CEP não encontrado.');
            return;
        }

        document.getElementById('rua').innerText = dataViaCEP.logradouro || '-';
        document.getElementById('bairro').innerText = dataViaCEP.bairro || '-';
        document.getElementById('cidade').innerText = dataViaCEP.localidade || '-';
        document.getElementById('estado').innerText = dataViaCEP.uf || '-';

        // Mostrar o resultado
        document.getElementById('resultado').classList.remove('oculto');
    } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        alert('Ocorreu um erro ao buscar o CEP.');
    }
}

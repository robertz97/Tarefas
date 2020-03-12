let botao = document.querySelector("#botao-cadastrar");

botao.addEventListener("click", function (evento) {
    evento.preventDefault();
    let formulario = document.querySelector("#form-paciente");
    let paciente = carregarPaciente(formulario);
    let mensagem = document.querySelector("#mensagem-erro");

    if (paciente) {
        montarTr(paciente);
        formulario.reset();
        mensagem.textContent = "";
    }else{ 
        mensagem.textContent = "Dados inválidos";
    }

});

function montarTr(paciente) {
    //criar linha
    let table = document.querySelector("#tabela-pacientes");
    let tr = document.createElement("tr");
    tr.classList.add("paciente");

    tr.appendChild(montarTd(paciente.nome, "info-nome"));


    table.appendChild(tr);
}

function montarTd(valor, classe ) {
    let td = document.createElement("td");
    td.textContent = valor;
    td.classList.add(classe);
    return td;
}

function carregarPaciente(form) {
    let paciente = {
        nome: form.nome.value
    }

    return paciente;
}



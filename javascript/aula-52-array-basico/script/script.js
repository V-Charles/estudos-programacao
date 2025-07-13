let tarefas = [];

function adicionarTarefa() {
    const input = document.getElementById("inputTarefa");
    const texto = input.value.trim();

    if (texto !== "") {
        tarefas.push(texto);
        input.value = "";
        atualizarLista();
    } else {
        alert("Digite uma tarefa válida!");
    }
}

function atualizarLista() {
    const ul = document.getElementById("listaTarefas");
    ul.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${tarefa}`;
        ul.appendChild(li);
    });
}
var contadorTarefas = 0;

function adicionar() {
    var coisa = document.getElementById("deveres").value;

    var novaTarefa = document.createElement('span');
    var novoID = 'tarefa_' + contadorTarefas; 
    novaTarefa.setAttribute('id', novoID); 
    

    contadorTarefas++;

 
    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    novaTarefa.appendChild(checkbox);

   
    var tituloTarefa = document.createElement('h4');
    tituloTarefa.textContent = coisa;
    novaTarefa.appendChild(tituloTarefa);

    var list = document.querySelector(".list");
    list.appendChild(novaTarefa);
}


function deletar() {
    var checkboxes = document.querySelectorAll('.list input[type="checkbox"]:checked');
    
    checkboxes.forEach(function(checkbox) {
        checkbox.parentElement.remove();
    });
}

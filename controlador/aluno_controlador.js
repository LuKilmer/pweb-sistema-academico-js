class AlunoControlador {

    constructor() {
        this.servico = new AlunoService();
    }

    inserir() {
        try{
            const nomeElemento = document.querySelector("#nome_aluno");
            const idadeElemento = document.querySelector("#idade_aluno");
            const matriculoElemento = document.querySelector("#matricula_aluno");
            const alunoInserido = this.servico.inserir(nomeElemento.value, Number(idadeElemento.value),  matriculoElemento.value);
            const listaAlunosElemento = document.querySelector("#listaAlunos");
            if (alunoInserido){
                this.inserirAlunoNoHtml(alunoInserido, listaAlunosElemento);
            }
        }catch(error){
            alert(error.message);
        }
        
    }
    atualizar(){
        
    }

    inserirAlunoNoHtml(aluno, elementoDestino) {
        const alunoElemento = document.createElement("li");
        alunoElemento.textContent = `Matricula: ${aluno.matricula} - Nome: ${aluno.nome} - Idade: ${aluno.idade}`;
        elementoDestino.appendChild(alunoElemento);
    }


}

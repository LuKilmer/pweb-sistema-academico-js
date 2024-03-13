class disciplinaControlador {

    constructor() {
        this.servico = new DisciplinaService();
    }

    inserir() {
        const nomeElemento = document.querySelector("#nome_disciplina");
        const codigoElemento = document.querySelector("#codigo_disciplina");
        const disciplinaInserida = this.servico.inserir(nomeElemento.value,  codigoElemento.value);
        const listaDisciplinasElemento = document.querySelector("#listaDisiciplina");
        if (disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinasElemento);
        }
    }

    inserirAlunoDisciplina(){
        const matriculaElemento = document.querySelector("#matricula_ad");
        const codigoElemento = document.querySelector("#codigo_ad");
        const alunoInserido = this.servico.inserirAlunoDisciplina(matriculaElemento.value, codigoElemento.value);
        if(alunoInserido){
            this.atualizarDisciplinasNoHtml();
        }
        return alunoInserido;
    }

    atualizarDisciplinasNoHtml(){

    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Nome: ${disciplina.nome} - Código: ${disciplina.codigo} - Quantidade de Alunos: ${disciplina.alunos.length}`;
        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";
        elementoBotaoApagar.addEventListener('click', (event) => {
            console.log(disciplina.codigo);
            this.removerDisciplinaDaLista(disciplina.codigo);
            event.target.parentElement.remove();
            }
        );
        disciplinaElemento.appendChild(elementoBotaoApagar);
        elementoDestino.appendChild(disciplinaElemento);
    }

    removerDisciplinaDaLista(codigo){
        this.servico.remover(codigo);
    }

}

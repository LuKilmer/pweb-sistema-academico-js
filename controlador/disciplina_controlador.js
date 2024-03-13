class disciplinaControlador {

    constructor() {
        this.servico = new DisciplinaService();
    }

    inserir() {
        const nomeElemento = document.querySelector("#nome");
       const codigoElemento = document.querySelector("#codigo");
        const disciplinaInserida = this.servico.inserir(nomeElemento.value,  codigoElemento.value);
        const listaDisciplinasElemento = document.querySelector("#listaDisiciplina");
        if (disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinasElemento);
        }
    }
    inserirAlunoDisciplina(){
        const matriculaElemento = document.querySelector("#matricula_ad");
        const codigoElemento = document.querySelector(
"#codigo_ad");
            const alunoInserido = this.servico.InserirAluno(matriculaElemento.value, codigoElemento.value);
            console.log(alunoInserido);
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        
        disciplinaElemento.textContent = `Nome: ${disciplina.nome} - Código: ${disciplina.codigo} - Quantidade de Alunos: ${disciplina.alunos.length}`;
        elementoDestino.appendChild(disciplinaElemento);
    }





}

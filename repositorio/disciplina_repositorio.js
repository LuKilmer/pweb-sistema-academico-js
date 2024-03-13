class DisciplinaRepositorio {

    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina);
    }

    remover(matricula) {
        const indxDisciplinaARemover = this.disciplinas.findIndex(disciplina => disciplina.matricula === matricula);
        if (indxDisciplinaARemover > -1) {
            this.disciplinas.splice(indxDisciplinaARemover, 1);
        }
    }

    InserirAluno(disciplina, aluno){
        console.log(disciplina);
        disciplina.tete();
        disciplina.addAluno(aluno);
        return aluno;
    }

    listar() {
        return this.disciplinas;
    }
}

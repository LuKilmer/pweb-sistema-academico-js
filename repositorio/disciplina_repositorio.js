class DisciplinaRepositorio {

    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina);
    }

    remover(codigo) {
        const indxDisciplinaARemover = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        if (indxDisciplinaARemover > -1) {
            this.disciplinas.splice(indxDisciplinaARemover, 1);
        }
    }

    inserirAlunoDisciplina(disciplina, aluno){
        const index = this.disciplinas.indexOf(disciplina)
        this.disciplinas[index].alunos.push(aluno);

        return aluno;
    }


    listar() {
        return this.disciplinas;
    }
}

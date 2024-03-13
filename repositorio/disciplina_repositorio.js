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

    atualizar(nome, codigo){
        const index = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        this.disciplinas[index].nome= nome;
    }

    inserirAlunoDisciplina(disciplina, aluno){
        const index = this.disciplinas.indexOf(disciplina)
        
        this.disciplinas[index].alunos.push(aluno);
        return aluno;
    }
    
    removerAlunoDisciplina(disciplina, aluno){
        const index = this.disciplinas.indexOf(disciplina)
        if(index > -1){
            const indxAluno = this.disciplinas[index].alunos.indexOf(aluno);
            if(indxAluno > -1){
                this.disciplinas[index].alunos.splice(indxAluno, 1);
            }
        }
        
        return aluno;
    }

    listar() {
        return this.disciplinas;
    }
}

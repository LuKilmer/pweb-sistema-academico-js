class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(nome, codigo) {
        const DisciplinaPesquisado = this.pesquisarPorCodigo(codigo);
        if (DisciplinaPesquisado.length > 0) {throw new Error('Disciplina já cadastrado!');}

        const DisciplinaNovo = new Disciplina(nome, codigo);
        this.repositorio.inserir(DisciplinaNovo);
        return DisciplinaNovo;
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorio.listar().filter(
            Disciplina => Disciplina.codigo === codigo);
    }

    inserirAlunoDisciplina(matricula, codigo){
        console.log(matricula, codigo);
        const alunoInserido = controladorAluno.servico.pesquisarPorMatricula(matricula);
        const disciplinaSelecionada = this.pesquisarPorCodigo(codigo);
        if(disciplinaSelecionada.length <= 0){
            throw new Error('Disciplina não existe!');
        }
        if(alunoInserido.length <= 0){
            throw new Error('Aluno não existe!');
        }
        if(!this.pesquisarMatriculaNaDisciplina(disciplinaSelecionada[0], alunoInserido)){
            return this.repositorio.inserirAlunoDisciplina(disciplinaSelecionada[0], alunoInserido);
        }else{
            throw new Error('Aluno já esta na disciplina!');
        }
    }

    listar(){
        return this.repositorio.listar();
    }

    pesquisarMatriculaNaDisciplina(disciplina, alunoProcurado){
        console.log(disciplina.alunos);
        if(disciplina.alunos){
            return disciplina.alunos.find((aluno) => aluno.matricula === alunoProcurado.matricula);
        }
    }

    remover(codigo) {
        const DisciplinaPesquisado = this.pesquisarPorCodigo(codigo);

        if (DisciplinaPesquisado.length <= 0) {throw new Error('Disciplina não existe');}

        this.repositorio.remover(codigo);
    }

    
    
    
}

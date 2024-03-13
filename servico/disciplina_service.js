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

    atualizar(nome, codigo){
        const DisciplinaPesquisado = this.pesquisarPorCodigo(codigo);
        if (DisciplinaPesquisado.length <= 0) {throw new Error('Disciplina não pode ser edita, pois ela não existe');}
        this.repositorio.atualizar(nome,codigo);
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorio.listar().filter(Disciplina => Disciplina.codigo === codigo);
    }

    inserirAlunoDisciplina(matricula, codigo){
        const alunoInserido = controladorAluno.servico.pesquisarPorMatricula(matricula)[0];
        const disciplinaSelecionada = this.pesquisarPorCodigo(codigo)[0];
        if(disciplinaSelecionada.length <= 0){
            throw new Error('Disciplina não existe!');
        }
        if(alunoInserido.length <= 0){
            throw new Error('Aluno não existe!');
        }
        if(!this.pesquisarMatriculaNaDisciplina(disciplinaSelecionada, alunoInserido)){
            return this.repositorio.inserirAlunoDisciplina(disciplinaSelecionada, alunoInserido);
        }else{
            throw new Error('Aluno já esta na disciplina!');
        }
    }

    removerAlunoDisciplina(matricula, codigo){
        const alunoInserido = controladorAluno.servico.pesquisarPorMatricula(matricula)[0];
        const disciplinaSelecionada = this.pesquisarPorCodigo(codigo)[0];
        if(disciplinaSelecionada.length <= 0){
            throw new Error('Disciplina não existe!');
        }
        if(alunoInserido.length <= 0){
            throw new Error('Aluno não existe!');
        }
        if(this.pesquisarMatriculaNaDisciplina(disciplinaSelecionada, alunoInserido)){
            return this.repositorio.removerAlunoDisciplina(disciplinaSelecionada, alunoInserido);
        }else{
            throw new Error('Aluno não esta na disciplina!');
        }
    }

    listar(){
        return this.repositorio.listar();
    }

    pesquisarMatriculaNaDisciplina(disciplina, alunoProcurado){
        console.log(disciplina.alunos);
        console.log(alunoProcurado);
        if(disciplina.alunos){
            return disciplina.alunos.find((aluno) => aluno.matricula === alunoProcurado.matricula);
        }
        return undefined; 
    }

    remover(codigo) {
        const DisciplinaPesquisado = this.pesquisarPorCodigo(codigo);

        if (DisciplinaPesquisado.length <= 0) {throw new Error('Disciplina não existe');}

        this.repositorio.remover(codigo);
    }

    
    
    
}

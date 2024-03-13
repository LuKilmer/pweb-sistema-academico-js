class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(nome, codigo) {
        const DisciplinaPesquisado = this.pesquisarPorCodigo(codigo);

        
        if (DisciplinaPesquisado.length > 0) {
            throw new Error('Disciplina já cadastrado!');
        }

        const DisciplinaNovo = new Disciplina(nome, codigo);
        this.repositorio.inserir(DisciplinaNovo);
        return DisciplinaNovo;
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorio.listar().filter(
            Disciplina => Disciplina.codigo === codigo);
    }
    InserirAluno(matricula, codigo){
        console.log(matricula, codigo);
        const alunoInserido = controlador.servico.pesquisarPorMatricula(matricula);
        const disciplinaSelecionada = this.pesquisarPorCodigo(codigo);
        if(disciplinaSelecionada.length <= 0){
            throw new Error('Disciplina não existe!');
        }
        if(alunoInserido.length > 0){
            this.repositorio.InserirAluno(disciplinaSelecionada[0], alunoInserido);
        }else{
            throw new Error('Alunio não existe!');
        }
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    
    
    
}

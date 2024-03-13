class Disciplina {
    constructor(nome, codigo) {
        this._nome = nome;
        this._codigo = codigo;
        this._alunos = [];
    }
    
    get alunos() {
        return this._alunos;
    }
    
    set nome(nome) {
        this._nome = nome;
    }

    get nome() {
        return this._nome;
    }

    set codigo(codigo) {
        this._codigo = codigo;
    }

    get codigo() {
        return this._codigo;
    }
   
}

class Disciplina{
    constructor(nome, codigo){
        this._nome = nome;
        this._codigo =codigo;
        this.alunos = [];
    }
    set nome(nome){
        this._nome = nome;
    } 

    get nome(){
        return this._nome;
    }
    tete(){
        console.log("ok")
    }
    set codigo(codigo){
        this._codigo = codigo;
    } 
    get codigo(){
        return this._codigo;
    }
     addAluno(aluno){
        this.alunos.push(aluno)
    }



    
}
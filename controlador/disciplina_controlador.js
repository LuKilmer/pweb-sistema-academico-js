class disciplinaControlador {
    constructor() {
        this.servico = new DisciplinaService();
    }

    inserir() {
        try{
            const nomeElemento = document.querySelector("#nome_disciplina");
            const codigoElemento = document.querySelector("#codigo_disciplina");
            const disciplinaInserida = this.servico.inserir(nomeElemento.value,  codigoElemento.value);
            const listaDisciplinasElemento = document.querySelector("#listaDisiciplina");
            if (disciplinaInserida) {
                this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinasElemento);
            }
        }catch(error){
            alert(error.message);
        }
    }

    atualizar(){
        try{
            const nomeElemento = document.querySelector("#nome_disciplina");
            const codigoElemento = document.querySelector("#codigo_disciplina");
            const disciplinaAtualizada = this.servico.atualizar(nomeElemento.value,  codigoElemento.value);
            this.atualizarDisciplinasNoHtml();
        }catch(error){
            alert(error.message);
        }
    }

    inserirAlunoDisciplina(){
        try{
            const matriculaElemento = document.querySelector("#matricula_ad");
            const codigoElemento = document.querySelector("#codigo_ad");
            const alunoInserido = this.servico.inserirAlunoDisciplina(matriculaElemento.value, codigoElemento.value);
            if(alunoInserido){
                this.atualizarDisciplinasNoHtml();
            }
            return alunoInserido;
        }catch(error){
            alert(error.message);
        }
    }

    removerAlunoDisciplina(){
        try{
            const matriculaElemento = document.querySelector("#matricula_ad");
            const codigoElemento = document.querySelector("#codigo_ad");
            const alunoInserido = this.servico.removerAlunoDisciplina(matriculaElemento.value, codigoElemento.value);
            if(alunoInserido){
                this.atualizarDisciplinasNoHtml();
            }
            return alunoInserido;
        }catch(error){
            alert(error.message);
        }
    }

    atualizarDisciplinasNoHtml(){
        try{
            const disciplinas = this.servico.listar();
            const listaDisciplinasElemento = document.querySelector("#listaDisiciplina");
            listaDisciplinasElemento.innerHTML = "";
            disciplinas.forEach(disciplina => {
                this.inserirDisciplinaNoHtml(disciplina, listaDisciplinasElemento);
            })
        }catch(error){
            alert(error.message);
        }
    }
    inserirAlunosNoHtmlDisciplina(disciplinaElemento, alunos){
        const listaAlunos = document.createElement("ul");
        alunos.forEach(aluno => {
            controladorAluno.inserirAlunoNoHtml(aluno, listaAlunos);
        });
        disciplinaElemento.appendChild(listaAlunos);
    }


    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        try{
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
            if(disciplina.alunos.length>0){
                this.inserirAlunosNoHtmlDisciplina(disciplinaElemento, disciplina.alunos);
            }
            elementoDestino.appendChild(disciplinaElemento);
        }catch(error){
            alert(error.message);
        }
    }

    removerDisciplinaDaLista(codigo){
        try{
            this.servico.remover(codigo);

        }catch(error){
            alert(error.message);
        }
    }

}

class No {
    constructor(value, prioridade) {
        this.value = value;
        this.prioridade = prioridade;
        this.proximo = null;
    }
  }

class List{
    constructor() {
        this.topo = null;
    }


    push(value, cor){

        let prioridade; 

        if(cor==="amarelo"){
            prioridade=1
        }else{
            prioridade=2
        }
        let novoNo = new No(value, prioridade);
  
        if (!this.topo || prioridade > this.topo.prioridade) {
          novoNo.proximo = this.topo;
          this.topo = novoNo;
      } else {
          let atual = this.topo;
          
          while (atual.proximo && prioridade <= atual.proximo.prioridade) {
              atual = atual.proximo;
          }
          novoNo.proximo = atual.proximo;
          atual.proximo = novoNo;
      }
    }
}
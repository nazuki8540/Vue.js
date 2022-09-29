<template>
  <div id="app">
    <h3>Cadastro:</h3>
    <input type="text" placeholder="nome" v-model="nomeField"><br>
    <small id="nomeErro" v-show="deuErro">O nome é invalido ! Tente novamente</small> <br>
    <input type="email" name="email" id="email" placeholder="email" v-model="emailField"><br>
    <input type="number" name="idade" id="idade" placeholder="idade" v-model="idadeField">
    <button @click="cadastrarUsuario">Cadastrar</button>
    <hr>
    
    <div v-for="(cliente,index) in clientes" :key="cliente.id">
      <h4>{{ index + 1}}</h4>
      <Cliente :cliente="cliente" @meDelete="deletarUsuario($event)"/>
    </div>
   
  </div>
</template>

<script>
import Cliente from './components/Cliente';
// import Produto from './components/Produto';
export default {
  name: 'App',
  data(){
    return{
      deuErro : false,
      nomeField: "",
      emailField: "",
      idadeField: 0,
      clientes: [
        {
          id: 2,
          nome:"matheus v",
          email: "amthedus@gam.acom",
          idade: 99
        }
      ]
    }
  },
  components: {
    Cliente,
    // Produto,
    // Produto
},
methods:{
  cadastrarUsuario: function(){
    if(this.nomeField == "" || this.nomeField == " " || this.nomeField.length < 3){
      this.deuErro = true;
    }else{

      this.clientes.push({nome: this.nomeField, email: this.emailField, idade: this.idadeField, id: Date.now()})
      this.nomeField= "",
      this.emailField= "",
      this.idade= 0;
      this.deuErro = false;
    }
  },
  deletarUsuario: function($event){
    console.log("receba!");
    var id = $event.idDoCliente;
    this.clientes.filter(cliente => cliente.id != id);
    this.clientes = novoArray;
  }
}
}
</script>

<style>
  #nomeErro{
    color: red;
  }
</style>

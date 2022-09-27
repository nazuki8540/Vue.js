<template>
  <div id="app">
    <input type="text" v-model="clienteVictor.nome">
    <Cliente :cliente="clienteVictor" :showIdade="true" />
    <Cliente :cliente="clienteVictor" :showIdade="false"/>
    <Cliente :cliente="clienteVictor" :showIdade="true" />
    <Cliente :cliente="clienteVictor" :showIdade="false"/>

    <Produto/>
    
   
  </div>
</template>

<script>
import Cliente from './components/Cliente';
// import Produto from './components/Produto';
export default {
  name: 'App',
  data(){
    return{
      nomeDoVictor: "Victor Lima",
      clienteVictor: {
        nome: "victor lima",
        email: "victor@gmail.com",
        idade: 2
      }
    }
  },
  components: {
    Cliente,
    // Produto,
    // Produto
}
}
</script>

<style>
</style>

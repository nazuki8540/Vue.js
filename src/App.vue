<template>
  <div id="app">
    <input type="text" v-model="clienteVictor.nome">
    
    <div v-for="(cliente,index) in clientes" :key="cliente.id">
      <h4>{{ index + 1}}</h4>
      <Cliente :cliente="cliente" />
      <hr>
      <h4>Edição:</h4>
      <input type="text" v-model="cliente.nome">
      <input type="text" v-model="cliente.email">
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
      nomeDoVictor: "Victor Lima",
      clienteVictor: {
        nome: "victor lima",
        email: "victor@gmail.com",
        idade: 2
      },
      clientes: [
        {
          id: 2,
          nome:"matheus v",
          email: "amthedus@gam.acom",
          idade: 99
        },
        {
          id: 5,
          nome:"matheus ghotme",
          email: "amtheus3@gam.acom",
          idade: 16
        },
        {
          id: 3,
          nome:"matheus voltz",
          email: "amth1eus@gam.acom",
          idade: 26
        },
        {
          id: 7,
          nome:"matheus voltzasda",
          email: "amtaheus@gam.acom",
          idade: 26
        }
      ]
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

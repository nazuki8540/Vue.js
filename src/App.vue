<template>
  <div id="app">
    <h1>Guia Clientes</h1>
    <Cliente :cliente="clienteVictor" />
    <Cliente nome="Matheus"  email="matheu2s@gmail.com" idade="2"/>
    <Cliente nome="Matheus"  email="mat2heus@gmail.com" idade="4"/>
    <Cliente nome="Matheus" email="mat22heus@gmail.com" idade="54"/>

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
      
      clienteVictor: {
        nome: "victor lima",
        email: "victor@gmail.com",
        idade: 99
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

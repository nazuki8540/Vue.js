<template>
  <div id="app">
    <h1>Guia Clientes</h1>
    <Cliente/>
    <Cliente/>
    <Cliente/>
    <Cliente/>
    <hr>
      <h4>Lista de Produtos!</h4>
    <hr>
    <Produto/>
    <Produto/>
    <Produto/>
  </div>
</template>

<script>
import Cliente from './components/Cliente';
import Produto from './components/Produto';
export default {
  name: 'App',
  components: {
    Cliente,
    Produto,
    Produto
}
}
</script>

<style>
</style>

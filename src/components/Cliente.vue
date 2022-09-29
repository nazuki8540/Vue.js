<template>
    <div :class="{'cliente': !isPremium,'cliente-premium': isPremium}">
       <h4>Nome: {{cliente.nome}}</h4>
       <hr>
       <p>Email: {{cliente.email | processarEmail }}</p>
       <p v-if="showIdade == true">Idade: {{cliente.idade}}</p>
       <p v-else>O usuario é burro</p>
       <button @click="mudarCor">Mudar cor!</button>
       <button @click="emitirEventoDelete">Deletar</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isPremium: false
        }
    },
    props: {
        cliente: Object,
        showIdade: Boolean
    },
    methods: {
        mudarCor: function(){
            this.isPremium = !this.isPremium;
        },
        emitirEventoDelete: function(){
            console.log("emitindo do filho");
            this.$emit("meDelete",{idDoCliente: this.cliente.id,curso: "formação Node.js",emPromocao: true, component: this});
        }
    },
    filters: {
        processarEmail: function(value){
            return value.toUpperCase();
        }
    }
}
</script>

<style scoped>
    .cliente {
        background-color: #ECE5E3;
        color: green;
        max-width: 600px;
        height: 180px;
        padding: 1%;
        margin-top: 2%;
    }
    
    .cliente-premium{
        background-color: black;
        color: yellow;
        max-width: 600px;
        height: 180px;
        padding: 1%;
        margin-top: 2%;
    }
    
</style>
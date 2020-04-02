<template>
<div>
    <h1>{{name}}</h1>
     <input v-model="name" />
    <button @click="onClick
    ">

    </button>

</div>
</template>


<script>

  export default {
      data() {
      return{
          name:"About me Treek"
      }
      },

      methods: {
          onClick(){
              alert(this.name)
          }
      }
  }

</script>


<style>


</style>
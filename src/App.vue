<template>
  <navbar></navbar>  
  <br/>
  <br/>
  <router-view/>  
</template>

<script>
import navbar from '@/components/navbar'
export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css');
#app {
  font-family: Bahnschrift;
  text-align: center;
  color: #311B92;
  margin-top: 60px;
  background-color: #EBE8E7;
}
</style>

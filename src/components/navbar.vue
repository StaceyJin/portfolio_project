<template>
  <nav class="main-nav">
    <router-link :to="{ name: 'Home'}">Home</router-link>
    <router-link :to="{ name: 'AboutMe'}">About Me</router-link>
    <router-link :to="{ name: 'Skills'}">Skills & Employment</router-link>
    <router-link :to="{ name: 'NewlyAcquired'}">Newly Acquired</router-link>
    <router-link :to="{ name: 'Contact'}">Contact</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
.main-nav {
    text-align: center;
    margin:auto;
    font-size: larger;
}
.main-nav a{
    display:inline-block;
    text-decoration: none;
    margin: 0 30px;
    color:#311B92;
}
a.router-link-active {
    border-bottom: 2px solid;
    padding-bottom: 4px;
    color:#311B92;
}
</style>
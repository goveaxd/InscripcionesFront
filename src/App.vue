<template>
  <div id="app">

    <session v-if="contenInSession()==false"></session>
    <navbar v-if="contenInSession()"></navbar>
    <router-view v-if="contenInSession()"/>
    
  </div>
 
</template>

<script>

import navbar from '@/components/navbar'
import session from '@/components/sesion'
export default {
  name: 'App',
  components: {
   navbar,session
  },
   methods:{
      contenInSession(){
        const dataUser=JSON.parse(localStorage.dataUser);
        alert(dataUser.password);
        try{
        if(dataUser.length>0)return true
        }catch{}
        return false;
      }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#navbar{
  margin-top: -60px;
  background-color: #1D2F62;
}
</style>

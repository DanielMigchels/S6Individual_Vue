  
<template>
  <div class="Login">
    <loginComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import loginComponent from '@/components/Login.vue'
export default {
  name: 'Login',
  components: {
    loginComponent
  }
}
</script>
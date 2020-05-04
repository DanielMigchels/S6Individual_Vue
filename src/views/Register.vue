<template>
  <div class="Register">
    <registerComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import registerComponent from '@/components/Register.vue'
export default {
  name: 'Register',
  components: {
    registerComponent
  }
}
</script>
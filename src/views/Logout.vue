<template>
  <div class="logout">
      <p>You're being logged out.</p>
  </div>
</template>

<script>
import { userService } from '../services/user.service.js';
export default {
    data () {
        return {
            user: {}
        }
    },
    created () {
        userService.logout();
        setTimeout(function(){ window.location.href = "/" }, 1500);
        
    }
};
</script>

<style>
.logout {
    text-align: center;
}
</style>
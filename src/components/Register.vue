<template>
  <div class="registerComponent">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <div class="card rounded-0">
            <div class="card-header">
              <h4 class="mb-0">Sign up</h4>
            </div>
            <div class="card-body">
              <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label>Username</label>
                <input class="form-control form-control rounded-0" v-model="username" :class="{ 'is-invalid': submitted && !username }" />
                <div v-show="submitted && !username">Oops, you missed this one.</div>
              </div>
              <div class="form-group">
                <label>Password</label>
                <input class="form-control form-control rounded-0" type="password" v-model="password" :class="{ 'is-invalid': submitted && !password }"/>                  
                <div v-show="submitted && !password">Enter your password too!</div>
              </div>
              <button type="submit" class="btn btn-primary float-right" id="btnRegister">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userService } from '../services/user.service.js';
export default {
    data () {
        return {
            username: '',
            password: '',
            submitted: false,
            loading: false
        }
    },
    created () {
        // reset login status
        userService.logout();
    },
    methods: {
        handleSubmit () {
            const { username, password } = this;
            if (!(username && password)) {
                alert("Please enter a username & password.")
                return;
            }
            userService.register(username, password).then(
                    data => { // eslint-disable-line no-unused-vars
                        window.location.href = '/';
                    },
                    error => {
                        alert(error);
                    }
                );
        }
    }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
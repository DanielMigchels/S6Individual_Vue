<template>
  <div class="loginComponent">
    <div class="container">
      <div class="row">
        <div class="col-md-5 mx-auto">
          <div class="card rounded-0">
            <div class="card-header">
                <h4 class="mb-0">Sign in</h4>
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
                <button type="submit" class="btn btn-primary float-right" id="btnLogin">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userService } from '@/services/user.service.js';

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
        userService.logout();
    },
    methods: {
        handleSubmit () {
            const { username, password } = this;
            if (!(username && password)) {
                alert("Please enter a username & password.")
                return;
            }
            this.loading = true;
            userService.login(username, password).then(
                    data => {
                        localStorage.setItem('jwt', JSON.stringify(data.jwt));
                        window.location.href = '/dashboard';
                    },
                    error => {
                        alert(error);
                    }
                );
        }
    }
};
</script>

<style scoped>
</style>
<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="/">Monitor</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item" v-if="jwt">
            <a class="nav-link" href="/dashboard" v-if="jwt">Dashboard</a>
          </li>
        </ul>
        <ul class="navbar-nav navbar-left">
          <li class="nav-item" v-if="!jwt">
            <a class="nav-link" href="/login">Sign in<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item" v-if="!jwt">
            <a class="nav-link" href="/register">Sign up</a>
          </li>
          <li class="nav-item" v-if="jwt">
            <a class="nav-link" v-if="jwt" href="/logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="mt-5">
      <router-view/>
    </div>
     </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  /* width */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 4px #111; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #303030; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #303030; 
}
</style>

<script>
export default {
    data () {
        return {
            jwt: {}
        }
    },
    created () {
      this.jwt = JSON.parse(localStorage.getItem('jwt'));
    }
};
</script>
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Vue Front-End</h1>
    <center>
      <table style="width:20%">
        <tr>
          <td>Front-End</td>
          <td>1.0.0.0</td>
        </tr>
        <tr>
          <td>Back-End</td>
          <td>{{version}}</td>
        </tr>
      </table>
    </center>
  
  </div>
</template>

<script>
  import { versionService } from '../services/version.service.js'
  
  export default {
    data() {
      return {
            version: "Unknown"
        }
    },
    created() {
      versionService.GetVersion().then(data => this.version = data.Data.Version);
    },
    methods: {}
  };
</script>

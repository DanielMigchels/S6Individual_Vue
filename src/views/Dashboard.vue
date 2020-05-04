<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
  
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

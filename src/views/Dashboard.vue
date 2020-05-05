<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jwt: {}
    };
  },
  created() {
    this.jwt = JSON.parse(localStorage.getItem("jwt"));
    if (this.jwt == null) {
      window.location.href = "/login";
    }
  },
  methods: {}
};
</script>

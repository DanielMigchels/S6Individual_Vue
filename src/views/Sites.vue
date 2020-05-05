<template>
  <div class="sites">
    <div class="container mb-5">
      <h1>Sites</h1>
      <div class="row">
        <div class="container col-lg-8">
          <table v-if="site[0]" class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Domain</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr
                scope="row"
                v-for="(item) in site.slice(page * pageSize, (page + 1) * pageSize)"
                v-bind:key="item.id"
              >
                <td>{{item.id}}</td>
                <td>{{item.domainName}}</td>
                <td>{{item.created}}</td>
              </tr>
            </tbody>
          </table>
          <div class="row">
            <div v-if="site[0] && (0 < Math.ceil(this.site.length / this.pageSize) - 1) " class="col-sm-6 float-left mb-5">
              <button class="btn btn-secondary mr-1" id="btnPrevious" @click="Previous()">Previous</button>
              <button class="btn btn-primary mr-1" id="btnNext" @click="Next()">Next</button>

              <span>Page {{ page+1 }} out of {{ Math.ceil(site.length / pageSize) }}</span>
            </div>
          </div>
        </div>

        <div class="container col-lg-4">
          <div class="mx-auto">
            <div class="card rounded-0">
              <div class="card-header">
                <h4 class="mb-0">Add Site</h4>
              </div>
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label>Domain</label>
                    <input class="form-control form-control rounded-0" v-model="domain" />
                  </div>
                  <button
                    class="btn btn-primary float-right"
                    @click="AddSite()"
                  >Add Site</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { siteService } from "../services/site.service.js";

export default {
  data() {
    return {
      jwt: {},
      site: [],
      page: 0,
      pageSize: 10,
      domain: ""
    };
  },
  created() {
    this.jwt = JSON.parse(localStorage.getItem("jwt"));
    if (this.jwt == null) {
      window.location.href = "/login";
    }

    siteService.get().then(site => (this.site = site));
  },
  methods: {
    Next() {
      if (this.page < Math.ceil(this.site.length / this.pageSize) - 1) {
        this.page++;
      }
    },
    Previous() {
      if (this.page > 0) {
        this.page--;
      }
    },
    AddSite() {
      if (this.domain != "") {
        siteService.add(this.domain).then(
          data => {// eslint-disable-line no-unused-vars
            siteService.get().then(site => {
              this.site = site;
            });
          }
        );
      } 
      else {
        alert("Please enter a domain.");
      }
    }
  }
};
</script>

<template>
<div>
    <b-jumbotron
       class="accent" 
       :header="this.$config.name"
       header-level="3"
       :lead="this.$config.description" > 
      <RequestForm />
      <a href="https://nasa.gov">
        <img src="../assets/nasa_logo.png" width="100" fluid alt="NASA Logo" />
      </a> 
    </b-jumbotron>
    <div class="container" v-if="hasResults" >
      <div class="alert alert-primary" role="alert">
         <strong>Wow! NASA has found some asteroids approaching to Earth</strong>
      </div>
      <ResultBox />
    </div>
    <div class="footer">
    <ul>
      <li><a href="https://vuejs.org" target="_blank">VueJS Docs</a></li>
      <li><a href="https://api.nasa.gov/api.html" target="_blank">NASA Open APIs</a></li>
      <li><a href="https://circleci.com" target="_blank">CircleCI</a></li>
    </ul>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import RequestForm from "@/components/RequestForm.vue";
import ResultBox from "@/components/ResultBox.vue";

export default {
  name: "home",
  computed: {
    hasResults() {
      return this.$store.getters.counter;
    }
  },
  components: {
    RequestForm,
    ResultBox
  }
};
</script>

<style>
.accent {
  text-align: center;
  background-color: #02779e !important;
  color: #fff !important;
  border-radius: 0px !important;
}

.footer {
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>


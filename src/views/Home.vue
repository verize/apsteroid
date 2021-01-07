<template>
  <div>
    <b-jumbotron
      class="accent"
      :header="this.$config.name"
      header-level="3"
      :lead="this.$config.description"
    >
      <RequestForm />
      <a href="https://nasa.gov">
        <img src="../assets/nasa_logo.png" width="100" fluid alt="NASA Logo" />
      </a>
    </b-jumbotron>
    <div class="container" v-if="hasError">
      <div class="alert alert-danger" role="alert">
        <strong
          >Ops! An error ocurred getting data from NASA servers... please try
          again or wait a moment!</strong
        >
      </div>
    </div>

    <div class="container" v-if="hasResults">
      <div class="alert alert-primary" role="alert">
        <strong
          >Wow! NASA has found {{ hasResults }} asteroids approaching to
          Earth</strong
        >
      </div>

      <ResultBox />
    </div>
    <div class="footer">
      <ul>
        <li>
          <a title="Vuejs Docs" href="https://vuejs.org" target="_blank"
            >VueJS Docs</a
          >
        </li>
        <li>
          <a
            title="NASA Open APIs"
            href="https://api.nasa.gov/#browseAPI"
            target="_blank"
            >NASA Open APIs</a
          >
        </li>
        <li>
          <a title="Verize" href="https://verize.com" target="_blank">Verize</a>
        </li>
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
    },
    hasError() {
      return this.$store.getters.requestError;
    },
  },
  components: {
    RequestForm,
    ResultBox,
  },
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


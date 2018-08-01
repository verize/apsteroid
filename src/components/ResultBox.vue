<template>
<div class="results">
  <div v-for="(date, index) in results" v-bind:key="index" class="date">
    <b-card  v-for="asteroid in date"
             class="mb-4" 
             v-bind:key="asteroid.neo_reference_id"
             :title="'Name: ' + asteroid.name + ' - ' + asteroid.neo_reference_id"
             :header="'Close approach at ' + asteroid.close_approach_data[0].close_approach_date"
             :sub-title="isDangerous(asteroid.is_potentially_hazardous_asteroid)">
          <p class="card-text">
              <pre>{{ asteroid | pretty }}</pre>
          </p>
          <a :href="asteroid.nasa_jpl_url" target="_blank" class="btn btn-sm btn-info">Details</a>
    </b-card> 
  </div>
</div>
   
</template>

<script>
export default {
  name: "ResultBox",
  computed: {
    results() {
      return this.$store.state.results;
    }
  },
  methods: {
    isDangerous(danger) {
      if (danger) {
        return "<span class='badge badge-danger'>IS DANGEROUS!!</span>";
      } else {
        return "<span class='badge badge-success'>IS SAFE!</span>";
      }
    }
  }
};
</script>

<style scoped>
.results {
  text-align: left;
  color: black;
}
</style>

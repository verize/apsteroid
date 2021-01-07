<template>
<div class="results">
  <div v-for="(date, index) in results" v-bind:key="index" class="date">
    <b-card v-for="asteroid in date"
             class="mb-4" 
             v-bind:key="asteroid.neo_reference_id"
             :title="'Asteroid name: ' + asteroid.name + ' - ' + asteroid.neo_reference_id"
             :header="'Close approach at ' + asteroid.close_approach_data[0].close_approach_date_full"
            >
          <p class="card-text">
            <b-badge variant="danger" v-if="asteroid.is_potentially_hazardous_asteroid">Is Dangerous!</b-badge>
          </p>
          <p class="card-text">
              <pre>{{ asteroid }}</pre>
          </p>
          <a :href="asteroid.nasa_jpl_url" target="_blank" class="btn btn-sm btn-primary mr-2">Details</a>
          <a :href="asteroid.nasa_jpl_url + ';old=0;orb=1;cov=0;log=0;cad=0#orb'" target="_blank" class="btn btn-sm btn-info">View Orbit Graph</a>
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
    },
  },
};
</script>

<style scoped>
.results {
  text-align: left;
  color: black;
}
</style>

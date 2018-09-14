<template>
  <div class="lookup-form">
      <b-form class="justify-content-center" inline>
        <b-form-row>
          <b-input-group>
          <datepicker v-model="fromDate"
                      input-class="form-control custom-datepicker"
                      calendar-class="custom-datepicker"
                      wrapper-class="custom-datepicker" 
                      :value="new Date()"
                      placeholder="Please select a date" 
                      name="fromDate"
                      format="yyyy-MM-dd"
                      bootstrap-styling
                      maximum-view="day" 
                      required />
          <b-input-group-append>
            <b-btn type="button" 
                  @click="getResults" 
                  variant="success"><b>Check!</b>
            </b-btn>
          </b-input-group-append>
        </b-input-group>
        </b-form-row>
      </b-form>
  </div>
</template>

<script>
import axios from "axios";
import Datepicker from "vuejs-datepicker";
import moment from "moment";

export default {
  name: "RequestForm",
  data() {
    return {
      fromDate: null
    };
  },
  mounted() {
    this.fromDate = new Date();
  },
  computed: {},
  methods: {
    getResults() {
      this.$store.dispatch("setFromDate", this.fromDate).then(() => {
        console.log("getting asteroids from " + this.fromDate);
        axios
          .get(this.$config.api_endpoint, {
            params: {
              start_date: moment(this.fromDate).format("YYYY-MM-DD"),
              end_date: moment(this.fromDate).format("YYYY-MM-DD"),
              api_key: this.$config.api_key
            }
          })
          .then(response => {
            this.$store.dispatch(
              "setResults",
              response.data.near_earth_objects
            );
          })
          .catch(e => {
            console.log(e);
          });
      });
    }
  },
  components: {
    Datepicker
  }
};
</script>

<style scoped>
.lookup-form {
  margin: 15px 0px 15px 0px;
}
.custom-datepicker {
  color: #232323 !important;
}
</style>

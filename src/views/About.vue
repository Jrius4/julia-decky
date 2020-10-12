<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h5>{{ pong }}</h5>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
export default Vue.extend({
  name: "About",
  mounted() {
    this.hey();
  },
  computed: {
    ...mapState({
      pong: (state: any) => state.pingModule.pong
    })
  },
  methods: {
    hey() {
      this.$store.dispatch("pingModule/GET_PING_ACTION");
    }
  }
});
</script>

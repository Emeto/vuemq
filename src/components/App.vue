<template>
  <div>
    <Transcript />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Transcript from "./Transcript.vue";

export default Vue.extend({
  name: 'App',
  components: {
    Transcript
  },
  created() {
    this.$publisher.sendMessage('Hi there !');
  }
});
</script>

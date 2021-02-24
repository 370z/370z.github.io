<template>
  <div id="demo2">
    <h1>Demo2</h1>
    <button v-on:click="clickMe">ClickMe</button> <br />
    <button @click="clickMe2('Welacome to Guerriers Web')">ClickMe2</button>
    <h3>{{ getTimestamp() }}</h3>
  </div>
</template>

<script>
export default {
  name: "Demo2",
  mounted() {
    this.initail();
  },
  methods: {
    initail() {
      console.log("Initialization");
    },
    clickMe() {
      alert("Hi");
    },
    clickMe2(message) {
      alert(message);
    },
    getTimestamp() {
      return Date();
    },
  },
};
</script>

<style></style>

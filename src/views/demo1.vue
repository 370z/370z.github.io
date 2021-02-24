<template>
  <div class="demo1">
    <h1>Demo1</h1>
    <!-- MVVM -->
    <input v-model="message" type="text" placeholder="Enter your message" />
    <div>{{ message }}</div>
    <br />
    <button @click="message = ''">Reset</button>
  </div>
</template>

<script>
export default {
  name: "Demo1",
  data() {
    return {
      message: "",
    };
  },
};
</script>

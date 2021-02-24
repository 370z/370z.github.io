<template>
  <div id="demo3">
    <h1>Demo 3</h1>
    <button
      @click="
        count++;
        isLogged = true;
      "
    >
      Count++
    </button>
    <span>{{ count }}</span> <br />
    <button @click="count = ''; isLogged = false">Reset</button>
    <div>{{ message }}</div>
    <div>{{ isLogged }}</div>
    <input type="text" placeholder="Enter a message" v-model="message" />
    <button @click="message = ''">Reset</button>
    <h2 v-if="isLogged">Yahoo</h2>
    <div>{{ account }}{{ account.username }} {{ account.password }}</div>
    <div>{{ courses }} {{ courses[2] }}</div>
    <ul>
      <li class="content" v-for="(item, index) in courses" :key="index">
        {{ index + 1 }}.{{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Demo3",
  mounted() {
    this.message = "Guerriers";
  },
  data() {
    return {
      count: 0,
      message: "",
      isLogged: false,
      //   เก็บข้อมูลแบบ array
      account: {
        username: "admin",
        password: "1234",
      },
      courses: ["Angular", "Vue", "React", "Fluter"],
    };
  },
};
</script>

<style scoped>
/* li {
  color: red;
} */
</style>


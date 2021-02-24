<template>
  <div id="demo5">
    <h1>Demo5</h1>
    <img
      src="https://www.flaticon.com/svg/vstatic/svg/731/731985.svg?token=exp=1614099259~hmac=1d797a55bf43356a5f19e0c475d81a40 "
      height="50"
      width="50"
    />
    <img v-bind:src="imageUrl" v-bind:height="height" v-bind:width="width" />
    <br />
    <a v-bind:href="link">My Website</a>
    <br />
    <!-- Shortcut ตัด v-bind ออก -->
    <a :href="link">My Website</a>
    <div :class="[error, important]">Guerrierssssss</div>
    <div :class="[false ? error : '', important]">Guerrierssssss</div>
    <div :style="{ color, fontSize }">Binding Style</div>
    <div :style="styleObj">Binding Style Obj</div>
    <div :style="isActive ? styleObj : ''">Binding Style Obj</div>
    <button @click="isActive = !isActive">ToggleActive</button>
  </div>
</template>

<script>
export default {
  name: "Demo5",
  data() {
    return {
      imageUrl:
        "https://www.flaticon.com/svg/vstatic/svg/731/731985.svg?token=exp=1614099259~hmac=1d797a55bf43356a5f19e0c475d81a40",
      height: 70,
      width: 70,
      link: "https://www.guerriers.github.io",
      error: "error_class",
      important: "important",
      color: "green",
      fontSize: "30px",
      styleObj: {
        backgroundColor: "yellow",
        color: "green",
      },
      isActive: false,
    };
  },
};
</script>

<style>
.error_class {
  background: red;
  color: white;
}
.important {
  font-weight: 900;
}
</style>
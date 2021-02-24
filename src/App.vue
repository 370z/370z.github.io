<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/"><button>Home</button></router-link>
      </li>
      <li>
        <router-link to="/demo1"><button>Demo1 Intro</button></router-link>
      </li>
      <li>
        <router-link to="/demo2"><button>Demo2 Event</button></router-link>
      </li>
      <li>
        <router-link to="/demo3"><button>Demo3 Data</button></router-link>
      </li>
      <li>
        <router-link to="/demo4"><button>Demo4 Compute</button></router-link>
      </li>
      <li>
        <router-link to="/demo5"><button>Demo5 Binding</button></router-link>
      </li>
      <li>
        <router-link to="/demo6"
          ><button>Demo6 Form & v-model</button></router-link
        >
      </li>
      <!-- test -->
    </ul>
    <router-view></router-view>
    <!-- <span class="title">123</span> -->
  </div>
</template>
<script>
export default {
  name: "app",
};
</script>

// ! ใส่ scoped เพื่อตั้งขอบเขตให้เปลี่ยนแปลงเฉพาะหน้านี้ ไม่นับหน้าที่
router-link
<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  display: inline;
  margin-right: 8px;
}
.title {
  font-size: 30px;
}
</style>

<style>
.content {
  color: violet;
}
</style>

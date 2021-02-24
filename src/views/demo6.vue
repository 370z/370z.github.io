<template>
  <div id="demo6">
    <h1>Demo6</h1>
    <form v-on:submit.prevent="submit">
      <!-- firstname -->
      <div>
        <label for="first_name">Firstname: </label>
        <input
          type="text"
          name="first_name"
          v-model.trim="applicant.first_name"
        />
        <!-- .trim = ทำให้ไม่นับ Spacebar -->
      </div>

      <!-- Lastname -->
      <div>
        <label for="last_name">Lastname: </label>
        <input
          type="text"
          name="last_name"
          v-model.trim="applicant.last_name"
        />
        <!-- .trim = ทำให้ไม่นับ Spacebar -->
        <!-- .lazy = ไม่อัพเดตข้อมูลจนกว่าจะ enter หรือเปลี่ยนโฟกัส -->
      </div>

      <!-- sex -->
      <div>
        <label for="sex">Male</label>
        <input type="radio" name="sex" value="male" v-model="applicant.sex" />

        <label for="female">Female</label>
        <input type="radio" name="sex" value="female" v-model="applicant.sex" />
      </div>

      <!-- age -->
      <div>
        <label for="age">Age</label>
        <input type="number" name="age" v-model.number="applicant.age" />

        <!-- .number คือแปลง string เป็น int -->
      </div>

      <!-- courses -->
      <div>
        <select name="coueses" v-model="applicant.courses">
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">Vue</option>
        </select>
      </div>

      <!-- button -->
      <button type="button" @click.exact="clear" @click.alt="useDefault">
        Clear
      </button>
      <!-- .exact คือ ทำให้ใส่ @click สองอันได้ 
      @click.alt="useDefault" คือ shortkey กด altค้างแล้วคลิกปุ่ม 
      -->
      <button type="submit">Submit</button>
    </form>

    <div style="margin-top: 16px; color: red">
      #Spy {{ JSON.stringify(applicant) }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo6",
  data() {
    return {
      applicant: {
        first_name: "",
        last_name: "",
        sex: "male",
        age: "",
        courses: "react",
      },
    };
  },
  methods: {
    submit() {
      //   event.preventDefault();

      alert(JSON.stringify(this.applicant));
    },
    clear() {
      this.applicant = {
        first_name: "",
        last_name: "",
        sex: "male",
        age: "",
        courses: "react",
      };
    },
    useDefault() {
      this.applicant = {
        first_name: "UNKNOW",
        last_name: "UNKNOW",
        sex: "male",
        age: "",
        courses: "react",
      };
    },
  },
};
</script>

<style></style>

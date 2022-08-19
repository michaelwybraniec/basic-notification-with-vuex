<template>
  <div class="hello">
    <h1>Notification Example</h1>
    <button @click="showError">Show Error Notfication</button>
    <button @click="showSuccess">Show Success Notfication</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["showNotification"]),
    async showSuccess() {
      await this.showNotification({
        notificationMessage: "I am success",
        notificationType: "success",
      });
      console.log(
        "this will continue after succcess notification is dismissed"
      );
    },
    async showError() {
      await this.showNotification({
        notificationMessage: "I am error",
        notificationType: "error",
      });
      console.log(
        "this will continue after succcess notification is dismissed"
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

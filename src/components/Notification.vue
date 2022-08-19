<template>
  <h3 v-if="showNotification" :class="[`notification--${notificationType}`]">
    {{ notificationMessage }}
  </h3>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    notificationMessageProps: {
      type: String,
      notificationTypeProps: {
        type: String,
      },
    },
  },
  computed: {
    ...mapGetters(["notificationMessage", "notificationType"]),
    showNotification() {
      return !!this.notificationMessage;
    },
  },
};
</script>

<style>
.notification--success {
  color: green;
  padding: 10px;
}
.notification--error {
  color: red;
  padding: 10px;
}
</style>

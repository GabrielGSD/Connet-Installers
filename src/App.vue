<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  created() {
    try {
      var e = localStorage.getItem("e");
      if (isNullOrUndefined(e)) {
      this.$router.push("/Login")
      localStorage.setItem("makeLogin", false);
    }
    } catch (error) {
      this.$router.push("/Login")
    }
  },
})
</script>

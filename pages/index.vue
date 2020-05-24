<template>
  <Login />
</template>

<script>
import { getflowlist } from "@/common/api/flow";
import Login from "@/components/Login";
export default {
  components: {
    Login
  },
  asyncData() {
    console.log("登录页面-asyncData");
    getflowlist({ currentPage: 1, pageSize: 10 }).then(res => {
      console.log("res", res);
    });
  },
  fetch({ redirect }) {
    console.log("登录页面-fetch");
    //redirect("/login");
  },
  mounted() {
    console.log("登录页面-mounted");
    console.log("__ENV", process.env.NODE_ENV);
  }
};
</script>

<style scoped lang="scss">
</style>

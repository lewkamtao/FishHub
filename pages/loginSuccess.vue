<style lang="scss" scoped>
.form {
  width: 300px;
  margin: 0 auto;
  padding: 100px 0px 250px 0px;
  input {
    width: 100%;
  }
}
</style>

<template>
  <div></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "#imports";
import util from "../util/index";

const route: any = useRoute();
const router: any = useRouter();
const token = useCookie("token")
if (route.query.token) {
  token.value = route.query.token;
}

onMounted(() => {
  router.push("/");
  util.addAlert({
    type: "success",
    text: "登录成功！",
  });
});
</script>

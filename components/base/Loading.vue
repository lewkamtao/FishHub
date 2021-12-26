<template></template>

<script setup lang="ts">
const start = () => {
  console.log(1);
  if (process.browser) {
    var geek_main = document.getElementById("geek_main");
    if (geek_main) {
      geek_main.classList.add("isGeekMainLoading");
    }
  }
};
const finish = () => {
  if (process.browser) {
    setTimeout(function () {
      var geek_main = document.getElementById("geek_main");
      if (geek_main) {
        geek_main.classList.remove("isGeekMainLoading");
      }
    }, 100);
  }
};
</script>

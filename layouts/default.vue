<style lang="scss" scoped></style>

<template>
  <div>
    <the-header></the-header>
    <div class="wrapper row margin-none">
      <div class="sm-12 md-8 col">
        <slot />
        <hr class="padding" />
      </div>
      <the-sidebar></the-sidebar>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script setup>
// your setup script
</script>

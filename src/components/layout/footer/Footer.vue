<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 footer-copyright text-center">
          <p class="mb-0">
            Copyright <span class="year-update">{{ getCurrentYear() }}</span> © Cuba Theme By Pixelstrap
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
function getCurrentYear() {
  return new Date().getFullYear();
}
</script>

<style scoped></style>

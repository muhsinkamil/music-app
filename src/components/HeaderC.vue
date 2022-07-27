<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex items-center justify-start py-5 px-4">
      <!-- App Name -->
      <a class="mr-4 text-2xl font-bold uppercase text-white" href="#">Music</a>

      <div class="flex flex-grow items-center justify-end">
        <!-- Primary Navigation -->
        <ul class="mt-1 flex flex-row">
          <!-- Navigation Links -->
          <li>
            <a class="px-2 text-white" href="#" @click="toggleAuthModal"
              >Login / Register</a
            >
          </li>
          <li>
            <a class="px-2 text-white" href="#">Manage</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "AppHeader",
  methods: {
    ...mapMutations(["toggleAuthModal"]),
  },
};
</script>

<style></style>

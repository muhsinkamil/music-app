<template>
  <!-- Auth Modal -->
  <div
    class="fixed inset-0 z-10 overflow-y-auto"
    id="modal"
    :class="{ hidden: !isAuthModalOpen }"
  >
    <div
      class="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 transition-opacity"
        @click="toggleAuthModal"
        v-on:keydown="toggleAuthModal"
      >
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:h-screen sm:align-middle"
        >&#8203;</span
      >

      <div
        class="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
      >
        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 px-6 text-left">
          <!--Title-->
          <div class="flex items-center justify-between pb-4">
            <p class="text-2xl font-bold">Your Account</p>
            <!-- Modal Close Button -->
            <div class="modal-close z-50 cursor-pointer">
              <i class="fas fa-times"></i>
            </div>
          </div>

          <!-- Tabs -->
          <ul class="mb-4 flex flex-wrap">
            <li
              class="flex-auto text-center"
              @click="setActiveTab('login')"
              v-on:keydown="setActiveTab('login')"
            >
              <a
                class="block rounded py-3 px-4 transition"
                href="#"
                :class="[activeTab === 'login' ? activeTabClass : '']"
                >Login</a
              >
            </li>
            <li
              class="flex-auto text-center"
              @click="setActiveTab('register')"
              v-on:keydown="setActiveTab('register')"
            >
              <a
                class="block rounded py-3 px-4 transition"
                href="#"
                :class="[activeTab === 'register' ? activeTabClass : '']"
                >Register</a
              >
            </li>
          </ul>

          <!-- Login Form -->
          <form v-if="activeTab === 'login'">
            <!-- Email -->
            <div class="mb-3">
              <label class="mb-2 inline-block" for="email">
                Email
                <input
                  type="email"
                  class="block w-full rounded border border-gray-300 py-1.5 px-3 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
                  placeholder="Enter Email"
                />
              </label>
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label class="mb-2 inline-block" for="password">
                Password
                <input
                  type="password"
                  class="block w-full rounded border border-gray-300 py-1.5 px-3 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
                  placeholder="Password"
                />
              </label>
            </div>
            <button
              type="submit"
              class="block w-full rounded bg-purple-600 py-1.5 px-3 text-white transition hover:bg-purple-700"
            >
              Submit
            </button>
          </form>
          <!-- Registration Form -->
          <form v-if="activeTab === 'register'">
            <!-- Name -->
            <div class="mb-3">
              <label class="mb-2 inline-block" for="name">
                Name
                <input
                  type="text"
                  class="block w-full rounded border border-gray-300 py-1.5 px-3 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
                  placeholder="Enter Name"
                />
              </label>
            </div>
            <!-- Email -->
            <div class="mb-3">
              <label class="mb-2 inline-block" for="email">
                Email
                <input
                  type="email"
                  class="block w-full rounded border border-gray-300 py-1.5 px-3 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
                  placeholder="Enter Email"
                />
              </label>
            </div>
            <!-- Age -->
            <div class="mb-3">
              <label class="mb-2 inline-block" for="age">
                Age
                <input
                  type="number"
                  class="block w-full rounded border border-gray-300 py-1.5 px-3 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
                />
              </label>
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label class="mb-2 inline-block" for="password">
                Password
                <input
                  type="password"
                  class="block w-full rounded border border-gray-300 py-1.5 px-3 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
                  placeholder="Password"
                />
              </label>
            </div>
            <!-- Confirm Password -->
            <div class="mb-3">
              <label class="mb-2 inline-block" for="confirmPassword">
                Confirm Password
                <input
                  type="password"
                  class="block w-full rounded border border-gray-300 py-1.5 px-3 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
                  placeholder="Confirm Password"
                />
              </label>
            </div>
            <!-- Country -->
            <div class="mb-3">
              <label class="mb-2 inline-block" for="country">
                Country
                <select
                  class="block w-full rounded border border-gray-300 py-1.5 px-3 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
                >
                  <option value="USA">USA</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Germany">Germany</option>
                </select>
              </label>
            </div>
            <!-- TOS -->
            <div class="mb-3 pl-6">
              <label class="inline-block" for="terms">
                <input
                  type="checkbox"
                  class="float-left -ml-6 mt-1 h-4 w-4 rounded"
                />
                Accept terms of service</label
              >
            </div>
            <button
              type="submit"
              class="block w-full rounded bg-purple-600 py-1.5 px-3 text-white transition hover:bg-purple-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "AuthModal",
  data() {
    return {
      activeTab: "login",
    };
  },
  methods: {
    setActiveTab(selectedTab) {
      this.activeTab = selectedTab;
    },
  },
  computed: {
    ...mapState(["isAuthModalOpen"]),
    ...mapMutations(["toggleAuthModal"]),
    activeTabClass() {
      return {
        "bg-blue-600": true,
        "text-white": true,
      };
    },
  },
};
</script>

<style></style>

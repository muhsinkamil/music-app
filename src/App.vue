<template>
  <AppHeader />
  <!-- Introduction -->
  <section class="relative mb-8 py-20 text-center text-white">
    <div
      class="introduction-bg absolute inset-0 h-full w-full bg-contain"
      style="background-image: url(assets/img/header.png)"
    ></div>
    <div class="container mx-auto">
      <div class="main-header-content text-white">
        <h1 class="mb-5 text-5xl font-bold">Listen to Great Music!</h1>
        <p class="mx-auto w-full md:w-8/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et
          dolor mollis, congue augue non, venenatis elit. Nunc justo eros,
          suscipit ac aliquet imperdiet, venenatis et sapien. Duis sed magna
          pulvinar, fringilla lorem eget, ullamcorper urna.
        </p>
      </div>
    </div>

    <img
      class="relative mx-auto mt-5 -mb-20 block w-auto max-w-full"
      src="assets/img/introduction-music.png"
      alt="music"
    />
  </section>

  <!-- Main Content -->
  <section class="container mx-auto">
    <div class="relative flex flex-col rounded border border-gray-200 bg-white">
      <div class="border-b border-gray-200 px-6 pt-6 pb-5 font-bold">
        <span class="card-title">Songs</span>
        <!-- Icon -->
        <i class="fa fa-headphones-alt float-right text-xl text-green-400"></i>
      </div>
      <!-- Playlist -->
      <ol id="playlist">
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
        <li
          class="flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"
        >
          <div>
            <a href="#" class="block font-bold text-gray-600">Song Title</a>
            <span class="text-sm text-gray-500">Artist Name</span>
          </div>

          <div class="text-lg text-gray-600">
            <span class="comments">
              <i class="fa fa-comments text-gray-600"></i>
              15
            </span>
          </div>
        </li>
      </ol>
      <!-- .. end Playlist -->
    </div>
  </section>

  <!-- Player -->
  <div
    class="fixed bottom-0 left-0 h-16 w-full bg-white p-5 pb-4 text-left align-top"
  >
    <div class="relative">
      <!-- Play/Pause Button -->
      <div class="float-left h-7 w-7 leading-3">
        <button type="button">
          <i class="fa fa-play text-xl text-gray-500"></i>
        </button>
      </div>
      <!-- Current Position -->
      <div
        class="float-left ml-5 mt-1 h-7 w-14 text-lg leading-3 text-gray-400"
      >
        <span class="player-currenttime">00:00</span>
      </div>
      <!-- Scrub -->
      <div class="player-scrub float-left ml-7 mt-2 h-7 w-7 leading-3">
        <div
          class="player-song-info absolute left-0 right-0 mx-auto text-center text-lg"
        >
          <span class="song-title">Song Title</span> by
          <span class="song-artist">Artist</span>
        </div>
        <!-- Scrub Container  -->
        <span
          class="relative m-1 mt-2 block h-2 w-full cursor-pointer rounded bg-gray-200"
        >
          <!-- Player Ball -->
          <span
            class="top-neg-8 absolute text-lg text-gray-800"
            style="left: 50%"
          >
            <i class="fas fa-circle"></i>
          </span>
          <!-- Player Progress Bar-->
          <span
            class="block h-2 rounded bg-gradient-to-r from-green-500 to-green-400"
            style="width: 50%"
          ></span>
        </span>
      </div>
      <!-- Duration -->
      <div
        class="float-left ml-8 mt-1 h-7 w-14 text-lg leading-3 text-gray-400"
      >
        <span class="player-duration">03:06</span>
      </div>
    </div>
  </div>

  <AuthModal />
</template>

<script>
import AppHeader from "./components/HeaderC.vue";
import AuthModal from "./components/AuthModal.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AuthModal,
  },
};
</script>

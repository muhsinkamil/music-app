<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex items-center justify-start py-5 px-4">
      <!-- App Name -->
      <a class="mr-4 text-2xl font-bold uppercase text-white" href="#">Music</a>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="mt-1 flex flex-row">
          <!-- Navigation Links -->
          <li>
            <a class="px-2 text-white" href="#">Login / Register</a>
          </li>
          <li>
            <a class="px-2 text-white" href="#">Manage</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

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

  <!-- Auth Modal -->
  <div class="fixed inset-0 z-10 hidden overflow-y-auto" id="modal">
    <div
      class="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
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
            <li class="flex-auto text-center">
              <a
                class="block rounded bg-blue-600 py-3 px-4 text-white transition hover:text-white"
                href="#"
                >Login</a
              >
            </li>
            <li class="flex-auto text-center">
              <a class="block rounded py-3 px-4 transition" href="#"
                >Register</a
              >
            </li>
          </ul>

          <!-- Login Form -->
          <form>
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
          <form>
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

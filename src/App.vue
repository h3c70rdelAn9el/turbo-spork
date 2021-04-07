<template>
  <div>
    <div class="nav flex flex-row justify-between mx-3">
      <div>
        <router-link to="/">Home</router-link>
      </div>
      <div>
        <router-link to="/characters">Characters</router-link>
      </div>
    </div>
    <div class="bg-gray-300">
      <router-view />
    </div>
  </div>
</template>

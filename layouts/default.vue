<template>
  <div class="container mx-auto px-4">
    <div class="flex justify-center font-bold text-xl gap-x-10 my-6">
      <NuxtLink to="/">Index</NuxtLink>
      <NuxtLink to="/SpockRock">Game</NuxtLink>
    </div>
    <slot />
    <footer class="fixed bottom-2 left-0 right-0">
      <p class="text-xs w-max mx-auto">Copyrights &copy; 2023 <a href="https://reikama414.github.io/" target="__blank">Kama</a>, All Rights Reserved.</p>
    </footer>
    <div class="absolute inset-0 index-bg"></div>
  </div>
</template>

<style lang="sass">
@import "~/assets/sass/style.sass"
</style>


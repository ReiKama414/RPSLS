<template>
  <div class="container mx-auto px-4">
    <div class="flex justify-center font-bold text-xl gap-x-10 my-6">
      <NuxtLink to="/">Index</NuxtLink>
      <NuxtLink to="/SpockRock">Game</NuxtLink>
    </div>
    <slot />
    <div class="absolute inset-0 index-bg"></div>
  </div>
</template>

<style lang="sass">
@import "~/assets/sass/style.sass"
</style>


<template>
  <div>
    <div class="flex flex-col items-center">
        <div class="flex space-x-4 my-4">
            <NuxtLink to="/">Index</NuxtLink>
            <NuxtLink to="/SpockRock">Spock Rock Game</NuxtLink>
        </div>
        <slot />
    </div>
  </div>
</template>

<style lang="sass">
@import "~/assets/sass/style.sass"
</style>


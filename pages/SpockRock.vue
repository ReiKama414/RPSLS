<script>
export default {
  data() {
    return {
      choices: [{ title: 'Rock', obj: '🤛🏻' },
                { title: 'Paper', obj: '✋🏻' },
                { title: 'Scissors', obj: '✌🏻' }, 
                { title: 'Lizard', obj: '🤏🏻' }, 
                { title: 'Spock', obj: '🖖🏻' }, 
               ],
      playerChoice: { title: 'Rock', obj: '🤛🏻' },
      computerChoice: { title: 'Rock', obj: '🤛🏻' },
      result: 'Are you ready ?',
      playerScore: 0,
      computerScore: 0,
      clickedAnimate: false,
    }
  },
  methods: {
    play(choice) {
      this.playerChoice = choice;
      this.computerChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
      if (this.playerChoice.title === this.computerChoice.title) {
        this.result = 'Tie';
      } else if (
        (this.playerChoice.title === 'Rock' && (this.computerChoice.title === 'Scissors' || this.computerChoice.title === 'Lizard')) ||
        (this.playerChoice.title === 'Paper' && (this.computerChoice.title === 'Rock' || this.computerChoice.title === 'Spock')) ||
        (this.playerChoice.title === 'Scissors' && (this.computerChoice.title === 'Paper' || this.computerChoice.title === 'Lizard')) ||
        (this.playerChoice.title === 'Lizard' && (this.computerChoice.title === 'Paper' || this.computerChoice.title === 'Spock')) ||
        (this.playerChoice.title === 'Spock' && (this.computerChoice.title === 'Rock' || this.computerChoice.title === 'Scissors'))
      ) {
        this.result = 'You Win!';
        this.playerScore++;
      } else {
        this.result = 'You Lose';
        this.computerScore++;
      }
      this.clickedAnimate = true;
      setTimeout(() => {
        this.clickedAnimate = false;
      }, 350);
    },
    reset() {
      this.playerChoice = { title: 'Rock', obj: '🤛🏻' };
      this.computerChoice = { title: 'Rock', obj: '🤛🏻' };
      this.result = 'Are you ready ?';
      this.playerScore = 0;
      this.computerScore = 0;
    }
  }
}
</script>

<template>
  <div class="flex flex-col items-center relative z-10">
    <h1 class="text-3xl sm:text-4xl md:text-5xl my-6 glitchtext" data-text="Spock Rock Game">Spock Rock Game</h1>

    <div class="flex flex-row justify-center scoreboard w-full">
      <p>{{ playerScore }}</p>：<p>{{ computerScore }}</p>
    </div>
    <p>{{ result }}</p>
    
    <div class="bettleshow flex flex-row justify-center w-full mt-8 mb-12 px-4">
      <p class="relative mx-2 w-1/2 text-center">
        <span class="absolute left-0">You</span>
        <span class="text-9xl inline-block" :class="{ clicked: clickedAnimate }"> {{ playerChoice.obj }} </span>
      </p>
      <p class="relative mx-2 w-1/2 text-center">
        <span class="absolute right-0">Bot</span>
        <span class="text-9xl inline-block" :class="{ clicked: clickedAnimate }"> {{ computerChoice.obj }} </span>
      </p>
    </div>

    <p class="mb-6">Human . . . Choose your weapon . . .</p>
    <div class="flex flex-row justify-center mb-6">
      <button
        v-for="choice in choices"
        :key="choice"
        @click="play(choice)"
        class="yrchioceBtn text-2xl md:text-6xl pb-1 w-12 h-12 md:w-28 md:h-28 m-3 rounded-full md:rounded-2xl "
      >
        {{ choice.obj }}
      </button>
    </div>
    <button @click="reset" class="mb-3">Reset</button>
  </div>
</template>

<style lang="sass" scoped>
@import "~/assets/sass/spockrock.sass"
</style>

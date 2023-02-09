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
      result: '',
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
      this.playerChoice = '';
      this.computerChoice = '';
      this.result = '';
      this.playerScore = 0;
      this.computerScore = 0;
    }
  }
}
</script>

<template>
  <div class="flex flex-col items-center">
    <h1>Spock Rock Game</h1>

    <div class="scoreboard">
      <h2>Scoreboard</h2>
      <table>
        <tbody>
          <tr>
            <td>{{ playerScore }}</td>
            <td>{{ computerScore }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>You</th>
            <th>Bot</th>
          </tr>
        </tfoot>
      </table>
    </div>
    
    <div class="bettleshow flex flex-row justify-center w-full my-8 px-4">
      <p class="relative mx-2 w-1/2 text-center">
        <span class="absolute left-0">You</span>
        <span class="text-9xl inline-block" :class="{ clicked: clickedAnimate }"> {{ playerChoice.obj }} </span>
      </p>
      <p class="relative mx-2 w-1/2 text-center">
        <span class="absolute right-0">Bot</span>
        <span class="text-9xl inline-block" :class="{ clicked: clickedAnimate }"> {{ computerChoice.obj }} </span>
      </p>
    </div>

    <p>Choose your weapon:</p>
    <div>
      <button
        v-for="choice in choices"
        :key="choice"
        @click="play(choice)"
        class="yrchioceBtn text-6xl pb-1 w-28 h-28 m-3 rounded-2xl"
      >
        {{ choice.obj }}
      </button>
    </div>
    <p>Result: {{ result }}</p>
    <button v-on:click="reset">Reset</button>
  </div>
</template>

<style lang="sass" scoped>
@import "~/assets/sass/spockrock.sass"
</style>

<template>
  <div id="drum-machine">
    <h1>Drum Machine</h1>
    <div id="display">{{ displayText }}</div>
    <div class="drum-pad-container">
      <drum-pad v-for="pad in drumPads" :key="pad.id" :pad="pad" @trigger="triggerPad"></drum-pad>
    </div>
  </div>
</template>

<script>
  import DrumPad from './components/DrumPad.vue';

  export default {
    data() {
      return {
        displayText: 'Click or press a key!',
        drumPads: [
          { id: 'Q', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', label: 'Heater 1' },
          { id: 'W', audio: './assets/heater-1.mp3', label: 'Heater 2' },
          { id: 'E', audio: './assets/heater-3.mp3', label: 'Heater 3' },
          { id: 'A', audio: './assets/heater-4.mp3', label: 'Heater 4' },
          { id: 'S', audio: './assets/heater-6.mp3', label: 'Clap' },
          { id: 'D', audio: './assets/Dsc_Oh.mp3', label: 'Open HH' },
          { id: 'Z', audio: './assets/Kick_n_Hat.mp3', label: 'Kick-n\'-Hat' },
          { id: 'X', audio: './assets/RP4_KICK_1.mp3', label: 'Kick' },
          { id: 'C', audio: './assets/Cev_H2.mp3', label: 'Closed HH' },
        ],
      };
    },
    mounted() {
      window.addEventListener('keydown', this.handleKeyDown);
    },
    beforeDestroy() {
      window.removeEventListener('keydown', this.handleKeyDown);
    },
    methods: {
      triggerPad(label) {
        this.displayText = label;
      },
      handleKeyDown(event) {
        const keyPressed = event.key.toUpperCase();
        const pad = this.drumPads.find((p) => p.id === keyPressed);
        if (pad) {
          this.$refs[pad.id].playAudio();
        }
      },
    },
    components: {
      DrumPad,
    },
  };
</script>


<style>
  #drum-machine {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }

  #display {  
    font-size: 4em;
    margin-bottom: 20px;
  }

  .drum-pad-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    justify-content: center;
  }

  .drum-pad {
    font-size: 3em;
    display: inline-block;
    padding: 2em;
    margin: 10px;
    background-color: #61dafb;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    transition: box-shadow 0.3s;
  }

  .drum-pad:hover {
    box-shadow: 0 0 15px #61dafb; 
    background-color: #0495bd;
    color: blue;
  }

  .drum-pad:focus {
    outline: none;
    box-shadow: 0 0 5px #61dafb;
  }

  .drum-pad.playing {
    transform: scale(1.1);
    background-color: #ffcc29;
    box-shadow: 0 0 10px #ffcc29;
  }

  @media screen and (max-width: 600px) {
    .drum-pad {
      padding: 20px; 
      font-size: 1em; 
    }
    #display {  
      font-size: 2    em;
      margin-bottom: 20px;
    }
  }
</style>
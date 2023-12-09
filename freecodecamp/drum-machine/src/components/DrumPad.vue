<template>
    <div class="drum-pad" @click="playAudio" @keydown="playAudio" tabindex="0" ref="drumPad"    >
      {{ pad.id }}
      <audio class="clip" :src="pad.audio" :id="pad.id"></audio>
    </div>
</template>

<script>
    export default {
        props: ['pad'],
        methods: {
            playAudio() {
                const drumPad = this.$refs.drumPad;
                drumPad.classList.add('playing');
                setTimeout(() => drumPad.classList.remove('playing'), 200);


                const audio = this.$el.querySelector('.clip');
                audio.currentTime = 0;
                audio.play();
                this.$emit('trigger', this.pad.label);
            },
        },
    };
</script>
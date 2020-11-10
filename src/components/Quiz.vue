<template>
  <div id="app" v-if="questions.length > 0">
    <div class="quiz">

      <div class="number">
        Q:{{ this.current+1 }}
      </div>

      <div class="question">
        {{ questions[this.current].question }}
      </div>

    </div>
    
    <div class="options">
      <div class="option" v-for="(option, key) in questions[this.current].options" :key="key">
        <button>{{ option }}</button>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
    data() {
      return {
        questions: this.$store.state.questions.info,
        current: 0
      }
    },
    methods: {
      inc() {
        this.$data.current += 1;
      }
    }
}
</script>

<style lang="scss" scoped>
  .quiz {

    color: white;
    background: rgba(247, 0, 255, 0.616);
    margin: 5% 15% 0 15%;
    border-radius: 10px;
    display: flex;
    font-family: sans-serif;
    box-shadow: 5px 5px rgba(0, 0, 0, 0.61);


    .number {
      color: black;
      font-weight: bold;
      background: white;
      border-radius: 10px 0px 0px 10px;
      padding: 10px;
      font-size: 20px;
    }
    
    .question {
      text-align: center;
      padding: 15px;
    }
  }

  .options {
      background-color: rgba(0, 214, 178, 0.726);
      border: 2px yellow solid;
      border-radius: 10px;
      margin: 5% 25%;
      box-sizing: content-box;
      box-shadow: 5px 5px rgba(0, 0, 0, 0.61);

      button {
        color: whitesmoke;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: 800;
        background: transparent;
        border: 1px white solid;
        outline-style: none;
        font-size: 18px;
        padding: 20px;
        border-radius: 5px;
        width: 100%;


        cursor: pointer;

        &:hover {
          transition: 0.4s;
          background: rgba(117, 0, 172, 0.61);
        }
      }

    }
</style>
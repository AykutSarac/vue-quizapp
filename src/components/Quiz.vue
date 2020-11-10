<template>
  <div id="app" v-if="questions.length > 0">
    <div class="quiz">

      <div class="number">
        Q: {{ this.current+1 }}
      </div>

      <div class="question">
        {{ questions[this.current].question }}
      </div>

    </div>
    
    <div class="options">
      <div class="option" v-for="(option, key) in questions[this.current].options" :key="key">
        <input type="radio" v-bind:id="key" name="options" @keyup.enter="next">
        <label v-bind:for="key" @click="select(key)">{{ decodeHtml(option) }}</label>
      </div>
    </div>
    
    <button id="next" @click="next">Next</button>
  </div>
</template>

<script>

export default {
    data() {
      return {
        questions: this.$store.state.questions.info,
        current: 0,
        pts: 0,
        answer: -1
      }
    },
    methods: {      
      decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
      },

      select(key) {
        this.answer = key;
      },

      next() {
        if (this.answer < 0) return alert("Pick an answer!");

        if (this.questions[this.current].answer === this.questions[this.current].options[this.answer]) {
          this.pts += 10;
        }

        if (this.$data.current !== 4) {
          this.current += 1;
        } else {
          alert("Game Over! You finished the game with " + this.$data.pts + " pts!");
          window.location.reload();
        }
        
      }
    }
}
</script>

<style lang="scss" scoped>

  .quiz {

    @media only screen and (max-width: 768px) {
      margin: 1rem;
    }

    color: white;
    background: rgba(247, 0, 255, 0.616);
    margin: 3rem auto 0 auto;
    border-radius: 10px;
    display: flex;
    font-family: sans-serif;
    box-shadow: 5px 5px rgba(0, 0, 0, 0.61);
    width: fit-content;

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

      @media only screen and (max-width: 768px) {
            margin: 3rem;
          }

      background-color: rgba(0, 214, 178, 0.726);
      border: 2px yellow solid;
      border-radius: 10px;
      margin: 5rem 25%;
      box-sizing: content-box;
      box-shadow: 5px 5px rgba(0, 0, 0, 0.61);

      input[type="radio"] {
        opacity: 0;
        position: fixed;
        width: 0;
      }

      label {
        display: inline-block;
        color: white;
        border: 1px white solid;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 18px;
        padding: 20px;
        border-radius: 5px;
        width: 100%;
        box-sizing: border-box;

        cursor: pointer;

        &:hover {
          transition: 0.4s;
          background: rgba(117, 0, 172, 0.61);
        }
      }

      input[type="radio"]:focus + label {
          background-color: rgb(137, 124, 255) ;
        }

    }

    #next {

      @media only screen and (max-width: 768px) {
            margin-top: 0;
          }

      margin-left: 65%;
      outline-style: none;
      border-radius: 10px;
      border-style: none;
      box-shadow: 5px 5px rgba(0, 0, 0, 0.61);
      cursor: pointer;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-size: 50px;
      color: white;
      background: rgba(247, 0, 255, 0.616);
    }
</style>
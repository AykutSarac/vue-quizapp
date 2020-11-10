<template>
  <div id="app">
    <button @click="question" v-on:click="remove" id="start">Start!</button>
      <Quiz />
  </div>
</template>

<script>
import Quiz from './components/Quiz'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Quiz
  },
  data() {
    return {
      questions: ''
    }
  },
  methods: {
    question() {
      axios.get("https://opentdb.com/api.php?amount=5").then(d => {
        const quiz = d.data.results.map(data => {

          function decodeHtml(html) {
              var txt = document.createElement("textarea");
              txt.innerHTML = html;
              return txt.value;
          }

          function shuffle(originalArray) {
            var array = [].concat(originalArray);
            var currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;

              // And swap it with the current element.
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }

            return array;
          }

          const opts = data.incorrect_answers;
          opts.push(data.correct_answer);
          return {
            question: decodeHtml(data.question),
            options: shuffle(opts),
            answer: data.correct_answer
          }
        });

        this.$store.commit('questions/set', quiz);
      }).catch(e => {
        console.error(e);
      })
    },

    remove() {
      document.getElementById("start").remove();
    }
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    background-image: url('https://blog.pixlr.com/wp-content/uploads/2019/03/stars-pattern.png');
    background-attachment: fixed;
    background-repeat: no-repeat;
    justify-content: center;
  }

  #start {
    text-shadow: 5px 5px rgba(0, 0, 0, 0.5);
    display:block;
    z-index: -999;
    height: 100%;
    position: fixed; 
    width:100%;
    padding: 0;
    margin: 0;
    font-size: 50px;
    outline-style: none;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.25);
    transition: 0.4s;
    cursor: pointer;
    color: white;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

    &:hover {
      background: rgba(255, 255, 255, 0.30);
    }
    
  }
</style>

<template>
  <div class="columns">
    <div class="column is-aligned">
      <h1 class="title">Useless Fact</h1>
      <button class="button is-primary" v-on:click="getRandomFact">Get A Random Fact</button>
    </div>
    <div class="column is-aligned has-background-primary has-text-white has-text-centered">
      <p class="is-size-3" v-if="seen">Click the button to get a Useless Fact</p>
      <div class="content" v-if="display">
        <p class="is-size-3">{{uselessFact.text}}</p>
        <p>Source: <span class="source_name">{{uselessFact.source}}</span></p>
        <a v-bind:href="uselessFact.sourceURL" target="blank" class="button is-light">Read More</a>
      </div>
    </div>
  </div>
</template>
<script> 

import {APIService} from '../APIServices';
const apiService = new APIService();

export default {
  data() {
    return{
      'seen':true,
      'display':false,
      'uselessFact':{
        'text':'',
        'source':'',
        'sourceURL':''
      }
    }
  },
  methods:{
    getRandomFact(){
      apiService.getFact()
        .then((res) => {
          this.uselessFact.text = res.newFact.text
          this.uselessFact.source = res.newFact.source
          this.uselessFact.sourceURL = res.newFact.sourceURL
          this.display = true
          this.seen = false
        })
    }
  }
};
</script>

<style lang="scss">
@import "~bulma/css/bulma.css";
.is-aligned{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100vh;
}
.content{
  padding:15px;
}
.source_name{
  font-style: italic;
}
</style>

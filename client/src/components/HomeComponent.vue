<template>
  <div class="hello">
    <p>First commit</p>
    <button v-on:click="getRandomFact">Get Random Fact</button>
    <p>{{uselessFact.text}}</p>
    <p>{{uselessFact.source}}</p>
    <p>{{uselessFact.sourceURL}}</p>
  </div>
</template>

<script> 
import {APIService} from '../APIServices';
const apiService = new APIService();

export default {
  data() {
    return{
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
        })
    }
  }
};
</script>

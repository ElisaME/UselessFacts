<template>
  <div class="hello">
    <p>First commit</p>
    <button v-on:click="getRandomFact">Get Random Fact</button>
  </div>
</template>

<script> 
import {APIService} from '../APIServices';
const apiService = new APIService();

export default {
  data() {
    return{
    }
  },
  methods:{
    getRandomFact(){
      apiService.getFact()
        .then((res) => {
          /* eslint-disable no-console */
          console.log(res.data);
          /* eslint-enable no-console */
        })
    }
  }
};
</script>

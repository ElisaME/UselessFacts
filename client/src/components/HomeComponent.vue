<template>
  <div class="hello">
    <p>First commit</p>
    <p>{{message}}</p>
  </div>
</template>

<script> 
export default {
  data() {
    return{
      message:''
    }
  },
  created() {
    let uri = 'http://localhost:3000/';
    this.axios.get(uri).then((response) => {
      this.message = response.data.msg;
    });
  }
};
</script>

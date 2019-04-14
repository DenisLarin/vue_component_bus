<template>
  <div class="container">
    <div class="row">
      <Header></Header>
    </div>
    <hr>
    <div class="row">
      <Servers></Servers>
      <ServerDetail></ServerDetail>
    </div>
    <hr>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "./components/shared/Header";
  import Servers from "./components/server/Servers";
  import ServerDetail from "./components/server/ServerDetail";
  import Footer from "./components/shared/Footer";
  export default {
    components: {Footer, ServerDetail, Servers, Header}
  }
</script>

<style>

</style>

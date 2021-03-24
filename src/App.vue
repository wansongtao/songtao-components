<template>
  <div id="app" v-water-mark>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">about</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  min-height: calc(100vh - 16px);
}

#nav {
  padding: 30px;

  a {
    padding: 10px;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

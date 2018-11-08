<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Welcome to dynamic Components!</h1>
    <ul class="nav nav-tabs">
      <li v-for="page in pages" :class="isActivePage(page) ? 'active' : ''">
        <a href="#" @click.prevent="setPage(page)">{{ page | capitalize }}</a>
      </li>
    </ul>
    <component :is="activePage">

    </component>
    <!-- <a href="#" @click.prevent="currentComponent = 'helloWorld'">Show Hello</a>
    <a href="#" @click.prevent="currentComponent = 'greet'">Show Greet</a> -->
    <!-- <HelloWorld/>
    <Login/> -->
    <!-- <Register/> -->
    <!-- <Stories/> -->
    <!-- <register :stories="stories"></register> -->
    <!-- <stories :stories="stories"></stories> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import Greet from './components/Greet'
import Vue from 'vue'
import Login from './components/Login'
import Register from './components/Register'
import Stories from './components/Stories'

Vue.filter('capitalize', function (value) {
  return value.charAt(0).toUpperCase() + value.substr(1)
})

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Login,
    // Greet
    Register,
    Stories
  },
  data () {
    return {
      currentComponent: 'helloWorld',
      pages: [
        'stories',
        'register',
        'login'
      ],
      activePage: 'stories',
      stories: [
        {
          plot: 'My horse is amazing.',
          writer: 'Mr. Weebl',
          upvotes: 28,
          voted: false
        },
        {
          plot: 'Narwhals invented Shish Kebab.',
          writer: 'Mr. Weebl',
          upvotes: 8,
          voted: false
        },
        {
          plot: 'The dark side of the Force is stronger.',
          writer: 'Darth Vader',
          upvotes: 52,
          voted: false
        },
        {
          plot: 'One does not simply walk into Mordor',
          writer: 'Boromir',
          upvotes: 74,
          voted: false
        }
      ]
    }
  },
  methods: {
    setPage (newPage) {
      this.activePage = newPage
    },
    isActivePage (page) {
      return this.activePage === page
    }
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}
#app a {
  color: #42b983;
  text-decoration: none;
}
.logo {
  width: 100px;
  height: 100px
}
</style>

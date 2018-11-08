<template>
  <div id="register">
    <h2>Register Form</h2>
    <input type="text" placeholder="First Name" class="form-control">
    <input type="text" placeholder="Last Name" class="form-control">
    <input type="text" placeholder="Email address" class="form-control">
    <input type="text" placeholder="Pick a password" class="form-control">
    <input type="text" placeholder="Confirm password" class="form-control">
    <button class="btn">Sign up</button>
    <Famous/>
    <!-- <famous :stories="stories"></famous> -->
  </div>
</template>

<script>
import Famous from './Famous'

export default {
  components: {
    Famous
  },
  // props: ['stories'],
  created () {
    console.log('register')
  }
}
</script>

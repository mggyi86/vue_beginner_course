<template>
  <ul class="list-group">
    <li v-for="story in store.stories" class="list-group-item">
      {{ story.writer }} said "{{ story.plot }}"
      Story upvotes {{ story.upvotes }}
    </li>
  </ul>
</template>

<script>
import {store} from '../store.js'

export default {
  data: function () {
    return {
      store
    }
  },
  created () {
    console.log('stories')
  }
}
</script>

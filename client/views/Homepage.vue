<template>
  <div class="page"> <!-- css class called "page" -->
    Homepage stuff
    <div class="csstest">
      more words
    </div>
  </div>
</template>

<script>
import App from '../components/App'

export default {
  components: {
    App,
  }
}
</script>

<style>
.csstest {
  color: red;
  font-size: .75rem;
}
</style>

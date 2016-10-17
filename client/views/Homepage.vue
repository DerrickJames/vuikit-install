<template>
  <div>
    <vk-button-checkbox>
      <vk-button color="primary">Button</vk-button>
      <vk-button active>Button</vk-button>
      <vk-button>Button</vk-button>
    </vk-button-checkbox>
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

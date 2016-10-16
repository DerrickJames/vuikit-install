<template>
  <div id="app">
    <ul> <!-- (1) Select the route -->
      <li><router-link to="/">Homepage</router-link></li>

      <li><router-link to="/builtin-default-homepage">Default Homepage</router-link></li>

    </ul>
    <hr>
    <!-- (2) DISPLAYS the page that the route selected -->
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style>
body {
  margin: 0;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont,
               'avenir next', avenir,
               helvetica, 'helvetica neue',
               Ubuntu,
               'segoe ui', arial,
               sans-serif;
}
.page {
  text-align: center;
  font-size: 2rem;
}
code {
  background-color: #f0f0f0;
  padding: 3px 5px;
  border-radius: 2px;
}
</style>

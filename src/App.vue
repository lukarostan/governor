<template>
  <div id="app">
    <PageHeader />
    <Content />
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from './components/PageHeader'
import Content from './components/Content'
import PageFooter from './components/PageFooter'
export default {
  name: 'App',
  components: {
    PageHeader,
    Content,
    PageFooter
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap')
@media only screen and (max-width: 600px)
  body
    background: white
@media only screen and (min-width: 600px)
  body
    background: linear-gradient(to bottom left, #4D53C5, #8E93FB) 
    overflow-x: hidden

  
*
  margin: 0
  padding: 0
  box-sizing: border-box
  font-family: 'Open Sans', sans-serif
body
  display: flex
  flex-direction: column
  justify-content: space-between
</style>

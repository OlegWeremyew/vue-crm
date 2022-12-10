<template>
  <ul class="sidenav app-sidenav" :class="{open: isOpen}">

    <router-link
        v-for="({title, url, exact }, index) in links"
        :key="url"
        tag="li"
        active-class="active"
        :to="url"
        :exact="exact"
    >
      <a href="#" class="waves-effect waves-orange pointer">{{title}}</a>
    </router-link>

  </ul>
</template>

<script>
export default {
  name: "Sidebar",
  props: ['isOpen'],
  data() {
    return {
      links: [
        {title: 'Счет', url: '/', exact: true,},
        {title: 'История', url: '/history',exact: false,},
        {title: 'Планирование', url: '/planning',exact: false,},
        {title: 'Новая запись', url: '/record',exact: false,},
        {title: 'Категории', url: '/categories',exact: false,},
      ],
    }
  }
}


</script>

<style scoped>

</style>
<template>
  <v-layout
    column
    justify-center
    align-center
  >
  <article>
    <h1 class="title">This is a title</h1>
  </article>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>

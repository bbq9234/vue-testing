<template>
  <div>
    <div class="fullname">{{ fullname }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ComponentWithGetters',

  computed: {
    ...mapGetters(['fullname'])
  }
}
</script>
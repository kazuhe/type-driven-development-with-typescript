<template>
  <div class="container">
    <base-icon />
    <p>Type-Driven Development with TypeScript</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseIcon from '@/components/BaseIcon/index.vue'

export default defineComponent({
  name: 'HelloWorld',
  components: {
    BaseIcon,
  },
  props: {
    msg: String,
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    margin-left: 5px;
  }
}
</style>

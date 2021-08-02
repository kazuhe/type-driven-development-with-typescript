<template>
  <div class="base-icon">
    <div @click="toggleDisplayOfIconSelectionModal" class="icon current">
      {{ icon }}
    </div>
    <div v-if="isShownIconSelectionModal" class="icon-selection-modal">
      <ul class="list">
        <li
          v-for="(icon, index) in icons"
          :key="index"
          @click="changeIcon(icon)"
          class="icon item"
        >
          {{ icon }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useIcon } from './compositions'
import { icons } from './icons'

export default defineComponent({
  name: 'BaseIcon',

  setup() {
    const icon = ref('🦅')
    const isShownIconSelectionModal = ref(false)
    return {
      ...useIcon(isShownIconSelectionModal, icon),
      icons,
      icon,
      isShownIconSelectionModal,
    }
  },
})
</script>

<style lang="scss" scoped>
.base-icon {
  position: relative;

  .icon {
    transition: all 0.1s ease-in 0s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    &:hover {
      background: rgb(0 0 0 / 10%);
    }
  }

  .current {
    width: 24px;
    height: 24px;
    font-size: 13px;
  }

  .icon-selection-modal {
    z-index: 1;
    overflow: hidden auto;
    width: 387px;
    height: 268px;
    border-radius: 3px;
    background: white;
    position: absolute;
    box-shadow: rgb(15 15 15 / 5%) 0px 0px 0px 1px,
      rgb(15 15 15 / 10%) 0px 3px 6px, rgb(15 15 15 / 20%) 0px 9px 24px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 10px;
  }

  .item {
    margin: 0;
    width: 32px;
    height: 32px;
    font-size: 24px;
  }
}
</style>

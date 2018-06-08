<template lang="html">
  <div
    :class="'modal-wrapper'"
    @click="onModalClose"
  >
    <div
      :class="'modal-inner'"
      @click="(e) => { e.stopPropagation(); }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {
  showBodyScroll,
  hideBodyScroll,
} from '../../lib/bodyScrollToggle';

export default {
  name: 'Modal',
  created() {
    hideBodyScroll();
  },
  beforeDestroy() {
    showBodyScroll();
  },
  props: {
    onModalClose: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="css" scoped>
.overflow-hidden {
  overflow: hidden !important;
}

.display-none {
  display: none;
}

.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-inner {
  overflow: visible;
  width: 600px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>

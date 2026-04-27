<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
import {
  faGasPump,
  faRuler,
  faWeightHanging,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <FontAwesomeIcon v-if="name === 'route'" :icon="faRuler" size="xl" />

  <FontAwesomeIcon v-else-if="name === 'ruler'" :icon="faRuler" size="xl" />

  <FontAwesomeIcon
    v-else-if="name === 'scale'"
    :icon="faWeightHanging"
    size="xl"
  />

  <FontAwesomeIcon v-else-if="name === 'fuel'" :icon="faGasPump" size="xl" />

  <FontAwesomeIcon
    v-else-if="name === 'arrow-left'"
    :icon="faArrowLeft"
    size="xl"
  />
</template>

<style scoped>
.icon {
  width: 100%;
  height: 100%;
}
</style>

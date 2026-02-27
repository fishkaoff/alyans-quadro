<template>
  <input
    type="range"
    :min="min"
    :max="max"
    v-model="internalValue"
    class="custom-slider"
  />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  min: number;
  max: number;
  modelValue: number; // v-model
}>();

const emit = defineEmits(["update:modelValue"]);

const internalValue = ref(props.modelValue);

// синхронизация с родителем
watch(internalValue, (val) => {
  emit("update:modelValue", val);
});

// обновление при изменении modelValue снаружи
watch(
  () => props.modelValue,
  (val) => {
    internalValue.value = val;
  },
);
</script>

<style scoped lang="scss">
.custom-slider {
  --trackHeight: 0.5rem;
  --thumbRadius: 1.2rem;

  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: var(--thumbRadius);
  background: transparent;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--trackHeight);
    background: #dfdfdf;
    border-radius: 999px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: var(--thumbRadius);
    height: var(--thumbRadius);
    margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2);
    background: #e8461e;
    border: 3px solid white;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  &::-moz-range-track {
    width: 100%;
    height: var(--trackHeight);
    background: #dfdfdf;
    border-radius: 999px;
  }

  &::-moz-range-thumb {
    width: var(--thumbRadius);
    height: var(--thumbRadius);
    background: #e8461e;
    border: 3px solid white;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  &::-ms-track {
    width: 100%;
    height: var(--trackHeight);
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &::-ms-fill-lower {
    background: #e8461e;
    border-radius: 999px;
  }

  &::-ms-fill-upper {
    background: #dfdfdf;
    border-radius: 999px;
  }

  &::-ms-thumb {
    width: var(--thumbRadius);
    height: var(--thumbRadius);
    background: #e8461e;
    border: 3px solid white;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>

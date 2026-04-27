<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { conversions } from "../data/conversions.js";
import Icon from "../components/Icon.vue";

const route = useRoute();
const router = useRouter();

const conversion = computed(() => {
  return conversions.find((c) => c.id === route.params.id);
});

const leftValue = ref("");
const rightValue = ref("");
const leftUnit = computed(() => conversion.value?.units[0]);
const rightUnit = computed(() => conversion.value?.units[1]);

function convert(source, value) {
  if (!value || isNaN(value) || !conversion.value) return "";
  const num = parseFloat(value);

  const unitFrom = source === "left" ? leftUnit.value : rightUnit.value;
  const unitTo = source === "left" ? rightUnit.value : leftUnit.value;

  const base = conversion.value.toBase[unitFrom.id](num);
  return conversion.value.fromBase[unitTo.id](base);
}

function onLeftInput() {
  rightValue.value = convert("left", leftValue.value).toFixed(2);
}

function onRightInput() {
  leftValue.value = convert("right", rightValue.value).toFixed(2);
}

function clear() {
  leftValue.value = "";
  rightValue.value = "";
}

function goBack() {
  router.push("/");
}
</script>

<template>
  <div class="converter-page" v-if="conversion">
    <header class="header">
      <button class="back-btn" @click="goBack">
        <Icon name="arrow-left" />
        <span>Back</span>
      </button>
    </header>

    <main class="main">
      <h1 class="title">{{ conversion.title }}</h1>

      <div class="converter-full">
        <div class="input-section">
          <label class="input-label">{{ leftUnit?.label }}</label>
          <div class="input-wrapper">
            <input
              v-model="leftValue"
              type="number"
              placeholder="0"
              class="large-input"
              @input="onLeftInput"
              step="0.1"
            />
            <span class="unit-symbol">{{ leftUnit?.symbol }}</span>
          </div>
        </div>

        <div class="input-section">
          <label class="input-label">{{ rightUnit?.label }}</label>
          <div class="input-wrapper">
            <input
              v-model="rightValue"
              type="number"
              placeholder="0"
              class="large-input"
              @input="onRightInput"
              step="0.1"
            />
            <span class="unit-symbol">{{ rightUnit?.symbol }}</span>
          </div>
        </div>
      </div>

      <button class="clear-btn" @click="clear">Clear</button>
    </main>
  </div>
</template>

<style scoped>
.converter-page {
  min-height: 100vh;
  background: #0d1117;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  width: 100%;
  max-width: 600px;
  margin-bottom: 32px;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #8b949e;
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  cursor: pointer;
  padding: 8px 0;
  transition: color 0.2s ease;
}

.back-btn:hover {
  color: #f0883e;
}

.back-btn svg {
  width: 20px;
  height: 20px;
}

.main {
  width: 100%;
  max-width: 600px;
}

.title {
  font-family: "DM Sans", sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: #e6edf3;
  text-align: center;
  margin-bottom: 48px;
}

.converter-full {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.input-section {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 16px;
  padding: 24px;
  transition: border-color 0.3s ease;
}

.input-section:focus-within {
  border-color: #f0883e;
}

.input-label {
  display: block;
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #7d8590;
  margin-bottom: 12px;
}

.input-wrapper {
  position: relative;
}

.large-input {
  width: 100%;
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 20px 24px;
  padding-right: 80px;
  font-family: "JetBrains Mono", monospace;
  font-size: 32px;
  color: #e6edf3;
  transition: border-color 0.2s ease;
}

.large-input:focus {
  outline: none;
  border-color: #f0883e;
}

.large-input::placeholder {
  color: #30363d;
}

.unit-symbol {
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  font-family: "DM Sans", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #f0883e;
}

.clear-btn {
  display: block;
  width: 100%;
  margin-top: 32px;
  padding: 16px;
  background: transparent;
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  color: #7d8590;
  cursor: pointer;
  transition: color 0.2s ease;
  border: 1px solid #30363d;
  border-radius: 16px;
}

.clear-btn:hover {
  border-color: #f0883e;
  color: #f0883e;
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(240, 136, 62, 0.15);
}
</style>

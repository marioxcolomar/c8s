<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Icon from "../components/Icon.vue";

const router = useRouter();

const feetValue = ref("");
const inchesValue = ref("");
const cmValue = ref("");
const mValue = ref("");

const isLeftActive = ref(true);

const isLeftFocused = ref(false);
const isRightFocused = ref(false);

function toCm(meters) {
  return parseFloat(meters) * 100;
}

function toM(cm) {
  return parseFloat(cm) / 100;
}

function onLeftChange() {
  isLeftActive.value = true;

  const feet = parseFloat(feetValue.value) || 0;
  const inches = parseFloat(inchesValue.value) || 0;
  const totalInches = feet * 12 + inches;

  if (totalInches > 0) {
    const totalMeters = totalInches * 0.0254;
    const cm = toCm(totalMeters);
    const m = totalMeters;

    cmValue.value = cm.toFixed(2);
    mValue.value = m.toFixed(2);
  } else {
    cmValue.value = "";
    mValue.value = "";
  }
}

function onRightChange() {
  isLeftActive.value = false;

  const cm = parseFloat(cmValue.value) || 0;
  const m = parseFloat(mValue.value) || 0;
  const totalCm = cm + toCm(m);

  if (totalCm > 0) {
    const totalMeters = totalCm / 100;
    const totalInches = totalMeters / 0.0254;

    const feet = Math.floor(totalInches / 12);
    const inches = totalInches % 12;

    feetValue.value = feet > 0 ? feet.toString() : "";
    inchesValue.value = inches.toFixed(2);
  } else {
    feetValue.value = "";
    inchesValue.value = "";
  }
}

function clear() {
  feetValue.value = "";
  inchesValue.value = "";
  cmValue.value = "";
  mValue.value = "";
}

function goBack() {
  router.push("/");
}
</script>

<template>
  <div class="converter-page">
    <header class="header">
      <button class="back-btn" @click="goBack">
        <Icon name="arrow-left" />
        <span>Back</span>
      </button>
    </header>

    <main class="main">
      <h1 class="title">Length</h1>

      <div class="converter-full">
        <div class="input-section">
          <label class="input-label">Feet / Inches</label>
          <div class="input-row">
            <div class="input-wrapper half">
              <input
                v-model="feetValue"
                type="number"
                placeholder="0"
                class="large-input"
                @input="onLeftChange"
                @focus="isLeftFocused = true"
                @blur="isLeftFocused = false"
                step="1"
              />
              <span class="unit-symbol">ft</span>
            </div>
            <div class="input-wrapper half">
              <input
                v-model="inchesValue"
                type="number"
                placeholder="0"
                class="large-input"
                @input="onLeftChange"
                @focus="isLeftFocused = true"
                @blur="isLeftFocused = false"
                step="0.1"
              />
              <span class="unit-symbol">in</span>
            </div>
          </div>
        </div>

        <div class="input-section">
          <label class="input-label">Centimeters / Meters</label>
          <div class="input-row">
            <div class="input-wrapper half">
              <input
                v-model="cmValue"
                type="number"
                placeholder="0"
                class="large-input"
                @input="onRightChange"
                @focus="isRightFocused = true"
                @blur="isRightFocused = false"
                step="0.1"
              />
              <span class="unit-symbol">cm</span>
            </div>
            <div class="input-wrapper half">
              <input
                v-model="mValue"
                type="number"
                placeholder="0"
                class="large-input"
                @input="onRightChange"
                @focus="isRightFocused = true"
                @blur="isRightFocused = false"
                step="0.01"
              />
              <span class="unit-symbol">m</span>
            </div>
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

.input-row {
  display: flex;
  gap: 16px;
}

.input-wrapper {
  position: relative;
}

.input-wrapper.half {
  flex: 1;
}

.large-input {
  width: 100%;
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 20px 24px;
  padding-right: 60px;
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

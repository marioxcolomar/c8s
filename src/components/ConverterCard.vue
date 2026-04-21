<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  conversion: {
    type: Object,
    required: true
  }
})

const leftValue = ref('')
const rightValue = ref('')
const leftUnit = ref(props.conversion.units[0])
const rightUnit = ref(props.conversion.units[1])
const isSwapped = ref(false)

function convert(direction, value) {
  if (!value || isNaN(value)) return ''
  const num = parseFloat(value)
  
  if (direction === 'left') {
    const base = props.conversion.toBase[rightUnit.value.id](num)
    return props.conversion.fromBase[leftUnit.value.id](base)
  } else {
    const base = props.conversion.toBase[leftUnit.value.id](num)
    return props.conversion.fromBase[rightUnit.value.id](base)
  }
}

function onLeftChange() {
  rightValue.value = convert('left', leftValue.value)
}

function onRightChange() {
  leftValue.value = convert('right', rightValue.value)
}

function swap() {
  isSwapped.value = !isSwapped.value
  const temp = leftUnit.value
  leftUnit.value = rightUnit.value
  rightUnit.value = temp
  leftValue.value = ''
  rightValue.value = ''
}

function clear() {
  leftValue.value = ''
  rightValue.value = ''
}
</script>

<template>
  <div class="converter-card">
    <h2 class="card-title">{{ conversion.title }}</h2>
    
    <div class="input-group">
      <div class="input-wrapper">
        <input
          v-model="leftValue"
          type="number"
          step="any"
          placeholder="0"
          @input="onLeftChange"
        />
        <span class="unit-label">{{ leftUnit.symbol }}</span>
      </div>
      
      <button class="swap-btn" @click="swap" :class="{ swapped: isSwapped }">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 16l-4-4m0 0l4-4m-4 4h18M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
      
      <div class="input-wrapper">
        <input
          v-model="rightValue"
          type="number"
          step="any"
          placeholder="0"
          @input="onRightChange"
        />
        <span class="unit-label">{{ rightUnit.symbol }}</span>
      </div>
    </div>
    
    <button class="clear-btn" @click="clear">Clear</button>
  </div>
</template>

<style scoped>
.converter-card {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 24px;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
}

.converter-card:hover {
  border-color: #f0883e;
  box-shadow: 0 0 20px rgba(240, 136, 62, 0.1);
}

.card-title {
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #e6edf3;
  margin-bottom: 20px;
  text-align: center;
}

.input-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.input-wrapper {
  position: relative;
  flex: 1;
  max-width: 140px;
}

.input-wrapper input {
  width: 100%;
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 48px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 20px;
  color: #e6edf3;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.input-wrapper input:focus {
  outline: none;
  border-color: #f0883e;
  box-shadow: 0 0 0 3px rgba(240, 136, 62, 0.15);
}

.input-wrapper input::placeholder {
  color: #7d8590;
}

.unit-label {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #8b949e;
}

.swap-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #0d1117;
  border: 1px solid #30363d;
  color: #8b949e;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.swap-btn:hover {
  border-color: #f0883e;
  color: #f0883e;
}

.swap-btn.swapped svg {
  transform: rotate(180deg);
}

.swap-btn svg {
  transition: transform 0.3s ease;
}

.clear-btn {
  display: block;
  width: 100%;
  margin-top: 16px;
  padding: 8px;
  background: transparent;
  border: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  color: #7d8590;
  cursor: pointer;
  transition: color 0.2s ease;
}

.clear-btn:hover {
  color: #f0883e;
}
</style>
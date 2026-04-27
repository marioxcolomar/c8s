<script setup>
import { conversions } from "../data/conversions.js";
import Icon from "../components/Icon.vue";
</script>

<template>
  <div class="home">
    <header class="header">
      <h1 class="title">C<span class="accent">8</span>S</h1>
      <p class="tagline">Unit Converter</p>
    </header>

    <main class="main">
      <div class="icon-grid">
        <router-link
          v-for="conv in conversions"
          :key="conv.id"
          :to="`/converter/${conv.id}`"
          class="icon-card"
        >
          <div class="icon-wrapper">
            <Icon :name="conv.icon" />
          </div>
          <span class="card-label">{{ conv.title }}</span>
        </router-link>
        
        <router-link to="/converter/length" class="icon-card">
          <div class="icon-wrapper">
            <Icon name="ruler" />
          </div>
          <span class="card-label">Length</span>
        </router-link>
      </div>
    </main>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  background: #0d1117;
  padding: 40px 20px;
}

.header {
  text-align: center;
  margin-bottom: 48px;
}

.title {
  font-family: "DM Sans", sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: #e6edf3;
  margin: 0;
  letter-spacing: -2px;
}

.accent {
  color: #f0883e;
}

.tagline {
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  color: #7d8590;
  margin: 8px 0 0;
}

.main {
  max-width: 900px;
  margin: 0 auto;
}

.icon-grid {
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
}

.icon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 32px;
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  width: 160px;
}

.icon-card:hover {
  border-color: #f0883e;
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(240, 136, 62, 0.15);
}

.icon-wrapper {
  color: #f0883e;
}

.card-label {
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #e6edf3;
}
</style>

<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="card in cards" :key="card.title" class="col-xxl col-sm-6">
        <router-link :to="card.href" class="text-decoration-none">
          <div class="card category-card">
            <div
              class="card-body"
              :style="{ backgroundColor: card.bg }"
            >
              <div class="category-icon-wrapper">
                <div class="category-icon-circle" :style="{ backgroundColor: card.iconBg }">
                  <vue-feather :type="card.icon" :style="{ color: card.iconColor, stroke: card.iconColor }" />
                </div>
              </div>
              <div class="category-text">
                <h6 class="f-w-600" :style="{ color: card.textColor }">{{ card.title }}</h6>
                <span class="f-12" :style="{ color: card.textColor, opacity: 0.7 }">{{ card.description }}</span>
              </div>
              <span class="btn category-open-btn" :style="{ color: card.textColor }">Open</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cards = [
  {
    title: 'Order Plants',
    href: '/c/plants/dashboard',
    icon: 'shopping-bag',
    bg: '#e8e5a3',
    iconBg: 'rgba(120, 115, 30, 0.18)',
    iconColor: '#6b6720',
    textColor: '#4a4718',
    description: 'Order and manage plant inventory for environmental projects',
  },
  {
    title: 'Carbon Accounting',
    href: '/c/carbon/dashboard',
    icon: 'activity',
    bg: '#d4c9a8',
    iconBg: 'rgba(120, 100, 50, 0.18)',
    iconColor: '#7a6b3a',
    textColor: '#5a4e2a',
    description: 'Track and manage carbon emissions across your organization',
  },
  {
    title: 'ESG',
    href: '/c/esg/dashboard',
    icon: 'feather',
    bg: '#b8bee0',
    iconBg: 'rgba(60, 65, 130, 0.18)',
    iconColor: '#4a4f8a',
    textColor: '#3a3f6a',
    description: 'Environmental, Social & Governance reporting and compliance',
  },
  {
    title: 'Sustainability Report',
    href: '/c/reports/dashboard',
    icon: 'bar-chart-2',
    bg: '#bddcbe',
    iconBg: 'rgba(40, 110, 50, 0.18)',
    iconColor: '#3a7a40',
    textColor: '#2d5e32',
    description: 'Generate comprehensive sustainability reports and analytics',
  },
  {
    title: 'Geospatial Monitoring',
    href: '/c/geo/dashboard',
    icon: 'globe',
    bg: '#c5b8d8',
    iconBg: 'rgba(90, 60, 130, 0.18)',
    iconColor: '#6a4a90',
    textColor: '#523a72',
    description: 'Monitor environmental impact with geospatial intelligence',
  },
];
</script>

<style scoped>
.category-card {
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.category-card:hover {
  transform: translateY(-5px);
}

.category-card .card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 60px 24px;
  min-height: 380px;
  justify-content: center;
  gap: 30px;
  border-radius: inherit;
}

.category-icon-wrapper {
  display: flex;
  justify-content: center;
}

.category-icon-circle {
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.category-icon-circle svg {
  width: 30px;
  height: 30px;
}

.category-text h6 {
  margin-bottom: 6px;
  font-size: 16px;
}

.category-open-btn {
  background: rgba(255, 255, 255, 0.35);
  border: none;
  padding: 8px 32px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  transition: background 0.2s ease;
}

.category-open-btn:hover {
  background: rgba(255, 255, 255, 0.55);
}

.category-card:hover .category-icon-circle svg {
  animation: tada 1.5s ease infinite;
}
</style>

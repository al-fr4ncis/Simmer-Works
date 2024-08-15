<template>
  <HeroSection />
  <PreparationSection />
  <AboutUs />
</template>

<script>
import HeroSection from '@/components/Home/HeroSection.vue'
import PreparationSection from '@/components/Home/PreparationSection.vue'
import AboutUs from '@/components/Home/AboutUs.vue'

export default {
  components: {
    HeroSection,
    PreparationSection,
    AboutUs
  }
}
</script>

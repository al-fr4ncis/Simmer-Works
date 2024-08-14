<template>
    <HeroSection />
    <PreparationSection />
    <AboutUs />
</template>

<script>
import HeroSection from "@/components/SimmerWorks/Home/HeroSection.vue";
import PreparationSection from "@/components/SimmerWorks/Home/PreparationSection.vue";
import AboutUs from "@/components/SimmerWorks/Home/AboutUs.vue";

    export default {
        components: {
            HeroSection,
            PreparationSection,
            AboutUs,
        }
    }
</script>
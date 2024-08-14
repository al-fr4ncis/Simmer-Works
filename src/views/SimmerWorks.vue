<template>
  <MainNav />
  <main class="main">
    <RouterView />
    <LastSection />
    <FooterSection />
  </main>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import LastSection from "@/components/LastSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  components: {
    MainNav,
    LastSection,
    FooterSection,
  },
};
</script>
<style lang="scss">
:root {
  --black: #000000;
  --white-400: #f7ede1;
  --orange-600: #fa9a11;
  --red-600: #bf3110;
  --green-600: #155942;
  --blue: #007bff;
}

html, 
html:focus-within {
  scroll-behavior: auto;
}

.main {
  margin-top: 5.6rem;
}

.container {
  max-width: 1400px;
}
</style>

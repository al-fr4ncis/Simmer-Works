<template>
  <footer>
    <p>Simmer Works</p>
    <img src="/src/assets/images/copyright.webp" alt="copyright">
    <p>2024</p>

    <a class="link" href="/simmer-works-copyright-information" target="_blank">copyright details</a>
  </footer>
</template>

<style lang="scss" scoped>
$bg-black: var(--black);
$txt-white: var(--white-400);
$clr-blue: var(--blue);

footer {
  background-color: $bg-black;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  flex-wrap: wrap;
}

p {
  font-size: 1.6rem;
  font-family: Nord;
  font-weight: 700;
  color: $txt-white;
  letter-spacing: 1px;
}

img {
  max-width: 2rem;
  max-height: 2rem;
}

.link {
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: capitalize;
  color: #3366CC;
}
</style>

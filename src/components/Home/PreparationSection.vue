<template>
  <section class="preparation">
    <div class="container">
      <span class="preparation__hump"></span>

      <div class="preparation__header">
        <h1 class="preparation__title">
          <span class="simmered">Simmered to</span>
          <span class="perfection">Perfection.</span>
        </h1>

        <div class="preparation__tagline">
          <div class="preparation__tagline__container">
            <p class="preparation__recipe">OUR NOT-SO-SECRET RECIPE</p>
            <p class="preparation__prep-time">PREP TIME: 45 MINUTES</p>
            <div class="preparation__difficulty">
              <p class="difficulty-text">DIFFICULTY LEVEL</p>
              <div class="img-container">
                <img
                  src="/src/assets/images/sun.svg"
                  alt="sun-icon"
                />
                <img
                  src="/src/assets/images/sun.svg"
                  alt="sun-icon"
                />
                <img
                  src="/src/assets/images/sun.svg"
                  alt="sun-icon"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="preparation__highlight-box">
          <div class="preparation__highlight-box__img-container">
            <img
              src="/src/assets/images/lightbulb.svg"
              alt="lightbulb"
            />
          </div>
          <p class="preparation__highlight-box__text be-vietnam-pro-regular">
            Our name is an extension of our design pilosophy
          </p>
        </div>
      </div>

      <div class="preparation__steps">
        <div class="preparation__step">
          <p class="preparation__step--number one be-vietnam-pro-bold">1</p>
          <p class="preparation__step__title be-vietnam-pro-bold">Slice</p>
          <p class="preparation__step__description be-vietnam-pro-regular">
            We start with a bucket of fresh ideas <span>sliced</span> to
            precision
          </p>
        </div>
        <div class="preparation__step">
          <p class="preparation__step--number two be-vietnam-pro-bold">2</p>
          <p class="preparation__step__title be-vietnam-pro-bold">Cook</p>
          <p class="preparation__step__description be-vietnam-pro-regular">
            We <span>cook-up</span> meaningful stories and solutions for our
            partners.
          </p>
        </div>
        <div class="preparation__step">
          <p class="preparation__step--number three be-vietnam-pro-bold">3</p>
          <p class="preparation__step__title be-vietnam-pro-bold">Execute</p>
          <p class="preparation__step__description be-vietnam-pro-regular">
            We follow through with a simmering <span>execution</span> - crafted
            with creativity & infused with insight.
          </p>
        </div>
        <div class="preparation__step">
          <p class="preparation__step--number four be-vietnam-pro-bold">4</p>
          <p class="preparation__step__title be-vietnam-pro-bold">Serve</p>
          <p class="preparation__step__description be-vietnam-pro-regular">
            Hence, <span>serving</span> you with work that definitely will suit
            your taste.
          </p>
        </div>
      </div>
      <div class="preparation__button">
        <button @click="works" class="preparation--button roboto-black">
          See for yourself
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter()

  const works = () => {
    router.push('/works')
  }
</script>

<style lang="scss" scoped>
$txt-white: var(--white-400);
$txt-yellow: var(--orange-600);
$txt-black: var(--black);

$bg-white: var(--white-400);
$bg-black: var(--black);

$border-white: var(--white-400);

.preparation {
  background-color: $bg-black;
  margin-top: 2rem;
  padding: 7rem 1rem 5rem 1rem;
  display: flex;
  flex-direction: column;
  position: relative;

  &__hump {
    position: absolute;
    width: 5rem;
    height: 5rem;
    background-color: $bg-white;
    top: 0;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0 0 50% 50%;
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    color: $txt-white;
    font-size: 4.4rem;
    font-family: Scolth;
    font-weight: 700;
    text-align: center;
    line-height: 4rem;
    margin-bottom: 2rem;

    .simmered::after {
      content: " ";
    }
  }

  &__tagline {
    color: $txt-white;
    text-align: center;
    display: grid;
    gap: 1rem;
    font-size: 1rem;
    font-family: Nord;
  }

  &__difficulty {
    display: flex;
    justify-content: center;
    gap: 1rem;

    p.difficulty-text {
      white-space: nowrap;
    }

    .img-container {
      width: 6.5rem;
      display: flex;
      gap: 1rem;

      img {
        max-width: 1.5rem;
      }
    }
  }

  &__highlight-box {
    border: 1px solid $border-white;
    display: flex;
    align-items: center;
    border-radius: 1rem;
    margin-top: 2rem;
    min-width: 280px;

    &__img-container {
      padding: 1rem;
      border-right: 1px solid $border-white;

      img {
        min-width: 2.8rem;
      }
    }

    &__text {
      color: $txt-white;
      padding: 0 1rem;
      text-align: center;
      font-size: 1rem;
    }
  }

  &__steps {
    color: $txt-white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
    padding: 2rem 0;
    margin-top: 2rem;
  }

  &__step {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 1rem;

    &--number {
      position: relative;
      width: 6rem;
      height: 6rem;
      font-size: 3.5rem;
      border: 2px solid $border-white;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: default;
      transition: all 400ms linear;

      &::before {
        border-radius: 50%;
      }
    }

    .one::before,
    .two::before,
    .three::before,
    .four::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      inset: 0;
      animation: before 400ms linear;
      visibility: hidden;
    }

    .one::before {
      background-image: url(/src/assets/images/knife.svg);
    }

    .two::before {
      background-image: url(/src/assets/images/cook.svg);
    }

    .three::before {
      background-image: url(/src/assets/images/utensils.svg);
    }

    .four::before {
      background-image: url(/src/assets/images/bell.svg);
    }

    &:hover &--number {
      transform: scaleX(-1);

      &::before {
        animation: before-hover 400ms linear;
        visibility: visible;
      }
    }

    @keyframes before {
      0% {
        visibility: visible;
      }
      50% {
        visibility: hidden;
      }
      100% {
        visibility: hidden;
      }
    }

    @keyframes before-hover {
      0% {
        visibility: hidden;
      }
      50% {
        visibility: hidden;
      }
      100% {
        visibility: visible;
      }
    }

    &__title {
      font-size: 1.5rem;
      text-transform: uppercase;
      transform: scaleX(1);
    }

    &__description {
      text-align: center;

      span {
        color: $txt-yellow;
        font-style: italic;
      }
    }
  }

  &__button {
    display: flex;
    justify-content: center;
  }

  &--button {
    margin-top: 3rem;
    border: 0.2rem solid $border-white;
    background-color: transparent;
    color: $txt-white;
    padding: 1rem;
    text-transform: uppercase;
    font-size: 1.3rem;
    border-radius: 0.3rem;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.15s linear;

    &:hover {
      background-color: $bg-white;
      color: $txt-black;
    }
  }
}

@media (min-width: 575px) {
  .preparation {
    &__header {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    &__title {
      grid-column: span 2;
      // font-size: 4rem;
    }

    &__tagline {
      align-items: center;
      justify-content: center;
      margin-left: 1rem;

      &__container {
        gap: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: start;
      }
    }

    &__tagline,
    &__highlight-box {
      grid-row: 2;
    }

    &__highlight-box {
      margin: 0;
      max-width: 436px;

      &__text {
        width: 100%;
      }
    }

    &__steps {
      gap: 0;
    }

    &__step {
      gap: 2rem;
      padding: 2rem;

      &:nth-child(even) {
        border-left: 1px solid $border-white;
      }

      &__description {
        font-size: 1.1rem;
        margin-top: 2rem;
      }
    }
  }
}

@media (min-width: 766px) {
  .preparation {
    margin-top: 4rem;
  }
}

@media (min-width: 768px) {
  .preparation {
    gap: 2rem;
    padding: 8rem 2rem;

    &__title {
      font-size: 6.5rem;
    }

    &__tagline {
      font-size: 1.3rem;

      &__container {
        gap: 1rem;
      }
    }

    &__highlight-box {
      height: 100%;

      &__img-container {
        position: relative;
        border: none;
        padding: 2rem;

        &::after {
          position: absolute;
          content: "";
          background-color: $bg-white;
          height: 7.8rem;
          width: 0.1rem;
          right: -0.2rem;
          top: -0.5rem;
        }
      }

      &__text {
        padding: 0 2rem;
        font-size: 1.3rem;
      }
    }

    &__step {
      &--number {
        min-width: 8rem;
        min-height: 7.8rem;
        font-size: 5rem;
      }

      &__title {
        font-size: 1.8rem;
      }

      &__description {
        font-size: 1.4rem;
      }
    }

    &--button {
      font-size: 1.5rem;
      padding: 1rem 2rem;
    }
  }
}

@media (min-width: 990px) {
  .preparation {
    margin-top: 0;
  }
}

@media (min-width: 992px) {
  .preparation {
    align-items: center;

    &__header {
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: 1fr 1fr;
      max-height: 240px;
      width: 100%;
      align-items: start;
    }

    &__title {
      grid-column: 1 / 4;
      grid-row: span 2;
      text-align: left;
      font-size: 10rem;
      line-height: 12rem;
      margin: 0;
    }

    &__tagline,
    &__highlight-box {
      grid-column: 4 / 6;
      grid-row: 1;
    }

    &__tagline {
      margin: 1.5rem 1.5rem 0 1.5rem;
      justify-content: start;

      &__container {
        p {
          font-size: 1.5rem;
        }
      }
    }

    &__difficulty {
      .img-container img {
        max-width: 2rem;
      }
    }

    &__highlight-box {
      grid-row: 2;
      max-height: 8rem;
    }

    &__steps {
      grid-template-columns: repeat(4, 1fr);
    }

    &__step:nth-child(2) {
      border-right: 1px solid;
    }
  }
}
</style>

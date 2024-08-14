<template>
  <Section class="works">
    <div class="works__container container">
      <div class="works__header">
        <h1 class="works__title">
          What we've <span class="underline">served</span> so far.
        </h1>
        <p class="works__mission be-vietnam-pro-semibold">
          Our mission is simple — consistently deliver ideas and work that
          matter, and exceed client expectations. Reaffirming their identities,
          building their legacies, promoting their services, and impressing
          their customers — fulfilling your goals, as you fulfill ours.
        </p>
      </div>

      <ul class="works__list" role="list">
        <li class="works__item">
          <div class="works__item__content">
            <p class="restaurant-type">Chinese Restaurant</p>
            <h1 class="restaurant-name">Potch Restaurant</h1>
            <p class="restaurant-tagline be-vietnam-pro-semibold">
              Good Food. Good Fortune.
            </p>
            <RouterLink
              to="/menu"
              class="cta-link be-vietnam-pro-semibold"
              >Discover How</RouterLink
            >
          </div>
        </li>
        <li class="works__item">
          <div class="works__item__content">
            <p class="restaurant-type">Coffee Shop</p>
            <h1 class="restaurant-name">Cafe Ynani</h1>
            <p class="restaurant-tagline be-vietnam-pro-semibold">
              Harvested with Love
            </p>
            <RouterLink
              to="/menu"
              class="cta-link be-vietnam-pro-semibold"
              >Discover How</RouterLink
            >
          </div>
        </li>
        <li class="works__item">
          <div class="works__item__content">
            <p class="restaurant-type">Cafe</p>
            <h1 class="restaurant-name">Foam Coffee</h1>
            <p class="restaurant-tagline be-vietnam-pro-semibold">
              Coffee & Chill
            </p>
            <RouterLink
              to="/menu"
              class="cta-link be-vietnam-pro-semibold"
              >Discover How</RouterLink
            >
          </div>
        </li>
        <li class="works__item">
          <div class="works__item__content">
            <p class="restaurant-type">Farm</p>
            <h1 class="restaurant-name">Co-Grown</h1>
            <p class="restaurant-tagline be-vietnam-pro-semibold">
              WE PLANT GOODNESS
            </p>
            <RouterLink
              to="/menu"
              class="cta-link be-vietnam-pro-semibold"
              >Discover How</RouterLink
            >
          </div>
        </li>
        <li class="works__item">
          <div class="works__item__content">
            <p class="restaurant-type">Skincare</p>
            <h1 class="restaurant-name">The Skinery</h1>
            <p class="restaurant-tagline be-vietnam-pro-semibold">
              Glow beyond.
            </p>
            <RouterLink
              to="/menu"
              class="cta-link be-vietnam-pro-semibold"
              >Discover How</RouterLink
            >
          </div>
        </li>
        <li class="works__item">
          <div class="works__item__content">
            <p class="restaurant-type">Sushi Restaurant</p>
            <h1 class="restaurant-name">Ichiban Manila</h1>
            <p class="restaurant-tagline be-vietnam-pro-semibold">
              Warmth in every table.
            </p>
            <RouterLink
              to="/menu"
              class="cta-link be-vietnam-pro-semibold"
              >Discover How</RouterLink
            >
          </div>
        </li>
      </ul>

      <button class="works__button">more please</button>
    </div>
  </Section>
</template>

<style lang="scss" scoped>
$white-400: var(--white-400);
$black: var(--black);

$txt-white: $white-400;
$txt-black: $black;

$border-white: $white-400;

$bg-black: $black;
$bg-white: $white-400;

.works {
  background-color: $bg-black;
  color: $txt-white;
  padding: 2rem 1rem;

  &__container {
    display: grid;
    row-gap: 3rem;
  }

  &__header {
    display: grid;
    gap: 2rem;
    max-width: 500px;
    justify-self: center;
  }

  &__title {
    font-size: 4.2rem;
    font-family: Scolth;
    line-height: 55.86px;

    .underline {
      text-decoration: underline;
    }
  }

  &__mission {
    font-size: 1.6rem;
  }

  &__list {
    display: grid;
    row-gap: 1rem;
  }

  &__item {
    min-width: 212px;
    min-height: 252px;
    max-width: 732px;
    max-height: 732px;
    aspect-ratio: 1 / 1;
    border-radius: 1rem;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;

    &:nth-child(1) {
      background-image: url(/src/assets/images/Chinese_Restaurant.webp);
    }

    &:nth-child(2) {
      background-image: url(/src/assets/images/Coffee_Shop.webp);
    }

    &:nth-child(2) .restaurant-type {
      margin-bottom: 2rem;
    }

    &:nth-child(3) {
      background-image: url(/src/assets/images/Cafe.webp);
    }

    &:nth-child(4) {
      background-image: url(/src/assets/images/Farm.webp);
    }

    &:nth-child(5) {
      background-image: url(/src/assets/images/Skincare.webp);
    }

    &:nth-child(6) {
      background-image: url(/src/assets/images/Sushi_Restaurant.webp);
    }

    &__content {
      height: 100%;
      text-align: center;
      padding: 1rem;
      text-transform: uppercase;
      opacity: 0;
      transition: all 0.5s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &:hover {
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.8);
      }

      .restaurant-type {
        font-size: 1.2rem;
        font-family: Nord;
      }

      .restaurant-name {
        font-family: Nord;
        font-size: 2.8rem;
      }

      .restaurant-tagline {
        font-size: 1.4rem;
      }

      .restaurant-name,
      .restaurant-tagline {
        margin-bottom: 2rem;
      }

      .cta-link {
        color: $txt-white;
        font-size: 1.6rem;
        text-decoration: none;
        border-bottom: 1px solid;
        padding-bottom: 0.3rem;
        position: relative;

        &::after {
          position: absolute;
          content: "";
          background-image: url(/src/assets/images/right_arrow.svg);
          background-size: cover;
          height: 2rem;
          width: 2rem;
          right: -2.5rem;
          top: 50%;
          transform: translateY(-50%);
          animation: button 800ms forwards;
        }

        @keyframes button {
          0% {
            right: -3.7rem;
          }
          40% {
            right: -2.5rem;
          }
          60% {
            right: -2.7rem;
          }
          100% {
            right: -2.5rem;
          }
        }

        &:hover {
          &::after {
            animation: button-hover 800ms forwards;
          }
        }

        @keyframes button-hover {
          40% {
            right: -3.7rem;
          }
          60% {
            right: -3.5rem;
          }
          100% {
            right: -3.7rem;
          }
        }
      }
    }
  }

  &__button {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-family: Nord;
    justify-self: center;
    padding: 1rem 2rem;
    border: 2px solid $border-white;
    color: $txt-white;
    cursor: pointer;
    border-radius: 0.375rem;
    background-color: transparent;
    transition: all 0.2s ease;

    &:hover {
      background-color: $bg-white;
      color: $txt-black;
    }
  }
}

@media (min-width: 768px) {
  .works {
    padding: 4rem 2rem;

    &__container {
      gap: 6rem;
    }

    &__header {
      max-width: 681px;
      width: 100%;
      gap: 4rem;
    }

    &__title {
      white-space: nowrap;
      font-size: 7rem;
    }

    &__mission {
      max-width: 500px;
    }

    &__list {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 3rem;
    }

    &__item {
      min-width: 300px;
      min-height: 300px;

      &__content {
        .restaurant-name {
          font-size: 3.2rem;
        }
      }
    }
  }
}

@media (min-width: 1004px) {
  .works {
    padding: 6rem 4rem;

    &__container {
      max-width: 1400px;
      gap: 10rem;
    }

    &__header {
      max-width: unset;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10rem;
      align-items: center;
    }

    &__title {
      white-space: wrap;
      font-size: 9rem;
      line-height: 108px;
    }
  }
}

@media (min-width: 1280px) {
  .works {
    &__container {
      margin: 0 auto;
    }

    &__title {
      font-size: 10rem;
    }

    &__list {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 3rem;
    }
  }
}
</style>

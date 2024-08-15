<template>
  <Section class="menu">
    <div class="menu__container">
      <div class="menu__header">
        <h1 class="menu__title">Tell us what you're craving for.</h1>
      </div>

      <div class="menu__about-us">
        <nav class="menu__about-us__nav">
          <ul class="menu__about-us__nav__list nav-list container" role="list">
            <li
              @click="setActive(0)"
              :data-nav-active="active === 0 || null"
              class="menu__about-us__nav__item nav-list__item"
            >
              Appetizers
            </li>
            <li
              @click="setActive(1)"
              :data-nav-active="active === 1 || null"
              class="menu__about-us__nav__item nav-list__item"
            >
              Main Course
            </li>
            <li
              @click="setActive(2)"
              :data-nav-active="active === 2 || null"
              class="menu__about-us__nav__item nav-list__item"
            >
              Dessert
            </li>
          </ul>
        </nav>

        <div class="menu__about-us__content container">
          <ul class="menu__about-us__content__list" role="list">
            <li :data-item-active="active === 0 || null" class="menu__about-us__content__item">
              <div class="menu__about-us__content__title-container">
                <h1
                  class="menu__about-us__content__title content-title baskervville-regular-italic"
                >
                  Appetizers
                </h1>
                <p
                  class="menu__about-us__content__subtitle content-subtitle be-vietnam-pro-semibold"
                >
                  Simmer Solutions
                </p>
              </div>

              <div class="menu__about-us__content__phase-container">
                <h2 class="menu__about-us__content__phase be-vietnam-pro-bold">Phase 1</h2>
                <p class="menu__about-us__content__description be-vietnam-pro-semibold">
                  Increase your hunger for a Simmering brand! The foundation of a brand starts with
                  its content. It is our mission to develop your full brand identity that will
                  tantalize the market’s taste buds.
                </p>
              </div>

              <ul class="menu__about-us__content__services" role="list">
                <li class="menu__about-us__content__service be-vietnam-pro-bold">
                  Brand Messaging
                </li>
                <li class="menu__about-us__content__service be-vietnam-pro-bold">Brand Naming</li>
                <li class="menu__about-us__content__service be-vietnam-pro-bold">Brand Research</li>
                <li class="menu__about-us__content__service be-vietnam-pro-bold">Brand Strategy</li>
                <li class="menu__about-us__content__service be-vietnam-pro-bold">Copywriting</li>
              </ul>
            </li>

            <li :data-item-active="active === 1 || null" class="menu__about-us__content__item">
              <div class="menu__about-us__content__title-container">
                <h1
                  class="menu__about-us__content__title content-title baskervville-regular-italic"
                >
                  Main Course
                </h1>
                <p
                  class="menu__about-us__content__subtitle content-subtitle be-vietnam-pro-semibold"
                >
                  Brand Identity
                </p>
              </div>
              <div class="menu__about-us__content__phase-container">
                <h2 class="menu__about-us__content__phase be-vietnam-pro-bold">Phase 2</h2>
                <p class="menu__about-us__content__description be-vietnam-pro-semibold">
                  Our specialty. Modern and flexible. We create designs that will grow and evolve
                  with your brand content. Consistency is key when it comes to design and it is our
                  goal to create a look for your brand that will be ready to interact with the
                  modern world.
                </p>
              </div>

              <ul class="menu__about-us__content__services" role="list">
                <li class="menu__about-us__content__service be-vietnam-pro-bold">Brand Identity</li>
                <li class="menu__about-us__content__service be-vietnam-pro-bold">
                  Creative Direction
                </li>
                <li class="menu__about-us__content__service be-vietnam-pro-bold">
                  Digital Designs / ADs
                </li>
                <li class="menu__about-us__content__service be-vietnam-pro-bold">Logo Creation</li>
                <li class="menu__about-us__content__service be-vietnam-pro-bold">Photo & Video</li>
                <li class="menu__about-us__content__service be-vietnam-pro-bold">
                  Print and Packaging
                </li>
              </ul>
            </li>

            <li :data-item-active="active === 2 || null" class="menu__about-us__content__item">
              <div class="menu__about-us__content__title-container">
                <h1
                  class="menu__about-us__content__title content-title baskervville-regular-italic"
                >
                  Dessert
                </h1>
                <p
                  class="menu__about-us__content__subtitle content-subtitle be-vietnam-pro-semibold"
                >
                  Website Development
                </p>
              </div>
              <div class="menu__about-us__content__phase-container">
                <h2 class="menu__about-us__content__phase be-vietnam-pro-bold">Phase 3</h2>
                <p class="menu__about-us__content__description be-vietnam-pro-semibold">
                  Ready for dessert? Brand engagement is brand awareness. It allows brands to build
                  relationships with its market. It‘s all about gaining trust and enhancing brand
                  reputation by creating experiences that harness interaction.
                </p>
              </div>

              <ul class="menu__about-us__content__services" role="list">
                <li class="menu__about-us__content__service be-vietnam-pro-bold">
                  Mobile App Development (PWA)
                </li>
                <li class="menu__about-us__content__service be-vietnam-pro-bold">
                  Search Engine Optimization (SEO)
                </li>
                <li class="menu__about-us__content__service be-vietnam-pro-bold">UI/UX Design</li>
                <li class="menu__about-us__content__service be-vietnam-pro-bold">Web Design</li>
                <li class="menu__about-us__content__service be-vietnam-pro-bold">
                  Web Development
                </li>
              </ul>
            </li>
          </ul>

          <button class="menu__about-us__button">Add To Plate</button>
        </div>
      </div>

      <div class="menu__menu container">
        <h1 class="menu__menu__title">A la Carte Menu</h1>
        <div class="menu__menu__search-wrapper">
          <input type="text" class="menu__menu__search" placeholder="Search" />
        </div>

        <ul class="menu__menu__list" role="list">
          <li class="menu__menu__item">
            <div class="menu__menu__item__content">
              <h1 class="menu__menu__item__title">Brand Development</h1>
            </div>
            <button class="menu__menu__item__button">Add To Plate</button>
          </li>
          <li class="menu__menu__item">
            <div class="menu__menu__item__content">
              <h1 class="menu__menu__item__title">Brand Identity</h1>
            </div>
            <button class="menu__menu__item__button">Add To Plate</button>
          </li>
          <li class="menu__menu__item">
            <div class="menu__menu__item__content">
              <h1 class="menu__menu__item__title">Brand Messaging</h1>
            </div>
            <button class="menu__menu__item__button">Add To Plate</button>
          </li>
          <li class="menu__menu__item">
            <div class="menu__menu__item__content">
              <h1 class="menu__menu__item__title">Brand Naming</h1>
            </div>
            <button class="menu__menu__item__button">Add To Plate</button>
          </li>
          <li class="menu__menu__item">
            <div class="menu__menu__item__content">
              <h1 class="menu__menu__item__title">Brand Research</h1>
            </div>
            <button class="menu__menu__item__button">Add To Plate</button>
          </li>
          <li class="menu__menu__item">
            <div class="menu__menu__item__content">
              <h1 class="menu__menu__item__title">Brand Strategy</h1>
            </div>
            <button class="menu__menu__item__button">Add To Plate</button>
          </li>
        </ul>

        <div class="menu__menu__course">
          <div class="menu__menu__course__content">
            <h1 class="menu__menu__course__title baskervville-regular-italic">Full Course</h1>
            <p class="menu__menu__course__description">
              includes appetizers, main course, and desserts
            </p>
          </div>
          <button class="menu__menu__course__button">Add To Plate</button>
        </div>

        <div class="menu__menu__course">
          <div class="menu__menu__course__content">
            <h1 class="menu__menu__course__title baskervville-regular-italic">Chef’s Choice</h1>
            <p class="menu__menu__course__description">CAN'T DECIDE? TALK TO US.</p>
          </div>
          <button class="menu__menu__course__button">Add To Plate</button>
        </div>
      </div>

      <div class="menu__button-container">
        <button @click="checkout" class="menu__button">Checkout</button>
      </div>
    </div>
  </Section>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const active = ref(0)

    const setActive = (index) => {
      active.value = index
    }

    const checkout = () => {
      router.push('/checkout')
    }

    return {
      active,
      setActive,
      checkout
    }
  }
}
</script>

<style lang="scss" scoped>
$border: 1px solid red;

$white-400: var(--white-400);
$orange: var(--orange-600);
$black: var(--black);

$txt-white: $white-400;
$txt-black: $black;

$bg-black: $black;
$bg-white: $white-400;
$bg-orange: $orange;

$border-white: $white-400;

.menu {
  background-color: $bg-white;

  .container {
    margin: 0 auto;
  }

  &__header {
    padding: 4rem 2rem 2rem 2rem;
    background-color: $bg-black;
  }

  &__title {
    font-size: 3rem;
    font-family: Scolth;
    text-align: center;
    color: $txt-white;
  }

  &__about-us {
    display: grid;

    &__nav {
      padding: 3.5rem 2rem 0 2rem;
      background-color: $bg-black;

      &__list {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        column-gap: 0.6rem;
      }

      &__item {
        text-align: center;
        padding: 1rem 0;
        border: 1px solid $border-white;
        color: $txt-white;
        border-radius: 0.5rem 0.5rem 0 0;
        font-size: 1rem;
        font-family: Nord;
        font-weight: 500;
        cursor: pointer;
        position: relative;

        &[data-nav-active] {
          background-color: $bg-white;
          color: $black;

          &::before {
            position: absolute;
            content: '';
            width: 2rem;
            height: 1.5rem;
            top: -3.5rem;
            left: 50%;
            transform: translateX(-50%);
            background-image: url(/src/assets/images/arrow_down.svg);
            background-repeat: no-repeat;
          }
        }
      }
    }

    &__content {
      padding: 4rem 2rem 0 2rem;

      &__item {
        display: none;

        &[data-item-active] {
          display: block;
        }
      }

      &__title {
        font-size: 4rem;
      }

      &__subtitle {
        margin-top: 1rem;
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
        border: 0.2rem solid $black;
        width: fit-content;
        border-radius: 2rem;
      }

      &__phase {
        margin: 2rem 0 1rem 0;
        text-transform: uppercase;
        font-size: 1.4rem;
      }

      &__description {
        font-size: 1.4rem;
      }

      &__services {
        margin: 3rem 0;
        display: grid;
        row-gap: 0.5rem;
      }

      &__service {
        font-size: 1.4rem;
      }
    }

    &__button {
      width: 100%;
      font-size: 2rem;
      font-family: Nord;
      padding: 1.5rem 1rem;
      background-color: $bg-black;
      color: $txt-white;
      border-radius: 0.375rem;
      cursor: pointer;
      transition: 200ms ease;

      &:hover {
        background-color: $bg-orange;
        color: $black;
      }
    }
  }

  &__menu {
    padding: 4rem 2rem;

    &__title {
      font-size: 2rem;
      font-family: Nord;
      text-align: center;
      margin-bottom: 2rem;
    }

    &__search-wrapper {
      width: 100%;
      position: relative;
      cursor: pointer;

      &::after {
        position: absolute;
        content: '';
        width: 3rem;
        height: 3rem;
        right: 0.5rem;
        top: 50%;
        transform: translateY(-40%);
        background-image: url(/src/assets/images/search.svg);
        background-repeat: no-repeat;
        background-size: contain;
      }
    }

    &__search {
      width: 100%;
      padding: 1rem 3.5rem 1rem 2rem;
      font-size: 1.4rem;
      font-weight: 400;
      font-family: Nord;
      border-radius: 0.375rem;
      border: 2px solid $black;

      &::placeholder {
        color: $black;
      }
    }

    &__list {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
      padding-bottom: 4rem;
    }

    &__item {
      border: 2px solid $black;
      width: 100%;
      height: 15rem;
      border-radius: 1rem;
      display: flex;
      flex-direction: column;

      &__content {
        height: 100%;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &__title {
        font-family: Nord;
        font-size: 1.4rem;
        text-align: center;
      }

      &__button {
        font-size: 1.5rem;
        font-family: Nord;
        padding: 1.5rem 1rem;
        background-color: $bg-black;
        color: $txt-white;
        cursor: pointer;
        border: none;
        border-top: 2px solid $black;
        border-radius: 0 0 1rem 1rem;
        transition: all 200ms ease;

        &:hover {
          background-color: $bg-orange;
          color: $black;
        }
      }
    }

    &__course {
      border: 2px solid $black;
      border-radius: 1rem;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      height: 116px;

      &:nth-last-child(1) {
        margin-top: 3rem;
      }

      &__content {
        min-width: 200px;
        align-self: center;
        width: 100%;
        padding: 0 2rem;
      }

      &__title {
        font-size: 2.6rem;
      }

      &__description {
        font-size: 1.2rem;
        font-family: Nord;
      }

      &__button {
        white-space: nowrap;
        background-color: $bg-white;
        color: $txt-black;
        padding: 1rem 2rem;
        border: none;
        border-left: 2px solid $black;
        font-family: Nord;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          background-color: $bg-black;
          color: $txt-white;
        }
      }
    }
  }

  &__button-container {
    margin-top: 3rem;
    border-top: 0.6rem solid $black;
    display: flex;
    justify-content: center;
  }

  &__button {
    position: relative;
    bottom: 3.5rem;
    border-radius: 1rem;
    padding: 2rem 4rem;
    font-size: 2rem;
    font-family: Nord;
    background-color: $bg-black;
    color: $txt-white;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: $bg-orange;
      color: $txt-black;
    }
  }
}

@media (min-width: 480px) {
  .menu {
    .content-title {
      font-size: 6rem;
    }

    .content-subtitle {
      font-size: 1.2rem;
    }

    &__menu {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));

      &__search-wrapper::after {
        top: 40%;
      }

      &__list,
      &__course {
        grid-column: 1 / 3;
      }
    }
  }
}

@media (min-width: 768px) {
  .menu {
    &__header {
      padding: 10rem 2rem 8rem 2rem;
    }

    &__title {
      font-size: 6rem;
    }

    &__about-us {
      .nav-list {
        gap: 2rem;

        &__item {
          font-size: 2rem;
          padding: 2rem;
          border-radius: 1rem 1rem 0 0;
          border: 2px solid;
          border-bottom: none;
        }
      }

      &__content {
        padding-top: 6rem;

        &__item[data-item-active] {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          row-gap: 4rem;
        }

        .content-title {
          font-size: 7.2rem;
          line-height: 1;
        }

        .content-subtitle {
          font-size: 1.4rem;
          margin-top: 2rem;
          padding: 0.8rem 2rem;
          grid-column: 1;
        }

        &__phase {
          font-size: 1.8rem;
          margin-top: 0;
          margin-bottom: 2rem;
          grid-column: 2;
          grid-row: 1;
          align-self: center;
          height: fit-content;
        }

        &__services {
          margin-top: 0;
        }
      }

      &__button {
        font-size: 2.4rem;
      }
    }

    &__menu {
      &__title {
        text-align: left;
        font-size: 2.4rem;
        margin: 0;
        display: flex;
        align-items: center;
      }

      &__search {
        padding: 1.5rem;
      }

      &__search-wrapper::after {
        top: 45%;
      }

      &__list {
        gap: 2rem;
        padding-bottom: 6rem;
      }

      &__item {
        height: 246px;

        &__content {
          padding: 2rem;
        }

        &__title {
          font-size: 2.4rem;
        }

        &__button {
          font-size: 2rem;
          padding: 2.5rem 2rem;
        }
      }

      &__course {
        height: 176px;

        &__content {
          padding: 0 5rem;
        }

        &__title {
          font-size: 5rem;
        }

        &__description {
          font-size: 2rem;
        }

        &__button {
          font-size: 1.8rem;
          font-weight: 700;
        }
      }
    }
    &__button {
      font-size: 3rem;
      padding: 2rem 5rem;
    }
  }
}

@media (min-width: 992px) {
  .menu {
    &__menu {
      &__search-wrapper {
        max-width: 374px;
        justify-self: end;
      }

      &__list {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
  }
}

@media (min-width: 1280px) {
  .menu {
    &__header {
      padding: 15rem 2rem;
    }

    &__title {
      font-size: 9rem;
    }

    &__about-us {
      .nav-list {
        gap: 5rem;
      }

      &__content {
        &__item[data-item-active] {
          grid-template-columns: repeat(3, minmax(0, 1fr));
          row-gap: 6rem;
        }

        &__subtitle {
          font-size: 1.6rem;
        }

        &__phase-container {
          grid-column: 3;
        }

        &__phase {
          font-size: 2rem;
        }

        &__description {
          font-size: 1.6rem;
        }

        &__service {
          font-size: 2rem;
        }
      }
    }

    .content-title {
      font-size: 8rem;
    }

    .container {
      padding-left: 6rem;
      padding-right: 6rem;
    }
  }
}
</style>

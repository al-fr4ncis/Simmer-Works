<template>
  <nav class="nav">
    <ul
      class="nav__list"
      :class="{ 'mobile-menu-open': menu, 'desktop-menu': !menu }"
      role="list"
    >
      <li class="nav__item">
        <RouterLink @click="menuBtn(menu)" to="/" class="home">home</RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink @click="menuBtn(menu)" to="/works" class="works">works</RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink @click="menuBtn(menu)" to="/menu" class="menu">menu</RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink @click="menuBtn(menu)" to="/about" class="about">about</RouterLink>
      </li>
      <li class="nav__item">
        <button @click="checkout" class="quote-btn" role="button" aria-label="button">
          Get a Quote
        </button>
      </li>
      <button
        class="mobile-menu-btn"
        @click="menuBtn(true)"
        role="button"
        aria-label="button"
      >
        <span class="x"></span>
      </button>
    </ul>

    <h3 @click="home" class="nav__title text-logo">Simmer Works</h3>

    <ul class="nav__list-right" role="list">
      <li class="nav__list-right__item">
        <button @click="checkout" class="quote-btn" role="button" aria-label="button">
          Get a Quote
        </button>
      </li>
      <li class="nav__list-right__item" @click="toggleBell">
        <img
          src="@/assets/images/plate.webp"
          class="bell-icon"
          alt="bell icon"
        />
      </li>
      <li class="nav__list-right__item">
        <button
          class="menu-btn"
          @click="menuBtn(true)"
          role="button"
          aria-label="button"
        >
          <span class="hamburger"></span>
        </button>
      </li>
    </ul>

    <Teleport v-if="bell" to="#modal">
      <div id="bellModal" class="root bell-modal">
        <div class="bell-modal__container">
          <h1 class="h1 be-vietnam-pro-bold">YOU ORDERED</h1>
          <hr class="hr" />
          <button @click="checkout" class="quote-btn" role="button" aria-label="button">
            Get a Quote
          </button>
        </div>
      </div>
    </Teleport>
  </nav>
</template>

<script>
import { ref, onUnmounted, watch } from "vue";
import { useRouter } from 'vue-router'

export default {
  setup() {
    const bell = ref(false);
    const router = useRouter();

    // Handles clicks on the bell modal
    const modal = (event) => {
      if (event.target.id == "bellModal") {
        toggleBell();
      }
    };

    // Toggles the bell state
    const toggleBell = () => {
      bell.value = !bell.value;
    };

    // Watches for changes in the bell state
    // Adds or removes event listeners based on the bell state
    // This prevents memory leaks and unnecessary event handling
    watch(() => bell.value, (change) => {
      if (change) {
        window.addEventListener("click", modal);
      } else {
        window.removeEventListener("click", modal);
      }
    });

    // Ensures the event listener is removed when the component is unmounted
    // This prevents memory leaks and ensures proper cleanup
    onUnmounted(() => {
      window.removeEventListener("click", modal);
    });

    const menu = ref(false);

    const menuBtn = (button) => {
      if(button) {
        menu.value = !menu.value;
      }
    };

    const home = () => {
      router.push('/')
    }

    const checkout = () =>  {
      router.push('/checkout')
      if(bell.value) {
        toggleBell()
      } else if(menu.value) {
        menu.value = !menu.value;
      }
    }

    return {
      bell,
      toggleBell,
      menuBtn,
      menu,
      home,
      checkout
    };
  },
};
</script>

<style lang="scss" scoped>
$bg-white: var(--white-400);
$bg-black: var(--black);
$bg-orange: var(--orange-600);

$txt-white: var(--white-400);
$txt-black: var(--black);
$txt-orange: var(--orange-600);

$border-orange: var(--orange-600);

.nav {
  background-color: $bg-black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-height: 5.6rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;

  .desktop-menu {
    display: none;
  }

  .mobile-menu-open {
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background-color: $bg-black;
    z-index: 100;
  }

  &__list {
    .mobile-menu-btn {
      min-width: 4rem;
      min-height: 4rem;
      position: absolute;
      cursor: pointer;
      background-color: transparent;
      border: none;
      top: 10px;
      right: 10px;

      .x {
        position: absolute;
        height: 3px;
        width: calc(100% - 1rem);
        inset: 50%;
        transform: translate(-50%, -50%);

        &::before,
        &::after {
          position: absolute;
          content: "";
          background-color: $bg-white;
          width: 100%;
          height: 3px;
        }

        &::before {
          left: 0;
          transform: rotate(45deg);
        }

        &::after {
          left: 0;
          transform: rotate(135deg);
        }
      }
    }
  }

  &__item {
    & > a {
      text-decoration: none;
      font-size: 1.8rem;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      font-weight: 700;
      color: $txt-white;
      cursor: pointer;
      font-family: Nord;

      &:hover {
        color: $txt-orange;
      }
    }

    .quote-btn {
      background-color: $bg-orange;
      color: $txt-black;
      padding: 1rem 2.5rem;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      font-family: Nord;
      text-transform: uppercase;
      border: 2px solid $border-orange;
      margin-top: 6rem;

      &:hover {
        background-color: $bg-black;
        color: $txt-orange;
      }
    }
  }

  &__title {
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    font-size: 3rem;
    color: $txt-white;
    font-family: Rockids-Regular;
    letter-spacing: 0.2rem;
    font-weight: 400;
    cursor: pointer;
  }

  &__list-right {
    display: flex;
    gap: 1rem;

    &__item {
      .quote-btn {
        display: none;
      }

      .bell-icon {
        cursor: pointer;
        min-width: 3.2rem;
      }

      .menu-btn {
        background-color: transparent;
        border: none;
        position: relative;
        height: 1.7rem;
        width: 2.5rem;
        cursor: pointer;

        .hamburger,
        .hamburger::before,
        .hamburger::after {
          display: block;
          height: 3px;
          width: 100%;
          background-color: $bg-white;
        }

        .hamburger::before,
        .hamburger::after {
          position: absolute;
          content: "";
          right: 0;
        }

        .hamburger::before {
          top: 0;
        }

        .hamburger::after {
          bottom: 0;
        }
      }
    }
  }
}

.bell-modal {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 999;

    &__container {
      min-width: 300px;
      min-height: 320px;
      margin-top: 1rem;
      margin-right: 1rem;
      padding: 3rem;
      border: 2px solid black;
      border-radius: 2rem;
      background-color: rgb(247, 237, 225);
      position: relative;

      .h1 {
        font-size: 1.2rem;
      }

      .hr {
        margin-top: 2rem;
        border: 2px dashed black;
      }

      .quote-btn {
        position: absolute;
        bottom: calc(0px + 1.5rem);
        right: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: fit-content;
        white-space: nowrap;
        padding: 0.6rem 1.6rem;
        border-radius: 0.5rem;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        font-family: Nord;
        background-color: #fa9a11;
        color: black;
        border: 2px solid #fa9a11;

        &:hover {
          background-color: black;
          color: #fa9a11;
        }
      }
    }
  }

@media (min-width: 990px) {
  .nav {
    padding: 1rem 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;

    .desktop-menu {
      align-self: center;
      display: flex;
      gap: 4rem;
      // margin-left: 3rem;

      .mobile-menu-btn {
        display: none;
      }
    }

    &__item {
      & > a {
        font-size: 1.4rem;
      }

      .quote-btn {
        display: none;
      }
    }

    &__title {
      text-align: center;
      max-height: 3.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__list-right {
      display: flex;
      justify-content: right;
      gap: 0;

      &__item {
        display: flex;
        align-items: center;

        .quote-btn {
          position: relative;
          z-index: 99;
          margin-right: 1.5rem;
          display: block;
          background-color: $bg-orange;
          color: $txt-black;
          padding: 0.6rem 1rem;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          font-size: 1.4rem;
          font-family: Nord;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          border: 2px solid $border-orange;

          &:hover {
            background-color: $bg-black;
            color: $txt-orange;
          }
        }

        .menu-btn {
          display: none;
        }
      }
    }
  }
}
</style>

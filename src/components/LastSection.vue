<template>
  <Section class="last-section">
    <div class="container">
      <div class="last-section__header">
        <div class="last-section__header__icon">
          <div class="body">
            <div class="eyes">
              <div class="eye">
                <div class="ball"></div>
              </div>
              <div class="eye">
                <div class="ball"></div>
              </div>
            </div>
          </div>
        </div>

        <p class="last-section__header__title">
          Let's <span class="underline">taco</span>'bout your brand.
        </p>

        <button @click="checkout" class="last-section__header__btn">Get a Quote</button>
      </div>

      <div class="last-section__buttons">
        <ul class="last-section__buttons__list" role="list">
          <li class="last-section__buttons__item">
            <RouterLink to="/" class="last-section__buttons__btn">Home</RouterLink>
          </li>
          <li class="last-section__buttons__item">
            <RouterLink to="/works" class="last-section__buttons__btn">Works</RouterLink>
          </li>
          <li class="last-section__buttons__item">
            <RouterLink to="/menu" class="last-section__buttons__btn">Menu</RouterLink>
          </li>
          <li class="last-section__buttons__item">
            <RouterLink to="/about" class="last-section__buttons__btn">About</RouterLink>
          </li>
        </ul>
        <img
          class="last-section__buttons__img"
          src="/src/assets/images/holla.svg"
          alt="holla"
        />
      </div>

      <p class="last-section__right-text rose">Simmer Works</p>
    </div>
  </Section>
</template>

<script>
import { onMounted } from "vue";
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter()

    onMounted(() => {
      const eye = document.getElementsByClassName("ball");

      document.addEventListener("mousemove", (e) => {
        // Get the horizontal position of the mouse cursor relative to the viewport
        let clientX = e.clientX;
        // Get the vertical position of the mouse cursor relative to the viewport
        let clientY = e.clientY;

        // Get the width and height of the viewport
        let viewportWidth = window.innerWidth;
        let viewportHeight = window.innerHeight;

        // Calculate the horizontal center of the viewport
        let centerX = viewportWidth / 2;
        // Calculate the vertical center of the viewport
        let centerY = viewportHeight / 2;

        // Calculate the horizontal and vertical position of the mouse cursor relative to the center of the viewport,
        // then scale it to a range suitable for the CSS transform property
        let scaledX = ((clientX - centerX) / (viewportWidth / 2)) * 20;
        let scaledY = ((clientY - centerY) / (viewportHeight / 2)) * 10;

        // Loop through each element in the 'eye' collection
        for (let i = 0; i < eye.length; i++) {
          // Apply a CSS transform to the element to translate it based on the scaled mouse position
          eye[i].style.transform = `translate(${scaledX}%, ${scaledY}%)`;
        }
      });
    });
    
    function checkout() {
      router.push('/checkout')
    }

    return {
      checkout
    }
  },
};
</script>

<style lang="scss" scoped>
$black: var(--black);
$white: var(--white-400);
$orange: var(--orange-600);

$bg-black: $black;
$bg-white: $white;

$txt-white: $white;
$txt-black: $black;

.last-section {
  padding: 4rem 1rem 2rem 1rem;
  background-color: $bg-white;

  .container {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: 1fr auto;
    row-gap: 6rem;
    margin: 0 auto;
  }

  &__header {
    grid-column: 1 / 4;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__icon {
      position: relative;
      min-height: 141px;
      min-width: 300px;
      display: flex;
      justify-content: center;

      .body {
        background: url(/src/assets/images/body.png);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;

        .eyes {
          height: 2rem;
          margin-top: 2.7rem;
          display: flex;
          justify-content: center;
          gap: 5rem;

          .eye {
            width: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;

            .ball {
              background: url(/src/assets/images/pupil.webp);
              background-size: contain;
              background-repeat: no-repeat;
              min-width: 1.2rem;
              min-height: 1.6rem;
            }
          }
        }
      }
    }

    &__title {
      font-family: Scolth;
      font-size: 2.4rem;
      margin-top: 1rem;
      margin-bottom: 2rem;

      .underline {
        border-bottom: 2px solid;
      }
    }

    &__btn {
      background-color: transparent;
      border: 2px solid var(--black);
      font-size: 1.6rem;
      font-family: Nord;
      font-weight: 600;
      padding: 0.7rem 1rem;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: background-color 0.2s, color 0.2s;

      &:hover {
        background-color: var(--black);
        color: $txt-white;
      }
    }
  }

  &__buttons {
    grid-row: 2;
    display: flex;
    position: relative;

    &__list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      border-right: 0.3rem solid;
      padding-right: 2rem;
    }

    &__item {
      a {
        text-decoration: none;
        font-size: 1.4rem;
        color: $txt-black;
        font-family: Nord;
        font-weight: 700;

        &:hover {
          color: $orange;
        }
      }
    }

    &__img {
      position: absolute;
      top: 4.5rem;
      left: 6rem;
      transform: rotate(-90deg);
      min-width: 100px;
      max-width: 100px;
      min-height: 1.75rem;
      max-height: 1.75rem;
    }
  }

  &__right-text {
    grid-column: 2 / 4;
    grid-row: 2;
    display: flex;
    justify-content: end;
    align-items: end;
    font-size: 2.4rem;
    font-family: Rockids-Regular;
    font-weight: 400;
    letter-spacing: 0.2rem;
  }
}

@media (min-width: 768px) {
  .last-section {
    padding: 6rem 2rem 4rem 2rem;

    .container {
      gap: 8rem;
    }

    &__header {
      &__title {
        font-size: 3rem;
        margin-top: 2rem;
        margin-bottom: 4rem;
      }

      &__btn {
        font-size: 2rem;
        padding: 1rem 4rem;
      }
    }

    &__buttons {
      &__item {
        a {
          font-size: 1.8rem;
        }
      }

      &__img {
        min-height: 3.5rem;
        min-width: 200px;
      }
    }

    &__right-text {
      font-size: 4.2rem;
    }
  }
}

@media (min-width: 992px) {
  .last-section {
    padding: 8rem 4rem 6rem 4rem;

    &__header {
      &__title {
        font-size: 3.6rem;
      }

      &__btn {
        font-size: 2.4rem;
        padding: 1rem 3rem;
      }
    }

    &__buttons {
      &__item {
        a {
          font-size: 2.4rem;
        }
      }

      &__img {
        top: 7rem;
      }
    }
  }
}
</style>

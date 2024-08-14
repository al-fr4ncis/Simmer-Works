<template>
  <Section class="about-us">
    <div class="container">
      <h1 class="about-us__title">
        We are more than just a Design and Branding Studio.
      </h1>

      <div class="about-us__menu">
        <div class="about-us__menu__buttons">
          <button @click="btnPre" class="about-us__menu--btn-pre btn">
            <img
              src="/src/assets/images/left-arrow.svg"
              alt="left-arrow"
            />
          </button>
          <ul class="about-us__menu__title-list" role="list" data-title-list>
            <li class="about-us__menu__title-item">Appetizers</li>
            <li class="about-us__menu__title-item" data-active>Main Course</li>
            <li class="about-us__menu__title-item">Dessert</li>
          </ul>
          <button @click="btnNext" class="about-us__menu--btn-next btn">
            <img
              src="/src/assets/images/right-arrow.svg"
              alt="left-arrow"
            />
          </button>
        </div>

        <ul class="about-us__menu__list" role="list" data-menu-list>
          <li class="about-us__menu__items">
            <p class="about-us__menu__item">Appetizers</p>
            <p class="about-us__menu__item be-vietnam-pro-bold">
              Brand Messaging
            </p>
            <p class="about-us__menu__item be-vietnam-pro-bold">Brand Naming</p>
            <p class="about-us__menu__item be-vietnam-pro-bold">
              Brand Research
            </p>
            <p class="about-us__menu__item be-vietnam-pro-bold">
              Brand Strategy
            </p>
            <p class="about-us__menu__item be-vietnam-pro-bold">Copywriting</p>
          </li>
          <li class="about-us__menu__items" data-active>
            <p class="about-us__menu__item">Main Course</p>
            <p class="about-us__menu__item be-vietnam-pro-bold">
              Brand Identity
            </p>
            <p class="about-us__menu__item be-vietnam-pro-bold">
              Creative Direction
            </p>
            <p class="about-us__menu__item be-vietnam-pro-bold">
              Digital Designs / ADs
            </p>
            <p class="about-us__menu__item be-vietnam-pro-bold">
              Logo Creation
            </p>
            <p class="about-us__menu__item be-vietnam-pro-bold">
              Photo & Video
            </p>
          </li>
          <li class="about-us__menu__items">
            <p class="about-us__menu__item">Dessert</p>
            <p class="about-us__menu__item be-vietnam-pro-bold">
              Mobile App Development (PWA)
            </p>
            <p class="about-us__menu__item be-vietnam-pro-bold">
              Search Engine Optimization (SEO)
            </p>
            <p class="about-us__menu__item be-vietnam-pro-bold">UI/UX Design</p>
            <p class="about-us__menu__item be-vietnam-pro-bold">Web Design</p>
            <p class="about-us__menu__item be-vietnam-pro-bold">
              Web Development
            </p>
          </li>
        </ul>
      </div>
      <button @click="menu" class="about-us__btn">Wait, there's more?</button>
    </div>
  </Section>
</template>

<script>
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
    const router = useRouter()

    // change slide function
    const changeSlide = (direction) => {
      // Get the list of slides and the active slide
      const activeSlide = document.querySelector("[data-active]");
      const slideList = document.querySelector("[data-title-list]");
      const slides = [...slideList.children];
      const activeIndex = slides.indexOf(activeSlide);

      // Get the content list
      const activeSlideContent = document
        .querySelector("[data-menu-list]")
        .querySelector("[data-active]");
      const slideContentList = document.querySelector("[data-menu-list]").children;

      // Function to set attributes on slides
      const changeSlideAttributes = (slides, removeAttr, addAttr) => {
        slides.forEach((slide) => {
          slide.removeAttribute(removeAttr);
          slide.setAttribute(addAttr, "");
        });
      };

      // Set attributes of the currently active slide
      changeSlideAttributes(
        [activeSlide, activeSlideContent],
        "data-active",
        "data-previous"
      );

      // Calculate the index of the next slide
      const nextSlideIndex = (activeIndex + direction + slides.length) % slides.length;
      const nextSlide = slides[nextSlideIndex];
      const nextSlideContent = slideContentList[nextSlideIndex];

      // Remove the "data-previous" attribute from hidden slides
      // This prevents interference with CSS animations
      const hiddenSlideIndex = (activeIndex - direction + slides.length) % slides.length;
      slideContentList[hiddenSlideIndex].removeAttribute("data-previous");
      slides[hiddenSlideIndex].removeAttribute("data-previous");

      // Set attributes of the next slide
      changeSlideAttributes(
        [nextSlide, nextSlideContent],
        "data-previous",
        "data-active"
      );
    };

    // Functions to handle previous and next button clicks
    const btnPre = () => changeSlide(-1);
    const btnNext = () => { changeSlide(+1); };

    // Redirect ----------------------------------------------------
    function menu() {
      router.push('/menu')
    }

    return {
      btnNext,
      btnPre,
      menu
    };
  },
};
</script>

<style lang="scss" scoped>
$border-black: var(--black);

$txt-black: var(--black);
$txt-white: var(--white-400);

$bg-white: var(--white-400);
$bg-black: var(--black);

.about-us {
  border-bottom: 0.3rem solid $border-black;
  padding: 5rem 1rem;
  background-color: $bg-white;
  overflow: hidden;

  .container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }

  &__title {
    padding: 1rem;
    font-size: 3rem;
    color: $txt-black;
    text-align: center;
    line-height: 1.33;
    font-family: Scolth;
    max-width: 480px;
  }

  &__menu {
    height: 100%;
    max-height: 210px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &__buttons {
      min-height: 3.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
    }

    &--btn-pre,
    &--btn-next {
      width: 3.4rem;
      height: 2.8rem;
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }

    &__title-item {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: none;
      font-family: Nord;
      font-size: 1.4rem;
      font-weight: 700;

      &[data-active] {
        display: block;
        opacity: 0;
        animation: out-in 0.5s forwards;
        animation-delay: 0.5s;
      }

      @keyframes out-in {
        to {
          opacity: 1;
        }
      }

      &[data-previous] {
        display: block;
        opacity: 1;
        animation: in-out 0.5s forwards;
      }

      @keyframes in-out {
        to {
          display: none;
          opacity: 0;
        }
      }
    }

    &__list {
      height: 173px;
      display: flex;
      align-items: center;
      position: relative;
    }

    &__items {
      position: absolute;
      display: none;
      width: 100%;

      &[data-active] {
        display: block;

        p {
          display: flex;
          justify-content: center;
          opacity: 0;
          transform: translateX(100%);
          animation: slide-in 0.5s forwards;
          animation-delay: 0.5s;

          &:nth-child(1) {
            display: none;
          }

          &:nth-child(2) {
            animation-delay: 0.6s;
          }

          &:nth-child(3) {
            animation-delay: 0.7s;
          }

          &:nth-child(4) {
            animation-delay: 0.8s;
          }

          &:nth-child(5) {
            animation-delay: 0.9s;
          }

          &:nth-child(6) {
            animation-delay: 1s;
          }
        }

        @keyframes slide-in {
          50% {
            transform: translateX(-10%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      }

      &[data-previous] {
        display: block;

        p {
          opacity: 1;
          transform: translateX(0);
          animation: slide-out 0.5s forwards;

          &:nth-child(1) {
            display: none;
          }

          &:nth-child(2) {
            animation-delay: 0.4s;
          }

          &:nth-child(3) {
            animation-delay: 0.3s;
          }

          &:nth-child(4) {
            animation-delay: 0.2s;
          }

          &:nth-child(5) {
            animation-delay: 0.1s;
          }

          &:nth-child(6) {
            animation-delay: 0s;
          }
        }
      }

      @keyframes slide-out {
        to {
          opacity: 0;
          transform: translateX(-100%);
        }
      }

      &[data-active],
      &[data-previous] {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
    }

    &__item {
      white-space: nowrap;
      font-size: 1.8rem;
      text-align: center;
    }
  }

  &__btn {
    padding: 1.3rem 2rem;
    border-radius: 0.5rem;
    border: 3px solid;
    background-color: transparent;
    font-size: 1.4rem;
    cursor: pointer;
    font-family: Nord;
    font-weight: 600;
    transition: background-color 0.2s, color 0.2s;

    &:hover {
      background-color: $bg-black;
      color: $txt-white;
    }
  }
}

@media (min-width: 768px) {
  .about-us {
    padding-left: 2rem;
    padding-right: 2rem;

    .container {
      gap: 5rem;
    }

    &__title {
      font-size: 4rem;
      max-width: 500px;
      line-height: 4.8rem;
      padding: 0;
    }

    &__menu {
      max-height: none;

      &__buttons {
        display: none;
      }

      &__title-item {
        display: block;
        transform: translate(0);
        position: static;
      }

      &__list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 1rem;
        height: 100%;
        align-items: start;
      }

      &__items {
        position: static;
        display: block;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        &[data-active],
        &[data-previous] {
          p {
            opacity: 1;
            transform: translateX(0);
            animation: none;

            &:nth-child(1) {
              display: block;
            }
          }
        }
      }

      &__item {
        font-size: 2rem;
        white-space: wrap;
        font-weight: 700;

        &:nth-child(1) {
          font-size: 1.6rem;
          font-family: Nord;
          margin: 0 0 2rem 0;
          display: block;
        }
      }
    }

    &__btn {
      padding: 1.5rem 2rem;
      letter-spacing: 0.1rem;
    }
  }
}

@media (min-width: 992px) {
  .about-us {
    &__title {
      max-width: 900px;
      font-size: 6rem;
      line-height: 7.2rem;
    }

    &__menu {
      &__item {
        font-size: 2.2rem;
      }
    }
  }
}

@media (min-width: 1280px) {
  .about-us {
    &__menu {
      &__item {
        font-size: 2.4rem;
      }
    }
  }
}
</style>

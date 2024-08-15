<template>
  <Section class="about">
    <div class="about__container container">
      <h1 class="about__title">The Creative Cooks</h1>
      <ul class="about__cooks-list" role="list">
        <li class="about__cooks-item">
          <img class="about__cooks-item__img" src="/src/assets/images/1.webp" alt="img" />
          <div class="about__cooks-item__text-container text-container">
            <p class="about__cooks-item__name name">R.K. De la Rosa</p>
            <p class="about__cooks-item__role role be-vietnam-pro-semibold">Creative Director</p>
            <p class="about__cooks-item__hover hover be-vietnam-pro-semibold">
              Crazy bao't design.
            </p>
          </div>
        </li>
        <li class="about__cooks-item">
          <img class="about__cooks-item__img" src="/src/assets/images/2.webp" alt="img" />
          <div class="about__cooks-item__text-container text-container">
            <p class="about__cooks-item__name name">Jean Chua</p>
            <p class="about__cooks-item__role role be-vietnam-pro-semibold">Chef Strategist</p>
            <p class="about__cooks-item__hover hover be-vietnam-pro-semibold">
              I'm cold, but I can make you happy. *wink*
            </p>
          </div>
        </li>
        <li class="about__cooks-item">
          <img class="about__cooks-item__img" src="/src/assets/images/3.webp" alt="img" />
          <div class="about__cooks-item__text-container text-container">
            <p class="about__cooks-item__name name">Jena Hernandez</p>
            <p class="about__cooks-item__role role be-vietnam-pro-semibold">Multimedia Artist</p>
            <p class="about__cooks-item__hover hover be-vietnam-pro-semibold">Ramen calm.</p>
          </div>
        </li>
        <li class="about__cooks-item">
          <img class="about__cooks-item__img" src="/src/assets/images/4.webp" alt="img" />
          <div class="about__cooks-item__text-container text-container">
            <p class="about__cooks-item__name name">Kristel De Leon</p>
            <p class="about__cooks-item__role role be-vietnam-pro-semibold">Accounts Executive</p>
            <p class="about__cooks-item__hover hover be-vietnam-pro-semibold">
              Livin' la Vida Yolk'a!
            </p>
          </div>
        </li>
        <li class="about__cooks-item">
          <img class="about__cooks-item__img" src="/src/assets/images/5.webp" alt="img" />
          <div class="about__cooks-item__text-container text-container">
            <p class="about__cooks-item__name name">Alexander Marinas</p>
            <p class="about__cooks-item__role role be-vietnam-pro-semibold">Web Development Head</p>
            <p class="about__cooks-item__hover hover be-vietnam-pro-semibold">Sip happens.</p>
          </div>
        </li>
        <li class="about__cooks-item">
          <img class="about__cooks-item__img" src="/src/assets/images/6.webp" alt="img" />
          <div class="about__cooks-item__text-container text-container">
            <p class="about__cooks-item__name name">Psalm Labayo</p>
            <p class="about__cooks-item__role role be-vietnam-pro-semibold">Graphic Designer</p>
            <p class="about__cooks-item__hover hover be-vietnam-pro-semibold">
              The only love triangles I crave for.
            </p>
          </div>
        </li>
        <li class="about__cooks-item">
          <img class="about__cooks-item__img" src="/src/assets/images/7.webp" alt="img" />
          <div class="about__cooks-item__text-container text-container">
            <p class="about__cooks-item__name name">Paula Ayes</p>
            <p class="about__cooks-item__role role be-vietnam-pro-semibold">Multimedia Artist</p>
            <p class="about__cooks-item__hover hover be-vietnam-pro-semibold">Caution, I'm hot.</p>
          </div>
        </li>
        <li class="about__cooks-item">
          <img class="about__cooks-item__img" src="/src/assets/images/8.webp" alt="img" />
          <div class="about__cooks-item__text-container text-container">
            <p class="about__cooks-item__name name">SJ Gulmatico</p>
            <p class="about__cooks-item__role role be-vietnam-pro-semibold">Simmer Head</p>
            <p class="about__cooks-item__hover hover be-vietnam-pro-semibold">
              I just like chicken wings.
            </p>
          </div>
        </li>
        <li class="about__cooks-item">
          <img class="about__cooks-item__img" src="/src/assets/images/9.webp" alt="img" />
          <div class="about__cooks-item__text-container text-container">
            <p class="about__cooks-item__name name">Dastyn De Jesus</p>
            <p class="about__cooks-item__role role be-vietnam-pro-semibold">Fashion Head</p>
            <p class="about__cooks-item__hover hover be-vietnam-pro-semibold">
              When life throws you bananas, make turon.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </Section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$black: var(--black);
$white: var(--white-400);
$orange: var(--orange-600);

$txt-white: $white;
$txt-orange: $orange;

$border-white: $white;
$bg-black: $black;
$bg-white: $white;

.about {
  padding: 4rem 1rem 6rem 1rem;
  background-color: $bg-black;

  &__container {
    margin: 0 auto;
    max-width: 1000px;
  }

  &__title {
    text-align: center;
    margin-bottom: 2rem;
    font-family: Scolth;
    font-size: 3rem;
    font-weight: 700;
    color: $txt-white;
  }

  &__cooks-list {
    display: grid;
    justify-items: center;
    gap: 2rem;
  }

  &__cooks-item {
    min-width: 16rem;
    min-height: 18rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 0.2rem solid $border-white;

    &__img {
      max-width: 10rem;
      max-height: 116px;
      margin: auto 0;
    }

    &__text-container {
      padding: 1rem;
      width: 100%;
      text-align: center;
      border-radius: 0 0 1rem 1rem;
      position: relative;

      &:hover {
        background-color: $bg-white;

        .name,
        .role {
          opacity: 0;
        }

        .hover {
          display: block;
          position: absolute;
          padding: 1rem;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.1rem;
        }

        &::before {
          position: absolute;
          content: '';
          background-color: $bg-white;
          min-width: 3rem;
          min-height: 1.5rem;
          top: -1.5rem;
          left: 1.5rem;
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      }
    }

    &__name {
      color: $txt-orange;
      font-size: 1.2rem;
      font-family: Nord;
      font-weight: 700;
    }

    &__role {
      color: $white;
      font-size: 1rem;
    }

    &__hover {
      display: none;
    }
  }
}

@media (min-width: 375px) {
  .about {
    &__cooks-list {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    &__cooks-item:nth-last-child(1) {
      grid-column: 1 / 3;
    }
  }
}

@media (min-width: 480px) {
  .about {
    padding-left: 2rem;
    padding-right: 2rem;

    &__title {
      font-size: 3.8rem;
    }

    &__cooks-list {
      max-width: fit-content;
      margin: 0 auto;
    }
  }
}

@media (min-width: 605px) {
  .about {
    &__cooks-list {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    &__cooks-item:nth-last-child(1) {
      grid-column: unset;
    }
  }
}

@media (min-width: 775px) {
  .about {
    &__title {
      font-size: 4.8rem;
      margin-bottom: 4rem;
    }

    &__cooks-item {
      width: 100%;
      min-height: 220px;

      &__img {
        max-height: 14.6rem;
      }

      &__text-container:hover .hover {
        font-size: 1.4rem;
      }

      &__name {
        font-size: 1.6rem;
      }

      &__role {
        font-size: 1.2rem;
      }
    }
  }
}

@media (min-width: 992px) {
  .about {
    &__cooks-item {
      min-height: 240px;
    }
  }
}
</style>

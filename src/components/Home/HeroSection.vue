<template>
  <section class="hero">
    <ul class="hero__list">
      <li class="hero__item">
        <img src="@/assets/images/utensils.webp" alt="utensils" class="img-cell" />
        <p>
          <span class="line-one">
            <span class="crafted be-vietnam-pro-bold">Crafted</span>
            <span class="libre-baskerville-regular-italic with">with</span>
          </span>
          <span class="be-vietnam-pro-bold line-two">creativity.</span>
        </p>
      </li>
      <li class="hero__item">
        <picture>
          <source media="(min-width:990px)" srcset="@/assets/images/fish.webp" />
          <img src="@/assets/images/fish_right.webp" alt="Fish" />
        </picture>

        <p>
          <span class="line-one">
            <span class="libre-baskerville-regular-italic">Sliced</span>
            <span class="to be-vietnam-pro-bold">to</span>
          </span>
          <span class="line-two be-vietnam-pro-bold">Precision.</span>
        </p>
      </li>
      <li class="hero__item">
        <img src="@/assets/images/drink.webp" alt="drink" class="img-cell" />

        <p>
          <span class="line-one">
            <span class="libre-baskerville-regular-italic">A sip</span>
            <span class="of be-vietnam-pro-bold">of</span>
          </span>
          <span class="line-two be-vietnam-pro-bold">Curiosity.</span>
        </p>
      </li>
      <li class="hero__item">
        <picture>
          <source media="(min-width:990px)" srcset="@/assets/images/holla.webp" />
          <img src="@/assets/images/holla_up.webp" alt="holla" />
        </picture>

        <p>
          <span class="line-one be-vietnam-pro-bold">How we say</span>
          <span class="line-two libre-baskerville-regular-italic">hello.</span>
        </p>
      </li>
      <li class="hero__item">
        <picture>
          <source media="(min-width:990px)" srcset="@/assets/images/menu.webp" />
          <img src="@/assets/images/menu_right.webp" alt="Fish" />
        </picture>

        <p>
          <span class="be-vietnam-pro-bold">Our</span>
          <span class="libre-baskerville-regular-italic">special</span>
          <span class="be-vietnam-pro-bold">tools.</span>
        </p>
      </li>
      <li class="hero__item">
        <div class="price">
          <span class="be-vietnam-pro-bold">12</span>
          <span class="be-vietnam-pro-bold">.00</span>
        </div>
        <p class="roboto-black p-one">Fresh Ideas</p>
        <img src="@/assets/images/burger.webp" alt="burger" class="img-cell" />
        <p class="p-two">
          <span class="be-vietnam-pro-bold">Infused with</span>
          <span class="libre-baskerville-regular-italic">insight.</span>
        </p>
      </li>
      <li class="hero__item">
        <img src="@/assets/images/fries.webp" alt="fries" class="img-cell" />
        <p>
          <span class="line-one">
            <span class="libre-baskerville-regular-italic">Bucket</span>
            <span class="be-vietnam-pro-bold">of</span>
          </span>
          <span class="line-two be-vietnam-pro-bold">fresh ideas.</span>
        </p>
      </li>
      <li class="hero__item">
        <img src="@/assets/images/simmer_works.webp" alt="simmer_works" class="img-cell" />
        <img src="@/assets/images/simmer_works_logo.webp" alt="logo" class="logo" />
      </li>
      <li class="hero__item">
        <p class="roboto-black p-one">Sliced To Precision</p>
        <img src="@/assets/images/pizza.webp" alt="pizza" class="img-cell" />
        <p class="p-two">
          <span class="be-vietnam-pro-bold">Carefully</span>
          <span class="libre-baskerville-regular-italic">crafted.</span>
        </p>
      </li>
      <li class="hero__item">
        <img src="@/assets/images/pan.webp" alt="pan" class="img-cell" />
        <p>
          <span class="be-vietnam-pro-bold">Cooking up</span>
          <span class="libre-baskerville-regular-italic">stories.</span>
        </p>
      </li>
      <li class="hero__item">
        <img src="@/assets/images/taco.webp" alt="taco" class="img-cell" />
        <p>
          <span class="line-one">
            <span class="be-vietnam-pro-bold s-one">Let's</span>
            <span>
              <span class="libre-baskerville-regular-italic">taco-</span>
              <span class="be-vietnam-pro-bold">bout</span>
            </span>
          </span>
          <span class="line-two be-vietnam-pro-bold">your brand.</span>
        </p>
      </li>
      <li class="hero__item">
        <img src="@/assets/images/mitten.webp" alt="mitten" class="img-cell" />
        <p>
          <span class="libre-baskerville-regular-italic">Simmering</span>
          <span class="be-vietnam-pro-bold">execution.</span>
        </p>
      </li>
      <li class="hero__item">
        <p class="roboto-black p-one">Indulge</p>

        <picture>
          <source media="(min-width:990px)" srcset="@/assets/images/pasta.webp" />
          <img src="@/assets/images/pasta_up.webp" alt="holla" />
        </picture>

        <p class="be-vietnam-pro-bold p-two">
          <span>Serving you great</span>
          <span>designs that suit</span>
          <span class="s-three">
            <span>your</span>
            <span class="libre-baskerville-regular-italic">taste.</span>
          </span>
        </p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
$bg-black: var(--black);
$bg-white-600: var(--white-400);
$bg-red-600: var(--red-600);
$bg-yellow-600: var(--orange-600);
$bg-green-600: var(--green-600);

$border-black: var(--black);

$clr-black: var(--black);
$clr-white-600: var(--white-400);

.hero {
  min-width: 335px;
  position: relative;
  z-index: 99;

  &__list {
    display: grid;
    grid-template-columns: repeat(22, 1fr);
    grid-template-rows: 20.95% 20.95% 16.19% 20.95% 20.95%;
    gap: 1rem;
    min-height: max(calc(100vh - 9rem), 550px);
    max-width: 100%;
    background-color: $bg-white-600;
  }

  &__item {
    list-style: none;
    position: relative;
    overflow: hidden;

    & > img,
    picture img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: contain;
      top: 0%;
      transition: all 250ms ease-in-out;
    }

    &:nth-child(-n + 4),
    &:nth-child(6),
    &:nth-child(7),
    &:nth-child(11),
    &:nth-child(12) {
      img {
        padding: 2rem;
      }
    }
    &:nth-child(5),
    &:nth-child(8) {
      img {
        padding: 1rem;
      }
    }
    &:nth-child(9),
    &:nth-child(10) {
      img {
        padding: 4rem 2rem 2rem;
      }
    }

    &:nth-child(-n + 5),
    &:nth-child(7),
    &:nth-child(n + 10):nth-child(-n + 12) {
      &:hover {
        img {
          top: -100%;
        }

        p {
          top: 0%;
        }
      }
    }
    &:nth-child(-n + 5),
    &:nth-child(7),
    &:nth-child(n + 10):nth-child(-n + 12) {
      p {
        transition: top 250ms ease-in-out;
        position: relative;
        width: 100%;
        height: 100%;
        top: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
    &:nth-child(6),
    &:nth-child(9),
    &:nth-child(13) {
      p.p-two {
        transition: top 250ms ease-in-out;
        position: relative;
        width: 100%;
        height: 100%;
        top: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
    &:nth-child(1) {
      grid-column: 15 / 23;
      background-color: $bg-black;

      p {
        padding: 0.4rem;
        background-color: $bg-black;
        color: $clr-white-600;
        line-height: 1.5rem;
        font-size: 1.6rem;

        .with::before,
        .with::after {
          content: ' ';
        }
      }
    }
    &:nth-child(2) {
      background-color: $bg-red-600;
      grid-column: 15 / 23;

      p {
        font-size: 1.6rem;
        background-color: $bg-red-600;
        color: $clr-white-600;
        line-height: 2rem;

        .line-one {
          span:nth-child(1) {
            font-size: 2.2rem;
          }
        }

        .to::before {
          content: ' ';
        }
      }
    }
    &:nth-child(3) {
      margin-right: 1rem;
      background-color: $bg-yellow-600;
      grid-column: 15 / 23;

      p {
        font-size: 1.6rem;
        background-color: $bg-yellow-600;
        color: $clr-white-600;
        line-height: 1.88rem;

        .of::before {
          content: ' ';
        }
      }
    }
    &:nth-child(4) {
      background-color: $bg-green-600;
      grid-column: 17 / 23;
      grid-row: 4;

      p {
        background-color: $bg-green-600;
        color: $clr-white-600;
        line-height: 2.3rem;
        font-size: 1.6rem;

        .line-two {
          font-size: 3rem;
          display: block;
        }
      }
    }
    &:nth-child(5) {
      background-color: $bg-black;
      grid-column: 9 / 23;
      grid-row: 5;
      margin-bottom: 0.5rem;

      p {
        background-color: $bg-black;
        color: $clr-white-600;
        line-height: 2.5rem;
        font-size: 1.6rem;

        span:nth-child(2) {
          font-size: 2.4rem;
          border-bottom: 1px solid;
        }
      }
    }
    &:nth-child(6) {
      background-color: $bg-white-600;
      grid-column: 8 / 15;
      grid-row: 1;

      &:hover {
        img {
          top: -100%;
        }

        p.p-two {
          top: 0%;
        }
      }

      .price {
        position: absolute;
        top: 7%;
        left: 5%;
        border: 1px solid $border-black;
        height: 5.2rem;
        width: 5.2rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $bg-white-600;

        span:nth-child(1) {
          font-size: 2rem;
        }

        span:nth-child(2) {
          font-size: 1rem;
          padding-bottom: 0.8rem;
          text-decoration: underline;
        }
      }

      p.p-one {
        position: absolute;
        right: 0;
        padding: 0.5rem 1.5rem 0.75rem 1.5rem;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        background-color: $bg-black;
        color: $clr-white-600;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
      }

      .price,
      .p-one {
        z-index: 99;
      }

      p.p-two {
        background-color: $bg-white-600;
        color: $clr-black;
        line-height: 2rem;
        font-size: 1.6rem;
      }
    }
    &:nth-child(7) {
      background-color: $bg-yellow-600;
      grid-row: 2;
      grid-column: 7 / 15;

      p {
        background-color: $bg-yellow-600;
        color: $clr-white-600;
        line-height: 2rem;
        font-size: 1.6rem;

        .line-one {
          span:nth-child(1) {
            font-size: 2.2rem;
          }

          span:nth-child(2) {
            &::before {
              content: ' ';
            }
          }
        }

        .line-two {
          font-size: 1.6rem;
          display: block;
        }
      }
    }
    &:nth-child(8) {
      background-color: $bg-white-600;
      grid-row: 3;
      grid-column: 8 / 15;

      &:hover {
        img.img-cell {
          top: -100%;
        }

        img.logo {
          top: 0%;
        }
      }

      img.img-cell {
        top: 0%;
        transition: all 250ms ease-in-out;
        padding: 1rem;
      }

      img.logo {
        transition: top 250ms ease-in-out;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 100%;
        background-color: $bg-white-600;
        padding: 2rem;
      }
    }
    &:nth-child(9) {
      background-color: $bg-yellow-600;
      grid-column: 9 / 17;
      grid-row: 4;
      display: flex;
      flex-direction: column;
      align-items: center;

      &:hover {
        img {
          top: -100%;
        }

        p.p-two {
          top: 0%;
        }
      }

      p.p-one {
        font-size: 1.2rem;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        text-align: center;
        padding: 0.5rem 1.5rem;
        background-color: $bg-white-600;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        z-index: 99;
      }

      p.p-two {
        background-color: $bg-yellow-600;
        color: $clr-white-600;
        line-height: 2rem;
        font-size: 2.4rem;

        span:nth-child(2) {
          font-size: 3rem;
        }
      }
    }
    &:nth-child(10) {
      background-image: url('@/assets/images/wavy_green_right.png');
      background-size: cover;
      grid-row: 1;
      grid-column: 1 / 8;

      p {
        color: $clr-white-600;
        line-height: 2rem;
        font-size: 1.6rem;

        span:nth-child(2) {
          font-size: 2.2rem;
        }
      }
    }
    &:nth-child(11) {
      background-color: $bg-black;
      grid-column: 1 / 7;
      grid-row: 2;

      p {
        background-color: $bg-black;
        color: $clr-white-600;
        line-height: 3rem;
        font-size: 2.2rem;

        .line-one {
          span.s-one:nth-child(1)::after {
            content: ' ';
          }
        }
      }
    }
    &:nth-child(12) {
      margin-left: 1rem;
      background-color: $bg-yellow-600;
      grid-column: 1 / 8;
      grid-row: 3;

      p {
        background-color: $bg-yellow-600;
        color: $clr-white-600;
        line-height: 1.5rem;
        font-size: 1.6rem;
      }
    }
    &:nth-child(13) {
      background-color: $bg-red-600;
      grid-column: 1 / 9;
      grid-row: 4 / span 2;
      position: relative;

      &:hover {
        img {
          top: -100%;
        }

        p.p-two {
          top: 0%;
        }
      }

      p.p-one {
        position: absolute;
        padding: 0.5rem 1.5rem;
        background-color: $bg-white-600;
        top: 5rem;
        left: -3rem;
        transform: rotate(-90deg);
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        z-index: 99;
      }

      img {
        padding: 2rem 2rem 0 0;
      }

      img {
        padding: 2rem;
        padding-bottom: 0;
      }

      p.p-two {
        background-color: $bg-red-600;
        color: $clr-white-600;
        line-height: 1.8rem;
        font-size: 1.6rem;

        span.s-three {
          span:nth-child(1)::after {
            content: ' ';
          }

          span.s-three,
          span:nth-child(2) {
            position: relative;
          }

          span.s-three,
          span:nth-child(2)::after {
            position: absolute;
            content: '';
            width: 100%;
            height: 1px;
            left: 0;
            bottom: 1.5px;
            background-color: $bg-white-600;
          }
        }
      }
    }
  }
}

@media (max-width: 765px) {
  .hero {
    &__list {
      gap: 0.5rem;
      min-height: max(calc(100vh - 7rem), 550px);
    }

    &__item {
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(11),
      &:nth-child(12) {
        img {
          padding: 1.5rem;
        }
      }
      &:nth-child(9) {
        img {
          padding: 2.5rem 1.5rem 1.5rem;
        }
      }
      &:nth-child(10) {
        img {
          padding: 3rem 2rem 2rem;
        }
      }
      // p
      &:nth-child(1),
      &:nth-child(3),
      &:nth-child(12) {
        p {
          font-size: 1.4rem;
        }
      }
      &:nth-child(2) {
        p {
          font-size: 1.4rem;

          .line-one {
            span:nth-child(1) {
              font-size: 1.8rem;
            }
          }
        }
      }
      &:nth-child(4) {
        p {
          font-size: 1.4rem;

          .line-two {
            font-size: 1.8rem;
          }
        }
      }
      &:nth-child(5) {
        p {
          font-size: 1.4rem;

          span:nth-child(2) {
            font-size: 2rem;
          }
        }
      }
      &:nth-child(6) {
        .price {
          height: 4rem;
          width: 4rem;

          @media (max-width: 618px) {
            top: 1%;
            left: 3%;
          }

          span:nth-child(1) {
            font-size: 1.4rem;
          }
          span:nth-child(2) {
            font-size: 0.6rem;
          }
        }
        p.p-one {
          display: none;
        }
        p.p-two {
          font-size: 1.4rem;
        }
      }
      &:nth-child(7) {
        p {
          font-size: 1.4rem;

          .line-one {
            span:nth-child(1) {
              font-size: 1.8rem;
            }
          }
        }
      }
      &:nth-child(9) {
        p.p-one {
          display: none;
        }
        p.p-two {
          font-size: 1.4rem;
          span:nth-child(2) {
            font-size: 1.8rem;
          }
        }
      }
      &:nth-child(10) {
        p {
          font-size: 1.4rem;
          span:nth-child(2) {
            font-size: 1.8rem;
          }
        }
      }
      &:nth-child(11) {
        p {
          font-size: 1.4rem;
          line-height: 1.5rem;
        }
      }
      &:nth-child(13) {
        p.p-one {
          display: none;
        }
        p.p-two {
          font-size: 1.4rem;
        }
      }
    }
  }
}

@media (min-width: 990px) {
  .hero {
    &__list {
      grid-template-columns: 20.95% 20.95% 16.19% 20.95% 20.95%;
      grid-template-rows: repeat(22, 1fr);
      min-height: max(calc(100vh - 5.6rem), 550px);
      max-width: calc(100% - 4rem);
    }

    &__item {
      &:nth-child(-n + 4),
      &:nth-child(6),
      &:nth-child(7),
      &:nth-child(11),
      &:nth-child(12) {
        img {
          padding: 4rem;
        }
      }
      &:nth-child(9),
      &:nth-child(10) {
        img {
          padding: 6rem 4rem 4rem;
        }
      }

      &:nth-child(1) {
        grid-row: 1 / 8;
        grid-column: 1;

        p {
          font-size: 2.4rem;
          line-height: 2.88rem;
        }
      }
      &:nth-child(2) {
        background-color: $bg-red-600;
        grid-row: 1 / 10;
        grid-column: 2;

        p {
          font-size: 3rem;
          line-height: 2.88rem;

          .to,
          .line-two {
            font-size: 2.4rem;
          }
        }
      }
      &:nth-child(3) {
        margin-top: 1rem;
        grid-row: 1 / 8;
        grid-column: 3;

        p {
          font-size: 3rem;
          line-height: 2.88rem;

          .of,
          .line-two {
            font-size: 2.4rem;
          }
        }
      }
      &:nth-child(4) {
        grid-row: 1 / 6;
        grid-column: 4;

        p {
          line-height: 3rem;
          font-size: 2.4rem;

          .line-two {
            font-size: 3rem;
          }
        }
      }
      &:nth-child(5) {
        grid-row: 1 / 14;
        grid-column: 5;
        margin-bottom: 0;

        img {
          padding: 0.5rem;
          padding-bottom: 4rem;
        }

        p {
          line-height: 3rem;
          font-size: 2.4rem;

          span:nth-child(2) {
            font-size: 3.4rem;
          }
        }
      }
      &:nth-child(6) {
        grid-row: 8 / 15;
        grid-column: 1;

        .price {
          left: 11%;
        }

        p.p-two {
          line-height: 3rem;
          font-size: 2.4rem;
        }
      }
      &:nth-child(7) {
        grid-column: 2;
        grid-row: 10 / 16;

        p {
          line-height: 3rem;
          font-size: 2.4rem;

          .line-one {
            span:nth-child(1) {
              font-size: 3rem;
            }
          }

          .line-two {
            font-size: 3rem;
          }
        }
      }
      &:nth-child(8) {
        grid-column: 3;
        grid-row: 8 / 15;

        img.logo {
          padding: 6rem;
        }
      }
      &:nth-child(9) {
        grid-column: 4;
        grid-row: 6 / 14;

        p.p-two {
          line-height: 3rem;
        }
      }
      &:nth-child(10) {
        background-image: url('@/assets/images/wavy_green.png');
        grid-column: 1;
        grid-row: 15 / 23;

        p {
          line-height: 3rem;
          font-size: 2.4rem;

          span:nth-child(2) {
            font-size: 3rem;
          }
        }
      }
      &:nth-child(11) {
        grid-row: 16 / 23;
        grid-column: 2;

        p {
          font-size: 2.4rem;
        }
      }
      &:nth-child(12) {
        margin-bottom: 1rem;
        grid-row: 15 / 23;
        grid-column: 3;

        p {
          line-height: 3rem;
          font-size: 2.4rem;
        }
      }
      &:nth-child(13) {
        grid-row: 14 / 23;
        grid-column: 4 / span 2;

        p.p-two {
          line-height: 3rem;
          font-size: 2.4rem;

          span.s-three {
            span.s-three,
            span:nth-child(2)::after {
              bottom: 3px;
            }
          }
        }
      }
    }
  }
}
</style>

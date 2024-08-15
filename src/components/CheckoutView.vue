<template>
  <Section class="checkout">
    <div class="checkout__container container">
      <div class="checkout__title">Get a Quote</div>

      <div class="checkout__order">
        <p class="checkout__order-title">You ordered</p>
        <ul class="checkout__order-list">
          <li class="checkout__order-item">
            <p class="checkout__order-item__name"></p>
            <button class="checkout__order-item__button">
              <img src="/src/assets/images/remove.svg" alt="remove-icon-button" />
            </button>
          </li>
        </ul>
        <RouterLink class="checkout__order-button" to="/menu">View our menu</RouterLink>
      </div>

      <form action="" class="checkout__form">
        <input
          type="text"
          id="fname"
          class="checkout__fname checkout__input"
          name="fname"
          placeholder="Full Name"
        /><br />
        <input
          type="tel"
          id="pnumber"
          class="checkout__pnumber checkout__input"
          name="pnumber"
          placeholder="Phone Number"
        /><br />
        <input
          type="email"
          id="email"
          class="checkout__email checkout__input"
          name="email"
          placeholder="Email Address"
        /><br />
        <input
          type="text"
          id="brand"
          class="checkout__brand checkout__input"
          name="brand"
          placeholder="Brand Name/Field"
        /><br />

        <button type="submit" class="checkout__submit">Checkout</button>
      </form>
    </div>
  </Section>
</template>

<style lang="scss" scoped>
$white: var(--white-400);
$black: var(--black);
$orange: var(--orange-600);

$border-white: $white;
$border-orange: $orange;
$border-black: $black;

$txt-white: $white;
$txt-black: $black;
$txt-orange: $orange;

$bg-black: $black;
$bg-orange: $orange;

.checkout {
  background-color: $black;

  &__container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem;
  }

  &__title {
    font-size: 4rem;
    font-family: Scolth;
    margin-bottom: 2rem;
    color: $white;
  }

  &__order {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid $border-white;
  }

  &__order-title {
    font-size: 2rem;
    font-family: 'Be Vietnam Pro';
    font-weight: 700;
    text-transform: uppercase;
    max-width: fit-content;
    color: $white;
    border-bottom: 2px solid $border-white;
  }

  &__order-list {
    min-height: 25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__order-item {
    padding: 0 1rem;
    position: relative;

    &__name {
      border-radius: 0.8rem;
      border: 1px solid $border-white;
      padding: 1rem 2rem;
      font-size: 1.4rem;
      font-family: 'Be Vietnam Pro', sans-serif;
      font-weight: 700;
      color: $txt-white;
      text-transform: capitalize;
      display: none;
    }

    &__button {
      display: none;
      background-color: transparent;
      border: none;
      cursor: pointer;
      position: absolute;
      top: 50%;
      right: 3rem;
      transform: translateY(-50%);
    }
  }

  &__order-button {
    font-size: 1.8rem;
    font-family: Nord;
    text-decoration: none;
    background-color: $bg-orange;
    color: $txt-black;
    text-align: center;
    padding: 1.5rem;
    font-weight: 600;
    letter-spacing: 2px;
    border-radius: 1rem;
    border: 3px solid $border-orange;
    transition: all 0.2s ease;

    &:hover {
      background-color: $bg-black;
      color: $txt-orange;
    }
  }

  &__form {
    margin-top: 2rem;
    display: grid;
  }

  &__input {
    border: 1px solid $border-white;
    width: 100%;
    padding: 2rem;
    border-radius: 0.8rem;
    background-color: $bg-black;
    color: $txt-white;

    &::placeholder {
      font-size: 1.8rem;
    }
  }

  &__submit {
    background-color: $bg-orange;
    cursor: pointer;
    border: 3px solid $border-orange;
    border-radius: 0.8rem;
    color: $txt-black;
    text-transform: uppercase;
    font-size: 2rem;
    font-family: Nord;
    font-weight: 700;
    letter-spacing: 2px;
    padding: 1rem;

    &:hover {
      background-color: $bg-black;
      color: $txt-orange;
    }
  }
}
@media (min-width: 768px) {
  .checkout {
    &__container {
      display: grid;
      grid-template-columns: 57.14% 42.86%;
      column-gap: 2rem;
      padding: 2rem;
    }

    &__title {
      align-self: end;
      margin: 0;
      font-size: 6rem;
    }

    &__order {
      grid-row: 2;
      grid-column: 2;
      border-left: 1px solid $border-white;
      border-bottom: none;
      padding: 0 2rem;
    }

    &__form {
      grid-row: 2;
    }
  }
}

@media (min-width: 992px) {
  .checkout {
    &__container {
      padding: 4rem 2rem;
    }

    &__order {
      gap: 4rem;
    }

    &__order-item {
      &__name {
        font-size: 1.6rem;
      }
    }

    &__submit {
      font-size: 2.4rem;
    }
  }
}
</style>

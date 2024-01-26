
export const handleScroll = () => {
    const $cards = document.querySelectorAll("#cards");
    const $fechaCards = document.querySelectorAll("#cardsFecha");

    $cards.forEach((card) => {
      const cardDistance =
        window.innerHeight - card.getBoundingClientRect().top;

      if (cardDistance >= 278) {
        card.classList.add("card-effect");
      } else {
        card.classList.remove("card-effect");
      }

      if (cardDistance <= 278) {
        card.classList.add("card-effect-outer");
      } else {
        card.classList.remove("card-effect-outer");
      }
    });

    $fechaCards.forEach((card) => {
      const fechaCardDistance =
        window.innerHeight - card.getBoundingClientRect().top;

      if (fechaCardDistance >= 400) {
        card.classList.add("cards-show");
      } else {
        card.classList.remove("cards-show");
      }

      if (fechaCardDistance <= 400) {
        card.classList.add("cards-show-outer");
      } else {
        card.classList.remove("cards-show-outer");
      }
    });
  };
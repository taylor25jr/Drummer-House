
export const handleScrollServicios = () => {
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

      if (fechaCardDistance >= 200) {
        card.classList.add("cards-show");
      } 
    });
  };
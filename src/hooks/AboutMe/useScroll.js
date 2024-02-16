export const handleScrollAboutMe = () => {
  const $img = document.querySelectorAll("#about"),
    $info = document.querySelectorAll("#container-info");

  $img.forEach((el) => {
    const imgDistance = window.innerHeight - el.getBoundingClientRect().top;
    if (imgDistance >= 50) {
      el.classList.add("aboutMeEffect");
    } else {
      el.classList.remove("aboutMeEffect");
    }
  });

  $info.forEach((el) => {
    const imgDistance = window.innerHeight - el.getBoundingClientRect().top;
    if (imgDistance >= 50) {
      el.classList.add("aboutContainerEffect");
    } else {
      el.classList.remove("aboutContainerEffect");
    }
  });
};

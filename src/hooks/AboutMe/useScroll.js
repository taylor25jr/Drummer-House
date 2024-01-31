export const handleScrollAboutMe = () => {
    const $img = document.querySelector("#about"),
      $info = document.querySelector("#container-info"),
      imgDistance = window.innerHeight - $img.getBoundingClientRect().top;

    if (imgDistance >= 50) {
      $img.classList.add("aboutMeEffect");
      $info.classList.add("aboutContainerEffect");
    } else {
      $img.classList.remove("aboutMeEffect");
      $info.classList.remove("aboutContainerEffect");
    }
  };
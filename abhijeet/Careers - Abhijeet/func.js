const text = document.querySelector(".sec-text");
  const textLoad = () => {

    setTimeout(() => {
      text.textContent = "Coca-cola";  /* Developer*/
    }, 0);

    setTimeout(() => {
      text.textContent = "Refreshers"; /* Freelancer*/
    }, 4000);

    setTimeout(() => {
      text.textContent = "Taste-makers"; /* Youtuber*/
    }, 8000);

  }
  textLoad();
  setInterval(textLoad, 12000);
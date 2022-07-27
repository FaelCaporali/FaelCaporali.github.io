const funcionalidadesTela = () => {
  const titulo = document.getElementById("nome");
  if (window.innerWidth < 319) {
    alert("Use um dispositivo maior!");
  }
  if (window.innerWidth < 550) {
    titulo.innerText = "Fael Caporali";
  } else if (window.innerWidth > 549) {
    titulo.innerText = "Rafael Honório Caporali de Freitas";
  }
};
//cabeçalho
const menuSand = () => {
  const cBox = document.getElementById("myMenu").classList;
  const cBttCont = document.getElementById("menu-superior").classList;
  if (cBox.contains("hidden-box")) {
    cBox.remove("hidden-box");
    cBox.add("opened-box");
    cBttCont.remove("hidden");
  } else {
    cBox.remove("opened-box");
    cBox.add("hidden-box");
    cBttCont.add("hidden");
  }
};

// funcionalidades primeiro frame
const changeIconKnowMore = (event) => {
  const ico = document.querySelector("#know-more i");
  if (event.type === "mouseenter") {
    ico.classList.remove("fa-angle-down");
    ico.classList.add("fa-angles-down");
  } else {
    ico.classList.remove("fa-angles-down");
    ico.classList.add("fa-angle-down");
  }
};

// funcionalidades roda-pé
const displayStickerContent = (event) => {
  const ico = event.target.children[1];
  const text = event.target.children[2];
  if (event.type === "mouseleave") {
    ico.classList.remove("fa-arrow-down");
    text.classList.add("hidden");
  } else {
    ico.classList.add("fa-arrow-down");
    text.classList.remove("hidden");
  }
};

const setStickersListeners = () => {
  document
    .querySelectorAll(".contact")
    .forEach((e) => e.addEventListener("mouseenter", displayStickerContent));
  document
    .querySelectorAll(".contact")
    .forEach((e) => e.addEventListener("mouseleave", displayStickerContent));
};

const changeIconFeedback = (event) => {
  const ico = document.querySelector(".feedback i");
  const box = document.getElementById("feedbackid");
  const arrowUp = () => {
    if (event.type === "mouseenter") {
      ico.classList.remove("fa-angle-up");
      ico.classList.add("fa-angles-up");
    } else {
      ico.classList.remove("fa-angles-up");
      ico.classList.add("fa-angle-up");
    }
  };
  const arrowsDown = () => {
    if (event.type === "mouseenter") {
      ico.classList.remove("fa-angle-down");
      ico.classList.add("fa-angles-down");
    } else {
      ico.classList.remove("fa-angles-down");
      ico.classList.add("fa-angle-down");
    }
  };
  return box.classList.contains("feedback-up") ? arrowsDown() : arrowUp();
};

const scroller = (event) => {
  event.target.id === "next" ? scrollDown() : scrollUp();
};

const scrollDown = () => {
  const actualHeigth = window.scrollY;
  const viewPortHeight = window.innerHeight;
  if ( actualHeigth < viewPortHeight ) {
    return window.scrollTo( 0, viewPortHeight);
  }
  if ( actualHeigth >= viewPortHeight && actualHeigth < viewPortHeight * 2) {
    return scrollTo(0, viewPortHeight * 2)
  }
  if ( actualHeigth >= viewPortHeight * 2 && actualHeigth < viewPortHeight * 3) {
    return scrollTo(0, viewPortHeight * 3);
  }
  if ( actualHeigth >= viewPortHeight * 3 && actualHeigth < viewPortHeight * 4) {
    return scrollTo(0, viewPortHeight * 4);
  }
  if ( actualHeigth >= viewPortHeight * 4 && actualHeigth < viewPortHeight * 5) {
    return scrollTo(0, viewPortHeight * 5);
  }
  if ( actualHeigth >= viewPortHeight * 5 && actualHeigth < viewPortHeight * 6) {
    return scrollTo(0, viewPortHeight * 6);
  }
}

const scrollUp = () => {
  const actualHeigth = window.scrollY;
  const viewPortHeight = window.innerHeight;
  if ( actualHeigth <= viewPortHeight ) {
    return window.scrollTo( 0, 0);
  }
  if ( actualHeigth > viewPortHeight && actualHeigth <= viewPortHeight * 2) {
    return scrollTo(0, viewPortHeight)
  }
  if ( actualHeigth > viewPortHeight * 2 && actualHeigth <= viewPortHeight * 3) {
    return scrollTo(0, viewPortHeight * 2);
  }
  if ( actualHeigth > viewPortHeight * 3 && actualHeigth <= viewPortHeight * 4) {
    return scrollTo(0, viewPortHeight * 3);
  }
  if ( actualHeigth > viewPortHeight * 4 && actualHeigth <= viewPortHeight * 5) {
    return scrollTo(0, viewPortHeight * 4);
  }
  if ( actualHeigth > viewPortHeight * 5) {
    return scrollTo(0, viewPortHeight * 5);
  }
}

const animation = () => {
  const bar11 = document.querySelector(".bar1-1");
  const bar12 = document.querySelector(".bar1-2");
  const bar2 = document.querySelector(".bar2");
  const bar3 = document.querySelector(".bar3");
  bar11.style.animationName = "none";
  bar12.style.animationName = "none";
  bar2.style.animationName = "none";
  bar3.style.animationName = "none";
  const reload = () => {
    bar11.style.animationName = "clickMenuBar11";
    bar12.style.animationName = "clickMenuBar12";
    bar2.style.animationName = "clickMenuBar2";
    bar3.style.animationName = "clickMenuBar3";
    resetAnimation();
    bar11.style.animationPlayState = "running";
    bar12.style.animationPlayState = "running";
    bar2.style.animationPlayState = "running";
    bar3.style.animationPlayState = "running";
    bar11.style.animationFillMode = "forwards";
    bar12.style.animationFillMode = "forwards";
    bar2.style.animationFillMode = "forwards";
    bar3.style.animationFillMode = "forwards";
  };
  setTimeout(reload, 10);
};
const resetAnimation = () => {
  const bar11 = document.querySelector(".bar1-1");
  const bar12 = document.querySelector(".bar1-2");
  const bar2 = document.querySelector(".bar2");
  const bar3 = document.querySelector(".bar3");
  if (
    bar11.style.animationDirection === "reverse" ||
    bar11.style.animationDirection === ""
  ) {
    bar11.style.animationDirection = "normal";
    bar12.style.animationDirection = "normal";
    bar2.style.animationDirection = "normal";
    bar3.style.animationDirection = "normal";
  } else {
    bar11.style.animationDirection = "reverse";
    bar12.style.animationDirection = "reverse";
    bar2.style.animationDirection = "reverse";
    bar3.style.animationDirection = "reverse";
  }
};

window.onload = () => {
  document.querySelector(".sanduiche").addEventListener("click", animation);
  document.getElementById("next").addEventListener("click", scroller);
  document.getElementById("prev").addEventListener("click", scroller);
  funcionalidadesTela();
  window.addEventListener("resize", funcionalidadesTela);
  setStickersListeners();
  document.querySelector(".sanduiche").addEventListener("click", menuSand);
  document
    .querySelector("#know-more")
    .addEventListener("mouseenter", changeIconKnowMore);
  document
    .querySelector("#know-more")
    .addEventListener("mouseleave", changeIconKnowMore);
  document
    .querySelector("#feedbackid h4")
    .addEventListener("mouseenter", changeIconFeedback);
  document
    .querySelector("#feedbackid h4")
    .addEventListener("mouseleave", changeIconFeedback);
  document
    .querySelector("#feedbackid h4")
    .addEventListener("click", openfeedback);
  document.body.requestFullscreen();
};

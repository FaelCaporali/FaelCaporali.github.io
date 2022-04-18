window.onload = () => {
  const funcionalidadesTela = () => {
    const titulo = document.getElementById("nome");
    if (window.innerWidth < 319) {
      alert("Use um dispositivo maior!");
    }
    if (window.innerWidth > 375) {
      window.alert(
        "Para uma melhor experiência, por enquanto navegue em dispositivos com telas pequenas. Este é um portfólio dinâmico e em construção, não se assuste se alguma funcionalidade estiver quebrada. =]"
      );
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
    const text = event.target.children[2]
    if (event.type === 'mouseleave') {
      ico.classList.remove('fa-arrow-down');
      text.classList.add('hidden');
    } else {
      ico.classList.add('fa-arrow-down');
      text.classList.remove('hidden');
    }
  };
  
  const setStickersListeners = () => {
    document.querySelectorAll('.contact').forEach(e => e.addEventListener('mouseenter', displayStickerContent));
    document.querySelectorAll('.contact').forEach(e => e.addEventListener('mouseleave', displayStickerContent));
  }
  
  const changeIconFeedback = (event) => {
    const ico = document.querySelector('.feedback i');
    const box = document.getElementById('feedbackid');
    const arrowUp = () => {
      if (event.type === 'mouseenter') {
        ico.classList.remove('fa-angle-up');
        ico.classList.add('fa-angles-up')
      } else {
        ico.classList.remove('fa-angles-up');
        ico.classList.add('fa-angle-up');
      }
    }
    const arrowsDown = () => {
      if (event.type === 'mouseenter') {
        ico.classList.remove('fa-angle-down');
        ico.classList.add('fa-angles-down')
      } else {
        ico.classList.remove('fa-angles-down');
        ico.classList.add('fa-angle-down');
      }
    }
    return box.classList.contains('feedback-up') ? arrowsDown() : arrowUp();
  };

  const openfeedback = () => {
    const popUpFeedback = document.getElementById('feedbackid');
    const ico = document.querySelector("#feedbackid i");
    const feedText = document.querySelector('#feedbackid form');
    const opening = () => {
      ico.classList.remove("fa-angle-up");
      ico.classList.remove("fa-angles-up");
      ico.classList.add("fa-angle-down");
      popUpFeedback.classList.add("feedback-up");
      feedText.classList.remove("hidden");
    }      
    const closing = () => {
      popUpFeedback.classList.remove("feedback-up");
      feedText.classList.add("hidden");
      ico.classList.remove("fa-angle-down");
      ico.classList.remove("fa-angles-down");
      ico.classList.add("fa-angle-up");
    }
    return feedText.classList.contains("hidden") ? opening() : closing();
  };

  const scroller = (event) => {
    event.target.id === 'next' ? window.scrollBy(0, window.innerHeight) : window.scrollBy(0, window.innerHeight * -1);
  }
  document.getElementById('next').addEventListener('click', scroller);
  document.getElementById('prev').addEventListener('click', scroller);

  // seta funcionalidades da tela e escuta mudança de tamanho
  funcionalidadesTela();
  window.addEventListener("resize", funcionalidadesTela);
  // adiciona/retiran conteudo dos stickers
  setStickersListeners();
  // menu sand abrir/fechar
  document.querySelector(".sanduiche").addEventListener("click", menuSand);
  //icone botao primeiro frame
  document
    .querySelector("#know-more")
    .addEventListener("mouseenter", changeIconKnowMore);
  document
    .querySelector("#know-more")
    .addEventListener("mouseleave", changeIconKnowMore);
// icone feedback muda
  document
    .querySelector("#feedbackid h4")
    .addEventListener("mouseenter", changeIconFeedback);
  document
    .querySelector("#feedbackid h4")
    .addEventListener("mouseleave", changeIconFeedback);
    // form feddback abre/fecha
  document
    .querySelector("#feedbackid h4")
    .addEventListener("click", openfeedback);
};
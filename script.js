window.onload = () => {
  const funcionalidadesTela = () => {
    const titulo = document.getElementById("nome");
    if (window.innerWidth < 319) {
        alert('Use um dispositivo maior!')
    }
    if (window.innerWidth < 550) {
      titulo.innerText = "Fael Caporali";
    } else if (window.innerWidth > 549) {
      titulo.innerText = "Rafael Honório Caporali de Freitas";
    }
  };
  const menuSand = (event) => {
    event.target.classList.toggle("change");
    document.getElementById("myMenu").classList.toggle("opened-box");
    document.getElementById("navbar").classList.toggle("opened");
  };
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
  const footerMouseHandler = (event) => {
    if (event.type === "mouseenter") {
      event.target.classList.remove("hidden-cont");
      event.target.classList.add("opened-cont");

      event.target.children[1].classList.add("fa-arrow-down");
      event.target.children[2].classList.remove("hidden");
      event.target.children[2].classList.add("opened");
    } else {
      event.target.classList.remove("opened-cont");
      event.target.classList.add("hidden-cont");

      event.target.children[1].classList.remove("fa-arrow-down");
      event.target.children[2].classList.add("hidden");
      event.target.children[2].classList.remove("opened");
    }
  };

  const changeSandBoxColor = (event) => {
      if (event.type === 'mouseenter') {
          document.querySelector('.bar1').style.backgroundColor = 'aliceblue';
          document.querySelector('.bar2').style.backgroundColor = 'aliceblue';
          document.querySelector('.bar3').style.backgroundColor = 'aliceblue';
      } else {
        document.querySelector('.bar1').style.backgroundColor = 'black';
        document.querySelector('.bar2').style.backgroundColor = 'black';
        document.querySelector('.bar3').style.backgroundColor = 'black';
      }
  };

  const changeIconFeedback = (event) => {
    const ico = document.querySelector(".feedback i");
    if (event.type === "mouseenter" && ico.classList.contains('fa-angle-up')) {
      ico.classList.remove("fa-angle-up");
      ico.classList.add("fa-angles-up");
    } else if (event.type === "mouseleave" && ico.classList.contains('fa-angles-up')) {
      ico.classList.remove("fa-angles-up");
      ico.classList.add("fa-angle-up");
    } else if (event.type === "mouseenter" && ico.classList.contains('fa-angle-down')) {
        ico.classList.remove("fa-angle-down");
        ico.classList.add("fa-angles-down");
    } else if (event.type === "mouseleave" && ico.classList.contains('fa-angles-down')) {
        ico.classList.remove("fa-angles-down");
        ico.classList.add("fa-angle-down");

    }
  };

  const openfeedback = () => {
    const barraModal =  document.querySelector('#barra-modal');
    const feedBar = document.querySelector('#feedback');
    const ico = document.querySelector('.feedback i');
    if (barraModal.classList.contains('hidden')) {
        ico.classList.remove('fa-angle-up');
        ico.classList.remove('fa-angles-up');
        ico.classList.add('fa-angle-down');
        feedBar.classList.add('feedback-opened');
        barraModal.classList.remove('hidden');

    } else {
        feedBar.classList.remove('feedback-opened');
        barraModal.classList.add('hidden');
        ico.classList.remove('fa-angle-down');
        ico.classList.remove('fa-angles-down');
        ico.classList.add('fa-angle-up');
    }
  };

  const redirectFooter = (event) => {
    if (event.target.classList.contains('linkedin')) {
        window.open('https://www.linkedin.com/in/rafael-caporali-293045191/');
    } else if (event.target.classList.contains('github')) {
        window.open('https://github.com/FaelCaporali')
    }
  };

  funcionalidadesTela();
  window.addEventListener("resize", funcionalidadesTela);
  document.querySelector("#sand").addEventListener("click", menuSand);
  document
    .querySelector("#know-more")
    .addEventListener("mouseenter", changeIconKnowMore);
  document
    .querySelector("#know-more")
    .addEventListener("mouseleave", changeIconKnowMore);

  document
    .querySelector(".linkedin")
    .addEventListener("mouseenter", footerMouseHandler);
  document
    .querySelector(".linkedin")
    .addEventListener("mouseleave", footerMouseHandler);

  document
    .querySelector(".gmail")
    .addEventListener("mouseenter", footerMouseHandler);
  document
    .querySelector(".gmail")
    .addEventListener("mouseleave", footerMouseHandler);

  document
    .querySelector(".whatsapp")
    .addEventListener("mouseenter", footerMouseHandler);
  document
    .querySelector(".whatsapp")
    .addEventListener("mouseleave", footerMouseHandler);

  document
    .querySelector(".github")
    .addEventListener("mouseenter", footerMouseHandler);
  document
    .querySelector(".github")
    .addEventListener("mouseleave", footerMouseHandler);

    document.querySelector('.github').addEventListener('click', redirectFooter);
    document.querySelector('.linkedin').addEventListener('click', redirectFooter);


    document.getElementById('myMenu').addEventListener('mouseenter', changeSandBoxColor);
    document.getElementById('myMenu').addEventListener('mouseleave', changeSandBoxColor);
    document.querySelector('.feedback h6').addEventListener('mouseenter', changeIconFeedback);
    document.querySelector('.feedback h6').addEventListener('mouseleave', changeIconFeedback);
    document.querySelector('.feedback h6').addEventListener('click', openfeedback);

    window.alert('Este é um portfólio dinâmico e em construção. Por enquanto verá funcionalidades e design quebrados. =]')
 
};
// só pra commita
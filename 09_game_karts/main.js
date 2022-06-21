document.addEventListener("DOMContentLoaded", function () {
  // let card = document.querySelectorAll(".card");

  // card.forEach(function (el) {
  // let num = 0;
  //   el.addEventListener("click", function () {
  //     // console.log(el.textContent);
  //     let oneCardActive = el;

  //     if (num === 0) {
  //       num = el.textContent;
  //       console.log("нажата первая карточка");
  //       oneCardActive.classList.add("card_active");
  //     } else if (num === el.textContent) {
  //       oneCardActive.classList.add("card_active");
  //       console.log("совпадают");
  //       num = 0;
  //     } else {
  //       console.log("не совпадают");
  //       oneCardActive.classList.remove("card_active");
  //       num = 0;
  //     }
  //   });
  // });

  //создание карточен и проставление чисел одинаковыми парами
  function createCards(amountCard) {
    let cards = document.createElement("div");
    cards.classList.add("cards");
    let repeatNumber = true;
    let numberCard = 1;

    for (let amount = 0; amount < amountCard; amount++) {
      let card = document.createElement("div");
      card.classList.add("card");
      cards.append(card);

      if (repeatNumber) {
        card.textContent = numberCard;
      } else {
        card.textContent = numberCard;
        numberCard += 1;
      }
      repeatNumber = !repeatNumber;
    }
    
    document.body.append(cards);
  }

  createCards(16);
});

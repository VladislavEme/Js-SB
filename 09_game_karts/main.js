document.addEventListener("DOMContentLoaded", function () {
  let arrCards = []; //массив карточек
  let cards = document.createElement("div");

  //перемешивание карточек
  function shuffleArr(arr) {
    let j, temp;
    for (let i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }

  //создание карточек в кол-ве amountCard
  function createCards(amountCard) {
    cards.classList.add("cards");
    let numberCard = 0;

    //создание массива с парными идентификаторами
    for (let amount = 0; amount < amountCard; amount++) {
      if (!(arrCards.length % 2)) {
        numberCard += 1;
      }
      arrCards.push(numberCard);
    }

    shuffleArr(arrCards);

    //добавление карточек с парными идентификаторами
    for (let amount = 0; amount < amountCard; amount++) {
      let card = document.createElement("div");
      card.classList.add("card");
      card.classList.add("visible_none");
      cards.append(card);
      card.textContent = arrCards[amount];
    }

    document.body.append(cards);
    console.log(arrCards); //вывод массива карточек в начале игры
  }

  createCards(16);

  let card = document.querySelectorAll(".card");
  let cardActive = false;
  let numCard = null;
  let contentCardActive = null;
  card.forEach(function (cardClick) {
    cardClick.addEventListener("click", function () {
      if (!cardActive) {
        console.log(`нажата первая карточка ${cardClick.textContent}`);
        cardClick.classList.add("open_animation");

        function openOneCard() {
          cardClick.classList.remove("visible_none");
          numCard = cardClick.textContent;
          cardClick.classList.add("card_active");
          cardActive = !cardActive;
          cardClick.classList.add("pointer");
          contentCardActive = cardClick.textContent;
        }
        setTimeout(() => openOneCard(), 150);
      } else if (cardActive) {
        console.log(`нажата вторая карточка ${cardClick.textContent}`);
        cardClick.classList.add("open_animation");

        if (cardClick.textContent === numCard) {
          console.log("карточки совпадают");

          function openTwoCardIdent() {
            cardClick.classList.add("card_active");
            card.forEach(function (el) {
              if (el.textContent === contentCardActive) {
                console.log(el.textContent);
                el.classList.add("cards_open");
                el.classList.add("pointer");
                el.classList.remove("visible_none");
              }
            });
          }
          setTimeout(() => openTwoCardIdent(), 150);
        } else {
          console.log("Карточки не совпадают");

          cardClick.classList.add("open_animation");

          function openTwoCard() {
            cardClick.classList.remove("visible_none");
            cardClick.classList.add("card_active");
            cards.classList.add("pointer");
          }
          setTimeout(() => openTwoCard(), 150);

          function closeCard() {
            cardClick.classList.add("visible_none");
            card.forEach(function (el) {
              if (el.textContent === contentCardActive) {
                cardClick.classList.remove("card_active");
                cardClick.classList.remove("open_animation");
                el.classList.remove("card_active");
                el.classList.remove("pointer");
                el.classList.add("visible_none");
                el.classList.remove("open_animation");
              }
            });
            cards.classList.remove("pointer");
          }

          setTimeout(() => closeCard(), 1000);
        }
        cardActive = !cardActive;
      }
    });
  });
});

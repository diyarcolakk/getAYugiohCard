const yuGiOh = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
const cardContainerShow = document.querySelector(".card-container");
const imgUrlBul = function (cardinfo) {
  let array = [];
  let idArr = [];
  for (let i = 0; i < 10; i++) {
    array[i] = cardinfo.data[i].card_images[0].image_url;
  }

  return array;
};

const yugiOhApiUse = function () {
  fetch(`${yuGiOh}`)
    .then((respond) => respond.json())
    .then((cardinfo) => {
      if (imgUrlBul(cardinfo)) yerlestirme(imgUrlBul(cardinfo));
      // Array geldi. Bu arrayi divde yerine koy
      else throw new Error("Card image ulaşılamadı");
    })
    .catch((err) => console.warn(err));
};

function yerlestirme(gelenimgUrl) {
  let html = "";
  for (let i = 0; i < gelenimgUrl.length; i++) {
    html += `<div class="card" style="margin:1rem; cursor:pointer; object-fit:cover;">
    <img src="${gelenimgUrl[i]}" class="card-img-top" alt="Kitty in the house " />
    <div class="card-body">
    <p class="card-text">ID:</p>
    <p class="card-text">NAME :</p>
    <p class="card-text">TYPE :</p>
    <p class="card-text">ATK :</p>
    <p class="card-text">DEF :</p>
  </div>
</div>`;
  }
  cardContainerShow.insertAdjacentHTML("beforeend", html);
}

yugiOhApiUse();

//Fotoğraflara erişmek için bir yol

// const yugiOhApiUse = function () {
//     const a = fetch(`${yuGiOh}`)
//       .then((respond) => respond.json())
//       .then((cardinfo) => {
//         let array = [];
//         for (let i = 0; i < 10; i++) {
//           array[i] = cardinfo.data[i].card_images;
//         }
//         return array;
//       })
//       .then((img) => console.log(img[1][0].image_url));
//   };

//   yugiOhApiUse();

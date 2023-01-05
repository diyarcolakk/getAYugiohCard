const yuGiOh = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

const imgUrlBul = function (cardinfo) {
  let array = [];
  for (let i = 0; i < 10; i++) {
    array[i] = cardinfo.data[i].card_images[0].image_url_small;
  }
  return array;
};

const yugiOhApiUse = function () {
  fetch(`${yuGiOh}`)
    .then((respond) => respond.json())
    .then((cardinfo) => {
      if (imgUrlBul(cardinfo))
        return imgUrlBul(cardinfo); // Array geldi. Bu arrayi divde yerine koy
      else throw new Error("Card image ulaşılamadı");
    })
    .catch((err) => console.warn(err));
};

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

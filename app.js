"use strict";
const yuGiOh = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

const cardContainerShow = document.querySelector(".card-container");
const imgUrlBul = function (cardinfo) {
  let array = [];
  for (let i = 0; i < 20; i++) {
    array[i] = cardinfo.data[i].card_images[0].image_url;
  }
  return array;
};
const cardBilgileriBul = function (getTheCards) {
  // Bir data arrayi oluşturdum.
  let dataObjesi = {}; //-> Burada boş bir nesne oluşturdum.
  dataObjesi = getTheCards
  const { data: veri } = dataObjesi
  let cardNesnesi = [{}]
  for(let i= 0; i<100; i++) 
  {
    cardNesnesi[i] = {
    id:`${veri[i].id}`,
    name:`${veri[i].name}`,
    race:`${veri[i].race}`,
    type:`${veri[i].type}`,
    url:`${veri[i].card_images[0].image_url}`,
    }
  }
  console.log(cardNesnesi);
  return cardNesnesi;
}
function yerlestirme(gelenCardNesnesi) {
  let html = "";
  for (let i = 0; i < gelenCardNesnesi.length; i++) {
  // console.log(gelenCardNesnesi[i].type);//"Spell Card"
  //  if(gelenCardNesnesi[i].type === "Spell Card")
    html += `<div class="card" style="margin:1rem; cursor:pointer; object-fit:cover;">
    <img src="${gelenCardNesnesi[i].url}" class="card-img-top" alt="Kitty in the house " />
    <div class="card-body">
    <p class="card-text">ID: ${gelenCardNesnesi[i].id}</p>
    <p class="card-text">Name: ${gelenCardNesnesi[i].name}</p>
    <p class="card-text">Race: ${gelenCardNesnesi[i].race}</p>
    <p class="card-text">Type: ${gelenCardNesnesi[i].type}</p>
  </div>
</div>`;
  }
  cardContainerShow.insertAdjacentHTML("beforeend", html);

}

const yugiOhApiUse = async function () {
  const useMyYuGiOh = await fetch(`${yuGiOh}`)
  const getTheCards = await useMyYuGiOh.json();
  yerlestirme(cardBilgileriBul(getTheCards))
};
yugiOhApiUse();



// const yugiOhApiUse = function () {
//   fetch(`${yuGiOh}`)
//     .then((respond) => respond.json())
//     .then((cardinfo) => {
//       if (imgUrlBul(cardinfo)) yerlestirme(imgUrlBul(cardinfo));
//       // Array geldi. Bu arrayi divde yerine koy
//       else throw new Error("Card image ulaşılamadı");
//     })
//     .catch((err) => console.warn(err));
// };

// Async bir fonksiyon sayesinde yukarıdaki ifade aşağıdaki şekle dönüştü


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

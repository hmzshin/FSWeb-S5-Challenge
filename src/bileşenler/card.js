import axios from "axios";
const Card = (makale) => {
  const cardDiv = document.createElement("div"); // to store all the information card div is created
  cardDiv.classList.add("card"); // "card" class is assigned to the div

  const headLineDiv = document.createElement("div"); //a div is created for the main title
  headLineDiv.classList.add("headline"); // "headline" class is attached to the div
  headLineDiv.textContent = makale.anabaslik; // the information comes from the articles indicated from object
  cardDiv.append(headLineDiv); // headLineDiv is appented to the cardDiv

  const authorDiv = document.createElement("div"); // a  div is created for the auther information
  authorDiv.classList.add("author"); // "author" class is attached to div
  cardDiv.append(authorDiv); // div is appended to the cardDiv;

  const imageContainerDiv = document.createElement("div");
  imageContainerDiv.classList.add("img-container");
  authorDiv.append(imageContainerDiv);

  const img = document.createElement("img");
  img.src = makale.yazarFoto;
  imageContainerDiv.append(img);

  const span = document.createElement("span");
  span.textContent = makale.yazarAdi + " " + "tarafından";
  authorDiv.append(span);

  // adding style to card

  cardDiv.style.borderRadius = "10px";
  // $(".card").lightbox({ transition: "scale 0.1s" });

  // adding eventListner to card
  cardDiv.addEventListener("click", () => {
    console.log(headLineDiv.textContent);
  });

  cardDiv.addEventListener("mouseover", () => {
    cardDiv.style.transform = "scale(1.05) ";
  });
  cardDiv.addEventListener("mouseleave", () => {
    cardDiv.style.transform = "scale(1) ";
  });

  return cardDiv;

  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
};

const cardEkleyici = (secici) => {
  axios({
    method: "get",
    url: "http://localhost:5001/api/makaleler",
  })
    .then(function (response) {
      const datas = response.data.makaleler;
      const arr = Object.values(datas);
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          let obje = arr[i][j];
          const card = Card(obje);
          const box = document.querySelector(secici);
          box.append(card);
        }
      }
    })
    .catch((error) => {
      alert("sunucu bulunamadı", error);
      console.error(error);
    })
    .finally(() => {
      console.log("Cards are loaded!");
    });
};

// GÖREV 6
// ---------------------
// Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
// Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
// Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
// Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
// Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//

export { Card, cardEkleyici };

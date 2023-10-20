import axios from "axios";

const Tablar = (konu) => {
  const topicsDiv = document.createElement("div");
  topicsDiv.classList.add("topics");

  const tabFirstDiv = document.createElement("div");
  tabFirstDiv.classList.add("tab");
  tabFirstDiv.textContent = konu[0];

  const tabSecondDiv = document.createElement("div");
  tabSecondDiv.classList.add("tab");
  tabSecondDiv.textContent = konu[1];

  const tabThirdDiv = document.createElement("div");
  tabThirdDiv.classList.add("tab");
  tabThirdDiv.textContent = konu[2];

  topicsDiv.append(tabFirstDiv);
  topicsDiv.append(tabSecondDiv);
  topicsDiv.append(tabThirdDiv);

  return topicsDiv;
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
};

const tabEkleyici = (secici) => {
  axios({
    method: "get",
    url: "http://localhost:5001/api/konular",
    data: {
      firstName: "Fred",
      lastName: "Flintstone",
    },
  });
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
};

export { Tablar, tabEkleyici };

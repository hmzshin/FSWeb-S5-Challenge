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

  const tabFourthDiv = document.createElement("div");
  tabFourthDiv.classList.add("tab");
  tabFourthDiv.textContent = konu[3];

  const tabFifthDiv = document.createElement("div");
  tabFifthDiv.classList.add("tab");
  tabFifthDiv.textContent = konu[4];

  topicsDiv.append(tabFirstDiv);
  topicsDiv.append(tabSecondDiv);
  topicsDiv.append(tabThirdDiv);
  topicsDiv.append(tabFourthDiv);
  topicsDiv.append(tabFifthDiv);

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
  }).then(function (response) {
    const tab = Tablar(response.data["konular"]);
    const tabs = document.querySelector(secici);
    tabs.append(tab);
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

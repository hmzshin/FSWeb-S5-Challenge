const Header = (baslik, tarih, yazi) => {
  const divBox = document.createElement("div");
  divBox.classList.add("header");

  const span1 = document.createElement("span");
  span1.classList.add("date");
  span1.textContent = tarih;

  const h1 = document.createElement("h1");
  h1.textContent = baslik;

  const span2 = document.createElement("span");
  span2.classList.add("temp");
  span2.textContent = yazi;

  divBox.append(span1);
  divBox.append(h1);
  divBox.append(span2);
  return divBox;

  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
};

const headerEkleyici = (secici) => {
  const title = "NAberTECH";
  const date = " 10.20.2023";
  const content =
    "The best programmers are educated by WORKINTECH, and Hamza ŞAHİN is one of them.";

  const newHeader = Header(title, date, content);

  const selector = document.querySelector(secici);

  selector.append(newHeader);
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
};

export { Header, headerEkleyici };

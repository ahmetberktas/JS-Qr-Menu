﻿<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>QR Menü</h1>

  <h2>Kurulum</h2>
  <p>Bu projeyi yerel olarak çalıştırmak için aşağıdaki adımları izleyin:</p>

  <ul>
    <li>Depoyu klonlayın:
      <pre><code>git clone https://github.com/ahmetberktas/JS-Qr-Menu</code></pre>
    </li>
    <li>Proje dizinine gidin:
      <pre><code>cd JS-QR-MENU</code></pre>
    </li>
    <li>Uygulamayı çalıştırmak için <code>index.html</code> dosyasını tarayıcınızda açın.</li>
  </ul>

  <h2>Kullanım</h2>
  <ul>
    <li>Ana sayfa tüm menü öğelerini listeler.</li>
    <li>Kategorilere göre menü öğelerini filtrelemek için üstteki butonları kullanabilirsiniz.</li>
    <li>Bir menü öğesine tıklayarak detaylarını yeni bir sayfada görebilirsiniz.</li>
  </ul>

  <h2>Proje Yapısı</h2>
  <ul>
    <li><code>index.html</code>: Tüm menü öğelerini listeleyen ana sayfa.</li>
    <li><code>details.html</code>: Bireysel menü öğelerinin detaylarını gösteren sayfa.</li>
    <li><code>db.json</code>: Menü öğeleri için verileri içerir.</li>
    <li><code>scripts/</code>: JavaScript dosyalarını içerir.
        <ul>
            <li><code>Main.js</code>: Menü öğelerinin alınması ve gösterilmesi, ayrıca kategoriye göre filtreleme işlevlerini yönetir.</li>
            <li><code>Details.js</code>: Seçilen menü öğesinin detaylarının alınması ve gösterilmesini yönetir.</li>
            <li><code>ui.js</code>: Menü öğeleri ve kategori butonlarının render edilmesini sağlayan fonksiyonları içerir.</li>
            <li><code>constants.js</code>: Kategori filtreleme için buton verilerini içerir.</li>
        </ul>
    </li>
  </ul>

  <h2>Kullanım</h2>
  <ol>
    <li>Ürün kategorilerini görüntüleyin.</li>
    <li>Ürünleri listeleyin.</li>
    <li>"Sepete Ekle" butonuna tıklayarak ürünleri alışveriş sepetine ekleyin.</li>
    <li>Sepet simgesine tıklayarak sepeti görüntüleyin.</li>
    <li>Silme simgesine tıklayarak sepetten ürünleri çıkarın.</li>
  </ol>

  <h2>Özellikler</h2>
  <ul>
    <li>Menü verilerini yerel bir JSON dosyasından alır.</li>
    <li>Menü öğelerini dinamik olarak gösterir.</li>
    <li>Kategoriye göre menü öğelerini filtreler.</li>
    <li>Her bir menü öğesinin detaylarını ayrı bir sayfada gösterir.</li>
  </ul>

  <h2>Katkıda Bulunma</h2>
  <ol>
    <li>Depoyu fork edin.</li>
    <li>Özellik dalınızı oluşturun (<code>git checkout -b feature/NewFeature</code>).</li>
    <li>Değişikliklerinizi commit edin (<code>git commit -m 'Add some NewFeature'</code>).</li>
    <li>Dalınıza push edin (<code>git push origin feature/NewFeature</code>).</li>
    <li>Bir pull request açın.</li>
  </ol>

  <h2>Lisans</h2>
  <p>Bu proje MIT Lisansı altında lisanslanmıştır.</p>

</body>
</html>

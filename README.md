<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README</title>
</head>
<body>
    <h1>Menü Uygulaması</h1>

    <h2>İçindekiler</h2>
    <ul>
        <li><a href="#kurulum">Kurulum</a></li>
        <li><a href="#kullanım">Kullanım</a></li>
        <li><a href="#proje-yapısı">Proje Yapısı</a></li>
        <li><a href="#özellikler">Özellikler</a></li>
        <li><a href="#kullanılan-teknolojiler">Kullanılan Teknolojiler</a></li>
        <li><a href="#katkıda-bulunma">Katkıda Bulunma</a></li>
        <li><a href="#lisans">Lisans</a></li>
    </ul>

    <h2 id="kurulum">Kurulum</h2>
    <p>Bu projeyi yerel olarak çalıştırmak için aşağıdaki adımları izleyin:</p>
    <ol>
        <li>Depoyu klonlayın:
            <pre><code>git clone https://github.com/yourusername/menu-app.git</code></pre>
        </li>
        <li>Proje dizinine gidin:
            <pre><code>cd menu-app</code></pre>
        </li>
        <li>`index.html` dosyasını tercih ettiğiniz web tarayıcısında açın.</li>
    </ol>

    <h2 id="kullanım">Kullanım</h2>
    <ul>
        <li>Ana sayfa tüm menü öğelerini listeler.</li>
        <li>Kategorilere göre menü öğelerini filtrelemek için üstteki butonları kullanabilirsiniz.</li>
        <li>Bir menü öğesine tıklayarak detaylarını yeni bir sayfada görebilirsiniz.</li>
    </ul>

    <h2 id="proje-yapısı">Proje Yapısı</h2>
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

    <h2 id="özellikler">Özellikler</h2>
    <ul>
        <li>Menü verilerini yerel bir JSON dosyasından alır.</li>
        <li>Menü öğelerini dinamik olarak gösterir.</li>
        <li>Kategoriye göre menü öğelerini filtreler.</li>
        <li>Her bir menü öğesinin detaylarını ayrı bir sayfada gösterir.</li>
    </ul>

    <h2 id="kullanılan-teknolojiler">Kullanılan Teknolojiler</h2>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>

    <h2 id="katkıda-bulunma">Katkıda Bulunma</h2>
    <p>Katkılar memnuniyetle karşılanır! Lütfen bir sorun açın veya bir pull request gönderin.</p>

    <h2 id="lisans">Lisans</h2>
    <p>Bu proje MIT Lisansı ile lisanslanmıştır.</p>
</body>
</html>

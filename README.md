sql management studio'dan yeni query açıp, sql create database adındaki text içindeki kodu çalıştırın sonra sql create table ı çalıştırın table oluştuktan sonra elle veri girin. 

visual studio api klasörünü visual studio içinden açın (asp.net ve web geliştirme paketi yüklü olmalı). Api dosyası içinde  appsettings.json klasörü içinde connection string var. Constringde data sourcedaki DESKTOP-DKKUQQF ismini kendi bilgisayar adınızı(management studio ilk açılırken yazan isim) yapın(sqlexpress yüklü olmalı)

angular projesinde servisler klasörü altındaki servis içinde apiurl var. Bu urldeki port numarasını apiyi açtığımız visual studiodaki çıktı kısmından aldığımız sayı ile değiştirmelisiniz.

visual studio code'dan angular klasörünü açtıktan sonra terminali gitbash olarak açıp ng serve --o yazarak açabilirsiniz.

localhosttan sonra yazılacak sayfa yolları:

/homepage(verileri çekerek açar)

/details(veriyi çekerek açar)

/categories(işlevsiz)

/login(işlevsiz)

/register(işlevsiz)

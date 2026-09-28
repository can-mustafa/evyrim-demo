# Evyrim · Ata Höyüğü (oynanabilir demo)

İskandinav temalı açık dünya RPG demosu. Tarayıcıda çalışır, telefona uygulama gibi kurulabilir (PWA).

**Oyna:** GitHub Pages adresini telefonda ya da bilgisayarda aç.

**Telefona kur:**
- **Android (Chrome):** başlık ekranındaki “Telefona yükle” butonuna dokun ya da menüden “Uygulamayı yükle”yi seç.
- **iPhone/iPad (Safari):** Paylaş düğmesine dokun, sonra “Ana Ekrana Ekle”yi seç.

Kurulduktan sonra oyun ana ekrandan tam ekran ve yatay açılır. İlk açılıştan sonra internetsiz de oynanır.

**Kontroller:**
- **Telefon:** Sol başparmakla yürü, sağ tarafta sürükleyerek kamerayı çevir. Saldırı, blok, kaçış, rün, gizlenme ve iksir butonları sağ altta.
- **Bilgisayar:** WASD ile yürü, fareyle kamerayı çevir. Sol tık saldırı, F blok, Boşluk kaçış, C gizlenme, R rün, Q iksir, E etkileşim.

---

Bu klasör `tools/build_pwa.py` tarafından `demo/index.html`'den üretilir. Burada elle düzenleme yapma; değişiklikleri `demo/index.html`'de yap, sonra `python3 tools/build_pwa.py` çalıştır.

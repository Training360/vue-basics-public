# Jegyzet

## Tartalom

- Vue-alkalmazás inicializálása
- A `createApp()` metódus
- A `mount()` metódus
- A `setup()` metódus
- Text interpolation

## Lépések

- Készítsünk egy új mappát a projektkönyvtárunkban _vuejs-basic_ néven
- Nyissuk meg a mappát VSCode-ban
- Hozzunk létre egy fájlt `index.html` néven
- Készítsünk el egy egyszerű HTML-struktúrát:

```html
<!DOCTYPE html>
<html lang="hu">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Init Vue app</title>
  </head>

  <body></body>
</html>
```

- Linkeljük be a `head`be a következőt:

```js
<script src="https://unpkg.com/vue@3"></script>
```

- Ez nem más, mint a Vue lebuildelt kódja
- Így már használatba is vehetjük
- Hozzunk létre az index.html mellett egy _main.js_ fájlt
- Ennek a tartalma legyen a következő:

```js
const app = Vue.createApp({
  setup() {
    const message = 'Vue is sooo cooool!'
    return {
      message,
    }
  },
})

app.mount('#app')
```

- A `Vue` objektum globálisan elérhető, hiszen a `head`be belinkeltük a `Vue`-t
- A `createApp` metódus hozza létre magát az alkalmazást
- A `createApp` egy options object-et kap paraméterként
- Az options object jelenleg egy metódust tartalmaz: `setup()`
- Ezen belül létrehozunk egy `message` változót és értéket adunk neki
- A `setup()` visszatérési értéke egy objektum, amely azokat az adatokat tartalmazza, amelyeket a komponensen belül globálisan el szeretnénk érni
- Ez jelenleg csak a `message` lesz, amelynek az értékét meg akarom jeleníteni
- Ezt fel kell csatolnunk a DOM-ba, hogy valahol az oldalon belül megjelenjen, és működjön az alkalmazás. Egész pontosan az `app` Id-jű elemben helyezzük el
- Ezután adjuk hozzá a body-hoz a következőt:

```html
<div id="app">
  <p>{{ message }}</p>
</div>
```

- Valamint a `body` zárótag elé linkeljük be a `main.js` fájlt
- A dupla kapcsos zárójelek az úgynevezett text interpolation szintaxisát jelentik
- A kapcsos zárójelek között most egy `message` nevű változónak az értékét szeretném megjeleníteni, de bármilyen JavaScriptben használatos kifejezést írhatunk bele
- Linkeljük be a `main.js`-t az `index.html` állományba
- Indítsuk el a Live Server-t
- A `message` változó értéke megjelenik az oldalon

# Projektfeladatok

- A projektfeladatok során legtöbbször a leckék során elkészített alkalmazásokat kell továbbfejlesztened
- Nem kell minden feladatnál az adott alkalmazás kódját lemásolnod, hanem folytatólagosan írhatod a kódot
- A feladatoknak akkor állj neki, ha mind a 3 projektfeladat videóit végignézted
- A projektekhez nincsenek mintamegoldások, mert többféleképp is megvalósíthatók

## 01

- Alakítsd át a **VideoPlayer** alkalmazás kódját úgy, hogy a keresőmező mellett egy gomb is legyen, amelyre kattintva
  szintén történjen meg az API-hívás ugyanúgy, mint amikor entert ütünk a keresőmezőben

## 02

- Alakítsd át a **VideoPlayer** alkalmazás kódját úgy, hogy a `videos` és a `selectedVideo` egy közös store-ban legyen
  eltárolva
- Ehhez hozd létre a store fájlt a szükséges függvényekkel együtt
- A komponensek pedig a store-t használják, ahol erre szükség van a _props_ és _events_ helyett
- Alakítsd át a komponensek kódját a feladatnak megfelelően

## 03

- Alakítsd át a **UserManager** alkalmazást, hogy az `EditUserModal` és a `CreateNewUser` komponensek is egy
  újrafelhasználható `InputField` komponenst használjanak az űrlapelemek csoportjai (label + input) esetében
- Az `InputField` komponens kapjon meg minden props-ot, amelyet az alkalmazás során szükségesnek ítélsz

## 04

- Alakítsd át a **UserManager** alkalmazást, hogy a `CreateUserForm` és az `EditUserModal` egy `UserForm` nevű
  komponenst használjanak fel. Ez a komponens tartalmazza a felhasználók módosítására és létrehozására is szolgáló
  kódot. Így nem kell az űrlapot átmásolni, hanem a teljes űrlap mint egy külön komponens újrafelhasználható lesz.
  Használd az elő feladatban létrehozott `InputField` komponenst is

## 05

- Alakítsd át a **UserManager** alkalmazást, hogy ne _alert_ és _confirm_ ablakokat használj, hanem
  a `vue-toastification` csomagot

## 06

- Alakítsd át a **UserManager** alkalmazást, hogy az adatokat regulárisok segítségével validálod.
- A megszorítások a következők:
    - `firstName`: kötelező, minimum 2 karakter hosszú
    - `lastName`: kötelező, minimum 2 karakter hosszú
    - `email`: kötelező, szabványos e-mail-formátum

## 07

- Egy személyautókat árusító webshop járműveinek menedzselésére kell létrehoznod egy alkalmazást
- A járművek az alábbi adatokkal rendelkeznek:
    - `id`: egyedi azonosító
    - `company`: gyártó
    - `model`: model
    - `year`: évjárat
    - `price`: ár
    - `stock`: darabszám
- Az adatokat a _backend/database/cars.json_ fájl tartalmazza
- Az adatok kiszolgálására json-server-t használj
- Az alkalmazás egy táblázatban jelenítse meg a járművek adatait az `id` kivételével
- Egy járművet lehessen:
    - törölni: ekkor mindenképp kérni kell megerősítést
    - módosítani: egy modal nyíljon meg, benne egy form a jármű adataival
    - új járművet felvinni: szintén egy modal nyíljon meg, ahol a jármű adatait fel lehet vinni
- Mind a módosításra, mind a felvitelre az alábbi szabályok vonatkoznak:
    - Minden adatot kötelező megadni az `id` kivételével
    - A `price` 1.000-100.000 közötti érték lehet
    - A `stock` 1-3 közötti érték lehet
- Amíg nem megfelelő minden adat, ne lehessen menteni
- Mind sikeres és mind sikertelen művelet esetében is a felhasználót tájékoztatni kell vizuálisan

## 08

- Alakítsd át a **Webshop** alkalmazás kódját úgy, hogy legyen külön `AddToCartButton`, `UpdateCartButton`
  és `DeleteFromCartButton` komponensek
- Ha egy termék a kosárban van, akkor mind az `UpdateCartButton` és mind a `DeleteFromCartButton` komponens jelenjen
  meg, tehát két gomb lesz, az egyik a módosításra a másik a törlésre

## 09

- Alakítsd át a **Webshop** alkalmazás kódját úgy, hogy a **Cart** oldalon is legyen lehetőség a kosárban lévő termékek
  darabszámának módosítására és törlésére
- Amennyiben a darabszám 0-ra módosul, ki kell venni a kosárból a terméket, és nem kell megjeleníteni a kosárnál
- Figyelj oda, hogy ne legyen duplikált kódrészleted!

# 10

- Alakítsd át a **Webshop** alkalmazás kódját úgy, hogy amikor a kosárba helyezem a termékeket, azok tartósan meg is
  maradjanak
- Ennek a megvalósításához használj localStorage-ot
- A localStorage tárolja a `cart`ot
- Amikor az alkalmazás elindul, ki is olvassa a localStorage-ban lévő értéket - ha van - és feltölti a cartot

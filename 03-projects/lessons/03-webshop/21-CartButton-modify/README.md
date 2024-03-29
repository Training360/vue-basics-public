# Jegyzet

## Tartalom

- Kosárban lévő termék darabszámának módosítása

## Lépések

- Abban az esetben, ha a termék már a kosárban van és a `count` jelenleg nem 0, akkor módosítanunk kell a kosárban lévő darabszámot
- Két függvényt adok a cart store-hoz:
- A `getItemIndexById()` visszaadja a kosárban lévő termék indexét
- A `changeItemCount()` frissíti az adott Id-jű elem darabszámát a kosárban:

```js
function getItemIndexById(id) {
  return cart.value.findIndex((item) => item.id === id)
}

function changeItemCount(id, count) {
  const index = getItemIndexById(id)
  cart.value[index].count = count
}
```

- Módosítom a `handleCartButtonClick()`-et, hogy a megfelelő feltételek mellett ne hozzáadja, hanem módosítsa a termék darabszámát a kosárban:

```js
function handleCartButtonClick(guitar) {
  const basketItem = getItemById(guitar.id)
  if (!basketItem && count.value > 0) {
    addItemToCart(guitar, count.value)
    buttonText.value = 'Update cart'
  } else if (
    basketItem?.count != count.value &&
    basketItem?.stock >= count.value &&
    count.value > 0
  ) {
    changeItemCount(guitar.id, count.value)
  }
}
```

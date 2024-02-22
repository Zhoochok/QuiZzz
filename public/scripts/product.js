// const formAddProduct = document.querySelector('.productAddForm');
// const container = document.querySelector('.productCard');

// if (formAddProduct) {
//   formAddProduct.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const { productName, description, price, image } = event.target;
//     const data = {
//       productName: productName.value,
//       description: description.value,
//       price: price.value,
//       image: image.value,
//     };
//     // console.log(data);
//     const response = await fetch('/product', {
//       method: 'POST',
//       headers: { 'Content-type': 'application/json' },
//       body: JSON.stringify(data),
//     });
//     const res = await response.json();
//     console.log(res);
//     if (res.message === 'success') {
//       formAddProduct.reset();
//       document
//         .querySelector('.productCard')
//         .insertAdjacentHTML('beforeend', res.html);
//     }
//   });
// }

// if (container) {
//   // повесили клик на большой контейнер
//   container.addEventListener('click', async (event) => {
//     // нашли все кнопки удалить
//     if (event.target.classList.contains('btn-delete')) {
//       // здесь карточка на которую нажали,
//       const card = event.target.closest('.cardItem');
//       //внимание на регистр и на каком уровне он расположен
//       const { id } = card.dataset;
//       const res = await fetch(`/product/${id}`, { method: 'DELETE' });
//       const data = await res.json();

//       if (data.message === 'success') {
//         card.remove();
//       }
//     }
//   });
// }

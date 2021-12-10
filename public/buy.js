async function fetchProducts() {
   try {
      const {
         data: { products },
      } = await axios.get(url);
      const tempProducts = products
      .map((each) => {
         return `<article class='product'>
         <img src="${each.image}" aly="${each.name}" class="img"/>
         <footer>
         <p>${each.name}</p>
         <span>${each.price}</span>
         </footer>
         <button onclick='updateItem(${each.id})'>Add to Cart</button>
         </article>`;
      }).join("");
   container.innerHTML = tempProducts;
   } catch (error) {
      console.log(error);
   }
}

fetchProducts();

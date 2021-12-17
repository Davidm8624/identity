const url = "/api/v1/products";

const container = document.querySelector(".container");

async function updateItem(id) {
  await axios.post(`${url}/cart`, { id });
}

async function fetchProducts() {
  try {
    const {
      data: { product },
    } = await axios.get(`${url}/shop`);
    const tempProducts = product
      .map((item) => {
        return `<article class = "product"> 
        <img src="${item.image}" alt = "${item.name}" class = "img"/> 
        <footer><h3>${item.name} <br/><br/> ${item.type}</h3>
        <h4>${item.price}</h4>
        <p>${item.race} ${item.gender}</article><br/>
        <button onclick="console.log('${item._id}');updateItem('${item._id}')">Add To Cart</button>`;
      })
      .join("");
    container.innerHTML = tempProducts;
  } catch (err) {
    console.error(err);
  }
}

fetchProducts();

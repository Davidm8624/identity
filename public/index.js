const url = "/api/v1/products";

const container = document.querySelector(".container");

updateItem = async (id) => {
  const product = axios.get(`${url}/single`, { id });
  await axios.post(`${url}/cart`, product);
};

async function fetchProducts() {
  try {
    const {
      data: { product },
    } = await axios.get(`${url}/shop`);
    console.log(product);
    const tempProducts = product
      .map((item) => {
        return `<article class = "product"> 
       <img src="${item.image}" alt = "${item.name}" class = "img"/> 
       <footer><h3>${item.name}</h3><br/><h4>${item.price}</h4></article><br/>
       <button onclick="updateItem('${item._id}')">Add To Cart</button>`;
      })
      .join("");
    container.innerHTML = tempProducts;
  } catch (err) {
    console.error(err);
  }
}

fetchProducts();

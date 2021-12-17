const url = "/api/v1/products";
const fileFormDOM = document.querySelector(".file-form");

const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const ageInput = document.querySelector("#age");
const raceInput = document.querySelector("#race");
const genderInput = document.querySelector("#gender");
const typeInput = document.querySelector("#type");

const imageInput = document.querySelector("#image");
const fileForm = document.querySelector(".file-form");

const container = document.querySelector(".container");
let imageValue;

fileForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nameValue = nameInput.value;
  const priceValue = priceInput.value;
  const ageValue = ageInput.value;
  const raceValue = raceInput.value;
  const genderValue = genderInput.value;
  const typeValue = typeInput.value;
  try {
    const product = { name: nameValue, type: typeValue, price: priceValue, image: imageValue, race: raceValue, gender: genderValue, age: ageValue};
    await axios.post(`${url}/sell`, product);
    priceInput.value = 0
  } catch (error) {
    console.log(error);
  }
});

imageInput.addEventListener("change", async (e) => {
  const imageFile = e.target.files[0];
  console.log(imageFile);
  const formData = new FormData();
  formData.append("image", imageFile);
  // console.log([...formData.values()]);
  try {
    const {
      data: {
        image: {
          src
        },
      },
    } = await axios.post(`${url}/uploads`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    imageValue = src
  } catch (err) {
    console.log(err);
  }
});
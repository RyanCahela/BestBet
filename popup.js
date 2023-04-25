import data from "./dummy-data.json";

const fetchBtn = document.querySelector(".js-fetch-button");

fetchBtn.addEventListener("click", () => {
  for (let i = 0; i < data.length; i++) {
    console.dir(data[i]);
  }
});

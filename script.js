let apiRoot = "https://dev.sellix.io/v1";

let endPoint = '/categories';

document.querySelector("#search-bar").addEventListener("keyup", search);

fetch(`${apiRoot}${endPoint}`, {
  headers: {
    'Authorization': 'Bearer V2Mu5ZKnY0zLAOIrJLprSRdwmru6nR75BTsPcIEq1B6FRNYVfevZpYz7p56TERFz'
  }
})
  .then(result => result.json())
  .then(result => appendProducts(result)
  );

function appendProducts(json) {
  json.data.categories.forEach((category) => {
    const main = document.querySelector("main");

    // Create the header for the product categories
    let categoryHeader = document.createElement("h3");

    categoryHeader.innerText = category.title;

    // Add the header to the dom
    main.appendChild(categoryHeader);

    // Create the product-container
    let productContainer = document.createElement("div");
    productContainer.classList.add("product-container");

    category.products_bound.forEach((product) => {
      appendP(product.uniqid, productContainer);
      main.appendChild(productContainer)
    });
  });
}

async function appendP(productId, productContainer) {
  endPoint = "/products/"
  fetch(`${apiRoot}${endPoint}${productId}`, {
    headers: {
      'Authorization': 'Bearer V2Mu5ZKnY0zLAOIrJLprSRdwmru6nR75BTsPcIEq1B6FRNYVfevZpYz7p56TERFz'
    }
  }).then(result => result.json())
    .then(result => {
      const product = result.data.product;

      let productDiv = document.createElement("div");
      productDiv.dataset.title = product.title;
      productDiv.classList.add("product-div");

      let image = document.createElement("img");
      let cloudFareImageId = product.cloudflare_image_id;
      image.src = `https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/${cloudFareImageId}/public`

      let h4 = document.createElement("h4");
      h4.innerText = product.title;

      let description = document.createElement("p");
      description.innerText = product.description;

      let button = document.createElement("button");
      button.innerText = `Purchase - $${product.price}`;
      button.setAttribute("data-sellix-product", product.uniqid)
      button.type = "submit"
      button.alt = "Buy Now with sellix.io";

      productDiv.appendChild(image);
      productDiv.appendChild(h4);
      productDiv.appendChild(description);
      productDiv.appendChild(button);

      productContainer.appendChild(productDiv);
    });
}

function search(event) {
  let searchTerm = event.target.value;
  console.log(searchTerm)
  let products = document.querySelectorAll(".product-div");
  products.forEach((product) => {
    const title = product.dataset.title;
    if (title.length === 0)
      product.style.display = "block";
    else if (!title.includes(searchTerm))
      product.style.display = "none";
    else
      product.style.display = "block";
  })
}
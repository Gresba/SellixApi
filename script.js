let apiRoot = "https://dev.sellix.io/v1";

let endPoint = '/categories';

fetch(`${apiRoot}${endPoint}`, {
  headers: {
    'Authorization': 'Bearer V2Mu5ZKnY0zLAOIrJLprSRdwmru6nR75BTsPcIEq1B6FRNYVfevZpYz7p56TERFz'
  }
})
  .then(result => result.json())
  .then(result => appendProducts(result)
  );

function appendProducts(json) {
  console.log(json)
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
      console.log(result)

      let productDiv = document.createElement("div");
      productDiv.classList.add("product-div");

      let image = document.createElement("img");
      let cloudFareImageId = result.data.product.cloudflare_image_id;
      image.src = `https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/${cloudFareImageId}/public`

      let h4 = document.createElement("h4");
      h4.innerText = result.data.product.title;

      let description = document.createElement("p");
      description.innerText = result.data.product.description;

      productDiv.appendChild(image);
      productDiv.appendChild(h4);
      productDiv.appendChild(description);

      productContainer.appendChild(productDiv);
    });
}

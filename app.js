import { productsData } from "./products.js";

const productsDom = document.querySelector(".products-center");

// getting data
class Products {
  getProductsData() {
    return productsData;
  }
}

// displaying data
class UI {
  displayProducts(products) {
    let html = "";
    products.forEach((product) => {
      html += `<div class="product">
                 <div class="img-container">
                   <img src=${product.imageUrl} class="product-img" />
                 </div>
                 <div class="product-desc">
                   <p class="product-price">$ ${product.price}</p>
                   <p class="product-title">${product.title}</p>
                 </div>
                 <button data-id=${product.id} class="btn add-to-cart">
                   <i class="fas fa-shopping-cart"></i>
                   add to cart
                </button>
              </div>`;
      productsDom.innerHTML = html;
    });
  }
}

// storing data

class Storage {
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
}


// loading event
document.addEventListener("DOMContentLoaded", () => {
  const products = new Products().getProductsData();
  new UI().displayProducts(products);
  Storage.saveProducts(products);
});

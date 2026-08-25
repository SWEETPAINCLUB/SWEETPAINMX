/* =========================================================
   SWEETPAIN — APP.JS
   ========================================================= */


/* =========================================================
   PRODUCTOS
========================================================= */

const products = [

    {
        id: "undertaker",
        name: "SWEETPAIN X UNDERTAKER",
        image: "assets/undertaker.png",
        collection: "COLLECTION 001 / WWE",
        description: "Artefacto inspirado en una de las figuras más icónicas de la era WWE.",
        type: "playera"
    },

    {
        id: "stone-cold",
        name: "SWEETPAIN X STONE COLD",
        image: "assets/stone-cold.png",
        collection: "COLLECTION 001 / WWE",
        description: "Actitud, presencia y una era que marcó la historia.",
        type: "playera"
    },

    {
        id: "triple-h",
        name: "SWEETPAIN X TRIPLE H",
        image: "assets/triple-h.png",
        collection: "COLLECTION 001 / WWE",
        description: "Una pieza inspirada en una de las grandes figuras de la lucha libre.",
        type: "playera"
    },

    {
        id: "hbk",
        name: "SWEETPAIN X HBK",
        image: "assets/hbk.png",
        collection: "COLLECTION 001 / WWE",
        description: "Heartbreak. Presencia. Legado.",
        type: "playera"
    },

    {
        id: "the-rock",
        name: "SWEETPAIN X THE ROCK",
        image: "assets/the-rock.png",
        collection: "COLLECTION 001 / WWE",
        description: "Una pieza para quienes entienden lo que significa tener presencia.",
        type: "playera"
    },

    {
        id: "eddie-guerrero",
        name: "SWEETPAIN X EDDIE GUERRERO",
        image: "assets/eddie-guerrero.png",
        collection: "COLLECTION 001 / WWE",
        description: "Una reinterpretación SweetPain de una era inolvidable.",
        type: "playera"
    },

    {
        id: "rey-mysterio",
        name: "SWEETPAIN X REY MYSTERIO",
        image: "assets/rey-mysterio.png",
        collection: "COLLECTION 001 / WWE",
        description: "619. Máscara. Legado.",
        type: "playera"
    },

    {
        id: "kane",
        name: "SWEETPAIN X KANE",
        image: "assets/kane.png",
        collection: "COLLECTION 001 / WWE",
        description: "Una presencia imposible de ignorar.",
        type: "playera"
    },

    {
        id: "jeff-hardy",
        name: "SWEETPAIN X JEFF HARDY",
        image: "assets/jeff-hardy.png",
        collection: "COLLECTION 001 / WWE",
        description: "Caos, libertad y una identidad completamente propia.",
        type: "playera"
    }

];


/* =========================================================
   ELEMENTOS
========================================================= */

const productGrid = document.getElementById("productGrid");

const productModal = document.getElementById("productModal");

const modalImage = document.getElementById("modalImage");

const modalCollection = document.getElementById("modalCollection");

const modalName = document.getElementById("modalName");

const modalDescription = document.getElementById("modalDescription");

const preorderBtn = document.getElementById("preorderBtn");

const sizes = document.getElementById("sizes");

const menuButton = document.getElementById("menuButton");

const mobileMenu = document.getElementById("mobileMenu");

const mobileClose = document.getElementById("mobileClose");

const intro = document.getElementById("intro");

const siteHeader = document.getElementById("siteHeader");


/* =========================================================
   PRECIOS
========================================================= */

const prices = {

    playera: 280,

    sudadera: 450

};


/* =========================================================
   ESTADO
========================================================= */

let currentProduct = null;

let currentType = "playera";

let currentFilter = "all";

let currentSize = "M";


/* =========================================================
   RENDER PRODUCTOS
========================================================= */

function renderProducts(filter = "all") {

    if (!productGrid) return;

    productGrid.innerHTML = "";

    let filteredProducts = products;

    if (filter !== "all") {

        filteredProducts = products.filter(
            product => product.type === filter
        );

    }


    filteredProducts.forEach((product, index) => {

        const card = document.createElement("article");

        card.className = "product-card reveal";

        card.dataset.type = product.type;


        card.innerHTML = `

            <button
                class="product-card-button"
                onclick="openProduct('${product.id}')"
                aria-label="Ver ${product.name}"
            >

                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="${index < 3 ? "eager" : "lazy"}"
                    >

                </div>


                <div class="product-info">

                    <div>

                        <span class="product-collection">
                            ${product.collection}
                        </span>

                        <h3>
                            ${product.name}
                        </h3>

                    </div>


                    <div class="product-price">

                        <span>
                            DESDE
                        </span>

                        <strong>
                            $280
                        </strong>

                    </div>

                </div>

            </button>

        `;


        productGrid.appendChild(card);

    });


    updateShopCount(filteredProducts.length);

}


/* =========================================================
   CONTADOR SHOP
========================================================= */

function updateShopCount(count) {

    const counter = document.querySelector(".shop-count");

    if (!counter) return;

    counter.textContent =
        String(count).padStart(2, "0") + " ARTEFACTOS";

}


/* =========================================================
   ABRIR PRODUCTO
========================================================= */

function openProduct(productId) {

    const product = products.find(
        item => item.id === productId
    );

    if (!product || !productModal) return;


    currentProduct = product;

    currentType = "playera";

    currentSize = "M";


    modalImage.src = product.image;

    modalImage.alt = product.name;

    modalCollection.textContent = product.collection;

    modalName.textContent = product.name;

    modalDescription.textContent =
        product.description;


    updateProductTypeButtons();

    updateSizeButtons();


    productModal.classList.add("open");

    document.body.classList.add("modal-open");

}


/* =========================================================
   CERRAR PRODUCTO
========================================================= */

function closeProduct() {

    if (!productModal) return;

    productModal.classList.remove("open");

    document.body.classList.remove("modal-open");

}


/* =========================================================
   TIPO DE PRODUCTO
========================================================= */

function updateProductTypeButtons() {

    const typeButtons =
        document.querySelectorAll(".type-button");


    typeButtons.forEach(button => {

        const type = button.dataset.type;

        button.classList.toggle(
            "active",
            type === currentType
        );


        const price =
            button.querySelector("strong");


        if (price) {

            price.textContent =
                `$${prices[type]}`;

        }

    });


    if (preorderBtn) {

        preorderBtn.innerHTML = `

            <span>
                PRE-ORDER
            </span>

            <span>
                WHATSAPP →
            </span>

        `;

    }

}


/* =========================================================
   BOTONES PLAYERA / SUDADERA
========================================================= */

document.addEventListener("click", event => {

    const button =
        event.target.closest(".type-button");


    if (!button) return;


    currentType = button.dataset.type;

    updateProductTypeButtons();

});


/* =========================================================
   TALLAS
========================================================= */

function updateSizeButtons() {

    if (!sizes) return;


    const sizeButtons =
        sizes.querySelectorAll("button");


    sizeButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.textContent.trim() === currentSize
        );

    });

}


if (sizes) {

    sizes.addEventListener("click", event => {

        const button =
            event.target.closest("button");


        if (!button) return;


        currentSize =
            button.textContent.trim();


        updateSizeButtons();

    });

}


/* =========================================================
   PRE-ORDER WHATSAPP
========================================================= */

if (preorderBtn) {

    preorderBtn.addEventListener("click", () => {

        if (!currentProduct) return;

        const price = prices[currentType];

        const typeName =
            currentType === "playera"
                ? "Playera"
                : "Sudadera";

        const message =
            `Hola SWEETPAIN 👋\n\n` +
            `Quiero hacer un PRE-ORDER.\n\n` +
            `Producto: ${currentProduct.name}\n` +
            `Tipo: ${typeName}\n` +
            `Talla: ${currentSize}\n` +
            `Precio: $${price} MXN\n\n` +
            `Gracias.`;

        const whatsappURL =
            `https://wa.me/525665897458?text=${encodeURIComponent(message)}`;

        window.open(
            whatsappURL,
            "_blank"
        );

    });

}


/* =========================================================
   FILTROS SHOP
========================================================= */

const filterButtons =
    document.querySelectorAll(".filter");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter =
            button.dataset.filter;


        currentFilter = filter;


        filterButtons.forEach(item => {

            item.classList.remove("active");

        });


        button.classList.add("active");


        renderProducts(filter);

    });

});


/* =========================================================
   FILTRAR COLECCIÓN
========================================================= */

function filterCollection(collection) {

    if (collection === "WWE") {

        currentFilter = "all";

        filterButtons.forEach(button => {

            button.classList.remove("active");

        });


        const allButton =
            document.querySelector(
                '.filter[data-filter="all"]'
            );


        if (allButton) {

            allButton.classList.add("active");

        }


        renderProducts("all");


        const shop =
            document.getElementById("shop");


        if (shop) {

            shop.scrollIntoView({
                behavior: "smooth"
            });

        }

    }

}


/* =========================================================
   COMING SOON
========================================================= */

function showComingSoon(collection) {

    alert(
        `${collection}\n\n` +
        `COLLECTION ${collection === "NARUTO" ? "002" : "003"}\n\n` +
        `PRÓXIMAMENTE.\n\n` +
        `SWEETPAIN`
    );

}


/* =========================================================
   MENÚ MOBILE
========================================================= */

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.add("open");

        document.body.classList.add("menu-open");

    });

}


if (mobileClose && mobileMenu) {

    mobileClose.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

        document.body.classList.remove("menu-open");

    });

}


/* =========================================================
   CERRAR MENÚ AL NAVEGAR
========================================================= */

if (mobileMenu) {

    const mobileLinks =
        mobileMenu.querySelectorAll("a");


    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

            document.body.classList.remove("menu-open");

        });

    });

}


/* =========================================================
   ESC — CERRAR MODAL / MENÚ
========================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeProduct();


        if (mobileMenu) {

            mobileMenu.classList.remove("open");

        }


        document.body.classList.remove("menu-open");

    }

});


/* =========================================================
   INTRO
========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        if (intro) {

            intro.classList.add("hidden");

        }

        if (siteHeader) {

            siteHeader.classList.add("visible");

        }

    }, 1800);

});


/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

function initializeReveal() {

    const elements =
        document.querySelectorAll(".reveal");


    if (!("IntersectionObserver" in window)) {

        elements.forEach(element => {

            element.classList.add("visible");

        });

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(element => {

        observer.observe(element);

    });

}


/* =========================================================
   INICIO
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    renderProducts("all");

    initializeReveal();

});


/* =========================================================
   EXPORTS GLOBALES
========================================================= */

window.openProduct = openProduct;

window.closeProduct = closeProduct;

window.filterCollection = filterCollection;

window.showComingSoon = showComingSoon; 

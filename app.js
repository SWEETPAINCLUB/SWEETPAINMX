/* =========================================================
   SWEETPAIN — APP.JS
   CART SYSTEM — STRIPE READY
   WHATSAPP REMOVED
========================================================= */


/* =========================================================
   PRODUCTOS
========================================================= */

const products = [

    /* ================= COLLECTION 001 — WWE ================= */

    {
        id: "undertaker",
        name: "SWEETPAIN X UNDERTAKER",
        image: "assets/undertaker.png",
        collection: "COLLECTION 001 / WWE",
        collectionId: "WWE",
        description: "Artefacto inspirado en una de las figuras más icónicas de la era WWE.",
        type: "playera"
    },

    {
        id: "stone-cold",
        name: "SWEETPAIN X STONE COLD",
        image: "assets/stone-cold.png",
        collection: "COLLECTION 001 / WWE",
        collectionId: "WWE",
        description: "Actitud, presencia y una era que marcó la historia.",
        type: "playera"
    },

    {
        id: "triple-h",
        name: "SWEETPAIN X TRIPLE H",
        image: "assets/triple-h.png",
        collection: "COLLECTION 001 / WWE",
        collectionId: "WWE",
        description: "Una pieza inspirada en una de las grandes figuras de la lucha libre.",
        type: "playera"
    },

    {
        id: "hbk",
        name: "SWEETPAIN X HBK",
        image: "assets/hbk.png",
        collection: "COLLECTION 001 / WWE",
        collectionId: "WWE",
        description: "Heartbreak. Presencia. Legado.",
        type: "playera"
    },

    {
        id: "the-rock",
        name: "SWEETPAIN X THE ROCK",
        image: "assets/the-rock.png",
        collection: "COLLECTION 001 / WWE",
        collectionId: "WWE",
        description: "Una pieza para quienes entienden lo que significa tener presencia.",
        type: "playera"
    },

    {
        id: "eddie-guerrero",
        name: "SWEETPAIN X EDDIE GUERRERO",
        image: "assets/eddie-guerrero.png",
        collection: "COLLECTION 001 / WWE",
        collectionId: "WWE",
        description: "Una reinterpretación SweetPain de una era inolvidable.",
        type: "playera"
    },

    {
        id: "rey-mysterio",
        name: "SWEETPAIN X REY MYSTERIO",
        image: "assets/rey-mysterio.png",
        collection: "COLLECTION 001 / WWE",
        collectionId: "WWE",
        description: "619. Máscara. Legado.",
        type: "playera"
    },

    {
        id: "kane",
        name: "SWEETPAIN X KANE",
        image: "assets/kane.png",
        collection: "COLLECTION 001 / WWE",
        collectionId: "WWE",
        description: "Una presencia imposible de ignorar.",
        type: "playera"
    },

    {
        id: "jeff-hardy",
        name: "SWEETPAIN X JEFF HARDY",
        image: "assets/jeff-hardy.png",
        collection: "COLLECTION 001 / WWE",
        collectionId: "WWE",
        description: "Caos, libertad y una identidad completamente propia.",
        type: "playera"
    },


    /* ================= COLLECTION 002 — NARUTO ================= */

    {
        id: "akatsuki",
        name: "SWEETPAIN X AKATSUKI",
        image: "assets/akatsuki.png",
        collection: "COLLECTION 002 / NARUTO",
        collectionId: "NARUTO",
        description: "Una organización. Nueve sombras. Una misma identidad.",
        type: "playera"
    },

    {
        id: "pain",
        name: "SWEETPAIN X PAIN",
        image: "assets/pain.png",
        collection: "COLLECTION 002 / NARUTO",
        collectionId: "NARUTO",
        description: "Dolor, presencia y una visión capaz de cambiar el mundo.",
        type: "playera"
    },

    {
        id: "obito",
        name: "SWEETPAIN X OBITO",
        image: "assets/obito.png",
        collection: "COLLECTION 002 / NARUTO",
        collectionId: "NARUTO",
        description: "Una máscara. Una identidad. Una historia marcada por la guerra.",
        type: "playera"
    },

    {
        id: "itachi",
        name: "SWEETPAIN X ITACHI",
        image: "assets/itachi.png",
        collection: "COLLECTION 002 / NARUTO",
        collectionId: "NARUTO",
        description: "Silencio, sacrificio y un legado imposible de olvidar.",
        type: "playera"
    },

    {
        id: "sasori",
        name: "SWEETPAIN X SASORI",
        image: "assets/sasori.png",
        collection: "COLLECTION 002 / NARUTO",
        collectionId: "NARUTO",
        description: "Arte, control y una obsesión por convertirlo todo en eterno.",
        type: "playera"
    },

    {
        id: "kisame",
        name: "SWEETPAIN X KISAME",
        image: "assets/kisame.png",
        collection: "COLLECTION 002 / NARUTO",
        collectionId: "NARUTO",
        description: "La bestia de la niebla. Brutalidad sin límites.",
        type: "playera"
    },

    {
        id: "hidan",
        name: "SWEETPAIN X HIDAN",
        image: "assets/hidan.png",
        collection: "COLLECTION 002 / NARUTO",
        collectionId: "NARUTO",
        description: "Ritual, caos y una presencia imposible de ignorar.",
        type: "playera"
    },

    {
        id: "deidara",
        name: "SWEETPAIN X DEIDARA",
        image: "assets/deidara.png",
        collection: "COLLECTION 002 / NARUTO",
        collectionId: "NARUTO",
        description: "El arte es explosión. Una pieza nacida del caos.",
        type: "playera"
    },

    {
        id: "kakuzu",
        name: "SWEETPAIN X KAKUZU",
        image: "assets/kakuzu.png",
        collection: "COLLECTION 002 / NARUTO",
        collectionId: "NARUTO",
        description: "Ambición, poder y una vida construida alrededor del valor.",
        type: "playera"
    }

];


/* =========================================================
   ELEMENTOS
========================================================= */

const productGrid =
    document.getElementById("productGrid");

const productModal =
    document.getElementById("productModal");

const modalImage =
    document.getElementById("modalImage");

const modalCollection =
    document.getElementById("modalCollection");

const modalName =
    document.getElementById("modalName");

const modalDescription =
    document.getElementById("modalDescription");

const preorderBtn =
    document.getElementById("preorderBtn");

const sizes =
    document.getElementById("sizes");

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileClose =
    document.getElementById("mobileClose");

const intro =
    document.getElementById("intro");

const siteHeader =
    document.getElementById("siteHeader");


/* =========================================================
   CARRITO
========================================================= */

const cartButton =
    document.getElementById("cartButton");

const cartCount =
    document.getElementById("cartCount");

const cartDrawer =
    document.getElementById("cartDrawer");

const cartOverlay =
    document.getElementById("cartOverlay");

const cartClose =
    document.getElementById("cartClose");

const cartItems =
    document.getElementById("cartItems");

const cartEmpty =
    document.getElementById("cartEmpty");

const cartTotal =
    document.getElementById("cartTotal");

const cartContinue =
    document.getElementById("cartContinue");

const cartCheckout =
    document.getElementById("cartCheckout");


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

let currentCollection = "all";

let currentSize = "M";

let cart = [];


/* =========================================================
   CARRITO — KEY
========================================================= */

function getCartItemKey(
    productId,
    type,
    size
) {

    return `${productId}-${type}-${size}`;

}


/* =========================================================
   ABRIR CARRITO
========================================================= */

function openCart() {

    if (!cartDrawer) return;

    cartDrawer.classList.add("open");

    if (cartOverlay) {

        cartOverlay.classList.add("open");

    }

    document.body.classList.add(
        "cart-open"
    );

}


/* =========================================================
   CERRAR CARRITO
========================================================= */

function closeCart() {

    if (!cartDrawer) return;

    cartDrawer.classList.remove(
        "open"
    );

    if (cartOverlay) {

        cartOverlay.classList.remove(
            "open"
        );

    }

    document.body.classList.remove(
        "cart-open"
    );

}


/* =========================================================
   AÑADIR AL CARRITO
========================================================= */

function addToCart(
    product,
    type,
    size,
    quantity = 1
) {

    const key =
        getCartItemKey(
            product.id,
            type,
            size
        );


    const existingItem =
        cart.find(
            item => item.key === key
        );


    if (existingItem) {

        existingItem.quantity += quantity;

    } else {

        cart.push({

            key: key,

            productId: product.id,

            name: product.name,

            image: product.image,

            collection: product.collection,

            type: type,

            size: size,

            price: prices[type],

            quantity: quantity

        });

    }


    updateCart();

    openCart();

}


/* =========================================================
   CAMBIAR CANTIDAD
========================================================= */

function changeCartQuantity(
    key,
    change
) {

    const item =
        cart.find(
            product => product.key === key
        );


    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product =>
                    product.key !== key
            );

    }


    updateCart();

}


/* =========================================================
   ELIMINAR PRODUCTO
========================================================= */

function removeFromCart(key) {

    cart =
        cart.filter(
            item => item.key !== key
        );


    updateCart();

}


/* =========================================================
   CANTIDAD TOTAL
========================================================= */

function getCartItemCount() {

    return cart.reduce(
        (total, item) => {

            return total + item.quantity;

        },
        0
    );

}


/* =========================================================
   TOTAL
========================================================= */

function getCartTotal() {

    return cart.reduce(
        (total, item) => {

            return total +
                (
                    item.price *
                    item.quantity
                );

        },
        0
    );

}


/* =========================================================
   RENDER CARRITO
========================================================= */

function renderCart() {

    if (!cartItems) return;


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        if (cartEmpty) {

            cartEmpty.style.display =
                "flex";

        }

        return;

    }


    if (cartEmpty) {

        cartEmpty.style.display =
            "none";

    }


    cart.forEach(item => {

        const element =
            document.createElement(
                "div"
            );


        element.className =
            "cart-item";


        const typeName =
            item.type === "playera"
                ? "PLAYERA"
                : "SUDADERA";


        element.innerHTML = `

            <div class="cart-item-image">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

            </div>


            <div class="cart-item-information">

                <span class="cart-item-collection">
                    ${item.collection}
                </span>


                <h3>
                    ${item.name}
                </h3>


                <div class="cart-item-variant">

                    ${typeName}

                    ·

                    TALLA ${item.size}

                </div>


                <div class="cart-item-bottom">


                    <div class="cart-quantity">


                        <button
                            type="button"
                            onclick="changeCartQuantity('${item.key}', -1)"
                        >
                            −
                        </button>


                        <span>
                            ${item.quantity}
                        </span>


                        <button
                            type="button"
                            onclick="changeCartQuantity('${item.key}', 1)"
                        >
                            +
                        </button>


                    </div>


                    <strong>

                        $${(
                            item.price *
                            item.quantity
                        ).toLocaleString(
                            "es-MX"
                        )}

                        MXN

                    </strong>


                </div>


                <button
                    class="cart-remove"
                    type="button"
                    onclick="removeFromCart('${item.key}')"
                >
                    ELIMINAR
                </button>


            </div>

        `;


        cartItems.appendChild(
            element
        );

    });

}


/* =========================================================
   ACTUALIZAR CARRITO
========================================================= */

function updateCart() {

    renderCart();


    const itemCount =
        getCartItemCount();


    const total =
        getCartTotal();


    if (cartCount) {

        cartCount.textContent =
            itemCount;

    }


    if (cartTotal) {

        cartTotal.textContent =
            `$${total.toLocaleString(
                "es-MX"
            )} MXN`;

    }


    if (cartCheckout) {

        cartCheckout.disabled =
            cart.length === 0;

    }

}


/* =========================================================
   BOTÓN CARRITO
========================================================= */

if (cartButton) {

    cartButton.addEventListener(
        "click",
        openCart
    );

}


if (cartClose) {

    cartClose.addEventListener(
        "click",
        closeCart
    );

}


if (cartOverlay) {

    cartOverlay.addEventListener(
        "click",
        closeCart
    );

}


/* =========================================================
   CONTINUAR COMPRANDO
========================================================= */

if (cartContinue) {

    cartContinue.addEventListener(
        "click",
        () => {

            closeCart();


            const shop =
                document.getElementById(
                    "shop"
                );


            if (shop) {

                shop.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


/* =========================================================
   CHECKOUT — STRIPE
========================================================= */

if (cartCheckout) {

    cartCheckout.removeAttribute("onclick");

    cartCheckout.addEventListener("click", async event => {

        event.preventDefault();

        if (cart.length === 0) {
            alert("Tu carrito está vacío.");
            return;
        }

        /* ================================================
           PREPARAR PRODUCTOS PARA STRIPE
        ================================================= */

        const items = cart.map(item => {

            const type = item.type || "playera";

            const price =
                item.price ||
                prices[type] ||
                prices.playera;

            return {
                name: item.name,
                price: price,
                quantity: item.quantity || 1,
                size: item.size || "M",
                type: type
            };

        });


        /* ================================================
           DESACTIVAR BOTÓN
        ================================================= */

        const originalHTML =
            cartCheckout.innerHTML;

        cartCheckout.disabled = true;

        cartCheckout.innerHTML = `
            <span>
                PROCESANDO...
            </span>
        `;


        try {

            /* ============================================
               CONECTAR CON VERCEL / STRIPE
            ============================================ */

            const response = await fetch(
                "https://sweetpain-stripe.vercel.app/api/create-checkout-session",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        items: items
                    })
                }
            );


            const data =
                await response.json();


            /* ============================================
               ERROR DEL SERVIDOR
            ============================================ */

            if (!response.ok) {

                console.error(
                    "Stripe error:",
                    data
                );

                throw new Error(
                    data.error ||
                    "No se pudo iniciar el pago."
                );

            }


            /* ============================================
               REDIRIGIR A STRIPE
            ============================================ */

            if (data.url) {

                window.location.href =
                    data.url;

                return;

            }


            throw new Error(
                "Stripe no devolvió una URL de pago."
            );


        } catch (error) {

            console.error(
                "Error al iniciar Stripe:",
                error
            );


            alert(
                "No pudimos iniciar el pago. " +
                "Intenta nuevamente."
            );


            cartCheckout.disabled =
                false;


            cartCheckout.innerHTML =
                originalHTML;

        }

    });

}


/* =========================================================
   ABRIR PRODUCTO
========================================================= */

function openProduct(productId) {

    const product =
        products.find(
            item =>
                item.id === productId
        );


    if (
        !product ||
        !productModal
    ) {

        return;

    }


    currentProduct =
        product;


    currentType =
        "playera";


    currentSize =
        "M";


    modalImage.src =
        product.image;


    modalImage.alt =
        product.name;


    modalCollection.textContent =
        product.collection;


    modalName.textContent =
        product.name;


    modalDescription.textContent =
        product.description;


    updateProductTypeButtons();

    updateSizeButtons();


    productModal.classList.add(
        "open"
    );


    document.body.classList.add(
        "modal-open"
    );

}


/* =========================================================
   CERRAR PRODUCTO
========================================================= */

function closeProduct() {

    if (!productModal) return;


    productModal.classList.remove(
        "open"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================================================
   TIPO DE PRODUCTO
========================================================= */

function updateProductTypeButtons() {

    const typeButtons =
        document.querySelectorAll(
            ".type-button"
        );


    typeButtons.forEach(
        button => {

            const type =
                button.dataset.type;


            button.classList.toggle(
                "active",
                type === currentType
            );


            const price =
                button.querySelector(
                    "strong"
                );


            if (price) {

                price.textContent =
                    `$${prices[type]}`;

            }

        }
    );


    if (preorderBtn) {

        /*
           Ya no dice WhatsApp.
        */

        preorderBtn.innerHTML = `

            <span>
                AÑADIR AL CARRITO
            </span>

            <span>
                + →
            </span>

        `;

    }

}


/* =========================================================
   PLAYERA / SUDADERA
========================================================= */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                ".type-button"
            );


        if (!button) return;


        currentType =
            button.dataset.type;


        updateProductTypeButtons();

    }
);


/* =========================================================
   TALLAS
========================================================= */

function updateSizeButtons() {

    if (!sizes) return;


    const sizeButtons =
        sizes.querySelectorAll(
            "button"
        );


    sizeButtons.forEach(
        button => {

            button.classList.toggle(
                "active",
                button.textContent.trim() ===
                currentSize
            );

        }
    );

}


if (sizes) {

    sizes.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "button"
                );


            if (!button) return;


            currentSize =
                button.textContent.trim();


            updateSizeButtons();

        }
    );

}


/* =========================================================
   AÑADIR PRODUCTO
========================================================= */

if (preorderBtn) {

    /*
       Eliminamos cualquier
       onclick antiguo.
    */

    preorderBtn.removeAttribute(
        "onclick"
    );


    preorderBtn.addEventListener(
        "click",
        event => {

            event.preventDefault();


            if (!currentProduct) {

                return;

            }


            addToCart(
                currentProduct,
                currentType,
                currentSize,
                1
            );


            closeProduct();

        }
    );

}


/* =========================================================
   FILTROS
========================================================= */

const filterButtons =
    document.querySelectorAll(
        ".filter"
    );


filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                currentFilter =
                    button.dataset.filter;


                filterButtons.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                renderProducts();

            }
        );

    }
);


/* =========================================================
   FILTRAR COLECCIÓN
========================================================= */

function filterCollection(
    collection
) {

    currentCollection =
        collection;


    currentFilter =
        "all";


    filterButtons.forEach(
        button => {

            button.classList.remove(
                "active"
            );

        }
    );


    const allButton =
        document.querySelector(
            '.filter[data-filter="all"]'
        );


    if (allButton) {

        allButton.classList.add(
            "active"
        );

    }


    renderProducts();


    const shop =
        document.getElementById(
            "shop"
        );


    if (shop) {

        shop.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================================
   MENÚ MOBILE
========================================================= */

if (
    menuButton &&
    mobileMenu
) {

    menuButton.addEventListener(
        "click",
        () => {

            mobileMenu.classList.add(
                "open"
            );


            document.body.classList.add(
                "menu-open"
            );

        }
    );

}


if (
    mobileClose &&
    mobileMenu
) {

    mobileClose.addEventListener(
        "click",
        () => {

            mobileMenu.classList.remove(
                "open"
            );


            document.body.classList.remove(
                "menu-open"
            );

        }
    );

}


/* =========================================================
   CERRAR MENÚ AL NAVEGAR
========================================================= */

if (mobileMenu) {

    const mobileLinks =
        mobileMenu.querySelectorAll(
            "a"
        );


    mobileLinks.forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    mobileMenu.classList.remove(
                        "open"
                    );


                    document.body.classList.remove(
                        "menu-open"
                    );

                }
            );

        }
    );

}


/* =========================================================
   ESC
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeProduct();

            closeCart();


            if (mobileMenu) {

                mobileMenu.classList.remove(
                    "open"
                );

            }


            document.body.classList.remove(
                "menu-open"
            );

        }

    }
);


/* =========================================================
   INTRO
========================================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                if (intro) {

                    intro.classList.add(
                        "hidden"
                    );

                }


                if (siteHeader) {

                    siteHeader.classList.add(
                        "visible"
                    );

                }

            },
            1800
        );

    }
);


/* =========================================================
   REVEAL
========================================================= */

function initializeReveal() {

    const elements =
        document.querySelectorAll(
            ".reveal:not(.visible)"
        );


    if (
        !(
            "IntersectionObserver"
            in window
        )
    ) {

        elements.forEach(
            element => {

                element.classList.add(
                    "visible"
                );

            }
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(
        element => {

            observer.observe(
                element
            );

        }
    );

}


/* =========================================================
   RENDER PRODUCTOS
========================================================= */

function renderProducts() {

    if (!productGrid) return;


    productGrid.innerHTML =
        "";


    const filteredProducts =
        products.filter(
            product => {

                const collectionMatch =
                    currentCollection ===
                        "all" ||
                    product.collectionId ===
                        currentCollection;


                const typeMatch =
                    currentFilter ===
                        "all" ||
                    product.type ===
                        currentFilter;


                return (
                    collectionMatch &&
                    typeMatch
                );

            }
        );


    filteredProducts.forEach(
        (product, index) => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "product-card reveal";


            card.dataset.type =
                product.type;


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
                            loading="${
                                index < 3
                                    ? "eager"
                                    : "lazy"
                            }"
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
                                $${prices.playera}
                            </strong>

                        </div>

                    </div>

                </button>

            `;


            productGrid.appendChild(
                card
            );

        }
    );


    updateShopCount(
        filteredProducts.length
    );


    initializeReveal();

}


/* =========================================================
   SHOP COUNT
========================================================= */

function updateShopCount(
    count
) {

    const counter =
        document.querySelector(
            ".shop-count"
        );


    if (!counter) return;


    counter.textContent =
        String(count).padStart(
            2,
            "0"
        ) +
        " ARTEFACTOS";

}


/* =========================================================
   INICIO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderProducts();

        initializeReveal();

        updateCart();

    }
);


/* =========================================================
   EXPORTS
========================================================= */

window.openProduct =
    openProduct;

window.closeProduct =
    closeProduct;

window.filterCollection =
    filterCollection;

window.changeCartQuantity =
    changeCartQuantity;

window.removeFromCart =
    removeFromCart;

window.openCart =
    openCart;

window.closeCart =
    closeCart; 

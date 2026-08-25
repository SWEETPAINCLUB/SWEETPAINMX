/* =========================================================
   SWEETPAIN — APP.JS
   STREETWEAR / MYTHOLOGY
   VERSION REBUILT
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
        description:
            "Artefacto inspirado en una de las figuras más icónicas de la era WWE.",
        type: "playera"
    },

    {
        id: "stone-cold",
        name: "SWEETPAIN X STONE COLD",
        image: "assets/stone-cold.png",
        collection: "COLLECTION 001 / WWE",
        description:
            "Actitud, presencia y una era que marcó la historia.",
        type: "playera"
    },

    {
        id: "triple-h",
        name: "SWEETPAIN X TRIPLE H",
        image: "assets/triple-h.png",
        collection: "COLLECTION 001 / WWE",
        description:
            "Una pieza inspirada en una de las grandes figuras de la lucha libre.",
        type: "playera"
    },

    {
        id: "hbk",
        name: "SWEETPAIN X HBK",
        image: "assets/hbk.png",
        collection: "COLLECTION 001 / WWE",
        description:
            "Heartbreak. Presencia. Legado.",
        type: "playera"
    },

    {
        id: "the-rock",
        name: "SWEETPAIN X THE ROCK",
        image: "assets/the-rock.png",
        collection: "COLLECTION 001 / WWE",
        description:
            "Una pieza para quienes entienden lo que significa tener presencia.",
        type: "playera"
    },

    {
        id: "eddie-guerrero",
        name: "SWEETPAIN X EDDIE GUERRERO",
        image: "assets/eddie-guerrero.png",
        collection: "COLLECTION 001 / WWE",
        description:
            "Una reinterpretación SweetPain de una era inolvidable.",
        type: "playera"
    },

    {
        id: "rey-mysterio",
        name: "SWEETPAIN X REY MYSTERIO",
        image: "assets/rey-mysterio.png",
        collection: "COLLECTION 001 / WWE",
        description:
            "619. Máscara. Legado.",
        type: "playera"
    },

    {
        id: "kane",
        name: "SWEETPAIN X KANE",
        image: "assets/kane.png",
        collection: "COLLECTION 001 / WWE",
        description:
            "Una presencia imposible de ignorar.",
        type: "playera"
    },

    {
        id: "jeff-hardy",
        name: "SWEETPAIN X JEFF HARDY",
        image: "assets/jeff-hardy.png",
        collection: "COLLECTION 001 / WWE",
        description:
            "Caos, libertad y una identidad completamente propia.",
        type: "playera"
    }

];


/* =========================================================
   CONFIGURACIÓN
   ========================================================= */

const PRICES = {
    playera: 280,
    sudadera: 450
};

const WHATSAPP_NUMBER = "525665897458";


/* =========================================================
   ESTADO
   ========================================================= */

let currentProduct = null;
let currentType = "playera";
let currentSize = "M";
let currentFilter = "all";


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

const sizesContainer =
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
   HELPERS
   ========================================================= */

function $(selector) {
    return document.querySelector(selector);
}


function $$(selector) {
    return document.querySelectorAll(selector);
}


/* =========================================================
   SHOP — CONTADOR
   ========================================================= */

function updateShopCount(count) {

    const counter =
        $(".shop-count");

    if (!counter) return;

    counter.textContent =
        `${String(count).padStart(2, "0")} ARTEFACTOS`;

}


/* =========================================================
   SHOP — RENDER
========================================================= */

function renderProducts(filter = "all") {

    if (!productGrid) return;

    currentFilter = filter;

    /*
       IMPORTANTE:

       Esta función SOLO modifica #productGrid.

       Nunca toca:
       - collections
       - collection-grid
       - collection-feature
       - hero
       - manifesto
       - header
    */

    const filteredProducts =
        filter === "all"
            ? products
            : products.filter(
                product => product.type === filter
            );


    productGrid.innerHTML = "";


    filteredProducts.forEach((product, index) => {

        const card =
            document.createElement("article");

        card.className =
            "product-card reveal";


        /*
           Usamos las clases que YA existen
           en tu CSS.
        */

        card.innerHTML = `

            <button
                type="button"
                class="product-card-button"
                aria-label="Ver ${product.name}"
            >

                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="${index < 3 ? "eager" : "lazy"}"
                    >

                </div>


                <div class="product-copy">

                    <span class="product-index">
                        ${String(index + 1).padStart(2, "0")}
                    </span>


                    <h3 class="product-name">
                        ${product.name}
                    </h3>


                    <div class="product-prices">

                        <span>
                            PLAYERA / SUDADERA
                        </span>

                        <strong>
                            DESDE $${PRICES.playera}
                        </strong>

                    </div>


                    <div class="product-status">
                        BAJO PEDIDO
                    </div>

                </div>

            </button>

        `;


        /*
           Abrimos el producto sin usar
           onclick inline.
        */

        const button =
            card.querySelector(
                ".product-card-button"
            );


        if (button) {

            button.addEventListener(
                "click",
                () => openProduct(product.id)
            );

        }


        /*
           Si la imagen no existe,
           solamente ocultamos esa imagen.
           No rompemos el resto del sitio.
        */

        const image =
            card.querySelector("img");


        if (image) {

            image.addEventListener(
                "error",
                () => {

                    image.style.display = "none";

                }
            );

        }


        productGrid.appendChild(card);

    });


    updateShopCount(
        filteredProducts.length
    );


    /*
       Las tarjetas se generan después
       de cargar la página, así que
       necesitamos inicializar sus reveals.
    */

    initializeReveal(
        productGrid.querySelectorAll(".reveal")
    );

}


/* =========================================================
   SHOP — FILTROS
   ========================================================= */

function updateFilterButtons(filter) {

    const buttons =
        $$(".filter");


    buttons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.filter === filter
        );

    });

}


function setupFilters() {

    const buttons =
        $$(".filter");


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const filter =
                    button.dataset.filter || "all";


                updateFilterButtons(filter);

                renderProducts(filter);

            }
        );

    });

}


/* =========================================================
   COLECCIONES
   ========================================================= */

function filterCollection(collection) {

    /*
       MUY IMPORTANTE:

       NO hacemos innerHTML en collections.

       NO reconstruimos las tarjetas.

       NO eliminamos imágenes.

       Solamente seleccionamos el filtro
       correspondiente y llevamos al usuario
       al Shop.
    */


    if (
        !collection ||
        collection.toUpperCase() !== "WWE"
    ) {

        return;

    }


    const shop =
        document.getElementById("shop");


    /*
       WWE actualmente contiene los 9
       productos de la colección.
       Por eso mostramos TODO.
    */

    currentFilter = "all";


    updateFilterButtons("all");

    renderProducts("all");


    if (!shop) return;


    /*
       Esperamos un frame para que el navegador
       termine de pintar el grid antes de hacer
       scroll.
    */

    requestAnimationFrame(() => {

        shop.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}


/* =========================================================
   COMING SOON
   ========================================================= */

function showComingSoon(collection) {

    const number =
        collection === "NARUTO"
            ? "002"
            : "003";


    showToast(
        `${collection} — COLLECTION ${number} / PRÓXIMAMENTE`
    );

}


/* =========================================================
   MODAL — ABRIR
   ========================================================= */

function openProduct(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) return;

    if (!productModal) return;


    currentProduct = product;

    currentType = "playera";

    currentSize = "M";


    /*
       Imagen
    */

    if (modalImage) {

        modalImage.src =
            product.image;

        modalImage.alt =
            product.name;

        modalImage.style.display =
            "block";

    }


    /*
       Información
    */

    if (modalCollection) {

        modalCollection.textContent =
            product.collection;

    }


    if (modalName) {

        modalName.textContent =
            product.name;

    }


    if (modalDescription) {

        modalDescription.textContent =
            product.description;

    }


    updateProductTypeButtons();

    updateSizeButtons();


    productModal.classList.add("open");

    document.body.classList.add("modal-open");


    /*
       Evitamos que el fondo se mueva
       mientras el modal está abierto.
    */

    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   MODAL — CERRAR
   ========================================================= */

function closeProduct() {

    if (!productModal) return;


    productModal.classList.remove("open");

    document.body.classList.remove(
        "modal-open"
    );


    document.body.style.overflow =
        "";


    currentProduct = null;

}


/* =========================================================
   MODAL — TIPO DE PRODUCTO
   ========================================================= */

function updateProductTypeButtons() {

    const buttons =
        $$(".type-button");


    buttons.forEach(button => {

        const type =
            button.dataset.type;


        button.classList.toggle(
            "active",
            type === currentType
        );


        const priceElement =
            button.querySelector("strong");


        if (
            priceElement &&
            PRICES[type]
        ) {

            priceElement.textContent =
                `$${PRICES[type]}`;

        }

    });

}


/* =========================================================
   MODAL — BOTONES DE TIPO
   ========================================================= */

function setupProductTypes() {

    document.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    ".type-button"
                );


            if (!button) return;


            const type =
                button.dataset.type;


            if (!PRICES[type]) return;


            currentType = type;


            updateProductTypeButtons();

        }
    );

}


/* =========================================================
   MODAL — TALLAS
   ========================================================= */

function updateSizeButtons() {

    if (!sizesContainer) return;


    const buttons =
        sizesContainer.querySelectorAll(
            "button"
        );


    buttons.forEach(button => {

        const size =
            button.textContent.trim();


        button.classList.toggle(
            "active",
            size === currentSize
        );

    });

}


function setupSizes() {

    if (!sizesContainer) return;


    sizesContainer.addEventListener(
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
   PRE-ORDER
   ========================================================= */

function setupPreorder() {

    if (!preorderBtn) return;


    preorderBtn.addEventListener(
        "click",
        () => {

            if (!currentProduct) return;


            const price =
                PRICES[currentType];


            const typeName =
                currentType === "playera"
                    ? "PLAYERA"
                    : "SUDADERA";


            const message =
                `Hola SWEETPAIN 👋\n\n` +
                `Quiero hacer un PRE-ORDER.\n\n` +
                `Producto: ${currentProduct.name}\n` +
                `Colección: ${currentProduct.collection}\n` +
                `Tipo: ${typeName}\n` +
                `Talla: ${currentSize}\n` +
                `Precio: $${price} MXN\n\n` +
                `Gracias.`;


            const url =
                `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


            window.open(
                url,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}


/* =========================================================
   MENÚ MOBILE
   ========================================================= */

function openMobileMenu() {

    if (!mobileMenu) return;


    mobileMenu.classList.add("open");

    document.body.classList.add(
        "menu-open"
    );


    document.body.style.overflow =
        "hidden";

}


function closeMobileMenu() {

    if (!mobileMenu) return;


    mobileMenu.classList.remove("open");

    document.body.classList.remove(
        "menu-open"
    );


    /*
       Solo restauramos overflow si
       no hay un modal abierto.
    */

    if (
        !productModal ||
        !productModal.classList.contains("open")
    ) {

        document.body.style.overflow =
            "";

    }

}


function setupMobileMenu() {

    if (menuButton) {

        menuButton.addEventListener(
            "click",
            openMobileMenu
        );

    }


    if (mobileClose) {

        mobileClose.addEventListener(
            "click",
            closeMobileMenu
        );

    }


    if (mobileMenu) {

        const links =
            mobileMenu.querySelectorAll(
                "a"
            );


        links.forEach(link => {

            link.addEventListener(
                "click",
                closeMobileMenu
            );

        });

    }

}


/* =========================================================
   ESC
   ========================================================= */

function setupKeyboard() {

    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape") {
                return;
            }


            if (
                productModal &&
                productModal.classList.contains("open")
            ) {

                closeProduct();

                return;

            }


            if (
                mobileMenu &&
                mobileMenu.classList.contains("open")
            ) {

                closeMobileMenu();

            }

        }
    );

}


/* =========================================================
   MODAL — BACKDROP
   ========================================================= */

function setupModal() {

    if (!productModal) return;


    const backdrop =
        productModal.querySelector(
            ".modal-backdrop"
        );


    if (backdrop) {

        backdrop.addEventListener(
            "click",
            closeProduct
        );

    }


    const closeButton =
        productModal.querySelector(
            ".modal-close"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeProduct
        );

    }

}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimer = null;


function showToast(message) {

    let toast =
        document.querySelector(".toast");


    if (!toast) {

        toast =
            document.createElement("div");

        toast.className =
            "toast";

        document.body.appendChild(
            toast
        );

    }


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2800
        );

}


/* =========================================================
   INTRO
   ========================================================= */

function setupIntro() {

    /*
       Tu CSS ya controla la salida
       del intro mediante animation.

       Aquí NO eliminamos el elemento.

       Esto es importante:
       eliminarlo puede provocar comportamientos
       diferentes al volver a navegar.
    */

    if (!intro) return;


    window.addEventListener(
        "load",
        () => {

            setTimeout(
                () => {

                    intro.classList.add(
                        "hidden"
                    );


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

}


/* =========================================================
   REVEAL
   ========================================================= */

function initializeReveal(
    elements = null
) {

    const revealElements =
        elements ||
        document.querySelectorAll(
            ".reveal"
        );


    if (!revealElements.length) {
        return;
    }


    /*
       Fallback para navegadores sin
       IntersectionObserver.
    */

    if (
        !(
            "IntersectionObserver"
            in window
        )
    ) {

        revealElements.forEach(
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
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        entry.target.classList.add(
                            "visible"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: 0.08,
                rootMargin: "0px 0px -30px 0px"
            }
        );


    revealElements.forEach(
        element => {

            /*
               Si ya está visible,
               no necesitamos observarlo.
            */

            if (
                element.classList.contains(
                    "visible"
                )
            ) {

                return;

            }


            observer.observe(
                element
            );

        }
    );

}


/* =========================================================
   NAVEGACIÓN
   ========================================================= */

function setupNavigation() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) return;


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });


                /*
                   Cerramos menú mobile
                   si estaba abierto.
                */

                closeMobileMenu();

            }
        );

    });

}


/* =========================================================
   HEADER — SCROLL
   ========================================================= */

function setupHeader() {

    if (!siteHeader) return;


    const updateHeader =
        () => {

            if (
                window.scrollY > 30
            ) {

                siteHeader.style.background =
                    "rgba(5,5,5,.88)";

                siteHeader.style.backdropFilter =
                    "blur(10px)";

            } else {

                siteHeader.style.background =
                    "";

                siteHeader.style.backdropFilter =
                    "";

            }

        };


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    updateHeader();

}


/* =========================================================
   IMÁGENES — FALLBACK
   ========================================================= */

function setupImageProtection() {

    document.addEventListener(
        "error",
        event => {

            const image =
                event.target;


            if (
                image &&
                image.tagName === "IMG"
            ) {

                /*
                   No hacemos nada destructivo.

                   La imagen simplemente conserva
                   su contenedor.
                */

                image.classList.add(
                    "image-error"
                );

            }

        },
        true
    );

}


/* =========================================================
   INIT
   ========================================================= */

function initSweetPain() {

    /*
       SHOP
    */

    renderProducts("all");

    setupFilters();


    /*
       MODAL
    */

    setupModal();

    setupProductTypes();

    setupSizes();

    setupPreorder();


    /*
       MOBILE
    */

    setupMobileMenu();


    /*
       KEYBOARD
    */

    setupKeyboard();


    /*
       NAVEGACIÓN
    */

    setupNavigation();


    /*
       HEADER
    */

    setupHeader();


    /*
       INTRO
    */

    setupIntro();


    /*
       IMÁGENES
    */

    setupImageProtection();


    /*
       REVEALS
    */

    initializeReveal();


    /*
       Estado inicial de filtros
    */

    updateFilterButtons("all");

}


/* =========================================================
   DOM READY
   ========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initSweetPain
    );

} else {

    initSweetPain();

}


/* =========================================================
   EXPORTS
   ========================================================= */

window.openProduct =
    openProduct;

window.closeProduct =
    closeProduct;

window.filterCollection =
    filterCollection;

window.showComingSoon =
    showComingSoon; 

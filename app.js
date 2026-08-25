/* =========================================================
   SWEETPAIN
   APP.JS
   STREETWEAR / MYTHOLOGY
   ========================================================= */


/* =========================================================
   CONFIGURACIÓN
   ========================================================= */

const WHATSAPP_NUMBER = "525665897458";


/* =========================================================
   PRODUCTOS
   ========================================================= */

const products = [

    {
        id: 1,

        name: "SWEETPAIN X UNDERTAKER",

        collection: "WWE",

        type: "playera",

        image: "assets/undertaker.png",

        description:
            "Una pieza inspirada en una de las figuras más icónicas de la lucha libre. Interpretada bajo la estética oscura y minimalista de SweetPain.",

        priceShirt: 280,

        priceHoodie: 450,

        availability: "BAJO PEDIDO"
    },


    {
        id: 2,

        name: "SWEETPAIN X STONE COLD",

        collection: "WWE",

        type: "playera",

        image: "assets/stone-cold.png",

        description:
            "Una reinterpretación agresiva y minimalista de una era legendaria. Diseñada para formar parte del universo SweetPain.",

        priceShirt: 280,

        priceHoodie: 450,

        availability: "BAJO PEDIDO"
    },


    {
        id: 3,

        name: "SWEETPAIN X TRIPLE H",

        collection: "WWE",

        type: "playera",

        image: "assets/triple-h.png",

        description:
            "Fuerza, presencia y carácter. Una pieza inspirada en una figura fundamental de una generación.",

        priceShirt: 280,

        priceHoodie: 450,

        availability: "BAJO PEDIDO"
    },


    {
        id: 4,

        name: "SWEETPAIN X HBK",

        collection: "WWE",

        type: "playera",

        image: "assets/hbk.png",

        description:
            "Una pieza inspirada en una de las personalidades más reconocibles de la lucha libre.",

        priceShirt: 280,

        priceHoodie: 450,

        availability: "BAJO PEDIDO"
    },


    {
        id: 5,

        name: "SWEETPAIN X THE ROCK",

        collection: "WWE",

        type: "playera",

        image: "assets/the-rock.png",

        description:
            "Carisma, presencia y actitud. Una interpretación SweetPain de una figura que trascendió el ring.",

        priceShirt: 280,

        priceHoodie: 450,

        availability: "BAJO PEDIDO"
    },


    {
        id: 6,

        name: "SWEETPAIN X EDDIE GUERRERO",

        collection: "WWE",

        type: "playera",

        image: "assets/eddie-guerrero.png",

        description:
            "Una pieza que celebra una personalidad inolvidable y una identidad que marcó generaciones.",

        priceShirt: 280,

        priceHoodie: 450,

        availability: "BAJO PEDIDO"
    },


    {
        id: 7,

        name: "SWEETPAIN X REY MYSTERIO",

        collection: "WWE",

        type: "playera",

        image: "assets/rey-mysterio.png",

        description:
            "Una reinterpretación del legado de una figura que convirtió el estilo en identidad.",

        priceShirt: 280,

        priceHoodie: 450,

        availability: "BAJO PEDIDO"
    },


    {
        id: 8,

        name: "SWEETPAIN X KANE",

        collection: "WWE",

        type: "playera",

        image: "assets/kane.png",

        description:
            "Oscuridad, fuerza y presencia. Una pieza construida alrededor de una de las figuras más imponentes de su época.",

        priceShirt: 280,

        priceHoodie: 450,

        availability: "BAJO PEDIDO"
    },


    {
        id: 9,

        name: "SWEETPAIN X JEFF HARDY",

        collection: "WWE",

        type: "playera",

        image: "assets/jeff-hardy.png",

        description:
            "Una pieza inspirada en una identidad imposible de ignorar. Caos, libertad y actitud bajo la estética SweetPain.",

        priceShirt: 280,

        priceHoodie: 450,

        availability: "BAJO PEDIDO"
    }

];


/* =========================================================
   ELEMENTOS DEL DOM
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

const mobileMenu =
    document.getElementById("mobileMenu");

const menuButton =
    document.getElementById("menuButton");

const mobileClose =
    document.getElementById("mobileClose");

const toast =
    document.getElementById("toast");


/* =========================================================
   ESTADO
   ========================================================= */

let currentProduct = null;

let currentType = "playera";

let currentSize = "M";

let currentFilter = "all";


/* =========================================================
   FORMATEAR PRECIO
   ========================================================= */

function formatPrice(price) {

    return `$${price.toLocaleString("es-MX")}`;

}


/* =========================================================
   CREAR PRODUCTOS
   ========================================================= */

function renderProducts(filter = "all") {

    if (!productGrid) return;

    currentFilter = filter;

    let filteredProducts = products;


    if (filter !== "all") {

        filteredProducts =
            products.filter(product => {

                return product.type === filter;

            });

    }


    productGrid.innerHTML = "";


    filteredProducts.forEach((product, index) => {

        const card =
            document.createElement("button");


        card.className =
            "product-card reveal";


        card.dataset.id =
            product.id;


        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

            </div>


            <div class="product-copy">

                <div class="product-index">

                    ${String(index + 1).padStart(2, "0")}
                    /
                    ${product.collection}

                </div>


                <div class="product-name">

                    ${product.name}

                </div>


                <div class="product-prices">

                    <span>
                        PLAYERA
                    </span>

                    <strong>
                        ${formatPrice(product.priceShirt)}
                    </strong>

                </div>


                <div class="product-prices">

                    <span>
                        SUDADERA
                    </span>

                    <strong>
                        ${formatPrice(product.priceHoodie)}
                    </strong>

                </div>


                <div class="product-status">

                    ● ${product.availability}

                </div>

            </div>

        `;


        card.addEventListener(
            "click",
            () => openProduct(product.id)
        );


        productGrid.appendChild(card);

    });


    observeRevealElements();

}


/* =========================================================
   ABRIR PRODUCTO
   ========================================================= */

function openProduct(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) return;


    currentProduct = product;

    currentType = "playera";

    currentSize = "M";


    modalImage.src =
        product.image;


    modalImage.alt =
        product.name;


    modalCollection.textContent =
        `COLLECTION 001 / ${product.collection}`;


    modalName.textContent =
        product.name;


    modalDescription.textContent =
        product.description;


    updateProductType();


    updateSize();


    productModal.classList.add("open");


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CERRAR PRODUCTO
   ========================================================= */

function closeProduct() {

    if (!productModal) return;


    productModal.classList.remove("open");


    document.body.style.overflow =
        "";

}


/* =========================================================
   ACTUALIZAR TIPO DE PRODUCTO
   ========================================================= */

function updateProductType() {

    if (!currentProduct) return;


    const typeButtons =
        document.querySelectorAll(
            ".type-button"
        );


    typeButtons.forEach(button => {

        const type =
            button.dataset.type;


        button.classList.toggle(
            "active",
            type === currentType
        );


        const priceElement =
            button.querySelector("strong");


        if (!priceElement) return;


        if (type === "playera") {

            priceElement.textContent =
                formatPrice(
                    currentProduct.priceShirt
                );

        }


        if (type === "sudadera") {

            priceElement.textContent =
                formatPrice(
                    currentProduct.priceHoodie
                );

        }

    });

}


/* =========================================================
   SELECCIONAR PLAYERA / SUDADERA
   ========================================================= */

function setupTypeButtons() {

    const typeButtons =
        document.querySelectorAll(
            ".type-button"
        );


    typeButtons.forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                currentType =
                    button.dataset.type;


                updateProductType();

            }
        );

    });

}


/* =========================================================
   TALLAS
   ========================================================= */

function updateSize() {

    const sizeButtons =
        document.querySelectorAll(
            "#sizes button"
        );


    sizeButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.textContent.trim() === currentSize
        );

    });

}


/* =========================================================
   CONFIGURAR TALLAS
   ========================================================= */

function setupSizes() {

    const sizeButtons =
        document.querySelectorAll(
            "#sizes button"
        );


    sizeButtons.forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                currentSize =
                    button.textContent.trim();


                updateSize();

            }
        );

    });

}


/* =========================================================
   WHATSAPP
   ========================================================= */

function createWhatsAppMessage() {

    if (!currentProduct) {

        return "";

    }


    const productType =
        currentType === "playera"
            ? "PLAYERA"
            : "SUDADERA";


    const price =
        currentType === "playera"
            ? currentProduct.priceShirt
            : currentProduct.priceHoodie;


    const message =

`Hola, SweetPain.

Quiero realizar un PRE-ORDER:

━━━━━━━━━━━━━━━━━━

PRODUCTO:
${currentProduct.name}

TIPO:
${productType}

TALLA:
${currentSize}

PRECIO:
${formatPrice(price)} MXN

DISPONIBILIDAD:
BAJO PEDIDO

━━━━━━━━━━━━━━━━━━

Quedo atento para continuar con mi pedido.`;


    return message;

}


/* =========================================================
   ENVIAR PRE-ORDER
   ========================================================= */

function sendPreorder() {

    if (!currentProduct) return;


    const message =
        createWhatsAppMessage();


    const encodedMessage =
        encodeURIComponent(message);


    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;


    window.open(
        whatsappURL,
        "_blank"
    );


    closeProduct();

}


/* =========================================================
   BOTÓN PRE-ORDER
   ========================================================= */

if (preorderBtn) {

    preorderBtn.addEventListener(
        "click",
        sendPreorder
    );

}


/* =========================================================
   FILTROS
   ========================================================= */

function setupFilters() {

    const filters =
        document.querySelectorAll(
            ".filter"
        );


    filters.forEach(filterButton => {

        filterButton.addEventListener(
            "click",
            () => {

                filters.forEach(button => {

                    button.classList.remove(
                        "active"
                    );

                });


                filterButton.classList.add(
                    "active"
                );


                const filter =
                    filterButton.dataset.filter;


                renderProducts(filter);

            }
        );

    });

}


/* =========================================================
   FILTRAR COLECCIÓN
   ========================================================= */

function filterCollection(collection) {

    if (collection !== "WWE") {

        showComingSoon(collection);

        return;

    }


    const shop =
        document.getElementById("shop");


    if (!shop) return;


    shop.scrollIntoView({

        behavior: "smooth"

    });


    setTimeout(() => {

        const allFilter =
            document.querySelector(
                '.filter[data-filter="all"]'
            );


        if (allFilter) {

            allFilter.click();

        }

    }, 500);

}


/* =========================================================
   COMING SOON
   ========================================================= */

function showComingSoon(collection) {

    showToast(
        `${collection} — PRÓXIMAMENTE`
    );

}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimeout;


function showToast(message) {

    if (!toast) return;


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimeout
    );


    toastTimeout =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2500);

}


/* =========================================================
   MENÚ MOBILE
   ========================================================= */

function openMobileMenu() {

    if (!mobileMenu) return;


    mobileMenu.classList.add(
        "open"
    );


    document.body.style.overflow =
        "hidden";

}


function closeMobileMenu() {

    if (!mobileMenu) return;


    mobileMenu.classList.remove(
        "open"
    );


    document.body.style.overflow =
        "";

}


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


/* =========================================================
   CERRAR MENÚ AL SELECCIONAR
   ========================================================= */

document
    .querySelectorAll(
        ".mobile-menu a"
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    });


/* =========================================================
   ESCAPE
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeProduct();

            closeMobileMenu();

        }

    }
);


/* =========================================================
   OBSERVER PARA ANIMACIONES
   ========================================================= */

let revealObserver;


function setupRevealObserver() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    if (!("IntersectionObserver" in window)) {

        elements.forEach(element => {

            element.classList.add(
                "visible"
            );

        });

        return;

    }


    revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .08
            }
        );


    elements.forEach(element => {

        revealObserver.observe(
            element
        );

    });

}


/* =========================================================
   OBSERVAR NUEVOS ELEMENTOS
   ========================================================= */

function observeRevealElements() {

    const elements =
        document.querySelectorAll(
            ".reveal:not(.visible)"
        );


    if (!revealObserver) {

        setupRevealObserver();

        return;

    }


    elements.forEach(element => {

        revealObserver.observe(
            element
        );

    });

}


/* =========================================================
   HEADER AL HACER SCROLL
   ========================================================= */

function setupHeaderScroll() {

    const header =
        document.getElementById(
            "siteHeader"
        );


    if (!header) return;


    let ticking = false;


    window.addEventListener(
        "scroll",
        () => {

            if (!ticking) {

                window.requestAnimationFrame(
                    () => {

                        if (
                            window.scrollY > 50
                        ) {

                            header.style.background =
                                "rgba(5,5,5,.88)";

                            header.style.backdropFilter =
                                "blur(12px)";

                        } else {

                            header.style.background =
                                "linear-gradient(180deg, rgba(0,0,0,.92), rgba(0,0,0,.55), transparent)";

                            header.style.backdropFilter =
                                "none";

                        }


                        ticking = false;

                    }
                );


                ticking = true;

            }

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   PARALLAX HERO
   ========================================================= */

function setupHeroParallax() {

    const heroBackground =
        document.querySelector(
            ".hero-background"
        );


    if (!heroBackground) return;


    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        return;

    }


    window.addEventListener(
        "scroll",
        () => {

            const scroll =
                window.scrollY;


            if (
                scroll < window.innerHeight
            ) {

                heroBackground.style.transform =
                    `translateY(${scroll * .12}px)`;

            }

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   PREVENIR ZOOM ACCIDENTAL EN DOUBLE TAP
   ========================================================= */

let lastTouchEnd = 0;


document.addEventListener(
    "touchend",
    event => {

        const now =
            Date.now();


        if (
            now - lastTouchEnd <= 300
        ) {

            event.preventDefault();

        }


        lastTouchEnd =
            now;

    },
    false
);


/* =========================================================
   CERRAR MODAL CON CLICK FUERA
   ========================================================= */

if (productModal) {

    productModal.addEventListener(
        "click",
        event => {

            if (
                event.target.classList.contains(
                    "modal-backdrop"
                )
            ) {

                closeProduct();

            }

        }
    );

}


/* =========================================================
   PRELOAD DE IMÁGENES
   ========================================================= */

function preloadImages() {

    products.forEach(product => {

        const image =
            new Image();


        image.src =
            product.image;

    });

}


/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

function init() {

    renderProducts("all");

    setupTypeButtons();

    setupSizes();

    setupFilters();

    setupRevealObserver();

    setupHeaderScroll();

    setupHeroParallax();

    preloadImages();

}


/* =========================================================
   ARRANCAR
   ========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        init
    );

} else {

    init();

}

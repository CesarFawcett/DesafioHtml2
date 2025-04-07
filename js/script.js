class OfferManager {
    constructor() {
        this.offers = [
            {
                name: "Armo Botella Termica Con Mango Buffer Acero...",
                price: "$ 299.900",
                discount: "",
                installments: ""
            },
            {
                name: "Impresora multifunción a color Epson Ecofanix L3210...",
                price: "$ 79.990",
                discount: "20% OFF",
                installments: "en 3 cuotas de $ 26.574 con"
            },
            {
                name: "Guantes De Box Profesional Cuartité Bosco 14 Oz Mujer...",
                price: "$ 760.900",
                discount: "23% OFF",
                installments: ""
            },
            {
                name: "Ventilador Samurai Air Pows Pedestal Negro Cantidad o...",
                price: "$ 79.723",
                discount: "47% OFF",
                installments: "en 3 cuotas de $ 46.633 con"
            },
            {
                name: "Producto de ejemplo 1",
                price: "$ 139.900",
                discount: "39% OFF",
                installments: ""
            },
            {
                name: "Producto de ejemplo 2",
                price: "$ 89.990",
                discount: "15% OFF",
                installments: "en 6 cuotas de $ 14.998 con"
            }
        ];
    }

    getOffers() {
        return this.offers;
    }
}

class OfferRenderer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    renderOffers(offers) {
        this.container.innerHTML = offers.map(offer => this.createOfferHtml(offer)).join('');
    }

    createOfferHtml(offer) {
        return `
            <div class="offer-image-container">
                    <img src="${offer.image || 'assets/imagen/producto2.jpg'}" 
                         alt="${offer.name}" 
                         class="offer-image"
                         loading="lazy">
                </div>
                <h3 class="offer-name">${offer.name}</h3>
                <p class="offer-price">${offer.price}</p>
                ${offer.discount ? `<p class="offer-discount">${offer.discount}</p>` : ''}
                ${offer.installments ? `<p class="offer-installments">${offer.installments}</p>`
            : ''}
            </div>
           `;
    }
}

class App {
    constructor() {
        this.offerManager = new OfferManager();
        this.offerRenderer = new OfferRenderer('offersContainer');
    }

    init() {
        this.loadOffers();
        this.setupEventListeners();
    }

    loadOffers() {
        const offers = this.offerManager.getOffers();
        this.offerRenderer.renderOffers(offers);
    }

    setupEventListeners() {
        document.querySelector('.show-all-btn').addEventListener('click', () => {
            alert('Mostrando todas las ofertas...');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});
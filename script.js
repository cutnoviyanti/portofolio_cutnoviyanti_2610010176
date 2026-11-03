/**
 * ITS (IT SOLUTION) - OFFICIAL WEBSITE
 * Modern Catalog & Services JavaScript
 * Contains 39 Master Products, 6 Services, Live Search, Filter, Cart, WhatsApp & Web Checkout
 */

// ==========================================================================
// 1. DATA MASTER 39 PRODUK ITS (LENGKAP SESUAI PERMINTAAN)
// ==========================================================================

const PRODUCTS_DATABASE = [
    // --- 1. KATEGORI: MINUMAN (10 PRODUK) ---
    {
        id: "minuman_01",
        name: "Ichitan Thai Tea",
        category: "Minuman",
        price: 9000,
        desc: "Teh susu khas Thailand yang legit, manisnya pas, dan segar dingin.",
        image: "assets/ichitan.jpg.jpg"
    },
    {
        id: "minuman_02",
        name: "Good Day Coffee",
        category: "Minuman",
        price: 7000,
        desc: "Kopi susu botol siap minum dengan aneka rasa favorit pelepas kantuk.",
        image: "assets/good day.jpg.jpg"
    },
    {
        id: "minuman_03",
        name: " Prof",
        category: "Minuman",
        price: 4000,
        desc: "Kesegaran dalam setiap tegukan. Air mineral untuk menemani setiap momen, menghadirkan kesegaran sederhana dalam keseharianmu.",
        image: "assets/prof.jpg.jpg"
    },
    {
        id: "minuman_04",
        name: "Kopi ABC Botol",
        category: "Minuman",
        price: 4000,
        desc: "Sensasi mantap kopi hitam berpadu susu lembut khas racikan ABC.",
        image: "assets/kopi abc.jpg.jpg"
    },
    {
        id: "minuman_05",
        name: "Milku Susu UHT",
        category: "Minuman",
        price: 4000,
        desc: "Susu sapi Belgia lezat dengan vitamin D dan kalsium tinggi.",
        image: "assets/milku.jpg.jpg"
    },
    {
        id: "minuman_06",
        name: "Floridina Orange",
        category: "Minuman",
        price: 5000,
        desc: "Jus jeruk segar dengan bulir buah jeruk asli kaya vitamin C.",
        image: "assets/floridina.jpg.jpg"
    },
    {
        id: "minuman_07",
        name: "Teh Pucuk Harum",
        category: "Minuman",
        price: 5000,
        desc: "Teh melati wangi dari pucuk daun teh terbaik, sejuk menyegarkan.",
        image: "assets/teh pucuk.jpg.jpg"
    },
    {
        id: "minuman_08",
        name: "Golda Coffee",
        category: "Minuman",
        price: 4000,
        desc: "Perpaduan biji kopi Brazil dan susu Belgia creamy nikmat.",
        image: "assets/golda.jpg.jpg"
    },
    {
        id: "minuman_09",
        name: "Ultramilk UHT",
        category: "Minuman",
        price: 9000,
        desc: "Susu UHT segar berkualitas tinggi kemasan higienis favorit semua.",
        image: "assets/ultramilk.jpg.jpg"
    },
    {
        id: "minuman_10",
        name: "Pocari Sweat",
        category: "Minuman",
        price: 7000,
        desc: "Minuman isotonik pengganti ion dan cairan tubuh yang hilang cepat.",
        image: "assets/pocari.jpg.jpg"
    },

    // --- 2. KATEGORI: MAKANAN & SNACK (6 PRODUK) ---
    {
        id: "makanan_01",
        name: "Nextar Choco Brownies",
        category: "Makanan",
        price: 3000,
        desc: "Kue brownies lembut dengan lelehan cokelat pekat di dalamnya.",
        image: "assets/nextar.jpg.jpg"
    },
    {
        id: "makanan_02",
        name: "Lotte Choco Pie",
        category: "Makanan",
        price: 3000,
        desc: "Biskuit berlapis cokelat tebal dengan marshmallow lembut manis.",
        image: "assets/choco piee.jpg.jpg"
    },
    {
        id: "makanan_03",
        name: "Kalpa Wafer Cokelat",
        category: "Makanan",
        price: 3000,
        desc: "Wafer kelapa berbalut cokelat renyah dengan rasa khas gurih manis.",
        image: "assets/kalpa.jpg.jpg"
    },
    {
        id: "makanan_04",
        name: "Beng-Beng Wafer",
        category: "Makanan",
        price: 3000,
        desc: "Camilan wafer dengan 4 lapis: wafer, karamel, krispi, dan cokelat.",
        image: "assets/beng beng.jpg.jpg"
    },
    {
        id: "makanan_05",
        name: "Nabati Siip Snack",
        category: "Makanan",
        price: 1000,
        desc: "Bites jagung renyah dengan taburan bumbu gurih lezat terjangkau.",
        image: "assets/sip.jpg.jpg"
    },
    {
        id: "makanan_06",
        name: "Triks Crispy Potato",
        category: "Makanan",
        price: 1000,
        desc: "Kraker kentang panggang tipis renyah dengan rasa gurih nagih.",
        image: "assets/triks.jpg.jpg"
    },

    // --- 3. KATEGORI: ALAT DAN ATK (13 PRODUK) ---
    {
        id: "atk_01",
        name: "Tisu Besar",
        category: "ATK",
        price: 4000,
        desc: "Tisu wajah higienis 2 lapis lembut untuk kebutuhan meja dan ruangan.",
        image: "assets/tisu.jpg.jpg"
    },
    {
        id: "atk_02",
        name: "Tisu Kecil",
        category: "ATK",
        price: 2000,
        desc: "Tisu pocket saku praktis, mudah dibawa di tas untuk aktivitas harian.",
        image: "assets/tisu kecil.jpg"
    },
    {
        id: "atk_03",
        name: "Tip X Kecil",
        category: "ATK",
        price: 2000,
        desc: "Correction tape kertas mini, praktis langsung kering dan rapi.",
        image: "assets/tip x kecil.jpg.jpg"
    },
    {
        id: "atk_04",
        name: "Tip X Merah",
        category: "ATK",
        price: 5000,
        desc: "Cairan koreksi cair dengan aplikator presisi untuk tulisan tangan.",
        image: "assets/tip x merah.jpg"
    },
    {
        id: "atk_05",
        name: "Tip X Biru",
        category: "ATK",
        price: 7000,
        desc: "Pita koreksi panjang dengan mekanisme putar awet anti macet.",
        image: "assets/tip x biru.jpg"
    },
    {
        id: "atk_06",
        name: "Peniti Hijab / Serbaguna",
        category: "ATK",
        price: 2000,
        desc: "Set peniti kualitas tajam anti karat untuk hijab dan perlengkapan.",
        image: "assets/peniti.jpg.jpg"
    },
    {
        id: "atk_07",
        name: "Pulpen Gel",
        category: "ATK",
        price: 3000,
        desc: "Pulpen tinta hitam pekat, lancar dan anti macet untuk kuliah dan ujian.",
        image: "assets/pulpen.jpg.jpg"
    },
    {
        id: "atk_08",
        name: "Print Abu (Hitam Putih)",
        category: "ATK",
        price: 500,
        desc: "Cetak dokumen tugas, modul praktikum & makalah HVS 70/80 gsm tajam.",
        image: "assets/print abu.jpg.jpg"
    },
    {
        id: "atk_09",
        name: "Print Warna",
        category: "ATK",
        price: 1000,
        desc: "Cetak dokumen berwarna cerah anti luntur untuk laporan dan grafik.",
        image: "assets/print warna.jpg.jpg"
    },
    {
        id: "atk_10",
        name: "Amplop Putih",
        category: "ATK",
        price: 1000,
        desc: "Amplop berperekat kuat untuk surat lamaran, dokumen, atau berkas.",
        image: "assets/amplop.jpg.jpg"
    },
    {
        id: "atk_11",
        name: "Jilid Dokumen",
        category: "ATK",
        price: 2000,
        desc: "Jilid lakban rapi dengan sampul mika bening pelindung berkas tugas.",
        image: "assets/jilidd.jpg.jpg"
    },
    {
        id: "atk_12",
        name: "Cetak Stiker",
        category: "ATK",
        price: 3000,
        desc: "Cetak stiker glossy daya rekat kuat untuk label produk atau nama.",
        image: "assets/stiker.jpg.jpg"
    },
    {
        id: "atk_13",
        name: "Cetak Sertifikat",
        category: "ATK",
        price: 3000,
        desc: "Cetak sertifikat kertas tebal linen/concorde dengan warna tajam formal.",
        image: "assets/print sertifikat.jpg.jpg"
    },

    // --- 4. KATEGORI: BREWASA COFFEE & ARTISAN (10 PRODUK) ---
    {
        id: "brewasa_01",
        name: "Americano",
        category: "Brewasa",
        price: 10000,
        desc: "Espresso murni single origin dengan air mineral dingin yang segar tegas.",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: "brewasa_02",
        name: "Caffe Latte",
        category: "Brewasa",
        price: 12000,
        desc: "Perpaduan espresso pekat dengan steamed milk lembut dan microfoam halus.",
        image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: "brewasa_03",
        name: "Butterscotch Latte",
        category: "Brewasa",
        price: 15000,
        desc: "Kopi susu berpadu saus butterscotch manis gurih beraroma karamel buttery.",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: "brewasa_04",
        name: "Hazelnut Coffee",
        category: "Brewasa",
        price: 15000,
        desc: "Espresso latte dengan aroma kacang hazelnut panggang yang wangi dan creamy.",
        image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: "brewasa_05",
        name: "Caramel Macchiato",
        category: "Brewasa",
        price: 15000,
        desc: "Susu vanilla berlapis espresso bold disiram saus karamel legit istimewa.",
        image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: "brewasa_06",
        name: "Aren Latte Signature",
        category: "Brewasa",
        price: 15000,
        desc: "Espresso house blend dipadukan susu murni dan gula aren nusantara otentik.",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: "brewasa_07",
        name: "Matcha Latte Uji",
        category: "Brewasa",
        price: 20000,
        desc: "Matcha hijau murni Jepang dipadukan susu segar lembut dan manis pas.",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: "brewasa_08",
        name: "Coklat Belgia",
        category: "Brewasa",
        price: 20000,
        desc: "Cokelat hitam premium Belgia kental yang kaya antioksidan dan menenangkan.",
        image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: "brewasa_09",
        name: "Extra Shot Espresso",
        category: "Brewasa",
        price: 3000,
        desc: "Tambahan satu shot espresso pekat untuk ekstra energi dan fokus belajar.",
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: "brewasa_10",
        name: "Extra Syrup Flavor",
        category: "Brewasa",
        price: 3000,
        desc: "Tambahan sirup pilihan (Caramel / Hazelnut / Vanilla / Butterscotch).",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80"
    }
];

// ==========================================================================
// 2. STATE & CONFIGURATION
// ==========================================================================

const DEFAULT_WA_NUMBER = "6285754870448";
let activeWaNumber = localStorage.getItem("its_wa_number") || DEFAULT_WA_NUMBER;

// Keranjang belanja dengan localStorage
let cart = [];
try {
    const savedCart = localStorage.getItem("its_cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
} catch (e) {
    console.error("Gagal membaca cart dari localStorage:", e);
    cart = [];
}

let activeCategory = "Semua";
let searchQuery = "";

// ==========================================================================
// 3. UTILITY FUNCTIONS
// ==========================================================================

function formatRupiah(number) {
    return "Rp " + Number(number).toLocaleString("id-ID");
}

function showToast(message, icon = "✅") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3400);
}

function sanitizeWaNumber(input) {
    if (!input) return "";
    let clean = input.replace(/[^0-9]/g, "");
    if (clean.startsWith("0")) {
        clean = "62" + clean.substring(1);
    }
    return clean;
}

// Fallback image handler agar foto lokal selalu tampil
function handleImageError(imgEl, originalPath) {
    if (!imgEl) return;

    // Jika path awal adalah assets/... dan gagal, coba ../assets/...
    if (originalPath.startsWith("assets/") && !imgEl.getAttribute("data-tried-parent")) {
        imgEl.setAttribute("data-tried-parent", "true");
        imgEl.src = "../" + originalPath;
        return;
    }

    // Jika tetap gagal, gunakan placeholder SVG netral
    imgEl.onerror = null;
    imgEl.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='1.5'><rect x='3' y='3' width='18' height='18' rx='2'/><circle cx='8.5' cy='8.5' r='1.5'/><path d='m21 15-5-5L5 21'/></svg>";
}

// ==========================================================================
// 4. WHATSAPP SETTINGS LOGIC
// ==========================================================================

function updateWaDisplays() {
    const activeWaDisplay = document.getElementById("activeWaDisplay");
    const previewCurrentWa = document.getElementById("previewCurrentWa");
    const footerWaNumber = document.getElementById("footerWaNumber");
    const contactWhatsappBtn = document.getElementById("contactWhatsapp");

    let formattedDisplay = "+" + activeWaNumber;
    if (activeWaNumber.startsWith("62")) {
        formattedDisplay = "+62 " + activeWaNumber.substring(2);
    }

    if (activeWaDisplay) activeWaDisplay.textContent = formattedDisplay;
    if (previewCurrentWa) previewCurrentWa.textContent = activeWaNumber;
    if (footerWaNumber) footerWaNumber.textContent = formattedDisplay;

    if (contactWhatsappBtn) {
        const welcomeMsg = encodeURIComponent("Halo ITS (IT Solution), saya ingin bertanya mengenai ketersediaan produk dan pemesanan jasa layanan.");
        contactWhatsappBtn.href = `https://wa.me/${activeWaNumber}?text=${welcomeMsg}`;
    }
}

function initWaSettingsModal() {
    const modal = document.getElementById("waModalOverlay");
    const btnOpen = document.getElementById("btnOpenWaModal");
    const btnEditFromContact = document.getElementById("btnEditWaFromContact");
    const btnClose = document.getElementById("btnCloseWaModal");
    const btnCancel = document.getElementById("btnCancelWaModal");
    const btnSave = document.getElementById("btnSaveWaNumber");
    const inputField = document.getElementById("waNumberInput");

    const openModal = () => {
        if (!modal) return;
        if (inputField) inputField.value = activeWaNumber;
        modal.classList.add("active");
    };

    const closeModal = () => {
        if (!modal) return;
        modal.classList.remove("active");
    };

    if (btnOpen) btnOpen.addEventListener("click", openModal);
    if (btnEditFromContact) btnEditFromContact.addEventListener("click", openModal);
    if (btnClose) btnClose.addEventListener("click", closeModal);
    if (btnCancel) btnCancel.addEventListener("click", closeModal);

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModal();
        });
    }

    if (btnSave) {
        btnSave.addEventListener("click", () => {
            const rawVal = inputField ? inputField.value.trim() : "";
            const sanitized = sanitizeWaNumber(rawVal);

            if (!sanitized || sanitized.length < 9) {
                alert("Mohon masukkan nomor WhatsApp yang valid (minimal 9 digit angka).");
                return;
            }

            activeWaNumber = sanitized;
            localStorage.setItem("its_wa_number", activeWaNumber);
            updateWaDisplays();
            closeModal();
            showToast(`Nomor WhatsApp toko diperbarui: +${activeWaNumber}`, "📱");
        });
    }
}

// ==========================================================================
// 5. CATALOG RENDERING & FILTERING (39 PRODUK)
// ==========================================================================

function updateCategoryCounts() {
    const countSemua = PRODUCTS_DATABASE.length; // 39
    const countMinuman = PRODUCTS_DATABASE.filter(p => p.category === "Minuman").length; // 10
    const countMakanan = PRODUCTS_DATABASE.filter(p => p.category === "Makanan").length; // 6
    const countATK = PRODUCTS_DATABASE.filter(p => p.category === "ATK").length; // 13
    const countBrewasa = PRODUCTS_DATABASE.filter(p => p.category === "Brewasa").length; // 10

    const elSemua = document.getElementById("countSemua");
    const elMinuman = document.getElementById("countMinuman");
    const elMakanan = document.getElementById("countMakanan");
    const elATK = document.getElementById("countATK");
    const elBrewasa = document.getElementById("countBrewasa");

    if (elSemua) elSemua.textContent = countSemua;
    if (elMinuman) elMinuman.textContent = countMinuman;
    if (elMakanan) elMakanan.textContent = countMakanan;
    if (elATK) elATK.textContent = countATK;
    if (elBrewasa) elBrewasa.textContent = countBrewasa;
}

function getFilteredProducts() {
    const query = searchQuery.trim().toLowerCase();

    return PRODUCTS_DATABASE.filter(product => {
        const matchesCategory = (activeCategory === "Semua") || (product.category === activeCategory);
        const matchesSearch = !query ||
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.desc.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
    });
}

function renderProducts() {
    const grid = document.getElementById("productGrid");
    const emptyState = document.getElementById("emptyMessage");
    const resultsCount = document.getElementById("resultsCount");
    if (!grid) return;

    const filtered = getFilteredProducts();

    if (resultsCount) {
        if (searchQuery.trim()) {
            resultsCount.textContent = `Ditemukan ${filtered.length} produk untuk kata kunci "${searchQuery.trim()}"`;
        } else if (activeCategory !== "Semua") {
            resultsCount.textContent = `Menampilkan ${filtered.length} produk dalam kategori ${activeCategory}`;
        } else {
            resultsCount.textContent = `Menampilkan seluruh ${filtered.length} produk katalog ITS`;
        }
    }

    if (filtered.length === 0) {
        grid.innerHTML = "";
        if (emptyState) emptyState.style.display = "block";
        return;
    }

    if (emptyState) emptyState.style.display = "none";

    grid.innerHTML = filtered.map(product => {
        const categoryClass = product.category.toLowerCase().replace(/[^a-z]/g, "");

        return `
            <article class="product-card" data-id="${product.id}">
                <div class="product-image">
                    <span class="product-badge ${categoryClass}">${product.category}</span>
                    <img 
                        src="${product.image}" 
                        alt="${product.name}" 
                        loading="lazy"
                        onerror="handleImageError(this, '${product.image}')"
                    >
                </div>
                <div class="product-body">
                    <h3>${product.name}</h3>
                    <p class="product-desc">${product.desc}</p>
                    <div class="product-footer">
                        <span class="product-price">${formatRupiah(product.price)}</span>
                        <button class="btn-add-cart" onclick="addToCart('${product.id}')" aria-label="Tambah ${product.name} ke keranjang">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            <span>Tambah</span>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

function filterByCategory(category) {
    activeCategory = category;

    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        if (btn.getAttribute("data-category") === category) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    renderProducts();
}

function initSearchAndFilters() {
    const searchInput = document.getElementById("searchInput");
    const btnClearSearch = document.getElementById("btnClearSearch");
    const filterBtns = document.querySelectorAll(".filter-btn");
    const btnResetFilter = document.getElementById("btnResetFilter");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value;
            if (btnClearSearch) {
                if (searchQuery.length > 0) {
                    btnClearSearch.classList.add("visible");
                } else {
                    btnClearSearch.classList.remove("visible");
                }
            }
            renderProducts();
        });
    }

    if (btnClearSearch) {
        btnClearSearch.addEventListener("click", () => {
            if (searchInput) {
                searchInput.value = "";
                searchQuery = "";
                btnClearSearch.classList.remove("visible");
                searchInput.focus();
                renderProducts();
            }
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategory = btn.getAttribute("data-category");
            renderProducts();
        });
    });

    if (btnResetFilter) {
        btnResetFilter.addEventListener("click", () => {
            if (searchInput) searchInput.value = "";
            searchQuery = "";
            if (btnClearSearch) btnClearSearch.classList.remove("visible");
            filterByCategory("Semua");
        });
    }
}

// ==========================================================================
// 6. SERVICES ORDER ACTION
// ==========================================================================

function orderService(serviceName) {
    const message = encodeURIComponent(`Halo ITS (IT Solution) 👋\nSaya ingin berkonsultasi & memesan *${serviceName}*. Mohon informasi alur pengerjaan dan estimasi biayanya. Terima kasih!`);
    const waUrl = `https://wa.me/${activeWaNumber}?text=${message}`;
    window.open(waUrl, "_blank");
}

// ==========================================================================
// 7. SHOPPING CART SYSTEM & LOCALSTORAGE
// ==========================================================================

function saveCartToStorage() {
    try {
        localStorage.setItem("its_cart", JSON.stringify(cart));
    } catch (e) {
        console.error("Gagal menyimpan keranjang:", e);
    }
    updateCartUI();
}

function addToCart(productId) {
    const product = PRODUCTS_DATABASE.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category,
            image: product.image,
            qty: 1
        });
    }

    saveCartToStorage();
    showToast(`"${product.name}" ditambahkan ke keranjang!`, "🛒");
}

function updateCartQty(index, delta) {
    if (!cart[index]) return;

    cart[index].qty += delta;

    if (cart[index].qty <= 0) {
        const removedName = cart[index].name;
        cart.splice(index, 1);
        showToast(`"${removedName}" dihapus dari keranjang.`, "🗑️");
    }

    saveCartToStorage();
}

function removeCartItem(index) {
    if (!cart[index]) return;
    const removedName = cart[index].name;
    cart.splice(index, 1);
    saveCartToStorage();
    showToast(`"${removedName}" dihapus dari keranjang.`, "🗑️");
}

function clearCart() {
    if (cart.length === 0) return;

    if (confirm("Kosongkan semua pesanan di keranjang belanja?")) {
        cart = [];
        saveCartToStorage();
        showToast("Keranjang berhasil dikosongkan.", "🧹");
    }
}

function updateCartUI() {
    const cartBadge = document.getElementById("cartBadge");
    const fabCartBadge = document.getElementById("fabCartBadge");
    const drawerCartCount = document.getElementById("drawerCartCount");
    const cartTotalItems = document.getElementById("cartTotalItems");
    const cartTotalPrice = document.getElementById("cartTotalPrice");
    const cartItemsList = document.getElementById("cartItemsList");
    const footerCartCount = document.querySelectorAll(".footer-cart-count");

    const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    if (cartBadge) cartBadge.textContent = totalCount;
    if (fabCartBadge) fabCartBadge.textContent = totalCount;
    if (drawerCartCount) drawerCartCount.textContent = `${totalCount} item`;
    if (cartTotalItems) cartTotalItems.textContent = `${totalCount} pcs`;
    if (cartTotalPrice) cartTotalPrice.textContent = formatRupiah(totalPrice);

    footerCartCount.forEach(el => el.textContent = totalCount);

    if (!cartItemsList) return;

    if (cart.length === 0) {
        cartItemsList.innerHTML = `
            <div class="cart-empty-view">
                <div class="cart-empty-icon">🛒</div>
                <h4>Keranjang Belanja Kosong</h4>
                <p>Silakan pilih produk minuman, snack, ATK, atau kopi Brewasa dari katalog!</p>
            </div>
        `;
        return;
    }

    cartItemsList.innerHTML = cart.map((item, index) => `
        <div class="cart-item-card">
            <div class="cart-item-thumb">
                <img src="${item.image}" alt="${item.name}" onerror="handleImageError(this, '${item.image}')">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name" title="${item.name}">${item.name}</div>
                <div class="cart-item-price">${formatRupiah(item.price)}</div>
                <div class="cart-qty-control">
                    <button class="btn-qty" onclick="updateCartQty(${index}, -1)" aria-label="Kurangi">-</button>
                    <span class="qty-val">${item.qty}</span>
                    <button class="btn-qty" onclick="updateCartQty(${index}, 1)" aria-label="Tambah">+</button>
                </div>
            </div>
            <button class="btn-remove-item" onclick="removeCartItem(${index})" aria-label="Hapus">&times;</button>
        </div>
    `).join("");
}

// ==========================================================================
// 8. CART DRAWER & CHECKOUT HANDLERS
// ==========================================================================

function openCartDrawer() {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("cartOverlay");
    if (drawer && overlay) {
        drawer.classList.add("active");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closeCartDrawer() {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("cartOverlay");
    if (drawer && overlay) {
        drawer.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    }
}

function initCartDrawerListeners() {
    const btnToggle = document.getElementById("btnCartToggle");
    const btnClose = document.getElementById("btnCloseCart");
    const overlay = document.getElementById("cartOverlay");
    const fabCart = document.getElementById("fabCart");
    const btnFooterOpen = document.getElementById("btnFooterOpenCart");
    const btnClear = document.getElementById("btnClearCart");
    const btnCheckoutWA = document.getElementById("btnCheckoutWhatsApp");
    const btnOpenWebCheckout = document.getElementById("btnOpenWebCheckout");

    if (btnToggle) btnToggle.addEventListener("click", openCartDrawer);
    if (btnClose) btnClose.addEventListener("click", closeCartDrawer);
    if (overlay) overlay.addEventListener("click", closeCartDrawer);
    if (fabCart) fabCart.addEventListener("click", openCartDrawer);
    if (btnFooterOpen) btnFooterOpen.addEventListener("click", openCartDrawer);
    if (btnClear) btnClear.addEventListener("click", clearCart);

    // 1. Tombol Checkout WhatsApp
    if (btnCheckoutWA) {
        btnCheckoutWA.addEventListener("click", () => {
            if (cart.length === 0) {
                showToast("Keranjang Anda masih kosong!", "⚠️");
                return;
            }

            const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
            const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);

            const nameInput = document.getElementById("customerName");
            const noteInput = document.getElementById("customerNote");
            const customerName = nameInput ? nameInput.value.trim() : "";
            const customerNote = noteInput ? noteInput.value.trim() : "";

            let message = `*PESANAN BARU - ITS (IT SOLUTION)*\n`;
            message += `━━━━━━━━━━━━━━━━━━━━━\n`;
            if (customerName) {
                message += `👤 *Pemesan:* ${customerName}\n`;
            }
            message += `📅 *Tanggal:* ${new Date().toLocaleDateString("id-ID", { dateStyle: "full" })}\n`;
            message += `📦 *Total Item:* ${totalQty} pcs\n`;
            message += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
            message += `*RINCIAN PESANAN:*\n`;

            cart.forEach((item, idx) => {
                const subtotal = item.price * item.qty;
                message += `${idx + 1}. *${item.name}*\n`;
                message += `   └ ${item.qty}x @ ${formatRupiah(item.price)} = *${formatRupiah(subtotal)}*\n`;
            });

            message += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
            message += `💰 *TOTAL TAGIHAN: ${formatRupiah(total)}*\n`;
            message += `━━━━━━━━━━━━━━━━━━━━━\n`;

            if (customerNote) {
                message += `📝 *Catatan / Lokasi:* ${customerNote}\n\n`;
            }

            message += `Mohon konfirmasi pesanan dan ketersediaan stok ya. Terima kasih! 🙏`;

            const waUrl = `https://wa.me/${activeWaNumber}?text=${encodeURIComponent(message)}`;
            window.open(waUrl, "_blank");
        });
    }

    // 2. Tombol Buka Checkout Website
    if (btnOpenWebCheckout) {
        btnOpenWebCheckout.addEventListener("click", () => {
            if (cart.length === 0) {
                showToast("Keranjang Anda masih kosong!", "⚠️");
                return;
            }

            openWebCheckoutModal();
        });
    }

    // ESC close
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeCartDrawer();
            closeWebCheckoutModal();
            closeReceiptModal();
            const waModal = document.getElementById("waModalOverlay");
            if (waModal) waModal.classList.remove("active");
        }
    });
}

// ==========================================================================
// 9. WEBSITE CHECKOUT MODAL & RECEIPT LOGIC
// ==========================================================================

function openWebCheckoutModal() {
    const modal = document.getElementById("checkoutModalOverlay");
    const itemsPreview = document.getElementById("checkoutSummaryItems");
    const totalEl = document.getElementById("checkoutModalTotal");
    const buyerNameInput = document.getElementById("checkoutBuyerName");
    const notesInput = document.getElementById("checkoutNotes");

    if (!modal) return;

    // Salin nama dan catatan dari drawer jika sudah diketik
    const drawerName = document.getElementById("customerName")?.value || "";
    const drawerNotes = document.getElementById("customerNote")?.value || "";
    if (buyerNameInput && drawerName) buyerNameInput.value = drawerName;
    if (notesInput && drawerNotes) notesInput.value = drawerNotes;

    // Render summary rincian
    const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    if (totalEl) totalEl.textContent = formatRupiah(total);

    if (itemsPreview) {
        itemsPreview.innerHTML = cart.map(item => `
            <div class="checkout-item-line">
                <span>${item.name} (${item.qty}x)</span>
                <strong>${formatRupiah(item.price * item.qty)}</strong>
            </div>
        `).join("");
    }

    closeCartDrawer();
    modal.classList.add("active");
}

function closeWebCheckoutModal() {
    const modal = document.getElementById("checkoutModalOverlay");
    if (modal) modal.classList.remove("active");
}

function closeReceiptModal() {
    const modal = document.getElementById("receiptModalOverlay");
    if (modal) modal.classList.remove("active");
}

function initWebCheckoutForm() {
    const form = document.getElementById("webCheckoutForm");
    const btnClose = document.getElementById("btnCloseCheckoutModal");
    const btnCancel = document.getElementById("btnCancelCheckout");
    const receiptModal = document.getElementById("receiptModalOverlay");
    const btnCloseReceipt = document.getElementById("btnCloseReceipt");
    const btnCopyReceipt = document.getElementById("btnCopyReceipt");
    const receiptContent = document.getElementById("receiptContent");

    if (btnClose) btnClose.addEventListener("click", closeWebCheckoutModal);
    if (btnCancel) btnCancel.addEventListener("click", closeWebCheckoutModal);
    if (btnCloseReceipt) btnCloseReceipt.addEventListener("click", closeReceiptModal);

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const buyerName = document.getElementById("checkoutBuyerName").value.trim();
            const buyerPhone = document.getElementById("checkoutBuyerPhone").value.trim();
            const deliveryMethod = document.getElementById("checkoutDeliveryMethod").value;
            const paymentMethod = document.getElementById("checkoutPaymentMethod").value;
            const notes = document.getElementById("checkoutNotes").value.trim();

            const orderId = "ITS-" + Date.now().toString().slice(-6);
            const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
            const dateStr = new Date().toLocaleString("id-ID", { dateStyle: "full", timeStyle: "short" });

            // Simpan data order
            const orderRecord = {
                orderId,
                date: dateStr,
                buyerName,
                buyerPhone,
                deliveryMethod,
                paymentMethod,
                notes,
                items: [...cart],
                total
            };

            try {
                const history = JSON.parse(localStorage.getItem("its_orders") || "[]");
                history.unshift(orderRecord);
                localStorage.setItem("its_orders", JSON.stringify(history));
            } catch (err) {
                console.error(err);
            }

            // Tampilkan Struk / Invoice
            if (receiptContent) {
                receiptContent.innerHTML = `
                    <div style="margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px dashed #cbd5e1;">
                        <div><strong>No. Pesanan:</strong> ${orderId}</div>
                        <div><strong>Waktu:</strong> ${dateStr}</div>
                        <div><strong>Pemesan:</strong> ${buyerName} (${buyerPhone})</div>
                        <div><strong>Pengambilan:</strong> ${deliveryMethod}</div>
                        <div><strong>Pembayaran:</strong> ${paymentMethod}</div>
                        ${notes ? `<div><strong>Catatan:</strong> ${notes}</div>` : ""}
                    </div>
                    <div style="margin-bottom: 12px;">
                        <strong>Daftar Item:</strong>
                        ${cart.map((item, i) => `
                            <div style="display:flex; justify-content:space-between; margin-top:4px;">
                                <span>${i + 1}. ${item.name} (${item.qty}x)</span>
                                <span>${formatRupiah(item.price * item.qty)}</span>
                            </div>
                        `).join("")}
                    </div>
                    <div style="display:flex; justify-content:space-between; font-size:1.05rem; font-weight:800; border-top:1px solid #94a3b8; padding-top:8px;">
                        <span>TOTAL TAGIHAN:</span>
                        <span style="color:#122b54;">${formatRupiah(total)}</span>
                    </div>
                `;
            }

            // Kosongkan keranjang
            cart = [];
            saveCartToStorage();
            closeWebCheckoutModal();

            if (receiptModal) receiptModal.classList.add("active");
            showToast("Pesanan website berhasil diproses!", "🎉");

            // Event copy receipt text
            if (btnCopyReceipt) {
                btnCopyReceipt.onclick = () => {
                    const textToCopy = `PESANAN ITS: #${orderId}\nPemesan: ${buyerName}\nTotal: ${formatRupiah(total)}\nMetode: ${deliveryMethod}\nStatus: Menunggu Pembayaran via ${paymentMethod}`;
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        showToast("Rincian pesanan disalin ke clipboard!", "📋");
                    });
                };
            }
        });
    }
}

// ==========================================================================
// 10. CONTACT FORM TO WHATSAPP
// ==========================================================================

function initContactForm() {
    const contactForm = document.getElementById("contactForm");
    if (!contactForm) return;

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("contactName").value.trim();
        const topic = document.getElementById("contactTopic").value;
        const msg = document.getElementById("contactMessage").value.trim();

        let text = `Halo Tim ITS (IT Solution) 👋\n`;
        text += `Nama: *${name}*\n`;
        text += `Perihal: *${topic}*\n\n`;
        text += `Pesan:\n${msg}`;

        const waUrl = `https://wa.me/${activeWaNumber}?text=${encodeURIComponent(text)}`;
        window.open(waUrl, "_blank");
        contactForm.reset();
        showToast("Membuka WhatsApp untuk mengirim pesan...", "💬");
    });
}

// ==========================================================================
// 11. NAVBAR & SCROLL SPY
// ==========================================================================

function initNavbar() {
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");

    // Scroll shadow effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Mobile Hamburger Toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });

        document.addEventListener("click", (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            }
        });
    }

    // Scroll Spy for navigation links
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", () => {
        const scrollPosition = window.pageYOffset + 140;

        sections.forEach(sec => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            const id = sec.getAttribute("id");

            if (scrollPosition >= top && scrollPosition < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });
}

// ==========================================================================
// 12. INITIALIZATION ON DOM READY
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    updateCategoryCounts();
    renderProducts();
    initSearchAndFilters();
    initWaSettingsModal();
    updateWaDisplays();
    initCartDrawerListeners();
    initWebCheckoutForm();
    initContactForm();
    updateCartUI();

    console.log("ITS (IT Solution) Official Website Ready!");
    console.log(`Total 39 Produk dimuat: ${PRODUCTS_DATABASE.length}`);
});


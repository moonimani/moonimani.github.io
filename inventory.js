// =====================================
// MOONI MANI INVENTORY SYSTEM
// =====================================

// Each nail design has 4 sizes.
// Change the numbers to match your actual inventory.

const inventory = {

    // MOONLIGHT COLLECTION
    "MM-001-XS": 5,
    "MM-001-S": 5,
    "MM-001-M": 5,
    "MM-001-L": 5,

    // BLUSH COLLECTION
    "MM-002-XS": 5,
    "MM-002-S": 5,
    "MM-002-M": 5,
    "MM-002-L": 5,

    // FRENCH TIP COLLECTION
    "MM-003-XS": 5,
    "MM-003-S": 5,
    "MM-003-M": 5,
    "MM-003-L": 5,

    // SWEETHEART COLLECTION
    "MM-004-XS": 5,
    "MM-004-S": 5,
    "MM-004-M": 5,
    "MM-004-L": 5,

    // CELESTIAL COLLECTION
    "MM-005-XS": 5,
    "MM-005-S": 5,
    "MM-005-M": 5,
    "MM-005-L": 5

};


// =====================================
// GENERATE SKU
// =====================================

function getSKU(productId, size) {

    const productNumber = String(productId).padStart(3, "0");

    return `MM-${productNumber}-${size}`;

}


// =====================================
// CHECK AVAILABLE STOCK
// =====================================

function getStock(productId, size) {

    const sku = getSKU(productId, size);

    return inventory[sku] ?? 0;

}


// =====================================
// CHECK IF SOLD OUT
// =====================================

function isSoldOut(productId, size) {

    return getStock(productId, size) <= 0;

}


// =====================================
// CHECK QUANTITY
// =====================================

function canAddToCart(productId, size, quantity) {

    const available = getStock(productId, size);

    return (
        Number.isInteger(quantity) &&
        quantity > 0 &&
        quantity <= available
    );

}


// =====================================
// DISPLAY STOCK STATUS
// =====================================

function getStockMessage(productId, size) {

    const stock = getStock(productId, size);

    if (stock === 0) {
        return "SOLD OUT";
    }

    if (stock <= 3) {
        return `Only ${stock} left!`;
    }

    return "In Stock";

}

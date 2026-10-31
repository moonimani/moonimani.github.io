async function getLiveStock(productId, size) {
  const sku = getSKU(productId, size);

  try {
    const baseURL = SUPABASE_URL
      .replace(/\/rest\/v1\/?$/, "")
      .replace(/\/$/, "");

    const response = await fetch(
      `${baseURL}/rest/v1/inventory?sku=eq.${encodeURIComponent(sku)}&select=stock`,
      {
        headers: {
          apikey: SUPABASE_PUBLISHABLE_KEY
        }
      }
    );

    if (!response.ok) {
      throw new Error("Unable to load inventory");
    }

    const data = await response.json();

    if (data.length === 0) {
      return 0;
    }

    return data[0].stock;

  } catch (error) {
    console.error("Inventory error:", error);
    return null;
  }
}

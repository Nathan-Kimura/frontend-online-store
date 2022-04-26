export async function getCategories() {
  const API_URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const url = await fetch(API_URL);
  const response = await url.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(CATEGORY_ID, QUERY) {
  const API_URL = `https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}&q=${QUERY}`;
  const url = await fetch(API_URL);
  const response = await url.json();
  return response;
}

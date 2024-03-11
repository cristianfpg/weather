export async function handleFetch(q) {
  const options = {
    method: "GET"
  };
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&days=3&q=${q}`;
  const response = await fetch(url, options);
  const result = await response.text();
  return result
}
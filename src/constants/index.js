const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
const base_url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/';
const chart_currencies_get = 'listings/latest?start=1&limit=10&convert=';
const currency_search = 'quotes/latest?slug=';
const currency_info_get = 'info?slug=';
const api_key = '&CMC_PRO_API_KEY=88050540-9376-4bfa-856a-c9b94ed7598e';

export const chartCurrenciesGet = q_convert => `${cors_anywhere}${base_url}${chart_currencies_get}${q_convert}${api_key}`;
export const currencySearch = q_currency => `${cors_anywhere}${base_url}${currency_search}${q_currency}${api_key}`;
export const currencyInfoGet = q_currency => `${cors_anywhere}${base_url}${currency_info_get}${q_currency}${api_key}`;

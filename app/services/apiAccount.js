const api = 'https://api.themoviedb.org/3';

const key = '024d69b581633d457ac58359146c43f6';
const account_id = 'bdb872bb533087323bbd3dafa7bec7daa33b6fde'

const defaultContent = {
  api_key: key,
  language: 'en-US'
};

function queryString(obj) {
  return Object.entries(obj)
    .map(([index, val]) => `${index}=${val}`)
    .join('&');
}


export default async function requestAccount(url, content = {}, debug = false) {
  const obj = { ...defaultContent, ...content };

  const response = await fetch(`${api}/account/${account_id}/${url}?${queryString(obj)}`);
  const data = await (debug ? response.status : response.json());
  console.log(`${api}/${account_id}/${url}?${queryString(obj)}`)
  return data;
}

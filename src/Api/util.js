export function getList(){
  console.log("hola que tal")
  return fetch('https://pg-delsur.herokuapp.com/products')
    .then(data => data.json())
    .catch(error => error.json());
}
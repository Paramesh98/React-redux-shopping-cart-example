//reducer

export default function products(state = []) {
  return state;
}

export function getProducts(state, props) {
  return state.products;
}

export function getProduct(state, props) {
  return state.products.find(item => props.id === item.id);
}

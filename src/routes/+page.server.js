
import { error } from '@sveltejs/kit';
import { products } from '../data.js';

export function load(){
  return {
    products: products.map((product) => ({
      id: product.id,
      name: product.name,
      cost: product.cost,
      img: product.img
    }))
  }
}
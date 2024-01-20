
import { error } from '@sveltejs/kit';
import { products } from '../../../data.js';

export function load( {params} ){
  
  const p = products.find((p) => p.id === params.slug)
  if (!p) throw error(404);

  console.log(p.name)
  return {
    p
  };
}
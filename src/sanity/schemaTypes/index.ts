import { type SchemaTypeDefinition } from 'sanity';

import products from './products';
import category from './category';
import categories from './categories';
import snrks from './snrks';
import order from './order';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ products , category, categories, snrks, order],

}

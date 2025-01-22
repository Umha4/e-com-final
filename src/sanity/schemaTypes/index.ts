import { type SchemaTypeDefinition } from 'sanity';
import hero from './hero';
import { editorsPic } from './edotor-pic';
import { FeatureProduct } from './feature-product';
import { FeaturePost } from './feature-post';
import { Newton } from './newton';
import { BlogsPage } from './bloganimation';
import { ProductH } from './producth';
import Hero from './ShopHero';
import AboutUs from './about';
import { product } from './product';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [editorsPic, FeatureProduct, FeaturePost, Newton, BlogsPage, ProductH, Hero, AboutUs, product, hero],
};

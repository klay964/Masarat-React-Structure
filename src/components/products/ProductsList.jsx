import ProductCard from '../cards/ProductCard';

export default function ProductsList({ products }) {
  return (
    <>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </>
  );
}

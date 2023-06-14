import { useGetAllProducts } from '@jadoo/apis';

import { ProductCard } from './ProductCard';

export function Products() {
  const { data, isLoading, isError } = useGetAllProducts({});

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error</h2>;
  }

  if (!isLoading && !data) {
    return <h2>No data</h2>;
  }

  return (
    <div className="container">
      <div className="flex w-full flex-wrap">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

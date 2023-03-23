import useSWR from "swr";

export default function ProductsPage() {
  const { data, error, isLoading } = useSWR(`/api/products`);

  if (error) return <div>failed to load</div>;
  if (isLoading || !data) return <div>loading...</div>;

  return (
    <>
      <h1>All Products</h1>
      <ul>
        {data.map((product) => {
          return (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <ul>
                <li>category : {product.category}</li>
                <li>description : {product.description}</li>
                <li>
                  price : {product.price}
                  {product.currency}
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
}

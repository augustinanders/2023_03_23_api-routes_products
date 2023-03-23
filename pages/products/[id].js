import { useRouter } from "next/router";
import useSWR from "swr";

export default function DetailsPage() {
  const router = useRouter();
  const id = router.query.id;
  const { data, error, isLoading } = useSWR(`/api/products/${id}`);

  if (error) return <div>failed to load</div>;
  if (isLoading || !data) return <div>loading...</div>;

  return (
    <>
      <h1>{data.name}</h1>
      <ul>
        <li>category : {data.category}</li>
        <li>description : {data.description}</li>
        <li>
          price : {data.price}
          {data.currency}
        </li>
      </ul>
    </>
  );
}

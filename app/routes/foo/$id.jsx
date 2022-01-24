import { Outlet, useParams } from "remix";

export const load = ({ params }) => params;

export default function FooId() {
  const params = useParams();

  return (
    <h2>{ params.id}</h2>
  );
}
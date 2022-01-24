import { useParams } from "remix";
import AnimateRoute from "~/components/AnimateRoute";

export const load = ({ params }) => params;

export default function FooId() {
  const params = useParams();

  return (
    <AnimateRoute>
      <h2>{params.id}</h2>
    </AnimateRoute>   
  );
}
import { useLocation } from "react-router-dom";

export default function Details() {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="p-4">
      <h2>Submitted Details</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

import { Card } from "primereact/card";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Card className="w-2/4 m-auto mt-10">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to="/">Go Home</Link>
    </Card>
  );
};

export default NotFound;

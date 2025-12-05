import { Link } from "react-router-dom";
export default function User() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Study Light</h1>
      <p>Welcome to the Study Light Home Page!</p>

      <Link to="/dashboard">Go to Dashboard</Link> <br></br>
      <Link to="/user/10">Go to user page </Link><br></br>
      <Link to="/about">Go to About page </Link>
      <Link to="/categories/1"> Categories</Link>
      <h1>User Page</h1>
      <p>This is the User Page.</p>
    </div>
  );
}
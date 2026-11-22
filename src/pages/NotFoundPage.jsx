import { Link } from "react-router-dom";

// Shown for any address that doesn't match a page
function NotFoundPage() {
  return (
    <div className="page not-found">
      <p className="not-found-code">404</p>
      <h1>Page not found</h1>
      <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;

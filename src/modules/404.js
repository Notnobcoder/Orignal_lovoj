import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./page404.css";
export const Page404 = () => {
  return (
    <div className="page_container">
      <div className="page">
        <Typography variant="h1">404</Typography>
        <Typography variant="h4">Page not found</Typography>
        <Link to="/">
          <button>Return Home</button>
        </Link>
      </div>
    </div>
  );
};

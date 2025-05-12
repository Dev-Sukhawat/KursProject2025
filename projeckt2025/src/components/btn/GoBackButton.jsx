import { Link } from "react-router-dom";

const GoBackButton = ({ to = "/", children = "Go back home" }) => {
  return (
    <Link
      to={to}
      className="flex items-center justify-center gap-2 px-4 py-2 border rounded-full bg-[hsla(216,100%,50%,1)] text-white font-bold hover:bg-white hover:text-[hsla(216,100%,50%,1)] transition justify-center w-full"
    >
      {children}
    </Link>
  );
};

export default GoBackButton;

import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <section>
      <nav className="flex px-40 bg-black justify-between w-full items-center h-[100px]">
        <div className="text-white capitalize font-bold">my web page</div>
        <div className="flex gap-4 text-white">
          <div
            onClick={() => navigate("/")}
            className={`cursor-pointer p-4 ${
              pathname === "/" ? "bg-white text-black " : ""
            }`}
          >
            Home
          </div>

          <div
            onClick={() => navigate("/products")}
            className={`cursor-pointer p-4 ${
              pathname === "/products" ? "bg-white text-black " : ""
            }`}
          >
            Products
          </div>
        </div>
      </nav>
      <Outlet />
    </section>
  );
}

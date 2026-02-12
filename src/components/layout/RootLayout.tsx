import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <div className=" bg-gray-100 ">
        <div className="bg-sky-300">Navigation Menu</div>
        <Outlet />
        <div className="bg-sky-300">Footer</div>
      </div>
    </>
  );
};

export default RootLayout;

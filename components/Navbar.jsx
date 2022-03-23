import { Link, NavLink } from "react-router-dom";
// import { MainRoutes } from "../Routes/MainRoutes";

const links = [
  {
    title: "Home",
    to: "/home",
    id: "header-link-home",
  },
  {
    title: "About",
    to: "/about",
    id: "header-link-about",
  },
  {
    title: "Products",
    to: "/products",
    id: "header-link-products",
  },
  {
    title: "single",
    to: "/singleproducts",
    id: "header-link-singleProducts",
  },

  //   add the other link as well
];
export const Navbar = () => {
  return (
    //map through the link ad display it in header
    <>
    {/* <h1>Navbar</h1> */}
    {links.map(({title,to},index)=>{
      return <NavLink key={index} style={{padding:"2px", marginLeft:"22%"}} to ={to}>{title}</NavLink>
    })}
    </>
  )
};

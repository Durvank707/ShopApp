import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const { cart } = useSelector((state) => state);

    return (
        <div  >
            <nav className="flex justify-between items-center h-[70px] max-w-screen mx-auto">
                <NavLink to="/">
                    <div>
                        <img src="../logo.png" className="h-14 ml-5"/>
                    </div>
                </NavLink>
                <div className="flex text-slate-100 absolute right-[50px] gap-x-[60px]">
                    <NavLink to="/">
                        <p className="text-xl">Home</p>
                    </NavLink>
                    <NavLink to="/cart">
                        <div className="mt-1">
                            <FaShoppingCart className="text-xl"/>
                            {
                                cart.length > 0 &&
                                <span className="absolute -top-[6px] -right-[10px] bg-blue-600 h-5 w-5 flex justify-center items-center rounded-full animate-bounce">{cart.length}</span>
                            }

                        </div>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;

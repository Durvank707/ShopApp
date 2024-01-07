import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {

    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item Added !");
    }

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item Removed !");
    }

    return (
        <div className=" flex flex-col justify-center items-center hover:scale-110 transition duration-300 ease-in shadow-2xl rounded-lg gap-3 p-4 mt-10 ml-5 my-2">
            <div >
                <img src={post.image} className=" h-[300px]"/>
            </div>
            <div>
                <p className="font-semibold text-xl mt-5">{post.title.split(" ").slice(0,4).join(" ") + "..."}</p>
            </div>
            <div>
                <p className="text-sm -mt-2 mb-7">{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
            </div>
            <div className="flex justify-between w-[300px]">
                <div>
                    <p className="text-green-600 font-bold">${post.price}</p>
                </div>

                {
                    cart.some((p) => p.id === post.id) ?
                        (<button
                            className="relative right-2 border-2 border-gray-700 rounded-full p-2 hover:bg-red-500 hover:text-white"
                            onClick={removeFromCart}>
                            Remove Item
                        </button>) :
                        (<button
                            className="relative right-2 border-2 border-gray-700 rounded-full p-2 hover:bg-green-500"
                            onClick={addToCart}>
                            Add to Cart
                        </button>)
                }
            </div>


        </div>
    );
};

export default Product;

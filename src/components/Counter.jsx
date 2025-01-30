import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/counter/counterSlice";


const Counter = () => {
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Redux Counter App</h1>

            <div className="flex items-center gap-4">
                <button onClick={handleIncrement} className="bg-green-500 hover:bg-green-700 px-6 py-2 rounded">+</button>
                <span>{count}</span>
                <button onClick={handleDecrement} className="bg-green-500 hover:bg-green-700 px-6 py-2 rounded">-</button>
            </div>
        </div>
    );
};

export default Counter;
import { useState } from "react";

type UseIncrementProps = {
    initialValue: number;
}

const useIncrement = ({ initialValue } : UseIncrementProps = { initialValue: 0}) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount((prevCount) => prevCount + 1);
    const decrement = () => setCount((prevCount) => prevCount > 0 ? prevCount - 1 : 0);

    return { count, increment, decrement };
};

export default useIncrement;

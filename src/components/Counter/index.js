import { useDispatch } from "react-redux";
import { addNumber, subNumber } from "../../store/modules/counter/actions";

const Counter = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addNumber(1));
  };

  const handleSub = () => {
    dispatch(subNumber(1));
  };

  return (
    <div>
      <button onClick={() => handleAdd()}>Adicionar</button>
      <button onClick={() => handleSub()}>Diminuir</button>
    </div>
  );
};

export default Counter;

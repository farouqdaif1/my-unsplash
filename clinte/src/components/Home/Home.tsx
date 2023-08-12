import { useEffect } from "react";
import Item from "./Item/Item";
import { fetchData } from "../../store/actions/actionCreators";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => void dispatch(fetchData()), []);
  const data = useAppSelector((state) => state.reducer.images);

  console.log(data);
  return (
    <div className="home">
      {data.map((ele) => (
        <Item key={ele._id} ele={ele} />
      ))}
    </div>
  );
};

export default Home;

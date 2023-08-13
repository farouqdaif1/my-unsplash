import { useEffect } from "react";
import Item from "./Item/Item";
import { fetchData } from "../../store/actions/actionCreators";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => void dispatch(fetchData()), []);
  const data = useAppSelector((state) => state.reducer.images);
  return (
    <div className="home">
      {data.length > 0 ? (
        data.map((ele) => <Item key={ele._id} ele={ele} />)
      ) : (
        <h1>No Image called this </h1>
      )}
    </div>
  );
};

export default Home;

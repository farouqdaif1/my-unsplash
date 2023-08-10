import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item/Item";
import { fetchData } from "../../store/actions/actionCreators";
import { RootState } from "../../store/reducers";
const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.reducer.images);
  useEffect(() => {
    dispatch(fetchData());
    console.log(data);
  }, []);
  return (
    <div className="home">
      {data?.map((ele: { _id: string; label: string; link: string }) => (
        <Item key={ele._id} ele={ele} />
      ))}
    </div>
  );
};

export default Home;

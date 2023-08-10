import { useEffect } from "react";
import { useSelector } from "react-redux";
import Item from "./Item/Item";
import { fetchData } from "../../store/actions/actionCreators";
import { RootState } from "../../store/reducers";
import {  useAppDispatch } from '../../store/hooks'

const Home = () => {
  const dispatch = useAppDispatch();
  const data = useSelector((state: RootState) => state.reducer.images);
  useEffect(() => {
    void dispatch(fetchData());
  }, []);

  return (
    <div className="home">
      {data.map((ele: { _id: string; label: string; link: string }) => (
        <Item key={ele._id} ele={ele} />
      ))}
    </div>
  );
};

export default Home;

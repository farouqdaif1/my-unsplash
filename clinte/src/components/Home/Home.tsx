import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item/Item";
import * as api from "../../store/api/index";
import { setImages } from "../../store/reducers/reducer";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: ImageState) => state.images);
  useEffect(() => {
    api
      .fetchImages()
      .then((res) => dispatch(setImages(res.data as Image[])))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="home">
      {data?.map((ele: { label: string; link: string }, index: number) => (
        <Item key={index} ele={ele} />
      ))}
    </div>
  );
};

export default Home;

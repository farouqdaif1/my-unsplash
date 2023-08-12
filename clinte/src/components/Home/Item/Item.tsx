import { useAppDispatch } from "../../../store/hooks";
import { deleteImage } from "../../../store/actions/actionCreators";
interface childeProps {
  ele: {
    _id?: string;
    label: string;
    link: string;
  };
}

const Item = ({ ele }: childeProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="image-item">
      <img src={ele.link} alt={ele.label} />
      <div className="hover">
        <button
          className="delete"
          onClick={() => {
            void dispatch(deleteImage(ele._id!)); // not null  assertion operator
          }}
        >
          Delete
        </button>
        <h2 className="title">{ele.label}</h2>
      </div>
    </div>
  );
};

export default Item;

interface childeProps {
  ele: {
    label: string;
    link: string;
}
}

const Item = ({ele }:childeProps) => {
  return (
    <div className="image-item">
      <img src={ele.link} alt={ele.label} />
      <div className="hover">
        <button className="delete">Delete</button>
        <h2 className="title">{ele.label}</h2>
      </div>
    </div>
  )
}

export default Item

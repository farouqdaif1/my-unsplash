import Item from "./Item/Item";
const Home = () => {
  const data: { label: string; link: string }[] = [
    {
      label: "Helllo Farouq",
      link: "https://media.istockphoto.com/id/640318118/photo/sunset-over-indian-ocean.jpg?s=612x612&w=0&k=20&c=DLKuEcWW9YwwNid-3ypLu2AJ4uPC4aXoIzyFFjDHUmM=",
    },
    {
      label: "Helllo Farouq",
      link: "https://media.istockphoto.com/id/640318118/photo/sunset-over-indian-ocean.jpg?s=612x612&w=0&k=20&c=DLKuEcWW9YwwNid-3ypLu2AJ4uPC4aXoIzyFFjDHUmM=",
    },
    {
      label: "Helllo Farouq",
      link: "https://media.istockphoto.com/id/640318118/photo/sunset-over-indian-ocean.jpg?s=612x612&w=0&k=20&c=DLKuEcWW9YwwNid-3ypLu2AJ4uPC4aXoIzyFFjDHUmM=",
    },
    {
      label: "Helllo Farouq",
      link: "https://media.istockphoto.com/id/640318118/photo/sunset-over-indian-ocean.jpg?s=612x612&w=0&k=20&c=DLKuEcWW9YwwNid-3ypLu2AJ4uPC4aXoIzyFFjDHUmM=",
    },
    {
      label: "Helllo Farouq",
      link: "https://media.istockphoto.com/id/640318118/photo/sunset-over-indian-ocean.jpg?s=612x612&w=0&k=20&c=DLKuEcWW9YwwNid-3ypLu2AJ4uPC4aXoIzyFFjDHUmM=",
    },
    {
      label: "Helllo Farouq",
      link: "https://media.istockphoto.com/id/640318118/photo/sunset-over-indian-ocean.jpg?s=612x612&w=0&k=20&c=DLKuEcWW9YwwNid-3ypLu2AJ4uPC4aXoIzyFFjDHUmM=",
    },
    {
      label: "Helllo Farouq",
      link: "https://media.istockphoto.com/id/640318118/photo/sunset-over-indian-ocean.jpg?s=612x612&w=0&k=20&c=DLKuEcWW9YwwNid-3ypLu2AJ4uPC4aXoIzyFFjDHUmM=",
    },
    {
      label: "Helllo Farouq",
      link: "https://media.istockphoto.com/id/640318118/photo/sunset-over-indian-ocean.jpg?s=612x612&w=0&k=20&c=DLKuEcWW9YwwNid-3ypLu2AJ4uPC4aXoIzyFFjDHUmM=",
    },
    {
      label: "Helllo Farouq",
      link: "https://media.istockphoto.com/id/640318118/photo/sunset-over-indian-ocean.jpg?s=612x612&w=0&k=20&c=DLKuEcWW9YwwNid-3ypLu2AJ4uPC4aXoIzyFFjDHUmM=",
    },
    {
      label: "Helllo Farouq",
      link: "https://media.istockphoto.com/id/640318118/photo/sunset-over-indian-ocean.jpg?s=612x612&w=0&k=20&c=DLKuEcWW9YwwNid-3ypLu2AJ4uPC4aXoIzyFFjDHUmM=",
    },
  ];
  return (
    <div className="home">
      {data.map((ele: { label: string; link: string }, index: number) => (
        <Item key={index} ele={ele} />
      ))}
    </div>
  );
};

export default Home;

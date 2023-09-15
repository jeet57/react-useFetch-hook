import "./styles.css";
import useFetch from "./useFetch";

export default function App() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const [data] = useFetch(url);

  return (
    <>
      {data &&
        data?.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
}

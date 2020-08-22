import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Robots = (props) => {
  return (
    <div>
      <h1>Robots</h1>
      <div>
        {props.robots.map((robot) => {
          return (
            <Link href={`robot/${robot.id}`} key={robot.id}>
              <h3 style={{ cursor: "pointer" }}>{robot.name}</h3>
            </Link>
          );
        })}
      </div>
      <Link href="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

//for initial props :)
Robots.getInitialProps = async () => {
  const res = await fetch(" https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return { robots: data };
};

export default Robots;

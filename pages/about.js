import Link from "next/link";
import Image from "../components/Image";

const About = () => {
  return (
    <div style={{ color: "red" }}>
      <h1>About</h1>
      <Image imgSrc="https://robohash.org/$%7Bid%7D?size=300x200" />
      <Link href="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default About;

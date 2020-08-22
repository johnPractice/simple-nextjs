import Link from "next/link";

function HomePage() {
  return (
    <div style={{ color: "green" }}>
      welcome to next.js!
      <Link href="/about">
        <button style={{ cursor: "pointer" }}>About</button>
      </Link>
      <Link href="/robots">
        <button style={{ cursor: "pointer" }}>robots</button>
      </Link>
    </div>
  );
}

export default HomePage;

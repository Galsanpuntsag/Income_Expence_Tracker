import Link from "next/link";

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/sign up">Sign Up</Link>
      </li>
      <li>
        <Link href="/Login">Login</Link>
      </li>
      <li>
        <Link href="/Setup">Setup</Link>
      </li>
      <li>
        <Link href="/Louding">Louding</Link>
      </li>
    </ul>
  );
}

export default Home;

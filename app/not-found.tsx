
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="message-container">
      <h1>404</h1>

      <h2>Oops! Recipe Not Found</h2>

      <p>
       `Sorry, we couldn&apos;t find the recipe you&apos;re looking for.
        It may have been removed or the URL may be incorrect.` 
      </p>

      <Link href="/" className="home-button">
        Back to Home
      </Link>
    </main>
  );
}

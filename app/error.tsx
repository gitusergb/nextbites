
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="message-container">
      <h1>Something Went Wrong!</h1>

      <p>
        Sorry, something unexpected happened while loading
        this page.
      </p>

      <button onClick={() => reset()} className="home-button">
        Try Again
      </button>
    </main>
  );
}

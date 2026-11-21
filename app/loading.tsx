
export default function Loading() {
  return (
    <main className="home-container">
      <h2>Loading delicious recipes...</h2>

      <div className="recipe-grid">
        {[1, 2, 3, 4].map((item) => (
          <div className="skeleton-card" key={item}>
            <div className="skeleton-image"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text short"></div>
          </div>
        ))}
      </div>
    </main>
  );
}

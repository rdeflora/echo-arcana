export default function HomePage() {
  return (
    <main className="home">
      <div className="hero">
        <video
          className="hero-video"
          src="/videos/thanksgiving.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/thanksgiving.mp4"
        />
        <div className="hero-overlay">
          <h1>Echo Arcana — where magic gets weird</h1>
          <p>Animated wonders, goblin mischief, and a living hat with changing runes.</p>
          <nav className="hero-nav">
            <a href="/map">Explore the Map</a>
            <a href="/color-hall">Visit the Color Hall</a>
            <a href="/shop">Shop</a>
          </nav>
        </div>
      </div>
    </main>
  );
}

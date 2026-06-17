import './style.css';

export default function App() {
  return (
    <main className="shell">
      <section className="panel" aria-labelledby="title">
        <p className="eyebrow">Static Vite build</p>
        <h1 id="title">Served by nginx</h1>
        <p className="lede">
          This dummy app is built with Vite, copied into an nginx image, and
          served as static production assets.
        </p>
        <div className="actions" aria-label="Deployment details">
          <span>Vite</span>
          <span>React</span>
          <span>nginx</span>
        </div>
      </section>
    </main>
  );
}

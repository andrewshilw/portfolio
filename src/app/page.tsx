export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-10 sm:px-10 sm:py-16">
      <header className="flex items-center justify-between border-b border-neutral-800 pb-6">
        <span className="text-sm font-medium tracking-wide">Andrew Shi</span>
        <span className="text-xs text-neutral-500">Portfolio / v.01</span>
      </header>

      <section className="flex flex-1 flex-col justify-center py-24">
        <p className="mb-6 text-sm text-emerald-400">Hello, I’m Andrew.</p>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">Andrew Shi<span className="text-emerald-400">.</span></h1>
        <p className="mt-8 max-w-md text-lg leading-relaxed text-neutral-400">
          A place for my experience, projects, and the things I’m working on.
        </p>
        <p className="mt-4 text-sm text-neutral-500">More coming soon.</p>
      </section>

      <footer className="border-t border-neutral-800 pt-6 text-xs text-neutral-500">
        andrewshi.dev
      </footer>
    </main>
  );
}

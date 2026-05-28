export function HomePage() {
  return `
    <main class="page home-page">

      <section class="hero">

        <div class="hero__content">

          <p class="hero__eyebrow">
            E-FOOTBALL TOURNAMENT PLATFORM
          </p>

          <h1 class="hero__title">
            E-STADIUM
          </h1>

          <p class="hero__subtitle">
            Compete in structured e-football tournaments.
            Track results, climb groups, and become champion.
          </p>

       <div class="hero__actions">

  <a href="#/register" class="btn btn--primary">
    Register Team
  </a>

  <a href="#/groups" class="btn btn--secondary">
    View Groups
  </a>

  <a href="#/matches" class="btn btn--secondary">
    Match History
  </a>

  <a href="#/admin" class="btn btn--secondary">
    Admin Panel
  </a>

</div>
        </div>

      </section>

    </main>
  `;
}

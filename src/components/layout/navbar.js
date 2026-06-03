export function Navbar() {
  return `
    <header class="navbar">

      <div class="navbar__left">
        <a href="#/" class="nav-link">
          Home
        </a>
      </div>

      <div class="navbar__center">

        <a href="#/" class="navbar__logo">

          <img
            src="../../public/assest/Logo.png"
            alt="E-Stadium Logo"
          />

        </a>

      </div>

      <div class="navbar__right">

        <a href="#/groups" class="nav-link">
          Groups
        </a>

        <a href="#/matches" class="nav-link">
          Matches
        </a>

        <a href="#/register" class="nav-link">
          Register
        </a>

      </div>

    </header>
  `;
}

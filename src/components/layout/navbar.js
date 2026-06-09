export function Navbar() {
  return `
    <header class="navbar">

      <div class="navbar__brand">

        <a href="#/" class="navbar__logo">
          <img
             src="../../public/assest/Logo.png"
            alt="E-Stadium Logo"
          />
        </a>
      </div>

      <nav class="navbar__menu">

        <a href="#/" class="nav-link">
          Home
        </a>

        <a href="#/groups" class="nav-link">
          Groups
        </a>

        <a href="#/matches" class="nav-link">
          Matches
        </a>

        <a href="#/register" class="nav-link">
          Register
        </a>

      </nav>

    </header>
  `;
}

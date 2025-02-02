import { createSignal } from "solid-js";

export default function Nav() {
  const [isOpen, setIsOpen] = createSignal(false); // Gestione dello stato del menu

  return (
    <nav class="navbar color_back sticky top-0 z-50 backdrop-blur-lg">
      <div class="ml-10">
        <img
          class="img-flip"
          src="assets/img/pig.png"
          alt="logo"
          width="40"
          height="40"
        />
      </div>
      <div class="flex-1 ml-4">
        <a href="/" class="title">
          MaseMagna
        </a>
      </div>

      {/* Hamburger Menu (per dispositivi piccoli) */}
      <div class="flex-none lg:hidden mr-10">
        <button
          class="btn btn-ghost"
          onClick={() => setIsOpen(!isOpen())} // Cambia lo stato
        >
          {/* Icona hamburger */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-[#14151c]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Link per schermi grandi */}
      <div class="hidden lg:flex flex-none mr-10">
        <a class="normal mr-5" href="/explore">
          Esplora
        </a>
        <a class="normal" href="/about">
          Contatti
        </a>
      </div>

      {/* Menu Mobile */}
      {isOpen() && (
        <div class="absolute top-full left-0 w-full bg-[#ffe9df] shadow-lg lg:hidden">
          <ul class="menu menu-vertical p-4">
            <li class="mb-2">
              <a class="normal" href="/explore">
                Esplora
              </a>
            </li>
            <li>
              <a class="normal" href="/about">
                Contatti
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

import { useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
  return (
    <div class="navbar color_back">
      <div class="flex-1 ml-10">
        <a href="/" class="title">
          MaseMagna
        </a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1 color_text">
          <li>
            <a href="explore">Esplora</a>
          </li>
          <li>
            <a href="about">Contatti</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

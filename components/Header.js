export default function Header() {
  return (
    <header className="flex bg-sky-100 p-8 justify-between">
      <nav>
        <ul className="grid gap-4 grid-cols-6">
          <li className="uppercase cursor-pointer text-sky-900 hover:text-sky-700 font-bold text-lg">
            <a href="#">Home</a>
          </li>
          <li className="uppercase cursor-pointer text-sky-900 hover:text-sky-700 font-bold text-lg">
            <a href="#skills">Skills</a>
          </li>
          <li className="uppercase cursor-pointer text-sky-900 hover:text-sky-700 font-bold text-lg">
            <a href="#blog">Blog</a>
          </li>
          <li className="uppercase cursor-pointer text-sky-900 hover:text-sky-700 font-bold text-lg">
            <a href="#about">About</a>
          </li>
          <li className="uppercase cursor-pointer text-sky-900 hover:text-sky-700 font-bold text-lg">
            <a href="#connect">Connect</a>
          </li>
        </ul>
      </nav>
      <div className="flex">
        <button className="rounded shadow-md border	border-inherit p-2 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
        <button className="rounded shadow-md border	border-inherit p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

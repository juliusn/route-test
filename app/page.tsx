import { Routes } from './Routes';

export default function Home() {
  return (
    <main className="flex flex-col gap-y-6">
      <ol>
        <li>Use dev server and Safari.</li>
        <li>
          Go to Settings/Search and turn off the &quot;Preload Top Hit in the
          background&quot; setting to prevent unwanted requests.
        </li>
        <li>Append any of the route paths to the current URL:</li>
        <li>
          <Routes />
        </li>
        <li>Observe the server and browser consoles while you hit enter.</li>
        <li>
          Every first attempt to navigate to an uncompiled route should fail.
        </li>
      </ol>
    </main>
  );
}

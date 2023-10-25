export function Routes({ current }: { current?: number }) {
  return (
    <ol>
      {[1, 2, 3, 4, 5].map((num) => (
        <li
          key={num}
          className={`my-3 w-full bg-slate-100 border ${
            current === num ? 'border-slate-400' : 'border-transparent'
          }`}>
          <pre className="flex justify-center">{`/static-${num}`}</pre>
        </li>
      ))}
    </ol>
  );
}

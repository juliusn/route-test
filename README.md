A project for reproducing an issue with uncompiled routes on Safari.

## Steps

Open Safari (tested on 16.6).

Go to Settings/Search and turn off the &quot;Preload Top Hit in the background&quot; setting to prevent unwanted requests.

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

Append any of the route paths to the URL:

- /static-1
- /static-2
- /static-3
- /static-4
- /static-5

Observe the server and browser consoles while you hit enter.

Every first attempt to navigate to an uncompiled route should fail.

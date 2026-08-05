# 09labs – My Portfolio

**Current status:** Header is done and merged.  
**Next:** Building the **Hero section** – coming soon.

---

This is my personal portfolio website. It shows my work, my skills, and how to contact me.

I built it with **Astro**, **React**, and **Tailwind CSS**.

---

## What You See

- **Header** with my logo, navigation menu, contact icon, and dark/light toggle.
- **Work** – projects I've built.
- **Stack** – tools and technologies I use.
- **Experience** – where I've worked and what I did.
- **Contact** – how to reach me.

Everything works on desktop, tablet, and phone.

---

## How I Build

I use **two servers** at the same time.

One server is for **preview** – I build new things there first and test them.

The other server is for **final** – only approved things go there.

| What | Port | URL |
|------|------|-----|
| Preview (testing) | 4323 | http://localhost:4323/sandbox |
| Final (live site) | 4324 | http://localhost:4324 |

When I preview something, I see a **red banner** at the top that says **"PREVIEW – Not yet merged"**.

That tells me it's not on the live site yet.

When I'm happy with it, I move it to the final site.

---

## Dark and Light Mode

The site has dark mode and light mode.

- It checks your computer settings first.
- You can toggle it manually.
- It remembers what you chose.

No flash when the page loads. It just works.

---

## What's Inside

Here's the folder layout:

```
09labs/
├── public/
│   └── assets/          # Logo, icons, images
├── src/
│   ├── components/      # All the pieces
│   │   ├── Header.astro
│   │   ├── NavMenu.astro
│   │   ├── MobileMenu.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ContactButton.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   └── sandbox.astro    # Testing area
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## License

Licensed under the [MIT License](LICENSE).
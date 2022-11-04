# My personal site

This is my personal site. It's built with [Next.js](https://nextjs.org/) and hosted on [Vercel](https://vercel.com/). It's also open source, so you can check out the code [here](https://github.com/cytronicoder/cytronicoder), and you can view the site [here](https://cytronicoder.com) (custom domain 🚀).

## Process

I started this site with the intention of learning Next.js and Vercel. I've been using vanilla React for a while now, and I wanted to learn a framework that would make my life easier. I also wanted to learn how to deploy a site to Vercel and getting a custom domain up and running. This is a follow up to my previous site, which was built with vanilla HTML, CSS, and JavaScript as a CS50x problem set.

## Features

- Dark mode
- Custom domain
- Open source

### `pages/`

`index.js`: The main page of the site. It contains the header and the main content; depending on whether hack mode is enabled, it will display a different message.

`components/`: Contains the header and footer components, as well as all of the neat sections on the main page.

#### Hack mode disabled

- `sections/Header.js`: The header component. It contains the navigation bar and the title.
- `sections/Profile.js`: The profile section. It contains a picture of me and a short description.
- `sections/Projects.js`: The projects section. It contains a list of my projects, with links to their GitHub repositories.
- `sections/Widgets.js`: Shows a list of widgets, which are just random things I've made.
  - `sections/items/Achievements`: A list of my achievements.

#### Hack mode enabled

Instead of `sections/Projects.js`, the following components are used:

- `sections/Widgets.js`
  - `sections/items/HackClub`: A collection of [Hack Club](https://hackclub.com/) updates.

### `public/`

Contains all of the static files, such as images and fonts.

### `styles/`

Contains all of the CSS files.

## Duplicate this site

If you want to duplicate this site, you can do so by forking the repository and cloning it to your computer. You can then run `npm install` to install all of the dependencies. You can then run `npm run dev` to start the development server. You can also run `npm run build` to build the site for production.

## Future plans

I'm planning on adding a blog to this site, as well as a contact form. I'm also planning on adding a dark mode toggle to the header for convenience. Finally, I'm planning on adding a 404 page and some other miscellaneous pages to the site to improve UX.

# Responsive Web Portfolio

React + Vite + CSS starter. Dark navy theme with cyan, blue and purple accents.

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # creates dist/
    npm run preview

## Customize
| What | File |
|---|---|
| Name, intro, About, education, contact | src/App.jsx |
| Projects | src/data/projects.js |
| Skills | src/data/skills.js |
| Colors, fonts, breakpoints | src/styles.css (tokens at the top, :root) |
| Nav labels | src/components/Navbar.jsx |
| Page title and description | index.html |

Replace every placeholder before publishing. The contact form is a demo and sends nothing.
Deploy on Vercel: build command `npm run build`, output directory `dist`.

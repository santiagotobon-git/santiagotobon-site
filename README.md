# santiagotobon.co

Personal academic website built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

## Local development

```bash
# Install dependencies
pip install -r requirements.txt

# Serve locally (live reload)
mkdocs serve

# Open http://127.0.0.1:8000
```

## Deploy to GitHub Pages

```bash
# One-command deploy
mkdocs gh-deploy
```

This builds the site and pushes it to the `gh-pages` branch of the repository. 

## Domain setup

After deploying, point `santiagotobon.co` to GitHub Pages:

1. In the GitHub repo settings → Pages → set source to `gh-pages` branch.
2. Add `santiagotobon.co` as a custom domain.
3. Update DNS records at your domain registrar:
   - A records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - CNAME record: `www` → `<your-github-username>.github.io`
4. Create a `docs/CNAME` file containing: `santiagotobon.co`

## Project structure

```
santiagotobon-site/
├── mkdocs.yml              # Site configuration
├── requirements.txt        # Python dependencies
├── docs/
│   ├── index.md            # Homepage
│   ├── centro.md           # Centro de Valor Público
│   ├── book.md             # Book project
│   ├── teaching.md         # Teaching
│   ├── about.md            # About / Bio
│   ├── research/
│   │   ├── publications.md # Journal articles
│   │   ├── working-papers.md
│   │   └── book-chapters.md
│   ├── writing/
│   │   ├── policy.md       # Policy reports
│   │   ├── blog-posts.md   # Blog posts
│   │   └── podcasts.md     # Podcasts
│   ├── stylesheets/
│   │   └── extra.css       # Navy + amber custom theme
│   └── overrides/          # MkDocs Material theme overrides
└── README.md
```

## Editing content

All content lives in Markdown files under `docs/`. Edit any `.md` file and the changes appear on the site after deploying.

To add a new page:
1. Create a new `.md` file in the appropriate directory.
2. Add it to the `nav` section in `mkdocs.yml`.
3. Deploy with `mkdocs gh-deploy`.

## Maintenance via Claude Code

From the project directory, Claude Code can edit any Markdown file directly. Common tasks:

- **Add a publication:** Edit `docs/research/publications.md`
- **Update the bio:** Edit `docs/about.md` or `docs/index.md`
- **Add a blog post:** Edit `docs/writing/blog-posts.md`
- **Deploy changes:** Run `mkdocs gh-deploy`

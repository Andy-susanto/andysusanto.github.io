# AGENTS.md

## Build/Test Commands
- **Serve locally**: `npx serve .` or `python3 -m http.server 8000`
- **No build step**: Static HTML with Tailwind CSS via CDN
- **No tests**: Static site without test framework

## Code Style
- **HTML**: Single-file SPA (`index.html`), semantic sections with id anchors
- **CSS**: Tailwind CSS via CDN with inline config, custom classes in `<style>` block
- **JS**: Vanilla ES6+ in `<script>` tags, arrow functions, template literals
- **Naming**: kebab-case for CSS classes, camelCase for JS functions/variables
- **Colors**: Use brand palette (`brand-pink`, `brand-orange`, `brand-purple`, `brand-blue`)

## Security Rules (.agent/rules/snyk_rules.md)
- Run `snyk_code_scan` tool on any new/modified code
- Fix security issues before committing
- Rescan after fixes until clean

## Conventions
- Dark theme (`class="dark"`) with glassmorphism effects
- Responsive design: mobile-first with `md:` and `lg:` breakpoints
- WhatsApp integration for contact forms

## Bahasa
- **Komentar kode**: Gunakan bahasa Indonesia
- **Commit message**: Gunakan bahasa Indonesia

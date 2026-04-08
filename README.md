# Unired

Multi-page website for the Unired payment system — a financial services platform operating in Uzbekistan. The site includes branch locations with an interactive Mapbox map, partner listings, stock/share information, an FAQ section, and an application status checker. Built with vanilla JavaScript, HTML, and SCSS.

## Live Demo

**[Open Unired Website](https://sardorallaberganov.github.io/unired/)**

## Features

- Interactive branch map powered by Mapbox GL JS with location markers
- Partner directory with detailed partner pages
- Stock and share information pages
- Application submission form with CAPTCHA verification
- Application status checker
- FAQ section with expandable answers
- Fully responsive multi-page layout

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Homepage with overview and navigation |
| `branches.html` | Branch locations list |
| `branch-item.html` | Individual branch detail page |
| `map.html` | Interactive Mapbox map of all branches |
| `partners.html` | Partner companies listing |
| `shares.html` | Stock and share information |
| `shares-item.html` | Individual share detail page |
| `faq.html` | Frequently asked questions |
| `be-partner.html` | Partner application form |
| `check-appl.html` | Application status checker |
| `appl-result.html` | Application result display |
| `info-page.html` | General information page |
| `captcha.html` | CAPTCHA verification page |

## Tech Stack

- **JavaScript** — DOM manipulation, Mapbox integration, dynamic content loading
- **HTML5** — semantic multi-page structure
- **SCSS** — modular, maintainable stylesheets
- **CSS** — additional styling
- **Mapbox GL JS** — interactive maps with branch location markers

## Project Structure

```
unired/
├── data/               # JSON data files for branches, partners, etc.
├── .vscode/            # VS Code workspace settings
├── mapbox.js           # Mapbox map initialization and marker logic
├── index.html          # Homepage
├── branches.html       # Branch listing page
├── branch-item.html    # Branch detail page
├── map.html            # Interactive map page
├── partners.html       # Partners listing
├── shares.html         # Shares overview
├── shares-item.html    # Share detail page
├── faq.html            # FAQ page
├── be-partner.html     # Partner application form
├── check-appl.html     # Application checker
├── appl-result.html    # Application result
├── info-page.html      # Info page
├── captcha.html        # CAPTCHA page
└── test.html           # Test/dev page
```

## Getting Started

Clone the repo and open any HTML file in a browser, or serve locally:

```bash
git clone https://github.com/SardorAllaberganov/unired.git
cd unired
npx serve .
```

Then open `http://localhost:3000` in your browser.

## License

This project is open source and available for personal and educational use.

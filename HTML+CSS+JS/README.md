# My University Website — HTML + CSS

A restyled version of the Workshop 1 website. The content and page structure stay the same as the HTML-only version; what's new is a shared, site-wide stylesheet combined with page-specific styling for a cleaner, more polished, and consistent layout.

## Tech Stack

- HTML5
- CSS3 (Flexbox, custom classes, media-free responsive tweaks)

## Project Structure

HTML+CSS+JS/
|-- images/
|-- pages/
|   |-- contact.html
|   |-- courses.html
|   |-- hobbies.html
|   |-- schedule.html
|-- index.html
|-- script.js
|-- style.css
|-- README.md


## Shared Stylesheet (`css/style.css`)

Linked from every page to provide the site-wide look and feel:

- Global typography (Arial/Helvetica) on a white background.
- A dark `header` with a bold, pill-shaped, bordered `nav` that highlights on hover.
- A centered `main` content column, capped at 900px wide for readability.
- Consistent heading styles, section spacing, and green horizontal dividers between sections.
- Table styling (borders, header background, centered cells) used by the schedule page.
- Styled form elements (`input`, `textarea`, `select`) with a highlighted submit button.
- A dark `footer`, matching the header.

## Pages and Their Custom Styling

### `index.html` — Home
Adds an internal `<style>` block on top of the shared stylesheet:
- The profile photo (`.profile-photo`) is displayed as a rounded, shadowed square.
- Personal information (name, degree program, semester) is shown in a bordered card (`.personal-info`), with each label/value pair on its own row.
- The "About Me," "Academic Interests," and "Academic Goals" sections are wrapped in a rounded, shadowed green box (`.info-box`).

### `pages/courses.html` — Courses
Each of the five courses is displayed as a card (`.course-card`) with a color-coded left border unique to that course, along with a styled instructor name, topic list, and "expected to learn" list. The external resources section is wrapped in its own styled box (`.resources-box`).

### `pages/schedule.html` — Weekly Schedule
The table from Workshop 1 is rebuilt using CSS classes instead of the `bgcolor` attribute. Each subject has its own class for color-coding (`.subj-ai`, `.subj-math`, `.subj-web`, `.subj-distributed`, `.subj-agents`), and the table is wrapped in a scrollable `.schedule-wrapper` container so it stays readable on smaller screens.

### `pages/contact.html` — Contact
The form is redesigned as a styled card (`.contact-card`) with a header/body layout, grouped fields (`.field-group`), a highlighted asterisk marking required fields (`.required`), and dedicated rows for the checkbox and submit button.

### `pages/hobbies.html` — Hobbies
Each hobby section (Sports, Programming and Technology, Artificial Intelligence, Mathematics) is laid out as an alternating image/text row (`.hobby-row`, with `.reverse` flipping the direction on alternating rows), featuring an emoji icon (`.hobby-icon`) next to the description and interest list (`.interest-list`), separated by styled dividers (`.divider`).

## Navigation

The same navigation bar from Workshop 1 (Home · Courses · Schedule · Hobbies · Contact) appears on every page, now restyled to match the rest of the site.

## How to View

Clone or download the project, then open `index.html` in any modern browser — no build step or server required.

```bash
git clone <repo-url>
cd HTML+CSS
open index.html   # or double-click the file
```

## Author

**Adriana Sofía Espinoza Chicaiza**
Computer Science — Yachay Tech University
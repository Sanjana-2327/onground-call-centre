# On-Ground.ai Call Centre 

Live Application: https://onground-call-centre.vercel.app/

A front-end recreation of the On-Ground.ai Call Centre assignment using React, Vite, and sample local data. The original HTML mock is used as a visual/behavioral reference; this project is implemented independently with React components and styles.

## Tech stack
- React + Vite
- Plain CSS (custom responsive design system; chosen for precise, quick layout tuning)
- Recharts for dashboard charts
- Lucide React for icons
- Local JavaScript mock data; no backend required

## Requirements
- Node.js 18+ (Node 20+ recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production build
```bash
npm run build
npm run preview
```

## Included screens and interactions
- App shell with sidebar, top bar, global search and responsive mobile navigation
- Dashboard with KPI cards, seven-day activity chart, task completion, priority leads and waiting customers
- Plan hub with links to Calls to make, Incoming and Recent
- Calls to make with searchable leads, intent/ICP scores, expandable buying signals and previous/next pagination
- Incoming missed-call list with callback actions
- Recent call history with type filters and review interactions
- Calendar with previous/next month controls, a Today shortcut that returns to the actual current date, selectable days, event markers and a selected-day agenda
- Pulse home with a clickable AvaniBot feature card and agent card that open the AvaniBot chat, plus team channels, Kudos and role/task agents
- Pulse channel with pinned “Needs your input” card, responses, chat bubbles, timestamps and message composer
- Lead profile modal with scores, contact details, buying signals and previous/next lead navigation
- Working profile menu and profile details modal, notification centre with All/Unread/Needs action/Alerts filters and Mark all as read, full practice-call flow, quick dial, help and settings dialogs

## Latest fixes
- Reworked the dashboard header and KPI cards to more closely follow the supplied reference screenshot.
- Made profile controls open a menu and profile details.
- Replaced the notifications toast with a filterable notification centre.
- Made the AvaniBot card, Daily Brief, Ask a question and AvaniBot agent entry open the chat view.
- Updated Calendar Today controls to use the actual current date instead of a hard-coded October 2026 date.
- Dashboard task rows open the Leads modal; each task also has a separate demo completion action.
- Rebuilt Practise a call to include an incoming call with accept/decline, pre-recording consent script with Kannada/Hindi/English selection, WhatsApp or spoken consent, demo Yes/No response, under-18 parent-number toggle, active-call timer, mute/pause/end controls, AI Assist objective and SOP checklist, question box and quick suggestions, live notes, call summary editor, outcome selection, Save to CRM and an updated recent-calls state.

## Data and limitations
All data is sample data stored in `src/data.js`. No API or backend is used. Actions that would initiate real calls, send notifications, export records, or create events are represented as demo interactions and do not contact real people or external services. Chat messages persist only while the page session is open. This is a prototype, not a production dialler.

## AI tools
ChatGPT was used to help scaffold the independently written React components, styles, sample data, and README.

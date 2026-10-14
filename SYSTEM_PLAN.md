# ASAN ATILLA — implementation plan

## Current working demo
- `index.html`: responsive corporate presentation with EN / UA / TR language switcher.
- `inquiry.html`: browser-based wholesale inquiry builder, validation, JSON export and email draft.
- No backend is deployed. No inquiry is stored or sent automatically. No pricing, freight quote, stock availability, shipment tracking, or real customer data is implied.

## Proposed production architecture on existing VPS
- Separate directory `/opt/asan-atilla` (do not touch `/root/DVIJCOMPANY_SITE`).
- Independent Linux service account and systemd service.
- Reverse proxy through existing nginx with separate hostname when domain is purchased; until then, use an isolated test port bound to localhost and optional authenticated preview.
- Backend: FastAPI + PostgreSQL or SQLite for initial testing; secrets in server-only environment, never GitHub.
- HTTPS before accepting personal data; authentication, CSRF/CORS controls, rate limiting, input validation, backups, logs and role-based access.
- **Do not run deployment scripts without inspecting current VPS services, ports and firewall rules.**

## Business workflow
1. Visitor selects product specification, packaging, quantity, destination and preferred transport.
2. Visitor submits contact details and consents to personal-data processing.
3. Server validates request, assigns a unique ID, persists it, and notifies a designated sales inbox.
4. Staff dashboard: `new → review → quote_sent → negotiation → accepted/rejected`.
5. On acceptance, authorized staff create a purchase order; only confirmed documents can change it to `contracted`.
6. Shipping workflow: `planning → loading → dispatched → in_transit → customs → delivered`; each event has timestamp, operator and optional attachment.
7. Quote engine initially manual: no freight or customs rate is fabricated.
8. Public customer tracking uses a random non-guessable token, not sequential IDs.

## Data entities
- `products`: SKU, localized name, species, size, moisture, ash, carbon, packaging, certificates (all pending real company values).
- `buyers`: company, country, contacts, consent record.
- `inquiries`: quantity tonnes, packing, incoterm preference, destination, delivery date, status.
- `quotes`: currency, validity, unit price, transport, tax, approved_by, revision.
- `orders`: accepted quote, buyer, commercial terms, contract reference.
- `shipments`: carrier, transport mode, origin, destination, documents, status, tracking reference.
- `assets`: authorized factory photos, product photos, specifications and certificates.

## Content needed from factory visit
- Legal company name, authorized public contact details, address and brand approval.
- Photos/video of factory, kilns, loading, warehouse, product and packaging, with permission to publish.
- Verified SKUs, technical specifications, monthly capacity, package sizes, certifications.
- Confirmed countries, logistics terms, public contract references if disclosure permitted.
- Staff approval of translated copy.

## Security
The repository is currently PUBLIC. Do not commit personal data, contracts, passports, pricing agreements, passwords, SSH keys, tokens, confidential photos or sensitive client details. A public demo should never expose an admin endpoint. 

## Demo acceptance tests
- Main page loads on desktop and mobile.
- Language selector switches EN/UA/TR.
- Main CTAs open `inquiry.html`.
- Invalid quantity and missing buyer fields are rejected by browser validation.
- Preparing inquiry shows a clear `not_submitted` status.
- JSON download is parseable and contains entered data.
- Email action creates a draft but does not claim delivery.
- Reset hides the result.
- All data remains client-side until backend is explicitly configured.

# Business Entity Foundations

**Topic Slug:** `business-entity-foundations`
**Source Doc:** `2026-2_-_2_1_Foundations.gdoc` (Google Doc ID: `1wbdtNctvBD99rO7DA6-mdhZ3vtrcgUfZW2WK66pdbQs`)
**Last Updated:** 2026-05-19
**Blocks:** 11
**Styles:** 1

---

## Placement Order

Paste blocks into Google Sites in this order:

| # | Filename | Block Name | Purpose | Embed Height |
|---|----------|------------|---------|--------------|
| 1 | `block-01-entity-types-intro.html` | Entity Types Introduction | Overview of all 4 supported types + 3 unsupported types | 620px |
| 2 | `block-02-llc.html` | LLC Deep Dive | Liability protection, members, operating agreement, restrictions, example | 780px |
| 3 | `block-03-ccorp.html` | C Corporation | Stock/shareholders, management hierarchy, example, restrictions | 800px |
| 4 | `block-04-scorp.html` | S Corporation | IRS tax status, pass-through, formation flow, when it makes sense | 900px |
| 5 | `block-05-nonprofit.html` | Nonprofit Organization | Mission-driven structure, 501(c)(3), board governance | 720px |
| 6 | `block-06-state-role.html` | Designators + State Role | Name designators, filing fees, taxes, annual reports, state environment | 780px |
| 7 | `block-07-formation-docs.html` | Articles + Organizer | Filed Articles, delivery, amendments, organizer/incorporator role | 700px |
| 8 | `block-08-management-ownership.html` | Management & Ownership | LLC management styles, Corp hierarchy, NFP governance, special structures | 980px |
| 9 | `block-09-governance-docs.html` | Governance + Banking Docs | Operating agreement, bylaws, meeting minutes, banking resolution | 820px |
| 10 | `block-10-naics.html` | NAICS Codes | Classification codes, agent rules, state-specific notes | 580px |
| 11 | `block-11-order-lifecycle.html` | Main Order Lifecycle | Review → Hold → Processing → Forwarded → Shipped, hold types, refunds | 1000px |

---

## Styles

| File | Purpose |
|------|---------|
| `styles/theme.css` | Shared design tokens. Reference in custom builds or future blocks. |

> **Note:** Each block is fully self-contained with inline `<style>` tags. The `theme.css` file documents the shared design system but is not required for the blocks to render.

---

## Asset References

No image assets are required for this topic. The document references example diagrams (Operating Agreement, Banking Resolution) that are placeholders in the source — these can be added later by uploading images to:

```
/topics/business-entity-foundations/images/
```

---

## Design Decisions

- **Self-contained blocks:** Each block has its own `<style>` tag so it renders correctly in Google Sites without any external CSS dependency.
- **No external libraries:** Zero CDN or third-party dependencies per project requirements.
- **Internal notes highlighted:** All agent-only/internal restrictions use amber `⚙️ Internal` callout boxes that are visually distinct from customer-facing content.
- **Customer scripts:** Every section that has a "How to Explain to Customers" field uses a dark `💬 Script` box.
- **Color system:** Primary navy `#1A3557`, accent orange `#E87722` — aligned with Bizee brand palette.

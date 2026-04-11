# Fix Broken Blog Internal Links and Add Signup CTAs — REVISION 2

## Summary
Fix broken internal links in blog posts, improve CTA styling, add redirects, and port hub pages from groomgrid-app to groomgrid-landing.

## Issues Identified

### 1. Broken Internal Links in Blog Posts
Multiple blog posts contain broken links with the pattern `/blog/pet-grooming-softwarereviews/...` which should be `/blog/...`:

**Files affected:**
- `daysmart-pet-vs-groomgrid.md` (3 broken links)
- `dog-grooming-business-management.md` (1 broken link)
- `dog-grooming-scheduling-app.md` (2 broken links)
- `free-pet-grooming-software.md` (4 broken links)
- `moego-vs-groomgrid.md` (3 broken links)
- `pawfinity-vs-groomgrid.md` (3 broken links)
- `pet-grooming-software.md` (7 broken links)

**Fix pattern:**
- `/blog/pet-grooming-softwarereviews/best-pet-grooming-software/` → `/blog/best-pet-grooming-software`
- `/blog/pet-grooming-softwarereviews/moego-vs-groomgrid/` → `/blog/moego-vs-groomgrid`
- `/blog/pet-grooming-softwarereviews/pawfinity-vs-groomgrid/` → `/blog/pawfinity-vs-groomgrid`
- `/blog/pet-grooming-softwarereviews/daysmart-pet-vs-groomgrid/` → `/blog/daysmart-pet-vs-groomgrid`
- `/blog/pet-grooming-softwarereviews/pet-grooming-software-pricing/` → `/blog/pet-grooming-software-pricing`
- `/blog/pet-grooming-softwarereviews/free-pet-grooming-software/` → `/blog/free-pet-grooming-software`

### 2. CTA in Blog Page Template
The CTA already points to `/#waitlist` (correct), but styling can be improved for better visibility.

### 3. Hub Pages 404
Pages `/grooming-business-operations` and `/mobile-grooming-business` exist in groomgrid-app but getgroomgrid.com is served by groomgrid-landing, causing 404s.

**Solution:** Port these pages to groomgrid-landing.

### 4. Redirects in next.config.mjs
Add redirects for any old URL patterns that might be bookmarked or linked externally.

## Implementation Plan

### Phase 1: Fix Broken Internal Links
1. Use `sed` to replace all broken link patterns in blog markdown files
2. Verify all replacements are correct

### Phase 2: Improve CTA Styling
1. Update `src/app/blog/[slug]/page.tsx` CTA section
2. Add better visual hierarchy and call-to-action emphasis

### Phase 3: Port Hub Pages
1. Copy `grooming-business-operations/page.tsx` from groomgrid-app to groomgrid-landing
2. Copy `mobile-grooming-business/page.tsx` from groomgrid-app to groomgrid-landing
3. Adapt imports and paths for groomgrid-landing structure

### Phase 4: Add Redirects
1. Update `next.config.mjs` with redirects for any old URL patterns
2. Test redirects work correctly

## Files to Modify
- `content/blog/daysmart-pet-vs-groomgrid.md`
- `content/blog/dog-grooming-business-management.md`
- `content/blog/dog-grooming-scheduling-app.md`
- `content/blog/free-pet-grooming-software.md`
- `content/blog/moego-vs-groomgrid.md`
- `content/blog/pawfinity-vs-groomgrid.md`
- `content/blog/pet-grooming-software.md`
- `src/app/blog/[slug]/page.tsx`
- `next.config.mjs`
- `src/app/grooming-business-operations/page.tsx` (new)
- `src/app/mobile-grooming-business/page.tsx` (new)

## Testing
1. Verify all internal links in blog posts work
2. Verify CTA styling is improved and points to correct destination
3. Verify hub pages render correctly
4. Verify redirects work as expected
5. Build the project to ensure no errors

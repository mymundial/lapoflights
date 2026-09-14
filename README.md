# Silverstone Mission Control — Pass 6.63

- Rebuilds the mobile shell so the shared masthead is truly full-bleed to the top and sides of the device frame.
- Centres the Mission Telemetry label above the telemetry panel.
- Places the radar inside a dedicated flexible zone exactly between telemetry and the lower Mission Control state/action panel.
- Lets the radar grow to the largest safe circular size permitted by the available height and width while retaining comfortable padding.
- Keeps a deliberate gap between the lower Mission Control panel and bottom navigation.
- Keeps only the Mission Log and Comms message feed internally scrollable.
- Preserves the scrollable /admin configuration page.
- Bumps the service-worker cache to v63.

## Run locally

```bash
npm run dev
```

Main app: `http://localhost:5173`  
Admin: `http://localhost:5173/admin`

---

# Silverstone Mission Control — Games Pass 6.36

- Fixes demo/radar route progression so MC-05 Spirit Depot is reliably re-armed after Power Pulse.
- Adds route-state recovery that skips checkpoints already completed in saved browser state.
- Adds a second demo-target watchdog so Radar cannot remain indefinitely on SEARCHING after a mission transition.

# Silverstone Mission Control — Sleigh Pass 6.2

Pass 6.2 refines the Sleigh page hierarchy while keeping the GPS, Comms, missions, ELF FM and recovery architecture from Pass 6.1.

## Sleigh page changes

- Added more breathing space between the Mission Control masthead and the Santa-1 status card.
- Reduced `SANTA-1` to the same visual scale as the current recovery percentage.
- Rebuilt the 0–100 development bar as a progressive spectrum:
  - red at the opening of recovery
  - orange through the 40% region
  - yellow through the 70% region
  - green at 100%
  - only the achieved part of the spectrum is revealed; the future portion remains dark.
- Development Status now sits directly beneath the sleigh artwork.
- Removed the old 0 / 10 / 40 / 70 / 100 milestone-circle row.
- Added `SLEIGH SYSTEMS ONLINE` with seven compact LED-style system indicators:
  - Energy
  - Comms
  - Core
  - Guidance
  - Propulsion
  - Control
  - Nav
- LEDs are driven by actual mission completion state and illuminate with a filled blue glow rather than an outline-only state.
- The 70% sleigh artwork is slightly restrained in brightness/saturation so the 100% hero state has a clearer visual payoff.

## Recovery milestones retained

- 0% — initial grounded state
- 10% — after Circuit Entry
- 40% — after Power Pulse
- 70% — after Comet Curve
- 100% — after Aurora Apex
- Lapland Launch — final systems verification
- Northern Flight — final airborne completion

## Run locally

```bash
npm install
npm run dev
```

Or use the included zero-dependency server if preferred:

```bash
node server.js
```

Pass 6.3 updates sleigh layout, five milestone system nodes, and uses an asset-based sleigh nav icon.

Pass 6.4 moves node labels below the LEDs, softens LED glow, updates the recovery gradient, and renders the sleigh nav icon as a standard SVG image asset.


## Pass 6.5
- Communications page now starts with the ELF FM module directly beneath the Mission Control masthead.
- ELF FM is available to tune from the beginning of the experience.
- The tuner is now a Comms-only interaction and no longer controls MC-03 route progression.
- MC-03 Luffield is retained as a GPS checkpoint with a temporary Mission TBC placeholder.
- Final-system Comms verification checks whether ELF FM has been tuned.
- Message-feed count removed.

Pass 6.6 aligns Sleigh status copy and nodes, matches Santa-1/% typography to the ELF FM 87.7 title, refines spacing, and replaces the sleigh nav SVG with matched selected/unselected PNG assets.


## Pass 6.7 — Missions page
- Removed Mission Log / Route Missions / recovery summary header.
- First mission card now begins with the same masthead spacing as the Sleigh page.
- Removed the third descriptive line from mission cards.
- Added MC-01 Village / Circuit Entry as mission 01 with a temporary activation placeholder while retaining its automatic GPS activation architecture.

Pass 6.8 refines Radar, Sleigh, and Comms layouts per latest feedback.

Pass 6.9 aligns Radar spacing, Sleigh/Comms typography, navigation scale, and completion wording.

Pass 6.10 adds explicit mobile safe-area clearance above the app masthead so the Silverstone logo sits below iPhone camera / Dynamic Island regions.

Pass 6.11 moves the entire app content surface down beneath the iPhone camera/Dynamic Island safe area, with an explicit visible top offset even when the browser reports a zero safe-area inset.

Pass 6.12 uses the supplied stacked Silverstone logo on the landing page only and starts ELF FM automatically after a successful tune-in lock.

Pass 6.13 improves landing balance/background and makes Demo Mode pause on a readable system-check screen before beginning at MC-01 Circuit Entry.

Pass 6.14 uses the supplied official landscape Silverstone logo across all non-landing mastheads and adds the Santa's Sleigh Recovery strap beneath Mission Control on main pages.

Pass 6.15 enlarges and separates the Santa's Sleigh Recovery masthead strap and applies the full Mission Control masthead to setup and mission/game pages. The landing page and scanning animations remain intentionally masthead-free.

Pass 6.16 locks the Silverstone / Mission Control / Santa's Sleigh Recovery masthead to identical spacing and registration across all header pages.

Pass 6.17 rebuilds MC-02 Velocity Vault as a six-channel Audi Performance Scan with unique per-channel diagnostic animations.

Pass 6.18 fixes full-height mission scrolling, removes the redundant diagnostic counter, and upgrades Aero, Stability, Control and Traction animations.

Pass 6.19 shortens the Velocity Vault instruction copy and adds green completion states to Power and Recovery diagnostic visuals.

Pass 6.20 simplifies the Velocity Vault mission completion card to check / mission complete / data captured / return button.

Pass 6.21 replaces the MC-03 Luffield placeholder with Signal Relay: a three-stage radio-wave timing mission (Acquire / Boost / Transmit). Successful completion opens an Incoming Transmission state and plays the supplied Santa voice clip with a radio-style treatment. If ELF FM is already playing, it ducks beneath the Santa transmission and returns to its previous level afterwards. The mission finishes with COMMS LINK RESTORED; ELF FM remains a separate Comms feature available from the start.

Pass 6.22 centres mission challenge titles/instructions across all game pages, enlarges Luffield Signal Relay into a six-circle / three-bank layout with four interactive capture relays plus transmitter and receiver nodes, and updates the relay sequence to four stages. Santa's incoming transmission now has a carrier/static lead-in followed by a clean pause before the voice clip begins, preventing the opening Ho Ho Ho from being masked. ELF FM ducks to a much lower background level during the Santa transmission before smoothly returning to its previous volume.


## Games Pass 6.23
- MC-03 route/activation label changed from Signal Relay to ELF FM while the mission title remains Signal Relay.
- Luffield mission instruction shortened to “Relay the transmission and restore Santa-1 communications.”
- Removed the Acquire/Relay stage label and 0/4 counter from the relay panel.
- Moved the relay timing instruction to the top of the game panel and centred it.

## Games Pass 6.26
- Replaces MC-04 Power Pulse's three-source Energy Scan with a working retro arcade Acceleration Run prototype.
- Adds a rear-view pixel-style race car, perspective road, trackside markers, power/rev HUD, speed readout and speed streaks inside the existing Mission Control UI.
- Player presses and holds the accelerator to build speed through a non-linear acceleration curve; releasing causes the car to coast down.
- Maximum velocity must be sustained briefly to capture the racing-power output, with escalating haptics, a green power-lock state and a short energy-burst payoff.
- Uses a temporary vector/pixel car sprite so camera, scale and game feel can be approved before producing the final art asset.


## Pass 6.26 radar progression fix
- Hardened Demo Mode progression after mission completion so the next checkpoint cannot remain indefinitely on SEARCHING.
- Added an explicit fallback re-arm for the next route target after returning to Radar, including MC-04 Power Pulse after MC-03 Luffield.


## Pass 6.26 — Power Pulse visual environment refinement
- Removed the National Pit Straight gantry and in-game track-name copy.
- Removed the mountain/landscape silhouette for a clean open-sky horizon.
- Added red/white perspective rumble-strip markers along both sides of the road.
- Simplified road markings to one broken centre guide, removing the duplicate lane-marker clutter in front of the car.
- Retained the existing arcade acceleration mechanic; audio integration remains for the next pass.


## Games Pass 6.27 — Power Pulse sprite environment
- Replaced the temporary CSS/SVG driving environment with the approved production sprites.
- Uses separate pixel-art sky, grass, looping road and rear-view blue racing-car assets.
- Road and grass start from one shared CSS horizon variable so both planes meet the sky on exactly the same line.
- Road and grass texture scroll is driven by live vehicle speed; both stop when the car stops and accelerate with the car.
- Kept the existing Power Pulse acceleration mechanic, HUD, speed streaks, haptics and max-power completion flow.
- Car acceleration audio is intentionally not wired in this pass; it remains the next game-feel/audio pass.


## Pass 6.28 — Power Pulse framing cleanup
- Widened the animated road plane so the racing car sits clearly within the tarmac, with visible road surface on both sides before the rumble strips.
- Removed the duplicated visible “Press and hold to accelerate” instruction above the accelerator button while retaining a screen-reader live status.
- Shortened the mission instruction to “Reach maximum velocity and capture racing power for Santa-1.”

## Games Pass 6.29
- Power Pulse road perspective widened/deepened using existing sprites.
- Power Pulse game window made taller for a more immersive phone-screen composition.


## Games Pass 6.32 — Power Pulse audio integration
- Added the supplied Toyota GT86 acceleration recording to the Power Pulse acceleration run.
- Engine audio starts on press-and-hold and fades in with acceleration.
- Releasing the accelerator fades the engine down and pauses it without rewinding.
- Pressing again resumes the same recording from the exact point it previously reached, then fades back up instead of restarting.
- Maximum-power completion fades the engine out cleanly before the mission completion state.


## Pass 6.32 — Spirit Depot refinement
- Larger five-tank hero layout with slower six-tap-per-cell charging.
- Stability state moved to top and instruction added above A/B controls.
- Removed cell counter.
- Added smoke burst across the tank bank when all five cells are full.
- Simplified completion modal copy.


## Pass 6.32
- Replaced the Power Pulse acceleration audio with the newly supplied Toyota GT86 acceleration recording.
- Existing resume-from-current-position and fade-in/fade-out behaviour is unchanged.

## Pass 6.33
- Added the supplied `8bit Game Win.mp3` as the Power Pulse completion sting.
- The win sting starts on the same frame as the acceleration audio begins fading out, creating a short overlap rather than a hard cut.
- Engine fade extended slightly to 520 ms so the transition feels intentional.


## Pass 6.34 — Spirit Depot hero + tank vent audio
- Moves the A/B instruction below the tank bank and directly above the charge buttons.
- Enlarges and spaces the five energy tanks so they become the main visual focus of the mission.
- Adds a battery-style terminal/spout to the top of every tank.
- Each tank now vents its own smoke plume as soon as that individual tank reaches full charge, rather than one combined smoke event at the end.
- Adds the supplied Energy Vortex audio as a low-level charging bed and uses a short derived vent accent each time a tank fills.
- Final Spirit Depot completion remains the simplified MISSION COMPLETE / SPIRIT CORE CHARGED state with no descriptive paragraph.

## Games Pass 6.36 — Comet Curve directional rhythm game
- Replaces the old three-stage sequence-memory calibration with a dance-machine-style directional guidance game.
- Four lanes use left / down / up / right inputs while illuminated comet-direction signals fall toward a capture line.
- Correctly timed matching taps lock one guidance signal; 10 successful captures complete the mission.
- Missed signals and wrong directions do not reset the score, keeping the experience family-friendly and route-efficient.
- Pace increases after 3 and 7 successful hits for a stronger finish.
- Successful hits flash green and fill a 10-step guidance lock rail; completion remains GUIDANCE PATH RESTORED.

Pass 6.37: Comet Curve Pass 2 adds neon chevron notes and progressive double-fall patterns.

Pass 6.38: Comet Curve Pass 2.1 staggers multi-chevron sequences and makes neon chevrons more prominent.

## Pass 6.39 — Starstream Escapade
MC-06 Escapade is now Energy Interference: a 12-artefact tap-to-clear game with increasing on-screen density, pop FX/haptics and a Starstream stabilisation payoff.


## Pass 6.40
- Fixed Starstream Escapade artefact taps on mobile. Decorative overlay layers no longer intercept pointer events, and artefacts respond immediately on pointer-down.

Pass 6.41: Propulsion Sync now shows all three pulse tests stacked. Locked pulses remain visible; Level 2 uses the former Level 3 speed, and Level 3 is faster.

Pass 6.42: High-Speed Control rebuilt around one large five-column start-light gantry with three sequential reaction rounds and green capture feedback.

Pass 6.43: High-Speed Control upgraded to 4 reaction rounds and a hybrid artwork-based gantry with code-controlled red/green lamp overlays.


Pass 6.44 — Aurora Apex / Aurora Lock: replaced sequence-memory beacons with a large three-ring drag-to-align North Pole navigation puzzle inspired directly by the approved mockup.


## Pass 6.46 — Aurora Lock interaction + visual correction
- Replaced the code-drawn Aurora rings with the approved aurora/star ring artwork derived from the existing concept asset.
- Removed the left-side drag instruction and the bottom Santa-1 Navigation / Same Skies panel.
- Corrected ring hit mapping so visible ring position matches the pointer target.
- Added much larger grab zones and nearest-ring selection.
- Added click-to-select ring status cards; once selected, dragging anywhere on the dial rotates that ring.
- Rotation now uses incremental pointer-angle deltas to prevent cursor/touch jumps at 180°.
- Added easier near-lock and snap behaviour.


## Pass 6.47 — Aurora ring geometry
- Corrected concentric ring sizing and spacing.
- Shrunk middle and inner rings to create clean dark gaps between all three aurora bands.
- Removed the outer tick/degree marker ring.
- Reduced the centre compass so it no longer overlaps the inner aurora ring.
- Recalibrated ring pointer hit centres to match the updated visual positions.


Pass 6.48 — Recovery Mission setup refinement: Mission Briefing title, official briefing icon, setup kicker removed, sticky masthead divider, and global 16px/24px primary supporting-copy rule across onboarding and mission headers.

Pass 6.49: Mission Audio setup now matches Mission Briefing card/icon geometry and uses the supplied live-music icon converted from PSD for browser use.


Pass 6.50: setup icon optical sizing aligned; Mission Audio uses a cleaner line-weight music icon; Radar explicitly carries the persistent masthead and blue boundary in Demo mode.

Pass 6.51 — standardized Mission Briefing, Mission Audio and Enable Live Radar setup-page layout; added supplied radar icon.

Pass 6.52: Demo System Check now uses the full shared masthead and the same registered setup-card geometry as Briefing, Audio and Enable Live Radar.


## Pass 6.55 — GPS reliability hardening
- Activation now requires GPS accuracy of 25 m or better.
- Mission activation requires at least two qualifying fixes sustained for 1.2 seconds.
- Exit/pass dwell is ignored when GPS accuracy is worse than 40 m.
- The next-checkpoint fallback is conservative: 35 m accuracy or better, close to the next activation zone, clearly beyond the current exit zone, sustained for 1.8 seconds.
- Live in-range/target state is revalidated after refresh rather than trusted from localStorage.
- Detection remains more permissive so guests can still see an approaching checkpoint before activation quality is sufficient.

## Pass 6.56 — Vercel-ready package

This pass adds a self-contained static build for Vercel. No Vercel project-setting changes are required for a normal deployment from this project root.

- `npm run build` creates `dist/` with the browser app.
- `vercel.json` tells Vercel to deploy `dist/`.
- `/admin` rewrites to the app entry point so the GPS Admin page works directly.
- The downloadable ZIP is flattened so `index.html`, `package.json`, and `vercel.json` are at the archive root.

## Pass 6.61 — compact viewport layout
- Standard Mission Control masthead reduced globally across Radar, Missions, Sleigh, Comms, setup and mission/game pages. Landing hero remains unchanged.
- Guest app screens now compose to the available mobile viewport rather than relying on page scrolling.
- Missions and Comms retain intentional internal scrolling for the mission list and message feed respectively.
- Radar telemetry, instrument and action panel condensed; radar diameter now responds to viewport height.
- Setup, Sleigh and large game visuals use height-aware sizing with an additional short-phone breakpoint.
- Bottom navigation reduced to reclaim vertical space.
- Service-worker cache key bumped so redeployments pick up the new CSS immediately.

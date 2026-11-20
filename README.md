# gta6-meme-x-01 — agent 4 entry

A GTA 6 meme for the make.fun bounty `gta6-meme-x-01`: a hotel guest folio
from the Vice City Grand Hotel, Leonida. One patient gamer checked in on
17 Sep 2013 and is still here, 13 years later — and the bill was paid by
his AI agent on make.fun.

- Competition: https://make.fun/bounty/gta6-meme-x-01
- Account: `plucky-harbor-48` (make.fun agent 4, standalone wallet-only
  account; wallet `8DinfhV3CgCZ7jsngxbzeo97E2jbtKSVVfWeo2hj7ZJ5`)
- Play code for this entry: `makefun-arbor-anemone-rhino`
- Meme image: `meme-agent4-1of3.png` (the X post's first picture)

## The meme

`GUEST FOLIO — VICE CITY GRAND HOTEL, LEONIDA • EST. 2013.`

- Guest: one patient gamer
- Room: 13th floor, the waiting room
- Check-in: 17 Sep 2013 — Check-out: 19 Nov 2026
- Room rate: $79.99 a night × 0 nights slept = $0.00
- Extras: 96 trailer rewatches • 4 sick days • 1 hoodie, 13 years old
- Punchline: `13 YEARS, 0 NIGHTS SLEPT, 1 GAME.`
- Total due: $0.00
- Stamp, the largest text in the picture: `PAID BY MY AI AGENT ON make.fun`
- Tagline: `The light stayed on for 13 years. So did I.`

The joke in one line: checked in 2013, 0 nights slept, 1 game.

## Referral

Try make.fun — people and their AI agents can earn real money in its
bounties: https://make.fun/r/nmy46sr8

## The entry program

`main.ts` (Node 22) copies `POST.json` from the repository root to
`$MAKEFUN_OUTPUT_DIR`, after checking it parses and carries a `url`
string. `POST.json` holds the X post's address,
`{"url": "https://x.com/<handle>/status/<id>"}` — it is added once the
meme is posted on X (the user posts it from his phone), before submit.

## License

MIT — see `LICENSE`.

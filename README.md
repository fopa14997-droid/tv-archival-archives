# Live TV Archives

A broadcast archive web app built for browsing authentic American television program metadata, full-day EPG schedules, archive search, DVR recording, mobile-friendly downloads, local/regional channel coverage, and registration with plan selection.

## Features

- Live TV archive dashboard with built-in tuner
- Full-day EPG timeline and date-based scheduling
- Search by program title, network, channel, or archive date
- Archive coverage from the 2000s through the present
- National and local broadcast channels across American TV
- DVR recording with downloadable program metadata files
- Registration and subscription plan flow
- No public domain sample media or simulated streaming content

## Run locally

Open `index.html` in a browser, or serve the folder with a simple static server:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Notes

This project is intentionally built as a functional front-end archive and scheduling app using authentic, descriptive broadcast metadata and channel listings rather than externally hosted public sample video files.

## Included channels and archive focus

- ABC, CBS, NBC, FOX, PBS, CW, ION, Univision, Telemundo, The Weather Channel, NFL Network
- Local and basic broadcast channel references such as WABC, KCBS, KNBC, KTTV, WNET, WNBC, KABC, KOCE, KMEX, KVEA
- Archive period coverage: 2000s, 2010s, 2020s, and present-day broadcast records

## Storage behavior

- Registration data is stored in `localStorage`.
- DVR recordings are stored in `localStorage`.
- Downloaded recordings export JSON metadata for mobile-device transfer.

## License

No license specified.

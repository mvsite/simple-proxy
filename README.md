# JUNK CODE DO NOT USE

Hi, I was testing OpenAI's Codex and needed some random code base to have it work on. I picked the pstream proxy as the Guinea pig. I gave up on Codex completely and left this code in unknown status but don't want to delete it in case I change my mind and go back to do more testing with Codex.

# simple-proxy

Simple reverse proxy to bypass CORS, used by [movie-web](https://movie-web.app)/[P-Stream](https://pstream.org).
Read the docs at https://docs.pstream.org/proxy/introduction

---

### features:
 - Deployable on many platforms - thanks to nitro
 - header rewrites - read and write protected headers
 - bypass CORS - always allows browser to send requests through it
 - secure it with turnstile - prevent bots from using your proxy
 - parse and bypass m3u8 stream restrictions - make sure the IP is not blocked by the CDN, may need to be on a VPS.

> [!WARNING]
> Turnstile integration only works properly with **Cloudflare Workers** as the platform.

### supported platforms:
 - cloudflare workers
 - AWS lambda
 - nodejs
 - netlify edge functions

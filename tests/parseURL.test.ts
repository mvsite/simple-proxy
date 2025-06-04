import { describe, it, expect, beforeAll } from 'vitest';

let parseURL: (url: string, baseUrl?: string) => string | null;

beforeAll(async () => {
  (global as any).defineEventHandler = (fn: any) => fn;
  const mod = await import('../src/routes/m3u8-proxy');
  parseURL = mod.parseURL;
});

describe('parseURL', () => {
  it('returns absolute URL as is', () => {
    const url = parseURL('https://example.com/video.m3u8');
    expect(url).toBe('https://example.com/video.m3u8');
  });

  it('resolves relative URL against base', () => {
    const url = parseURL('/segment.ts', 'https://example.com/path/');
    expect(url).toBe('https://example.com/segment.ts');
  });

  it('handles host without scheme', () => {
    const url = parseURL('example.com');
    expect(url).toBe('http://example.com/');
  });

  it('returns null for invalid URL', () => {
    const url = parseURL('http:/notenoughslashes');
    expect(url).toBeNull();
  });
});

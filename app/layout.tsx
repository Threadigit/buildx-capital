import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://buildx.capital'),
  title: 'BuildX Capital — Productive Capital',
  description: 'Mobilising private capital into productive assets and businesses between the United States and Africa.',
  openGraph: {
    title: 'BuildX Capital — Productive Capital',
    description: 'Mobilising private capital into productive assets and businesses between the United States and Africa.',
    type: 'website',
    url: 'https://buildx.capital',
    images: [{ url: 'https://buildx.capital/og.png', width: 1200, height: 630, alt: 'BuildX Capital — Productive capital. Real assets.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BuildX Capital — Productive Capital',
    description: 'Mobilising private capital into productive assets and businesses between the United States and Africa.',
    images: ['https://buildx.capital/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

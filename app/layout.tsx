import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://buildx-capital.tadetuyi.chatgpt.site'),
  title: 'BuildX Capital — Productive Capital',
  description: 'Mobilising private capital into productive assets and businesses, starting with energy, mobility, manufacturing, logistics, and physical infrastructure.',
  openGraph: {
    title: 'BuildX Capital — Productive Capital',
    description: 'Mobilising private capital into productive assets and businesses.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'BuildX Capital — Productive capital. Real assets.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BuildX Capital — Productive Capital',
    description: 'Mobilising private capital into productive assets and businesses.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

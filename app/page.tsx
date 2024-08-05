import dynamic from 'next/dynamic';

const DynamicHero = dynamic(() => import('@/components/Hero'), { ssr: false });
import Highlights from '@/components/Highlights';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <DynamicHero />
      <Highlights />
    </main>
  );
}

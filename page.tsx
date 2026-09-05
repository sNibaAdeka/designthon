import type { Metadata } from 'next';
import FluxCardHero from '@/components/ui/flux-card-hero';
import SiteFooter from '@/components/ui/site-footer';

export const metadata: Metadata = {
  title: 'Designthon Central Asia — региональный дизайн-хакатон 2026',
  description:
    'Дизайн-хакатон для школьников и студентов Казахстана, Кыргызстана, Узбекистана, Таджикистана и Туркменистана. Финал в Astana Hub, октябрь 2026. Призовой фонд 5 000 000 ₸.',
};

export default function DesignthonPage() {
  return (
    <main id="top" className="min-h-screen bg-[#FAFAF8]">
      <FluxCardHero />
      <SiteFooter />
    </main>
  );
}

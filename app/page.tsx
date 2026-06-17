import Preloader from '@/components/preloader';
import Hero from '@/components/hero';
import Navigation from '@/components/navigation';
import Destinations from '@/components/destinations';
import WhyChooseUs from '@/components/why-choose-us';
import Services from '@/components/services';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Preloader />
      <Navigation />
      <Hero />
      <Destinations />
      <WhyChooseUs />
      <Services />
      <Footer />
    </>
  );
}

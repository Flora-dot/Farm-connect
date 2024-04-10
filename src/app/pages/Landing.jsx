import { LandingHeader } from '../../components/Header/LandingHeader';
import { Hero } from '../../components/Hero';
import { PopularItems } from '../../components/PopularItems';
import { ProductSection } from '../../components/ProuctDetails';
import { Ratings } from '../../components/Ratings';
import { Agency } from '../../components/Agency';
import { Reviews } from '../../components/Reviews';
import { Footer } from '../../components/Footer';
import { ProductSales } from '../../components/ProductSales';

export default function Landing() {
  return (
    <div>
      <LandingHeader />
      <Hero />
      <Ratings />
      <ProductSection />
      <PopularItems />
      <Agency />
      <Reviews />
      <ProductSales />
      <Footer />
    </div>
  );
}

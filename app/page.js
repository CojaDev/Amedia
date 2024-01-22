import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Scroll from '@/components/SmoothScroll';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full ">
      <Scroll />

      <article className="mx-auto max-w-screen-2xl   ">
        <Navbar />
        <Hero />
      </article>
      <div className="p-5 m-14" />
      <article>
        <WhyUs />
        <Projects />
      </article>
      <article>
        <Services />
      </article>
      <article>
        <Reviews />
        <Contact />
      </article>
      <Footer />
    </main>
  );
}

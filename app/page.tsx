import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Promo from "@/components/Promo";
import WaButton from "@/components/WaButton";
import Layanan from "@/components/Services";
import About from "@/components/About";
import Testimonial from "@/components/Testimonial";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <title>Cetak Cepat | Jasa Printing Profesional</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />

      {/* Google Fonts: Inter */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* Inline CSS */}
      <style>{`
          html {
            scroll-behavior: smooth;
          }
          body {
            font-family: 'Inter', sans-serif;
            background-color: #f9fafb;
            text-color: gray-900;
          }
        `}</style>
      <Header />
      <main>
        <WaButton />
        <Hero />
        <Promo />
        <Layanan />
        <About />
        <Testimonial />
        <Map />
      </main>
      <Footer />
    </>
  );
}

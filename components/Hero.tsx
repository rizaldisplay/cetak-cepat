import React from "react";

const Hero = () => {
  return (
    <div>
      {/* */}
      <section className="relative flex items-center justify-center h-screen overflow-hidden">
        {/* Video Background */}
        <video
          src="/videos/0830.mp4" // Ganti dengan path video Anda
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        ></video>

        {/* Overlay for better text readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-20"></div>

        {/* Hero Content */}
        <div className="relative z-30 container mx-auto px-6 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Solusi Cetak Cepat & Berkualitas
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Dari kartu nama hingga spanduk raksasa, kami siap wujudkan semua
            kebutuhan cetak Anda dengan hasil profesional dan harga terbaik.
          </p>
          <div className="mt-8">
            <a
              href="#layanan"
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Lihat Layanan Kami
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
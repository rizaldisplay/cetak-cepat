import React from "react";

const Hero = () => {
  return (
    <div>
      {/* <!-- Hero Section --> */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Solusi Cetak Cepat & Berkualitas
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
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

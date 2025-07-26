import React from "react";

const Promo = () => {
  return (
    <div>
      {/* <!-- Promo Section --> */}
      <section id="promo" className="py-20 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            🎉 Promo Spesial Untuk Anda! 🎉
          </h2>
          <p className="mt-2 text-gray-600">
            Jangan lewatkan penawaran terbatas kami untuk mendapatkan kualitas
            terbaik dengan harga lebih hemat.
          </p>
          <div className="mt-8 max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 border-4 border-dashed border-yellow-400">
            <h3 className="text-2xl font-bold text-blue-600">
              DISKON 25% CETAK SPANDUK
            </h3>
            <p className="text-gray-600 mt-2">
              Gunakan kode promo{" "}
              <strong className="text-red-500 bg-yellow-200 px-2 py-1 rounded">
                CETAKHEBOH
              </strong>{" "}
              saat pemesanan via WhatsApp.
            </p>
            <p className="text-gray-500 mt-4">
              Berlaku hingga 31 Agustus 2025. Syarat & ketentuan berlaku.
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo%2C%20saya%20mau%20klaim%20promo%20CETAKHEBOH%20untuk%20cetak%20spanduk."
              target="_blank"
              className="mt-6 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-600 transition duration-300"
            >
              Klaim Promo Sekarang!
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promo;

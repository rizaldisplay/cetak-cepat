import React from "react";

function Services() {
  return (
    <div className="bg-gray-50">
      {/* <!-- Services Section --> */}
      <section id="layanan" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Apa yang Bisa Kami Cetak?
            </h2>
            <p className="mt-2 text-gray-600">
              Kami menyediakan berbagai layanan cetak untuk personal dan bisnis.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* <!-- Service Card 1 --> */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition duration-300">
              <div className="text-blue-600 mb-4">
                <i className="fas fa-id-card fa-3x"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-950">Kartu Nama</h3>
              <p className="text-gray-600">
                Cetak kartu nama profesional dengan berbagai pilihan bahan dan
                finishing.
              </p>
            </div>
            {/* <!-- Service Card 2 --> */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition duration-300">
              <div className="text-blue-600 mb-4">
                <i className="fas fa-scroll fa-3x"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-950">Spanduk & Banner</h3>
              <p className="text-gray-600">
                Promosikan bisnismu dengan spanduk dan banner berkualitas
                tinggi.
              </p>
            </div>
            {/* <!-- Service Card 3 --> */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition duration-300">
              <div className="text-blue-600 mb-4">
                <i className="fas fa-tshirt fa-3x"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-950">Kaos & Merchandise</h3>
              <p className="text-gray-600">
                Cetak desain kustom pada kaos, mug, topi, dan merchandise
                lainnya.
              </p>
            </div>
            {/* <!-- Service Card 4 --> */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition duration-300">
              <div className="text-blue-600 mb-4">
                <i className="fas fa-book-open fa-3x"></i>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-950">Brosur & Stiker</h3>
              <p className="text-gray-600">
                Informasikan produk atau acaramu dengan brosur dan stiker
                menarik.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;

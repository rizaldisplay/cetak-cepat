import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <Image src="/images/logo.png" alt="Guntur Digital Print Logo" width={50} height={50} />
          <span>Guntur</span> <span className="text-gray-600 font-normal">Digital Print</span>
        </a>
        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="#promo"
            className="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Promo
          </a>
          <a
            href="#layanan"
            className="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Layanan
          </a>
          <a
            href="#tentang"
            className="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Tentang Kami
          </a>
          <a
            href="#testimoni"
            className="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Testimoni
          </a>
          <a
            href="#lokasi"
            className="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Lokasi
          </a>
          <a
            href="#kontak"
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Hubungi Kami
          </a>
        </div>
        <div className="md:hidden">
          <button
            id="menu-btn"
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            <i className="fas fa-bars fa-lg"></i>
          </button>
        </div>
      </nav>
      {/* <!-- Mobile Menu --> */}
      <div id="mobile-menu" className="hidden md:hidden bg-white">
        <a
          href="#promo"
          className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100"
        >
          Promo
        </a>
        <a
          href="#layanan"
          className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100"
        >
          Layanan
        </a>
        <a
          href="#tentang"
          className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100"
        >
          Tentang Kami
        </a>
        <a
          href="#testimoni"
          className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100"
        >
          Testimoni
        </a>
        <a
          href="#lokasi"
          className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100"
        >
          Lokasi
        </a>
        <a
          href="#kontak"
          className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100"
        >
          Hubungi Kami
        </a>
      </div>
    </header>
  );
};

export default Header;

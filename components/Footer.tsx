import React from "react";

function Footer() {
  return (
    <div>
      {/* <!-- Footer Section --> */}
      <footer id="kontak" className="bg-gray-800 text-white pt-12">
        <div className="container mx-auto px-6 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">CetakCepat</h3>
              <p className="text-gray-400">
                Jalan Raya Langsep No. 2, Malang, Indonesia. 65146
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Tautan Cepat</h3>
              <ul>
                <li>
                  <a href="#promo" className="text-gray-400 hover:text-white">
                    Promo
                  </a>
                </li>
                <li>
                  <a href="#layanan" className="text-gray-400 hover:text-white">
                    Layanan
                  </a>
                </li>
                <li>
                  <a href="#tentang" className="text-gray-400 hover:text-white">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a
                    href="#testimoni"
                    className="text-gray-400 hover:text-white"
                  >
                    Testimoni
                  </a>
                </li>
                <li>
                  <a href="#lokasi" className="text-gray-400 hover:text-white">
                    Lokasi
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Hubungi Kami</h3>
              <p className="text-gray-400">Email: halo@cetakcepat.com</p>
              <p className="text-gray-400">Telepon: (0341) 123-456</p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
            <p>&copy; 2024 CetakCepat. Semua Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

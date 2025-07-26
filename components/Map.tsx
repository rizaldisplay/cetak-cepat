import React from 'react'

function Map() {
  return (
    <div>
      {/* <!-- Location Section --> */}
        <section id="lokasi" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Temukan Lokasi Kami</h2>
                    <p className="mt-2 text-gray-600">Kunjungi workshop kami untuk konsultasi langsung atau pengambilan pesanan.</p>
                </div>
                <div className="rounded-lg shadow-xl overflow-hidden">
                    {/* <!-- Ganti 'src' dengan link embed Google Maps Anda --> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15804.85196377309!2d112.63007309531859!3d-7.977465942202575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6282206173989%3A0x6c6c1382494a4754!2sPercetakan%20di%20Malang!5e0!3m2!1sen!2sid!4v1721958742883!5m2!1sen!2sid"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Map

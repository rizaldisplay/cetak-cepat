import React from 'react'

function Testimonial() {
  return (
    <div className='bg-white'>
      {/* <!-- Testimonials Section --> */}
        <section id="testimoni" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Kata Mereka Tentang Kami</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* <!-- Testimonial 1 --> */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <p className="text-gray-600 italic">&quot;Hasil cetak bannernya bagus banget! Warnanya tajam dan pengerjaannya cepat. Pasti order lagi di sini.&quot;</p>
                        <div className="mt-4">
                            <p className="font-bold text-gray-950">Andi Pratama</p>
                            <p className="text-sm text-gray-500">Pemilik Coffee Shop</p>
                        </div>
                    </div>
                    {/* <!-- Testimonial 2 --> */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <p className="text-gray-600 italic">&quot;Pelayanannya ramah dan sangat membantu. Konsultasi desain gratis, hasilnya juga memuaskan. Recommended!&quot;</p>
                        <div className="mt-4">
                            <p className="font-bold text-gray-950">Citra Lestari</p>
                            <p className="text-sm text-gray-500">Event Organizer</p>
                        </div>
                    </div>
                    {/* <!-- Testimonial 3 --> */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <p className="text-gray-600 italic">&quot;Cetak kartu nama di sini hasilnya mewah. Kertasnya tebal dan potongannya rapi. Bisnis saya jadi kelihatan lebih profesional.&quot;</p>
                        <div className="mt-4">
                            <p className="font-bold text-gray-950">Budi Santoso</p>
                            <p className="text-sm text-gray-500">Financial Consultant</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Testimonial

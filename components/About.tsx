import React from 'react'
import Image from 'next/image';
import image1 from '../public/images/about.svg';

function About() {
  return (
    <div>
      {/* <!-- About Us Section --> */}
        <section id="tentang" className="py-20 bg-white">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <Image src="/images/my_tim.png" alt="Tim CetakCepat" className="rounded-lg shadow-xl w-full" width={600} height={600} />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Kenapa Memilih Kami?</h2>
                    <p className="mt-4 text-gray-600">CetakCepat didirikan dengan satu misi: memberikan layanan cetak yang tidak hanya cepat, tapi juga berkualitas tinggi dan terjangkau. Dengan mesin modern dan tim yang berpengalaman, kami berkomitmen untuk menjadi partner cetak terpercaya bagi Anda.</p>
                    <ul className="mt-6 space-y-4">
                        <li className="flex items-start">
                            <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <span className='text-gray-950'><strong className="font-semibold ">Kualitas Terjamin:</strong> Kami menggunakan bahan dan tinta terbaik untuk hasil cetak yang tajam dan tahan lama.</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <span className='text-gray-950'><strong className="font-semibold ">Harga Kompetitif:</strong> Dapatkan penawaran harga terbaik tanpa mengorbankan kualitas.</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <span className='text-gray-950'><strong className="font-semibold ">Pelayanan Cepat:</strong> Proses produksi yang efisien memastikan pesanan Anda selesai tepat waktu.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About

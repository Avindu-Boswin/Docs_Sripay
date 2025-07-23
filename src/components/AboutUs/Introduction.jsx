import React from 'react'
import { motion } from 'framer-motion';
import aboutImg from '../../assets/images/about-D07q2VMO.webp';

function Introduction() {
  return (
    <section className="w-full py-10 px-0 sm:px-0">
      <motion.div
        className="w-full bg-white/80 rounded-2xl p-0 sm:p-0 flex flex-col md:flex-row items-stretch overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Left Side: Text */}
        <motion.div
          className="flex-1 flex flex-col gap-4 p-6 sm:p-10 justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
       
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
            <span className="font-semibold text-blue-800">SriPay</span> is one of the proud members of <span className="font-semibold">Boswin Group (Pvt) Ltd</span>, a Sri Lankan company chain that expanded throughout the world making China and Sri Lanka the lead operation destinations. SriPay has been in finance technology development and selling business since 2017, working with multiple local and global organizations.
          </p>
          <div className="flex flex-col gap-4 ">
            <div className="bg-gradient-to-tl rounded-[30px] from-[#0a0b28] via-[#0505dc] to-[#0808ff] rounded-xl p-5 shadow">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">Our Authorizations & Partnerships</h3>
              <ul className="list-disc list-inside text-white text-base sm:text-lg">
                <li>Authorized Alipay Acquirer for Sri Lanka from the Alibaba Group, China</li>
                <li>Aggregator for DFCC Bank, Sri Lanka</li>
                <li>Partnered with LOLC Group as transaction partner for multiple countries</li>
              </ul>
            </div>
            <div className="bg-gradient-to-tl rounded-[30px] from-[#0a0b28] via-[#0505dc] to-[#0808ff] rounded-xl p-5 shadow">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">What We Do</h3>
              <ul className="list-disc list-inside text-white text-base sm:text-lg">
                <li>Connect local merchants with foreign customers</li>
                <li>Provide limited banking facilities to non-banking organizations</li>
                <li>Fund transfer services to banks and organizations</li>
                <li>POS machine manufacturing, selling, and renting</li>
                <li>POS software development</li>
                <li>Payment gateway & online payment acceptance solutions</li>
                <li>Co-banking systems & banking software</li>
                <li>ATM & CRM (Cash Recycling Machines) solutions</li>
                <li>Merchant management systems</li>
                <li>GDS (Global Distribution Solutions) solutions</li>
              </ul>
            </div>
          </div>
        </motion.div>
        {/* Right Side: Image */}
        <motion.div
          className="flex-1 min-h-[320px] flex items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          <img src={aboutImg} alt="About SriPay" className="object-cover w-full h-full max-h-[500px] rounded-none md:rounded-r-2xl" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Introduction
import { CheckCircle2, Factory, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, services } from '../data';
import { motion } from 'motion/react';
import { Certifications, TradeTerms } from '../components/TrustSection';

export default function Home() {
  return (
    <div className="px-4 sm:px-10 py-10 max-w-7xl mx-auto w-full">
      {/* Main Layout Grid from Clean Minimalism (1.2fr 1fr) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-x-10 gap-y-16">
        
        {/* Left Column (Hero & Products) */}
        <div className="flex flex-col justify-center">
          <span className="text-accent font-[700] text-[12px] uppercase mb-[12px] tracking-wide">Global Logistics & Trade Partners</span>
          <h1 className="text-[48px] text-primary font-[800] leading-[1.1] mb-5 tracking-tight">
            Premium Quality <br />Import & Export
          </h1>
          <p className="text-text-light text-[16px] leading-[1.6] mb-8 max-w-xl">
            DY International is a leading name in global trade, specializing in the distribution of high-grade agro-fertilizers and industrial chemicals. We bridge the gap between global manufacturers and local markets with integrity and efficiency.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
            {products.slice(0, 4).map((product, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                key={product.id} 
                className="bg-white p-[20px] rounded-[8px] border border-border-light shadow-none flex flex-col group"
              >
                <div className="h-32 overflow-hidden relative rounded-[4px] mb-4 border border-border-light">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <span className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-[700] uppercase text-accent border border-border-light rounded-[4px] z-20 shadow-sm">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-[16px] font-[700] text-primary mb-[8px]">{product.name}</h3>
                <p className="text-[13px] text-text-light leading-[1.5] line-clamp-2 flex-grow">{product.description}</p>
                
                {/* COA badge temporarily hidden — re-enable when product-wise certificates are ready
                {product.coaAvailable && (
                  <div className="flex items-center text-[11px] text-green-600 font-[600] mt-3 mb-3">
                    <FileCheck className="w-3.5 h-3.5 mr-1" /> COA Certified
                  </div>
                )}
                */}
                
                <div className="flex gap-2.5 mt-auto">
                    <Link to="/products" className="text-accent text-[12px] font-[700] uppercase tracking-wide inline-block hover:underline">
                      View details &rarr;
                    </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column (Sidebar: Form) */}
        <div className="flex flex-col gap-[20px]">
          <div className="bg-primary p-[30px] rounded-[12px] text-white">
            <h2 className="text-[20px] font-[700] mb-[15px] tracking-wide">Quick Inquiry Form</h2>
            <div className="mb-[12px]">
              <input type="text" placeholder="Full Name" className="w-full p-[10px] rounded-[4px] border-none text-[14px] text-text-main bg-white" />
            </div>
            <div className="mb-[12px]">
              <select className="w-full p-[10px] rounded-[4px] border-none text-[14px] text-text-main bg-white">
                <option>Select Product Category</option>
                <option>Agro Fertilizers</option>
                <option>Industrial Chemicals</option>
                <option>Agro Products</option>
              </select>
            </div>
            <div className="mb-[12px]">
              <textarea rows={3} placeholder="Requirements detail..." className="w-full p-[10px] rounded-[4px] border-none text-[14px] text-text-main bg-white resize-none"></textarea>
            </div>
            <button className="bg-accent text-white border-none p-[12px] w-full rounded-[4px] font-[700] cursor-pointer mt-1 hover:opacity-90 transition-opacity uppercase text-[14px]">REQUEST QUOTATION</button>
          </div>
        </div>
      </div>
      
      <div className="h-px bg-border-light w-full my-12"></div>

      {/* Legacy Components Retained & Reskinned Below Grid */}
      <h2 className="text-[28px] font-[800] text-primary mb-6">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px] mb-12">
          {services.map((service) => (
            <div key={service.id} className="p-[20px] bg-white rounded-[8px] border border-border-light shadow-none">
              <h3 className="text-[16px] font-[700] text-primary mb-2">{service.title}</h3>
              <p className="text-[13px] text-text-light leading-[1.6]">{service.description}</p>
            </div>
          ))}
      </div>

      <div className="mb-12">
        <Certifications />
      </div>

      <div className="mb-4">
        <TradeTerms />
      </div>
    </div>
  );
}

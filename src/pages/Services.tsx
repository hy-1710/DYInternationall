import { CheckCircle2, Ship, FileCheck, Warehouse, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { services } from '../data';
import { Link } from 'react-router-dom';

const iconMap: Record<string, any> = {
  Globe: Globe,
  Ship: Ship,
  FileCheck: FileCheck,
  Warehouse: Warehouse,
};

export default function Services() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-10 w-full mb-16">
      <div className="mb-12 border-b border-border-light pb-8">
        <span className="text-accent font-[700] text-[12px] uppercase mb-[12px] tracking-wide block">Our Capabilities</span>
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[40px] font-[800] text-primary mb-4 leading-tight tracking-tight"
        >
          Our Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-[16px] text-text-light leading-[1.6] max-w-2xl"
        >
          End-to-end import and export solutions tailored to simplify your global trade operations. We handle the complexity so you can focus on growth.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px]">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] || Ship;
          return (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={service.id} 
              className="flex flex-col sm:flex-row gap-[20px] p-[25px] bg-white rounded-[8px] border border-border-light shadow-none"
            >
              <div className="shrink-0">
                <div className="w-12 h-12 bg-bg-light border border-border-light text-accent rounded-[6px] flex items-center justify-center shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-[18px] font-[800] text-primary mb-[10px]">{service.title}</h3>
                <p className="text-[14px] text-text-light leading-[1.6] mb-[20px]">
                  {service.description}
                </p>
                <ul className="space-y-[8px] mb-[20px]">
                  <li className="flex items-center text-[13px] text-text-main">
                    <CheckCircle2 className="w-[14px] h-[14px] text-accent mr-2" /> Dedicated account management
                  </li>
                  <li className="flex items-center text-[13px] text-text-main">
                    <CheckCircle2 className="w-[14px] h-[14px] text-accent mr-2" /> Global compliance assured
                  </li>
                  <li className="flex items-center text-[13px] text-text-main">
                    <CheckCircle2 className="w-[14px] h-[14px] text-accent mr-2" /> Transparent reporting
                  </li>
                </ul>
                <Link to="/contact" className="text-accent text-[12px] font-[700] uppercase tracking-wide inline-block hover:underline">
                  Inquire details &rarr;
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <div className="mt-[40px] bg-bg-light p-[30px] rounded-[8px] border border-border-light text-center">
         <h2 className="text-[20px] font-[800] text-primary mb-3">Looking for a specific solution?</h2>
         <p className="text-[14px] text-text-light mb-6 max-w-xl mx-auto">If you have customized logistics or sourcing requirements, our team of experts is ready to craft a tailor-made strategy for your business.</p>
         <Link to="/contact" className="bg-accent hover:opacity-90 text-white px-6 py-3.5 rounded-[4px] font-[700] uppercase tracking-wide text-[14px] transition-colors inline-block">
           Contact Our Experts
         </Link>
      </div>
    </div>
  );
}

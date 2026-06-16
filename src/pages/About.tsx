import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-10 w-full mb-16">
      <div className="mb-12">
        <span className="text-accent font-[700] text-[12px] uppercase mb-[12px] tracking-wide block">Our Legacy</span>
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[40px] font-[800] text-primary mb-4 leading-tight tracking-tight"
        >
          About DY International
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-[16px] text-text-light leading-[1.6] max-w-3xl"
        >
          A legacy of trust, quality, and global reach. We are committed to empowering businesses through seamless import and export solutions.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-10">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[15px] text-text-main leading-[1.7] space-y-5"
        >
          <h2 className="text-[24px] font-[800] text-primary mb-6">Connecting Global Markets</h2>
          <p>
            Founded with a vision to connect local excellence with global markets, DY International has grown into a leading name in the import-export industry. Our expertise spans across diverse sectors, including high-grade agro fertilizers, industrial chemicals, and premium agricultural products.
          </p>
          <p>
            We understand that global trade is more than just moving goods; it's about building enduring partnerships. Over the years, we have cultivated a robust network of trusted manufacturers, reliable shipping partners, and dedicated customs professionals.
          </p>
          <p>
            Today, DY International stands as a symbol of reliability and efficiency. Whether you are sourcing essential chemicals for manufacturing or exporting the finest organic wheat, we provide end-to-end solutions tailored to your unique requirements.
          </p>

          <h2 className="text-[20px] font-[700] text-primary mt-10 mb-4">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
              <div className="p-[20px] bg-white border border-border-light justify-center rounded-[8px]">
                  <h3 className="font-[700] text-primary mb-1">Integrity</h3>
                  <p className="text-[13px] text-text-light">Transparent, honest operations in every transaction.</p>
              </div>
              <div className="p-[20px] bg-white border border-border-light justify-center rounded-[8px]">
                  <h3 className="font-[700] text-primary mb-1">Quality</h3>
                  <p className="text-[13px] text-text-light">Rigorous checks ensure the best products reach you.</p>
              </div>
              <div className="p-[20px] bg-white border border-border-light justify-center rounded-[8px]">
                  <h3 className="font-[700] text-primary mb-1">Efficiency</h3>
                  <p className="text-[13px] text-text-light">Streamlined logistics to deliver on time, every time.</p>
              </div>
              <div className="p-[20px] bg-white border border-border-light justify-center rounded-[8px]">
                  <h3 className="font-[700] text-primary mb-1">Partnership</h3>
                  <p className="text-[13px] text-text-light">Your success is our success. We build long-term bonds.</p>
              </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="hidden md:flex flex-col gap-[20px]"
        >
          <div className="bg-primary p-[30px] rounded-[12px] text-white">
            <div className="text-[48px] font-[800] leading-none mb-2">5+</div>
            <div className="text-accent font-[700] uppercase text-[12px] tracking-wide mb-4">Years Experience</div>
            <p className="text-[13px] text-white/80">Delivering exceptional supply chain management and international sourcing expertise since our inception.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

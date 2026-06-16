import { useState } from 'react';
import { products } from '../data';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Products() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...new Set(products.map(p => p.category))];
  
  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-10 w-full mb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-border-light pb-8">
        <div className="max-w-xl">
          <span className="text-accent font-[700] text-[12px] uppercase mb-[12px] tracking-wide block">Our Inventory</span>
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[40px] font-[800] text-primary mb-4 leading-tight tracking-tight"
          >
            Products Directory
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-[16px] text-text-light leading-[1.6]"
          >
            Comprehensive range of high-quality agro fertilizers, industrial chemicals, and premium agricultural produce ready for global export.
          </motion.p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-[4px] text-[13px] font-[700] uppercase tracking-wide transition-colors border ${
                filter === category 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-white text-text-main hover:bg-bg-light border-border-light'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[15px]">
        {filteredProducts.map((product, index) => (
          <motion.div 
            layout
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            key={product.id} 
            className="bg-white p-[20px] rounded-[8px] border border-border-light shadow-none flex flex-col group"
          >
            <div className="h-48 overflow-hidden relative rounded-[4px] mb-4 border border-border-light">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] font-[700] uppercase text-accent border border-border-light rounded-[4px] z-20 shadow-sm">
                {product.category}
              </span>
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-[16px] font-[700] text-primary mb-[6px]">{product.name}</h3>
              <p className="text-[13px] text-text-light mb-4 flex-grow leading-[1.6]">{product.description}</p>

              {(product as any).moq && (
                <div className="border-t border-border-light pt-3 mb-4 space-y-1.5">
                  <div className="flex justify-between text-[12px]">
                    <span className="text-text-main font-[600]">{(product as any).specLabel}</span>
                    <span className="text-text-light">{(product as any).specValue}</span>
                  </div>
                  <div className="flex justify-between text-[12px]">
                    <span className="text-text-main font-[600]">Packaging</span>
                    <span className="text-text-light">{(product as any).packaging}</span>
                  </div>
                  <div className="flex justify-between text-[12px]">
                    <span className="text-text-main font-[600]">MOQ</span>
                    <span className="text-text-light">{(product as any).moq}</span>
                  </div>
                  <div className="flex justify-between text-[12px]">
                    <span className="text-text-main font-[600]">HS Code</span>
                    <span className="text-text-light">{(product as any).hsCode}</span>
                  </div>
                </div>
              )}
              
              {/* COA badge & download temporarily hidden — re-enable per-product when certificates are ready
              {product.coaAvailable && (
                <div className="flex items-center text-[12px] text-green-600 font-[600] mb-4 bg-green-50 px-2 py-1.5 rounded-[4px] border border-green-100 w-fit">
                  <FileCheck className="w-3.5 h-3.5 mr-1.5" /> Certified COA Available
                </div>
              )}
              */}
              
              <div className="flex gap-2 mt-auto">
                <Link to="/contact" className="flex-1 flex justify-center items-center bg-bg-light border-border-light border hover:bg-accent hover:text-white hover:border-accent text-primary font-[700] py-2 rounded-[4px] transition-colors uppercase text-[11px] tracking-wide">
                  Inquire
                </Link>
                {/* COA download button temporarily hidden
                {product.coaAvailable && (
                  <button onClick={() => alert(`Downloading Certificate of Analysis for ${product.name}...`)} className="flex-1 flex justify-center items-center bg-white border-border-light border hover:bg-bg-light text-text-main font-[700] py-2 rounded-[4px] transition-colors uppercase text-[11px] tracking-wide">
                    <Download className="w-3.5 h-3.5 mr-1.5" /> COA
                  </button>
                )}
                */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-text-light">
          No products found matching the selected category.
        </div>
      )}
    </div>
  );
}

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, MapPin, Phone, Send, Shield, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data';

const schema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  phone: z.string().min(8, { message: 'Please enter a valid phone number.' }),
  productOfInterest: z.string().min(1, { message: 'Please select a product category.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log('Form data:', data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const categories = ['Agro Fertilizers', 'Industrial Chemicals', 'Agro Products', 'General Inquiry', 'Partnership'];

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-10 w-full mb-16">
      <div className="mb-12 border-b border-border-light pb-8">
        <span className="text-accent font-[700] text-[12px] uppercase mb-[12px] tracking-wide block">Reach Out</span>
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[40px] font-[800] text-primary mb-4 leading-tight tracking-tight"
        >
          Get in Touch
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-[16px] text-text-light leading-[1.6] max-w-2xl"
        >
          Looking to import or export? Reach out to us for detailed product specifications, quotes, and partnership opportunities.
        </motion.p>
      </div>

      {/* Grid roughly corresponding to sidebar-like layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10">
        
        {/* Secure Inquiry Form Side - Styled as the primary card block */}
        <div className="bg-primary p-[30px] rounded-[12px] text-white">
          <h2 className="text-[20px] font-[700] mb-[20px]">Quick Inquiry Form</h2>
          
          {isSubmitted ? (
             <motion.div 
               initial={{ opacity: 0, scale: 0.98 }}
               animate={{ opacity: 1, scale: 1 }}
               className="bg-white/10 border border-white/20 rounded-[8px] p-[30px] flex flex-col items-center text-center h-full justify-center min-h-[300px]"
             >
               <div className="w-12 h-12 bg-accent/20 text-white rounded-full flex items-center justify-center mb-4">
                 <Send className="w-6 h-6" />
               </div>
               <h3 className="text-[20px] font-[700] mb-2">Message Sent!</h3>
               <p className="text-[14px] text-white/80">Thank you for contacting DY International. Our team will get back to you shortly.</p>
             </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-[12px]">
                <label htmlFor="name" className="block text-[13px] font-[600] text-white/90 mb-[4px]">Full Name</label>
                <input
                  id="name"
                  {...register('name')}
                  className="w-full p-[10px] rounded-[4px] border-none text-[14px] text-text-main bg-white outline-none focus:ring-2 focus:ring-accent"
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-[12px] text-red-300">{errors.name.message}</p>}
              </div>

              <div className="mb-[12px]">
                <label htmlFor="email" className="block text-[13px] font-[600] text-white/90 mb-[4px]">Email Address</label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="w-full p-[10px] rounded-[4px] border-none text-[14px] text-text-main bg-white outline-none focus:ring-2 focus:ring-accent"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1 text-[12px] text-red-300">{errors.email.message}</p>}
              </div>

              <div className="mb-[12px]">
                <label htmlFor="phone" className="block text-[13px] font-[600] text-white/90 mb-[4px]">Phone Number</label>
                <input
                  id="phone"
                  {...register('phone')}
                  className="w-full p-[10px] rounded-[4px] border-none text-[14px] text-text-main bg-white outline-none focus:ring-2 focus:ring-accent"
                  placeholder="+1 (555) 000-0000"
                />
                {errors.phone && <p className="mt-1 text-[12px] text-red-300">{errors.phone.message}</p>}
              </div>

              <div className="mb-[12px]">
                <label htmlFor="productOfInterest" className="block text-[13px] font-[600] text-white/90 mb-[4px]">Product Category</label>
                <select
                  id="productOfInterest"
                  {...register('productOfInterest')}
                  className="w-full p-[10px] rounded-[4px] border-none text-[14px] text-text-main bg-white outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select Category...</option>
                  {categories.map((cat, idx) => (
                    <option key={idx} value={cat}>{cat}</option>
                  ))}
                </select>
                {errors.productOfInterest && <p className="mt-1 text-[12px] text-red-300">{errors.productOfInterest.message}</p>}
              </div>

              <div className="mb-[15px]">
                <label htmlFor="message" className="block text-[13px] font-[600] text-white/90 mb-[4px]">Requirements detail</label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message')}
                  className="w-full p-[10px] rounded-[4px] border-none text-[14px] text-text-main bg-white resize-none outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Please provide details about your inquiry..."
                />
                {errors.message && <p className="mt-1 text-[12px] text-red-300">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-accent text-white border-none py-[12px] w-full rounded-[4px] font-[700] cursor-pointer uppercase tracking-[0.5px] text-[14px] transition-colors ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                }`}
              >
                {isSubmitting ? 'SENDING...' : 'REQUEST QUOTATION'}
              </button>
              
              <div className="mt-[15px] pt-[15px] border-t border-white/20 text-center">
                <p className="text-[11px] text-white/60 flex justify-center items-center">
                  <Shield className="w-3 h-3 mr-1" /> Secure encrypted connection
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Contact Information Side */}
        <div className="flex flex-col gap-[20px]">
          
          <div className="bg-white border border-border-light rounded-[12px] p-[30px]">
            <h2 className="text-[20px] font-[800] text-primary mb-[20px]">Contact Information</h2>
            
            <div className="space-y-[20px]">
              <div className="flex items-start">
                <MapPin className="w-[18px] h-[18px] mr-[12px] text-accent shrink-0 mt-[2px]" />
                <div>
                  <h3 className="font-[700] text-[14px] text-primary mb-[4px]">Headquarters</h3>
                  <p className="text-text-light text-[13px] leading-[1.5]">
                    Ahmedabad, Gujarat<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-[18px] h-[18px] mr-[12px] text-accent shrink-0 mt-[2px]" />
                <div>
                  <h3 className="font-[700] text-[14px] text-primary mb-[4px]">Phone Support</h3>
                  <p className="text-text-light text-[13px] leading-[1.5]">+91 9510391451</p>
                  <p className="text-text-light text-[13px] leading-[1.5]">+91 9714197323</p>
                  <p className="text-text-light text-[11px] mt-[2px]">Mon-Fri, 9am - 6pm (IST)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-[18px] h-[18px] mr-[12px] text-accent shrink-0 mt-[2px]" />
                <div>
                  <h3 className="font-[700] text-[14px] text-primary mb-[4px]">Email Address</h3>
                  <p className="text-text-light text-[13px] leading-[1.5]">dyinternational27@gmail.com</p>
                   <p className="text-text-light text-[13px] leading-[1.5]">info@dyinternationalgroup.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MessageCircle className="w-[18px] h-[18px] mr-[12px] text-accent shrink-0 mt-[2px]" />
                <div>
                  <h3 className="font-[700] text-[14px] text-primary mb-[4px]">WhatsApp</h3>
                  <a href="https://wa.me/919510391451" target="_blank" rel="noopener noreferrer" className="text-accent text-[13px] font-[600] hover:underline">Chat with us &rarr;</a>
                </div>
              </div>
            </div>
            
            <div className="mt-[30px] pt-[20px] border-t border-border-light">
               <p className="text-text-light text-[12px]">We typically respond within 24 business hours.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

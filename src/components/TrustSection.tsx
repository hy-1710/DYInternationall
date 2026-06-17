import { ComponentType } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, FileBadge, ScrollText, Globe2, Award, Anchor, FileText, CreditCard, Clock } from 'lucide-react';
import { certifications, tradeTerms } from '../data';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  ShieldCheck, FileBadge, ScrollText, Globe2, Award,
};

export function Certifications() {
  return (
    <section className="w-full">
      <div className="text-center mb-8">
        <span className="text-accent font-[700] text-[12px] uppercase tracking-wide block mb-[12px]">Compliance & Trust</span>
        <h2 className="text-[28px] font-[800] text-primary leading-tight">Certified &amp; Registered</h2>
        <p className="text-[14px] text-text-light mt-2 max-w-xl mx-auto">
          Fully documented and compliant for hassle-free international trade.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-[15px]">
        {certifications.map((c, i) => {
          const Icon = iconMap[c.icon] ?? ShieldCheck;
          return (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-white border border-border-light rounded-[8px] p-[20px] text-center hover:border-accent transition-colors"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-[8px] bg-accent/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <div className="font-[800] text-[14px] text-primary">{c.title}</div>
              <div className="text-[11px] text-text-light mt-1">{c.subtitle}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export function TradeTerms() {
  const items = [
    { icon: Anchor, label: 'Loading Ports', value: tradeTerms.ports },
    { icon: FileText, label: 'Incoterms', value: tradeTerms.incoterms },
    { icon: CreditCard, label: 'Payment Terms', value: tradeTerms.payment },
    { icon: Clock, label: 'Lead Time', value: tradeTerms.leadTime },
  ];
  return (
    <section className="w-full bg-primary rounded-[12px] p-[30px] sm:p-[40px] text-white">
      <h2 className="text-[24px] font-[800] mb-[6px]">Global Trade Terms</h2>
      <p className="text-[14px] text-white/70 mb-[24px]">Transparent terms that make international sourcing simple.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
        {items.map((it, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-[8px] bg-white/10 flex items-center justify-center shrink-0">
              <it.icon className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wide text-accent font-[700]">{it.label}</div>
              <div className="text-[14px] font-[600] leading-[1.4] mt-1">{it.value}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

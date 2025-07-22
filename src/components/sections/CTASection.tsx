'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Calendar, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10 animate-float" />
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-white/10 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white/5 animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm"
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Ready to Get Started?</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold"
            >
              Let&apos;s Build Something
              <br />
              <span className="text-white/90">Amazing Together</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              Ready to transform your ideas into reality? Let&apos;s discuss your project 
              and see how I can help you achieve your digital goals. I&apos;m excited to 
              work with you and create something extraordinary.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
            >
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Call
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-white/20"
            >
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">48h</div>
                <div className="text-white/80 text-sm">Response Time</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-white/80 text-sm">Client Satisfaction</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">5+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-white/80 text-sm">Projects Delivered</div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <p className="text-white/80 text-sm mb-2">
                Or reach out directly
              </p>
              <a 
                href="mailto:hello@example.com" 
                className="text-white font-medium hover:text-white/80 transition-colors"
              >
                hello@example.com
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

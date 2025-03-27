import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { RevealOnScroll } from '../RevealOnScroll'
import { Mail, Send, AlertCircle } from 'lucide-react'

const MAX_EMAILS = 5

export function Contact() {
    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)

    const getEmailsSentCount = () => {
        return Number(localStorage.getItem('emailsSentCount')) || 0
    }

    const incrementEmailsSentCount = () => {
        const currentCount = getEmailsSentCount()
        localStorage.setItem('emailsSentCount', currentCount + 1)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        if (getEmailsSentCount() >= MAX_EMAILS) {
            setShowError(true)
            setTimeout(() => setShowError(false), 3000)
            setIsSubmitting(false)
            return
        }

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            setShowSuccess(true)
            setFormData({ from_name: '', reply_to: '', message: '' })
            incrementEmailsSentCount()
            setTimeout(() => setShowSuccess(false), 3000)
        } catch (error) {
            console.error('Error sending email:', error)
            setShowError(true)
            setTimeout(() => setShowError(false), 3000)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-black text-white">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-6 md:px-10">
                    <motion.h2
                        className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Get In Touch
                    </motion.h2>
                    <motion.div
                        className="p-8 rounded-xl border border-gray-700/50 hover:shadow-2xl transition-all bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <motion.input
                                    type="text"
                                    name="from_name"
                                    required
                                    value={formData.from_name}
                                    onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                                    className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 transition-all"
                                    placeholder="Your Name..."
                                    whileHover={{ scale: 1.02 }}
                                    whileFocus={{ scale: 1.02 }}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <motion.input
                                    type="email"
                                    name="reply_to"
                                    required
                                    value={formData.reply_to}
                                    onChange={(e) => setFormData({ ...formData, reply_to: e.target.value })}
                                    className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 transition-all"
                                    placeholder="Your Email..."
                                    whileHover={{ scale: 1.02 }}
                                    whileFocus={{ scale: 1.02 }}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <motion.textarea
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 transition-all resize-none"
                                    placeholder="Your Message..."
                                    whileHover={{ scale: 1.02 }}
                                    whileFocus={{ scale: 1.02 }}
                                />
                            </motion.div>

                            <div className="flex items-center justify-between">
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white py-3 px-8 rounded-lg font-medium hover:shadow-xl transition-all duration-300 flex items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="animate-spin">⚡</span>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                            <span className="transform group-hover:translate-x-1 transition-transform">
                                                →
                                            </span>
                                        </>
                                    )}
                                </motion.button>
                                <motion.div
                                    className="flex items-center gap-2 text-sm text-gray-400"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    <Mail className="w-4 h-4" />
                                    <span>
                                        Emails sent: {getEmailsSentCount()}/{MAX_EMAILS}
                                    </span>
                                </motion.div>
                            </div>
                        </form>
                    </motion.div>

                    <AnimatePresence>
                        {showSuccess && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
                            >
                                <span>Message sent successfully!</span>
                            </motion.div>
                        )}
                        {showError && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="fixed bottom-8 right-8 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
                            >
                                <AlertCircle className="w-5 h-5" />
                                <span>Something went wrong. Please try again.</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </RevealOnScroll>
        </section>
    )
}

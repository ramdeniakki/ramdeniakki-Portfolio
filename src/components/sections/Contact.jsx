import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Mail, Send, Loader2, CheckCircle2, XCircle } from 'lucide-react'

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)
    const [emailCount, setEmailCount] = useState(0)
    const maxEmails = 5

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            setShowSuccess(true)
            e.target.reset()
            setEmailCount(0)
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
        <section id="contact" className="min-h-screen py-20 bg-black text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5,#7c3aed,#ec4899)] opacity-10"></div>
            </div>

            {/* Animated Orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        delay: 2,
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Get In Touch
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Have a question or want to work together? Let's connect!
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="from_name" className="block text-sm font-medium text-gray-300">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="from_name"
                                        name="from_name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="reply_to" className="block text-sm font-medium text-gray-300">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="reply_to"
                                        name="reply_to"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <Mail className="w-4 h-4" />
                                    <span>
                                        Emails sent: {emailCount}/{maxEmails}
                                    </span>
                                </div>
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting || emailCount >= maxEmails}
                                    className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Toast Notifications */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-8 right-8 bg-green-500/90 backdrop-blur-sm text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg"
                    >
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Message sent successfully!</span>
                    </motion.div>
                )}
                {showError && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-8 right-8 bg-red-500/90 backdrop-blur-sm text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg"
                    >
                        <XCircle className="w-5 h-5" />
                        <span>Failed to send message. Please try again.</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

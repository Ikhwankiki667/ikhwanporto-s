"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Anti-spam features
  const [countdown, setCountdown] = useState(3);
  const [captchaQuestion, setCaptchaQuestion] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState(0);
  const [userCaptchaAnswer, setUserCaptchaAnswer] = useState("");

  // Generate random math captcha
  useEffect(() => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion(`${num1} + ${num2}`);
    setCaptchaAnswer(num1 + num2);
  }, []);

  // Countdown timer
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Check honeypot field
    const formData = new FormData(formRef.current!);
    const honeypot = formData.get("website");
    if (honeypot) {
      // Bot detected, silently fail
      setIsSubmitting(false);
      return;
    }

    // Check captcha
    if (parseInt(userCaptchaAnswer) !== captchaAnswer) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
      return;
    }

    try {
      // EmailJS configuration
      await emailjs.sendForm(
        "service_fhsoxcj",        // Service ID
        "template_glxzpxu",       // Template ID
        formRef.current!,
        "A31xD2GSSVE1xqauI"       // Public Key
      );

      setSubmitStatus("success");
      formRef.current?.reset();
      setUserCaptchaAnswer("");

      // Reset countdown and generate new captcha
      setCountdown(3);
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      setCaptchaQuestion(`${num1} + ${num2}`);
      setCaptchaAnswer(num1 + num2);

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
      ),
      title: "Email",
      value: "ikhwankiki667@gmail.com",
      link: "mailto:ikhwankiki667@gmail.com",
    },
    {
      icon: (
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      ),
      title: "LinkedIn",
      value: "Muhammad Ikhwan Fitoriqillah",
      link: "https://www.linkedin.com/in/muhammad-ikhwan-fitoriqillah/",
    },
    {
      icon: (
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      ),
      title: "GitHub",
      value: "Ikhwankiki667",
      link: "https://github.com/Ikhwankiki667",
    },
  ];

  return (
    <section className="py-20 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Punya project menarik atau ingin berkolaborasi? Jangan ragu untuk menghubungi aku
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              {/* GIF Animation */}
              <div className="flex justify-center mb-8">
                <img
                  src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ODN0cHQ5ZWIydGJxcGJ5Z2cwNmN1eTF5YzE5OGNmejR1MWwzNmNqaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/91BCkba1STSmzb4UWK/giphy.gif"
                  alt="Smiling cat animation"
                  className="max-w-full h-auto rounded-lg"
                />
              </div>

              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-secondary rounded-lg border-2 border-blue-500/20 hover:border-blue-500/60 transition-all group"
                  >
                    <div className="bg-accent/20 p-3 rounded-lg group-hover:bg-accent/30 transition">
                      <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        {info.icon}
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-gray-400 text-sm">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form with EmailJS */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot Field (hidden from users, bots will fill it) */}
                <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    required
                    className="w-full px-4 py-3 bg-secondary border-2 border-gray-700 rounded-lg focus:border-accent focus:outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    required
                    className="w-full px-4 py-3 bg-secondary border-2 border-gray-700 rounded-lg focus:border-accent focus:outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-secondary border-2 border-gray-700 rounded-lg focus:border-accent focus:outline-none transition"
                    placeholder="+62 812 3456 7890"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary border-2 border-gray-700 rounded-lg focus:border-accent focus:outline-none transition resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Math Captcha */}
                <div className="bg-primary p-4 rounded-lg border-2 border-accent/30">
                  <label htmlFor="captcha" className="block text-sm mb-2">
                    Coba hitung dulu yuk: <span className="text-accent font-bold">{captchaQuestion}</span> = ?
                  </label>
                  <input
                    type="number"
                    id="captcha"
                    name="captcha"
                    value={userCaptchaAnswer}
                    onChange={(e) => setUserCaptchaAnswer(e.target.value)}
                    placeholder="Jawaban"
                    required
                    className="w-full px-4 py-3 bg-secondary border-2 border-gray-700 rounded-lg focus:border-accent focus:outline-none transition"
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="bg-green-500/20 border border-green-500 text-green-500 px-4 py-3 rounded-lg">
                    ✓ Pesan berhasil dikirim. Terima kasih sudah menghubungi.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="bg-red-500/20 border border-red-500 text-red-500 px-4 py-3 rounded-lg">
                    ✗ Gagal mengirim pesan. Pastikan captcha benar atau coba lagi nanti.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || countdown > 0}
                  className="w-full bg-accent text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {countdown > 0 ? `Tunggu ${countdown} detik...` : isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

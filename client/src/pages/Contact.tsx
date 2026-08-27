/** Ganesh Chitra Shaala — Contact page with real studio information. */
import { useState } from "react";
import { ArrowRight, Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="page-shell info-page info-page--contact">

      {/* ── Hero ── */}
      <section className="info-page__hero">
        <div>
          <p className="page-hero__eyebrow">Reach the studio</p>
          <h1>Get in <em>touch.</em></h1>
          <p>We'd love to hear from you. Whether it's an order, a custom request, or just a question — write to us or visit the studio.</p>
        </div>
        <img src={siteConfig.images.craft} alt="Artisan crafting a Ganesh idol at Ganesh Chitra Shaala" />
      </section>

      {/* ── Contact details + form ── */}
      <section className="contact-section">

        {/* Left — details */}
        <div className="contact-details">
          <p className="section-label"><span>Studio</span>Ganesh Chitra Shaala</p>
          <h2>Find us,<br />visit <em>anytime.</em></h2>

          <ul className="contact-list">
            <li>
              <MapPin size={18} strokeWidth={1.6} />
              <div>
                <strong>Address</strong>
                <span>{siteConfig.contact.address}</span>
              </div>
            </li>
            <li>
              <Phone size={18} strokeWidth={1.6} />
              <div>
                <strong>Phone / WhatsApp</strong>
                <a href={`tel:${siteConfig.contact.whatsapp}`}>{siteConfig.contact.phone}</a>
              </div>
            </li>
            <li>
              <Mail size={18} strokeWidth={1.6} />
              <div>
                <strong>Email</strong>
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </div>
            </li>
            <li>
              <Clock size={18} strokeWidth={1.6} />
              <div>
                <strong>Studio Hours</strong>
                <span>{siteConfig.contact.hours}</span>
              </div>
            </li>
          </ul>

          {/* Google Maps embed — Bhayandar East */}
          <div className="contact-map">
            <iframe
              title="Ganesh Chitra Shaala Location"
              src="https://maps.google.com/maps?q=Navghar+Goan+Bhayandar+East+Mumbai&output=embed"
              width="100%"
              height="220"
              style={{ border: 0, borderRadius: "4px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Right — inquiry form */}
        <form
          className="inquiry-form"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          {sent ? (
            <div className="contact-success">
              <Check size={32} />
              <h3>Message sent.</h3>
              <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className="form-header">
                <p>Send us a message</p>
              </div>
              <label>
                Your name *
                <input required placeholder="Full name" />
              </label>
              <label>
                Email *
                <input required type="email" placeholder="your@email.com" />
              </label>
              <label>
                Phone
                <input type="tel" placeholder="+91 XXXXX XXXXX" />
              </label>
              <label>
                Message *
                <textarea required placeholder="Tell us about your requirement — size, occasion, custom details…" rows={5} />
              </label>
              <button type="submit" className="btn btn--dark">
                Send message <ArrowRight size={16} />
              </button>
            </>
          )}
        </form>
      </section>

    </main>
  );
}

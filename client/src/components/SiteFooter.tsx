/** The Atelier Procession: a quiet dark studio close that keeps editable support information centrally referenced. */
import { ArrowUpRight, Instagram } from "lucide-react";
import { Link } from "wouter";
import { Brand, GestureDivider } from "@/components/Brand";
import { siteConfig } from "@/lib/data";

export default function SiteFooter() {
  return <footer className="site-footer"><GestureDivider light /><div className="site-footer__top"><div><Brand inverted /><p>{siteConfig.tagline}</p><span className="demo-chip">Demo contact details</span></div><div className="footer-links"><div><p>Explore</p><Link href="/idols">Shop idols</Link><Link href="/custom">Custom idols</Link><Link href="/craft">Our craft</Link><Link href="/about">About the studio</Link></div><div><p>Connect</p><a href="#contact">{siteConfig.contact.phone}</a><a href="#contact">{siteConfig.contact.email}</a><a href={siteConfig.contact.instagram}><Instagram size={14}/> Instagram <ArrowUpRight size={13}/></a></div></div></div><div className="site-footer__bottom"><span>© {new Date().getFullYear()} {siteConfig.brand}</span><span>Frontend concept · Information marked as demo must be replaced before launch.</span></div></footer>;
}

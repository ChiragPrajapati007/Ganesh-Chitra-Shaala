/** The Atelier Procession: a compact transparent-to-paper navigation with intentional movement and clear shopping actions. */
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { Brand } from "@/components/Brand";
import { useStore } from "@/contexts/StoreContext";

const links = [
  ["Idols", "/idols"],
  ["Collections", "/idols"],
  ["Custom", "/custom"],
  ["Our Craft", "/craft"],
  ["About", "/about"],
] as const;

export default function SiteHeader({ onSearch }: { onSearch: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const { cartCount, wishlist, setCartOpen } = useStore();

  useEffect(() => {
    const watchScroll = () => setScrolled(window.scrollY > 36);
    watchScroll(); window.addEventListener("scroll", watchScroll, { passive: true });
    return () => window.removeEventListener("scroll", watchScroll);
  }, []);

  const darkHero = location === "/" && !scrolled;
  return (
    <header className={`site-header ${darkHero ? "site-header--over-hero" : "site-header--solid"}`}>
      <div className="site-header__inner">
        <Brand inverted={darkHero} />
        <nav className="site-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={label} href={href} className={location === href ? "is-active" : ""}>{label}</Link>)}
        </nav>
        <div className="site-header__actions">
          <button aria-label="Search products" onClick={onSearch}><Search size={18} strokeWidth={1.7} /></button>
          <Link href="/wishlist" className="icon-link" aria-label="Wishlist"><Heart size={18} strokeWidth={1.7} />{wishlist.length > 0 && <b>{wishlist.length}</b>}</Link>
          <button aria-label={`Cart, ${cartCount} items`} className="icon-link" onClick={() => setCartOpen(true)}><ShoppingBag size={18} strokeWidth={1.7} />{cartCount > 0 && <b>{cartCount}</b>}</button>
          <button className="mobile-menu-toggle" aria-label="Open navigation menu" aria-expanded={menuOpen} aria-controls="mobile-primary-navigation" onClick={() => setMenuOpen(true)}><Menu size={21} /></button>
        </div>
      </div>
      {menuOpen && <div id="mobile-primary-navigation" className="mobile-nav mobile-nav--open" style={{ backgroundColor: "var(--paper)", backgroundImage: "none", opacity: 1 }}>
        <div className="mobile-nav__top"><Brand compact /><button aria-label="Close menu" onClick={() => setMenuOpen(false)}><X /></button></div>
        <p className="mobile-nav__eyebrow">Explore the studio</p>
        <div className="mobile-nav__links">{links.map(([label, href], i) => <Link key={label} href={href} onClick={() => setMenuOpen(false)}><span>0{i + 1}</span>{label}{["Custom", "Our Craft", "About"].includes(label) && <small>Studio</small>}</Link>)}</div>
        <p>Considered forms, shaped for celebration.</p>
      </div>}
    </header>
  );
}

/**
 * The Atelier Procession: an asymmetrical studio journey that moves from a dark object study into quiet paper rooms.
 * Core motifs: section serials, sculptor's terracotta, editorial serif rhythm, and restrained Ganapati linework.
 */
import { useEffect, useState } from "react";
import { ArrowRight, Check, ChevronRight, MoveRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { GestureDivider, SectionLabel } from "@/components/Brand";
import ProductCard from "@/components/ProductCard";
import { categories, products, siteConfig, trustFeatures } from "@/lib/data";

function Countdown() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => { const id = window.setInterval(() => setNow(Date.now()), 1000); return () => window.clearInterval(id); }, []);
  const remaining = Math.max(0, new Date(siteConfig.festivalDate).getTime() - now);
  const values = [
    ["Days", Math.floor(remaining / 86400000)],
    ["Hours", Math.floor((remaining / 3600000) % 24)],
    ["Minutes", Math.floor((remaining / 60000) % 60)],
    ["Seconds", Math.floor((remaining / 1000) % 60)],
  ];
  return <div className="countdown" aria-label="Countdown to Ganesh Chaturthi">{values.map(([label, value]) => <div key={label as string}><b>{String(value).padStart(2, "0")}</b><span>{label}</span></div>)}</div>;
}

export default function Home() {
  return <main className="home home--ready">
      <section className="hero">
        <img src={siteConfig.images.hero} alt="Handcrafted Ganpati idol in a low-lit studio — demo hero image" className="hero__image" fetchPriority="high" />
        <div className="hero__veil" />
        <div className="hero__frame" />
        <div className="hero__copy">
          <p className="hero__label">Ganesh Chitra Shaala <span>·</span> Idol Studio</p>
          <h1>Bring <em>Bappa</em><br />Home.</h1>
          <p>Handcrafted Ganpati idols created for moments that become memories.</p>
          <div className="hero__actions"><Link href="/idols" className="btn btn--light">Explore idols <ArrowRight size={17}/></Link><Link href="/custom" className="btn btn--line">Create your custom idol</Link></div>
        </div>
        <div className="hero__bottom"><p>2026 Collection</p></div>
      </section>

      <section className="categories section-pad">
        <div className="section-heading section-heading--split"><div><SectionLabel index="01">Find your Bappa</SectionLabel><h2>Choose the form<br />that feels <em>yours.</em></h2></div><p>Three starting points for a celebration shaped with care. Each collection is structured as editable demo content for this prototype.</p></div>
        <div className="category-rail">{categories.map((category, index) => <Link href={category.id === "custom" ? "/custom" : `/idols/${category.id}`} className={`category-card category-card--${category.tone}`} key={category.id}>
          <div className="category-card__image-wrap"><img src={category.image} alt={`${category.label} — demo collection image`} loading="lazy" /><span>0{index + 1}</span></div><div className="category-card__copy"><p>{category.label}</p><h3>{category.title}</h3><small>{category.description}</small><b>{category.cta}<ArrowRight size={15}/></b></div>
        </Link>)}</div>
      </section>

      <section className="collection section-pad"><div className="section-heading section-heading--row"><div><SectionLabel index="02">The seasonal edit</SectionLabel><h2>This Season’s <em>Collection.</em></h2></div><Link href="/idols" className="text-link">View all idols <ArrowRight size={16}/></Link></div><GestureDivider compact /><div className="product-grid">{products.slice(0, 4).map((product, index) => <ProductCard product={product} index={index} key={product.id} />)}</div><p className="demo-note">{siteConfig.demoNotice} Product names, imagery, materials and prices are centrally editable.</p></section>

      <section className="craft-section"><div className="craft-section__image"><img src={siteConfig.images.craft} alt="Artisan hand-painting a Ganpati idol — demo craftsmanship image" loading="lazy" /></div><div className="craft-section__panel"><SectionLabel index="03" light>Studio process</SectionLabel><h2>Where tradition<br />takes <em>shape.</em></h2><p>Every idol begins as an idea, takes shape through skilled hands, and comes alive through colour, detail and character.</p><p className="craft-section__caption">Editorial prototype copy — replace with the studio’s verified process and story.</p><Link href="/craft" className="btn btn--light">Discover our craft <ArrowRight size={16}/></Link></div></section>

      <section className="bespoke section-pad"><div className="bespoke__headline"><SectionLabel index="04">Bespoke studio</SectionLabel><h2>Your vision.<br /><em>Your Bappa.</em></h2></div><div className="bespoke__content"><p>From the first conversation to the finishing touch, a custom request is treated as a collaboration. Share a feeling, reference, size, or detail, and the studio can begin a considered discussion.</p><ol>{["Share your idea", "Discuss the design", "Approve the details", "We create", "Bring Bappa home"].map((step, index) => <li key={step}><span>0{index + 1}</span>{step}<ChevronRight size={16}/></li>)}</ol><Link href="/custom" className="btn btn--terracotta">Start customizing <ArrowRight size={16}/></Link></div></section>

      <section className="eco-section"><div className="eco-section__image"><img src={siteConfig.images.eco} alt="Natural-toned Ganpati idol — demo eco collection image" loading="lazy" /></div><div className="eco-section__copy"><SectionLabel index="05">The considered collection</SectionLabel><h2>Celebrate with<br /><em>intention.</em></h2><p>Explore an eco-focused collection whose product information can be completed once the studio verifies its materials, making process, and immersion guidance.</p><div className="eco-facts"><p><span>Material</span>{siteConfig.eco.material}</p><p><span>Process</span>{siteConfig.eco.process}</p><p><span>Immersion</span>{siteConfig.eco.immersion}</p></div><Link href="/idols/eco-friendly" className="text-link">Explore eco-friendly idols <ArrowRight size={16}/></Link></div></section>

      <section className="countdown-section"><div><SectionLabel index="06" light>Festival calendar</SectionLabel><h2>Bappa is coming <em>home.</em></h2><p>Countdown date: 14 September 2026. This is a single editable prototype configuration.</p></div><Countdown /></section>

      <section className="trust section-pad"><div className="section-heading"><SectionLabel index="07">Why Ganesh Chitra Shaala</SectionLabel><h2>Made with a feeling<br />for the <em>occasion.</em></h2></div><div className="trust-grid">{trustFeatures.map(([index, title, copy]) => <article key={index}><span>{index}</span><div className="trust-grid__mark"><Check size={19}/></div><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section className="stories"><div><SectionLabel index="08" light>Community, later</SectionLabel><h2>Stories will<br />grow <em>here.</em></h2></div><div className="stories__notice"><Sparkles size={19}/><p>Customer stories have not been published in this prototype. Only verified, client-approved reviews should appear here before launch.</p><span>Review data structure reserved</span></div></section>

      <section className="moments section-pad"><div className="section-heading section-heading--row"><div><SectionLabel index="09">Moments with Bappa</SectionLabel><h2>A studio journal<br />in <em>fragments.</em></h2></div><a href={siteConfig.contact.instagram} className="text-link">Follow our journey <ArrowRight size={16}/></a></div><div className="moments-grid"><img src={siteConfig.images.custom} alt="Demo studio journal image" loading="lazy"/><img src={siteConfig.images.pop} alt="Demo studio journal image" loading="lazy"/><img src={siteConfig.images.craft} alt="Demo studio journal image" loading="lazy"/><img src={siteConfig.images.eco} alt="Demo studio journal image" loading="lazy"/></div><p className="demo-note">Placeholder imagery, centrally editable for the client’s future Instagram or studio photography.</p></section>

      <section className="about-teaser"><div className="about-teaser__gesture"><img src={siteConfig.images.logo} alt="" /></div><div><SectionLabel index="10" light>{siteConfig.about.eyebrow}</SectionLabel><h2>{siteConfig.about.title}</h2><p>{siteConfig.about.body}</p><Link href="/about" className="btn btn--light">Our story <MoveRight size={17}/></Link></div></section>
    </main>;
}

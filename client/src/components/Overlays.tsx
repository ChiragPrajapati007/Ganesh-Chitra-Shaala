/** The Atelier Procession: search and cart arrive as quiet paper panels, never as obstructive app chrome. */
import { useMemo, useState } from "react";
import { ArrowRight, Minus, Plus, Search, Trash2 } from "lucide-react";
import { Link } from "wouter";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { popularSearches, products } from "@/lib/data";
import { useStore } from "@/contexts/StoreContext";
import { formatINR } from "@/components/ProductCard";

export function SearchOverlay({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [query, setQuery] = useState("");
  const matches = useMemo(() => query.trim().length ? products.filter((p) => `${p.name} ${p.category} ${p.material} ${p.style}`.toLowerCase().includes(query.toLowerCase())).slice(0, 5) : [], [query]);
  return <Sheet open={open} onOpenChange={onOpenChange}><SheetContent side="top" className="search-sheet">
    <SheetHeader><SheetTitle className="serif-title">Find a form to bring home.</SheetTitle><SheetDescription>Search across our demo collection.</SheetDescription></SheetHeader>
    <div className="search-sheet__body"><label className="search-field"><Search size={22}/><input autoFocus placeholder="Search idols, material or style" value={query} onChange={(e) => setQuery(e.target.value)} /></label>
      {!query && <div className="search-suggestions"><p>Popular in this prototype</p><div>{popularSearches.map((term) => <button key={term} onClick={() => setQuery(term)}>{term}<ArrowRight size={14}/></button>)}</div></div>}
      {query && <div className="search-results">{matches.length ? matches.map((product) => <Link href={`/product/${product.slug}`} key={product.id} onClick={() => onOpenChange(false)}><img src={product.image} alt="" /><span><b>{product.name}</b><small>{product.material} · {product.size}</small></span><em>{formatINR(product.price)}</em></Link>) : <p>No matching demo products. Try “Eco-friendly” or “Traditional”.</p>}</div>}
    </div>
  </SheetContent></Sheet>;
}

export function CartDrawer() {
  const { isCartOpen, setCartOpen, cartProducts, subtotal, removeFromCart, updateQuantity } = useStore();
  return <Sheet open={isCartOpen} onOpenChange={setCartOpen}><SheetContent className="cart-sheet"><SheetHeader><p className="section-label"><span>Bag</span>Selected forms</p><SheetTitle className="serif-title">Your collection</SheetTitle><SheetDescription>Demo cart saved locally in this browser.</SheetDescription></SheetHeader>
    <div className="cart-sheet__items">{cartProducts.length ? cartProducts.map(({ product, quantity }) => <div className="cart-item" key={product.id}><img src={product.image} alt="" /><div><Link href={`/product/${product.slug}`} onClick={() => setCartOpen(false)}>{product.name}</Link><small>{product.size} · {product.material}</small><div className="quantity"><button onClick={() => updateQuantity(product.id, quantity - 1)} aria-label="Reduce quantity"><Minus size={12}/></button><span>{quantity}</span><button onClick={() => updateQuantity(product.id, quantity + 1)} aria-label="Increase quantity"><Plus size={12}/></button></div></div><div><b>{formatINR(product.price * quantity)}</b><button onClick={() => removeFromCart(product.id)} aria-label={`Remove ${product.name}`}><Trash2 size={15}/></button></div></div>) : <div className="empty-bag"><p>Your collection is waiting.</p><Link href="/idols" onClick={() => setCartOpen(false)}>Explore the idols <ArrowRight size={15}/></Link></div>}</div>
    {cartProducts.length > 0 && <div className="cart-sheet__footer"><div><span>Subtotal</span><b>{formatINR(subtotal)}</b></div><p>Taxes, delivery, and payment are shown at the integration-ready checkout.</p><Link href="/checkout" onClick={() => setCartOpen(false)} className="btn btn--dark">Proceed to checkout <ArrowRight size={16}/></Link><Link href="/idols" onClick={() => setCartOpen(false)} className="text-link">Continue shopping</Link></div>}
  </SheetContent></Sheet>;
}

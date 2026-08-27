/** The Atelier Procession: product objects are treated as gallery studies, with immediate and unobtrusive shopping controls. */
import { Heart, Plus } from "lucide-react";
import type { CSSProperties } from "react";
import { Link } from "wouter";
import { type Product } from "@/lib/data";
import { useStore } from "@/contexts/StoreContext";

export const formatINR = (amount: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addToCart, wishlist, toggleWishlist } = useStore();
  const isWishlisted = wishlist.includes(product.id);
  return (
    <article className="product-card" style={{ "--delay": `${index * 45}ms` } as CSSProperties}>
      <div className="product-card__visual">
        <Link href={`/product/${product.slug}`} className="product-card__image-link" aria-label={`View ${product.name}`}>
          <img src={product.image} alt={`${product.name} — demo product image`} className="product-card__image product-card__image--primary" loading="lazy" />
          <img src={product.secondaryImage} alt="" className="product-card__image product-card__image--secondary" loading="lazy" />
        </Link>
        <span className="product-card__badge">{product.availability}</span>
        <button className={`product-card__wish ${isWishlisted ? "is-saved" : ""}`} onClick={() => toggleWishlist(product.id)} aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}><Heart size={17} fill={isWishlisted ? "currentColor" : "none"} /></button>
        <button className="product-card__quick-add" onClick={() => addToCart(product.id)} aria-label={`Add ${product.name} to cart`}><Plus size={17} /> Quick add</button>
      </div>
      <div className="product-card__details">
        <div><p className="product-card__spec">{product.material} · {product.size}</p><Link href={`/product/${product.slug}`} className="product-card__name">{product.name}</Link></div>
        <p className="product-card__price">{formatINR(product.price)}</p>
      </div>
    </article>
  );
}

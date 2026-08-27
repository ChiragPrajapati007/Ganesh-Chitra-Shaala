/** The Atelier Procession: shared storefront frame keeps every route connected to the same gallery-like shopping experience. */
import { lazy, Suspense, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { StoreProvider } from "./contexts/StoreContext";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { CartDrawer, SearchOverlay } from "./components/Overlays";
import IntroAnimation from "./components/IntroAnimation";

const Home = lazy(() => import("./pages/Home"));
const Idols = lazy(() => import("./pages/Idols"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Custom = lazy(() => import("./pages/Custom"));
const CartPage = lazy(() => import("./pages/UtilityPages").then((module) => ({ default: module.CartPage })));
const CheckoutPage = lazy(() => import("./pages/UtilityPages").then((module) => ({ default: module.CheckoutPage })));
const WishlistPage = lazy(() => import("./pages/UtilityPages").then((module) => ({ default: module.WishlistPage })));
const CraftPage = lazy(() => import("./pages/UtilityPages").then((module) => ({ default: () => <module.InfoPage kind="craft" /> })));
const AboutPage = lazy(() => import("./pages/UtilityPages").then((module) => ({ default: () => <module.InfoPage kind="about" /> })));
const ContactPage = lazy(() => import("./pages/UtilityPages").then((module) => ({ default: () => <module.InfoPage kind="contact" /> })));

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/idols" component={Idols} />
    <Route path="/idols/:category" component={Idols} />
    <Route path="/product/:slug" component={ProductDetail} />
    <Route path="/custom" component={Custom} />
    <Route path="/craft" component={CraftPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/cart" component={CartPage} />
    <Route path="/checkout" component={CheckoutPage} />
    <Route path="/wishlist" component={WishlistPage} />
    <Route path="/search" component={Idols} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "auto" }); }, [location]);
  return null;
}

function Storefront() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  return <StoreProvider>
    {!introDone && <IntroAnimation onDone={() => setIntroDone(true)} />}
    <ScrollToTop />
    <SiteHeader onSearch={() => setSearchOpen(true)} />
    <Suspense fallback={<div className="route-loading">Preparing the studio…</div>}><Router /></Suspense>
    <SiteFooter />
    <SearchOverlay open={searchOpen} onOpenChange={setSearchOpen} />
    <CartDrawer />
  </StoreProvider>;
}

function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Storefront /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}

export default App;

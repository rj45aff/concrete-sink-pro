import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ─── Image URLs (Real from reference site) ───────────────────────────────────────
const HERO_SINKS =
  "https://concretolucrativo.com.br/wp-content/uploads/2025/05/12.webp";
const MOCKUP_PHONE =
  "https://concretolucrativo.com.br/wp-content/uploads/2025/05/mockupcel-842x1024.png";

// Sink showcase images
const SINK_IMAGES = [
  "https://concretolucrativo.com.br/wp-content/uploads/2025/05/1.webp",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/05/2.webp",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/05/3.webp",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/05/4.jpg",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/05/5.webp",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/05/6.webp",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/05/7.webp",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/05/8.webp",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/05/9.jpg",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/05/10.webp",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/05/11.webp",
];

// Module course images
const MODULE_IMAGES = [
  "https://concretolucrativo.com.br/wp-content/uploads/2025/06/i1.jpg",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/06/i2-1.jpg",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/06/i3-2.jpg",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/06/i4-1.jpg",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/06/i6.jpg",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/06/i7.jpg",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/06/i8.jpg",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/06/i9.jpg",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/06/i10-1.jpg",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/06/i11-1.jpg",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/06/i12.jpg",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/06/i13.jpg",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/06/i14.jpg",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/06/i15.jpg",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/06/i16.jpg",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/06/i17.jpg",
];

// Student testimonial images
const STUDENT_IMAGES = [
  "https://concretolucrativo.com.br/wp-content/uploads/2025/06/students_1.jpg",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/06/students_2.jpg",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/06/students_3.jpg",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/06/students_4.jpg",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/06/students_5.jpg",
  "https://concretolucrativo.com.br/wp-content/uploads/2025/06/students_6.jpg",
];

// ─── Carousel Hook ───────────────────────────────────────────────────────────
function useCarousel(itemCount: number, autoScroll = false) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!autoScroll) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % itemCount);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoScroll, itemCount]);
  const next = () => setCurrent((prev) => (prev + 1) % itemCount);
  const prev = () => setCurrent((prev) => (prev - 1 + itemCount) % itemCount);
  return { current, next, prev };
}

// ─── Module Data ───────────────────────────────────────────────────────────
const modules = [
  { id: 1, title: "High-performance gray mix", img: MODULE_IMAGES[0] },
  { id: 2, title: "High-performance white mix", img: MODULE_IMAGES[1] },
  { id: 3, title: "Support materials: understanding the supplies", img: MODULE_IMAGES[2] },
  { id: 4, title: "Types of molds", img: MODULE_IMAGES[3] },
  { id: 5, title: "Learn to use the tools", img: MODULE_IMAGES[4] },
  { id: 6, title: "How to demold", img: MODULE_IMAGES[5] },
  { id: 7, title: "Types of pigmenters which to use", img: MODULE_IMAGES[6] },
  { id: 8, title: "How to handle molds", img: MODULE_IMAGES[7] },
  { id: 9, title: "Types of tools", img: MODULE_IMAGES[8] },
  { id: 10, title: "Types of cement", img: MODULE_IMAGES[9] },
  { id: 11, title: "Etruscan effect", img: MODULE_IMAGES[10] },
  { id: 12, title: "Corten steel effect", img: MODULE_IMAGES[11] },
  { id: 13, title: "Dubai effect", img: MODULE_IMAGES[12] },
  { id: 14, title: "Dubai gold effect", img: MODULE_IMAGES[13] },
  { id: 15, title: "How to waterproof", img: MODULE_IMAGES[14] },
  { id: 16, title: "Supplier list", img: MODULE_IMAGES[15] },
];

// ─── Testimonials Data ───────────────────────────────────────────────────────
const testimonials = [
  {
    name: "John M.",
    location: "USA",
    result: "First sink sold for $280 in 7 days",
    text: "Followed the course on a Friday. Built my first sink Saturday. Posted it online Sunday. Sold Monday for $280. This method actually works.",
  },
  {
    name: "Sarah L.",
    location: "UK",
    result: "3-4 sinks/month @ $350-400 each",
    text: "The quality is absolutely stunning. Interior designers are calling me directly now. I'm booked out 6 weeks in advance. This is real money.",
  },
  {
    name: "David K.",
    location: "Canada",
    result: "$12 material → $450 sale price",
    text: "I was skeptical about the profit margins. Then I made my first sink. Cost me $12 in materials. Sold it for $450. Now I can't make them fast enough.",
  },
  {
    name: "Emily R.",
    location: "USA",
    result: "Luxury architects now my clients",
    text: "High-end interior designers are requesting custom pieces. They don't even ask about price. The quality speaks for itself. This is a completely different market.",
  },
  {
    name: "Michael B.",
    location: "Australia",
    result: "Quit my job after 4 months",
    text: "Started this as a side hustle. Made $8,000 in the first month. By month 4, I had enough to leave my job. Now it's my full-time income.",
  },
  {
    name: "Lena V.",
    location: "Netherlands",
    result: "Premium pricing with zero resistance",
    text: "The finish quality is so high that I charge $500-700 per sink. Clients don't negotiate. They just buy. This is luxury market pricing.",
  },
];

// ─── FAQ Data ───────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How will i access the course?",
    a: "Instant lifetime access. All 30 video lessons are yours forever. Download them, watch offline, rewatch anytime. Access from any device—phone, tablet, computer.",
  },
  {
    q: "How is the course delivered?",
    a: "100% online video training. 30 HD lessons that show you exactly how to create luxury concrete sinks step-by-step. No live classes, no waiting, no time limits. Learn at your own pace.",
  },
  {
    q: "I have no experience. Can I still buy it?",
    a: "Absolutely. This course was built for complete beginners. 68% of our students had zero concrete experience before starting. If you can follow instructions, you can do this.",
  },
  {
    q: "Do I need a large workshop?",
    a: "No. You need about 50-100 square feet. A garage corner, basement, or small shed is perfect. Many students work in spaces smaller than their bedroom.",
  },
  {
    q: "How much do tools cost?",
    a: "Minimal. Basic tools from any hardware store—total startup around $50-80. We provide a complete supplier list so you know exactly what to buy and where.",
  },
  {
    q: "I already work with concrete. Is it still useful?",
    a: "Yes. This method is different. It focuses on luxury finishes and high-ticket pricing. Even experienced concrete workers are surprised by the profit potential.",
  },
  {
    q: "Does it work outside of Brazil?",
    a: "Yes. Our students are in 62+ countries. The method works everywhere. Luxury concrete sinks are in demand globally.",
  },
  {
    q: "How long will I have access to the course?",
    a: "Forever. Once you buy, it's yours for life. New updates are added regularly at no extra cost.",
  },
];

// Countdown Timer Component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 48, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center items-center">
      <div className="bg-red-600/30 px-4 py-2 rounded border border-red-500/50">
        <div className="text-2xl font-bold text-red-300">{String(timeLeft.hours).padStart(2, '0')}</div>
        <div className="text-xs text-red-200">Hours</div>
      </div>
      <div className="text-2xl font-bold text-red-300">:</div>
      <div className="bg-red-600/30 px-4 py-2 rounded border border-red-500/50">
        <div className="text-2xl font-bold text-red-300">{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div className="text-xs text-red-200">Minutes</div>
      </div>
      <div className="text-2xl font-bold text-red-300">:</div>
      <div className="bg-red-600/30 px-4 py-2 rounded border border-red-500/50">
        <div className="text-2xl font-bold text-red-300">{String(timeLeft.seconds).padStart(2, '0')}</div>
        <div className="text-xs text-red-200">Seconds</div>
      </div>
    </div>
  );
}

export default function Home() {
  const testimonialsCarousel = useCarousel(testimonials.length, true);
  const modulesCarousel = useCarousel(modules.length, false);

  const scrollToCta = () => {
    const element = document.getElementById("oferta");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_SINKS}
            alt="Premium concrete sinks"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        <div className="container relative z-10 max-w-4xl">
          <div className="space-y-6">
            <div className="inline-block border border-yellow-600 px-4 py-2 rounded">
              <p className="text-yellow-500 font-semibold text-sm tracking-wider">PROFITABLE SINK METHOD</p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Learn the exclusive and advanced method that turns concrete into <span className="text-yellow-400">cash</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl">
              Discover the proven high-quality method that is transforming the financial lives of thousands of people worldwide through high-end concrete sinks
            </p>

            <div className="flex gap-4 pt-8 flex-col">
              <a
                href="https://pay.hotmart.com/V92151053D?bid=1779213135582"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded text-lg transition-all duration-300 transform hover:scale-105 text-center animate-blink btn-cta-glow"
              >
                GET INSTANT ACCESS
              </a>
              <p className="text-yellow-300 font-semibold text-sm">⚡ Only 47 spots left at this price • Offer expires in 48 hours</p>
            </div>
          </div>
        </div>


      </section>

      {/* ── PROBLEM/OPPORTUNITY SECTION ── */}
      <section className="py-20 bg-gray-950">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">Maybe you study, work hard, have skills, and even deliver quality</h2>

          <p className="text-lg text-gray-300 mb-8">
            But while you pour your energy into certain products and services... Some ordinary people are using concrete to create valuable pieces sold as art.
          </p>

          <h3 className="text-3xl font-bold mb-6 text-yellow-400">Knowledge generates results, and results put money in your pocket</h3>

          <p className="text-lg text-gray-300">
            Today, dozens of people are gaining attention while you struggle for profit margins and recognition. The frustration doesn't come from a lack of talent, but from not having the right knowledge or the right product that helps you sell every single day.
          </p>
        </div>
      </section>

      {/* ── PRODUCT INTRO SECTION ── */}
      <section className="py-20 bg-black">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">There's a concrete product with a high ticket, low competition, and high perceived value:</h2>
              <h3 className="text-3xl font-bold text-yellow-400 mb-8">Handcrafted luxury concrete sinks</h3>
              <p className="text-xl text-gray-300 mb-6">
                This is the trending product that few are exploring. Those who dive in stand out—and earn big.
              </p>
              <div className="flex gap-4 flex-col">
                <a
                  href="https://pay.hotmart.com/V92151053D?bid=1779213135582"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded transition-all duration-300 transform hover:scale-105 text-center animate-blink btn-cta-glow"
                >
                  CLAIM YOUR ACCESS
                </a>
                <p className="text-yellow-300 font-semibold text-xs">⚡ Limited availability • 48-hour offer</p>
              </div>
            </div>
            <img src={MOCKUP_PHONE} alt="Mockup" className="w-full rounded" />
          </div>
        </div>
      </section>

      {/* ── METHOD INTRO ── */}
      <section className="py-20 bg-gray-950">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">Meet The Profitable Sink Method</h2>

          <p className="text-xl text-gray-300 mb-8 text-center">
            A complete and straight-to-the-point course that turns your skill into a product, your name into a brand, and your work into profit.
          </p>

          <p className="text-lg text-gray-300 mb-12 text-center">
            A product made from high-performance concrete, admired and sought after by renowned architects and designers from around the world.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded border border-yellow-600/30">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Why High-End Concrete Sinks?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-yellow-400">✓</span>
                  <span>Low production cost ($5-$15 per sink)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400">✓</span>
                  <span>High-value and profitable ($300-$700 per sink)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400">✓</span>
                  <span>Desired by architects, retailers, and premium clients</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400">✓</span>
                  <span>Handcrafted, customizable, and exclusive</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400">✓</span>
                  <span>Anyone can make them by hand with low investment</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded border border-yellow-600/30">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">What You'll Get</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-yellow-400">✓</span>
                  <span>30 HD video lessons (step-by-step)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400">✓</span>
                  <span>Complete materials and supplier list</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400">✓</span>
                  <span>All 16 premium effect techniques</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400">✓</span>
                  <span>Lifetime access + future updates</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400">✓</span>
                  <span>7-day money-back guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHOWCASE CAROUSEL ── */}
      <section className="py-20 bg-black">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Premium Sinks Created By Our Students</h2>
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {SINK_IMAGES.slice(0, 4).map((img, i) => (
                <div key={i} className="aspect-square rounded overflow-hidden">
                  <img
                    src={img}
                    alt={`Sink ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm">Each sink is handcrafted with premium finishes and sold for $300-$700</p>
          </div>
        </div>
      </section>

      {/* ── COST SECTION ── */}
      <section className="py-16 bg-gray-950">
        <div className="container max-w-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Production Cost Per Sink</h3>
          <div className="text-5xl font-bold text-yellow-400 mb-4">$5 to $15</div>
          <p className="text-xl text-gray-300">
            Yet students are selling them for $300-$700 each. That's a 2000-4000% profit margin.
          </p>
        </div>
      </section>

      {/* ── MODULES SECTION ── */}
      <section className="py-20 bg-black">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Course modules:</h2>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {modules.map((module) => (
              <div key={module.id} className="group cursor-pointer">
                <div className="aspect-square rounded overflow-hidden mb-3 bg-gray-900">
                  <img
                    src={module.img}
                    alt={module.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-300 group-hover:text-yellow-400 transition-colors">
                  {module.title}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-6">30 total video lessons covering every aspect of creating luxury concrete sinks</p>
            <button
              onClick={scrollToCta}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded transition-all duration-300 transform hover:scale-105"
            >
              I WANT TO LEARN
            </button>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF SECTION ── */}
      <section className="py-20 bg-gray-950">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4 text-center">Real Students. Real Results.</h2>
          <p className="text-center text-gray-400 mb-12 text-lg">1,360+ students across 62+ countries</p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[testimonials[testimonialsCarousel.current], testimonials[(testimonialsCarousel.current + 1) % testimonials.length], testimonials[(testimonialsCarousel.current + 2) % testimonials.length]].map((t, i) => (
              <div key={i} className="bg-black p-6 rounded border border-yellow-600/30">
                <div className="mb-4 flex justify-center">
                  <img
                    src={STUDENT_IMAGES[i % STUDENT_IMAGES.length]}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500"
                  />
                </div>
                <p className="text-gray-300 mb-4 italic text-sm">"{t.text}"</p>
                <div className="bg-yellow-600/20 p-3 rounded mb-4">
                  <p className="text-yellow-400 font-semibold text-sm">✓ {t.result}</p>
                </div>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={testimonialsCarousel.prev}
              className="bg-yellow-500 hover:bg-yellow-600 p-2 rounded text-black transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={testimonialsCarousel.next}
              className="bg-yellow-500 hover:bg-yellow-600 p-2 rounded text-black transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ── VISUAL SOCIAL PROOF ── */}
      <section className="py-20 bg-black">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Real Conversations. Real Success.</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* WhatsApp Proof */}
            <div className="bg-gray-900 p-6 rounded border border-yellow-600/30 flex flex-col items-center">
              <p className="text-yellow-400 text-sm mb-4 font-semibold">FIRST ORDER: 40 UNITS</p>
              <img
                src="/manus-storage/whatsapp-proof-social_3cb4e566.jpeg"
                alt="WhatsApp proof - 40 units order"
                className="w-full max-w-xs rounded"
              />
              <p className="text-center text-gray-300 mt-4 text-sm">Student assembling display stand for first bulk order</p>
            </div>

            {/* Instagram Proof */}
            <div className="bg-gray-900 p-6 rounded border border-yellow-600/30 flex flex-col items-center">
              <p className="text-yellow-400 text-sm mb-4 font-semibold">INSTAGRAM COMMUNITY FEEDBACK</p>
              <img
                src="/manus-storage/provasocialescritaingles03_d0af0e95.jpeg"
                alt="Instagram comments - course feedback"
                className="w-full max-w-xs rounded"
              />
              <p className="text-center text-gray-300 mt-4 text-sm">Students sharing their excitement and results</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BONUSES SECTION ── */}
      <section className="py-20 bg-gray-950">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Exclusive Bonuses</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-black p-8 rounded border border-yellow-600/30 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Up to 70% OFF mold purchase</h3>
              <p className="text-gray-300">Directly from the manufacturer. Exclusive partner pricing.</p>
            </div>

            <div className="bg-black p-8 rounded border border-yellow-600/30 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">365-day full access</h3>
              <p className="text-gray-300">Watch anytime, from any device. Download for offline viewing.</p>
            </div>

            <div className="bg-black p-8 rounded border border-yellow-600/30 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">Best additives list</h3>
              <p className="text-gray-300">Complete list of additives for creating luxury finishes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OBJECTIONS SECTION ── */}
      <section className="py-20 bg-black">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-center">This Business is for you!</h2>

          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded border border-yellow-600/30">
              <p className="text-lg font-bold text-red-400 mb-3">❌ "But I've never worked with concrete..."</p>
              <p className="text-gray-300">✅ No worries — this course teaches everything from scratch and was made for beginners. 68% of our students had zero experience before starting.</p>
            </div>

            <div className="bg-gray-900 p-6 rounded border border-yellow-600/30">
              <p className="text-lg font-bold text-red-400 mb-3">❌ "Is it hard to find the materials?"</p>
              <p className="text-gray-300">✅ Not at all. We provide the complete supplier list so you know exactly what to buy and where to get it in your country.</p>
            </div>

            <div className="bg-gray-900 p-6 rounded border border-yellow-600/30">
              <p className="text-lg font-bold text-red-400 mb-3">❌ "Do I need to have a company?"</p>
              <p className="text-gray-300">✅ No. You can start from scratch in a small space with simple tools. Many students work from their garage or basement.</p>
            </div>

            <div className="bg-gray-900 p-6 rounded border border-yellow-600/30">
              <p className="text-lg font-bold text-red-400 mb-3">❌ "How much does it cost to start?"</p>
              <p className="text-gray-300">✅ Minimal. Total startup cost is typically $50-$80 for tools. Materials cost $5-$15 per sink. The profit potential is massive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFER SECTION ── */}
      <section className="py-20 bg-gray-950" id="oferta">
        <div className="container max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-8">LIMITED TIME OFFER</h2>

          <div className="bg-black p-12 rounded border-2 border-yellow-500 mb-8">
            <div className="bg-red-600/20 border border-red-500/50 p-6 rounded mb-8">
              <p className="text-red-300 font-bold text-sm mb-4">⚡ URGENT: Only 47 spots left at $147 - Price increases to $297 in:</p>
              <CountdownTimer />
            </div>
            
            <p className="text-gray-400 line-through mb-4">Regular price: $449</p>
            <div className="mb-6">
              <div className="text-6xl font-bold text-yellow-400 mb-2">$147</div>
              <p className="text-gray-300">ONE-TIME PAYMENT</p>
            </div>
            <p className="text-lg font-bold text-green-400 mb-8">You save $302 (67% off)</p>

            <a
              href="https://pay.hotmart.com/V92151053D?bid=1779213135582"
              className="block w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded text-lg transition-all duration-300 transform hover:scale-105 mb-4"
            >
              I WANT THIS OFFER NOW
            </a>

            <p className="text-gray-400 text-sm">30-day money-back guarantee. No questions asked.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded border border-yellow-600/30">
            <h3 className="text-xl font-bold mb-4">Unconditional 7-Day Guarantee</h3>
            <p className="text-gray-300">
              Our course comes with a full 7-day money-back guarantee. If you're not 100% satisfied, we'll refund every dollar. No questions asked. That's how confident we are in this method.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-20 bg-black">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-gray-900 p-6 rounded border border-yellow-600/30 cursor-pointer group">
                <summary className="font-bold text-lg flex justify-between items-center">
                  {faq.q}
                  <span className="text-yellow-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-300 mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-gray-950">
        <div className="container max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start Your Profitable Sink Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 1,360+ students who are already creating luxury concrete sinks and earning real money.
          </p>

          <div className="bg-yellow-600/20 border border-yellow-500/50 p-4 rounded mb-8">
            <p className="text-yellow-300 font-bold text-sm mb-4">⚡ Limited Time: $147 (67% off) - Expires in 48 hours</p>
          </div>

          <a
            href="https://pay.hotmart.com/V92151053D?bid=1779213135582"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-12 rounded text-lg transition-all duration-300 transform hover:scale-105 animate-blink btn-cta-glow"
          >
            I WANT TO LEARN
          </a>

          <p className="text-gray-400 text-sm mt-8">7-day money-back guarantee. Lifetime access. Join now.</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container text-center text-gray-500 text-sm">
          <p>© 2026 Profitable Sink Method. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-yellow-400">Privacy Policy</a> • <a href="#" className="hover:text-yellow-400">Terms of Service</a> • <a href="#" className="hover:text-yellow-400">Contact</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

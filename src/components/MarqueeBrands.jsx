import { useEffect, useRef } from 'react';

const brands = [
  'Cartier',
  'Aman',
  'Bulgari',
  'LVMH',
  'Dior',
  'Four Seasons',
  'Rolex',
  'Moët & Chandon',
];

export default function MarqueeBrands() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let start = 0;
    let raf;
    const speed = 0.3; // px per frame

    const step = () => {
      start -= speed;
      if (Math.abs(start) >= el.scrollWidth / 2) start = 0;
      el.style.transform = `translateX(${start}px)`;
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative w-full bg-[#0a0a0a] py-10">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" style={{
          background: 'linear-gradient(90deg, rgba(10,10,10,1) 0%, rgba(10,10,10,0) 12%, rgba(10,10,10,0) 88%, rgba(10,10,10,1) 100%)'
        }} />

        <div className="whitespace-nowrap will-change-transform" ref={ref}>
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="mx-8 inline-block select-none text-white/40 hover:text-white/70 transition text-sm tracking-[0.3em] uppercase">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import scrollImg from '../../../assets/images/scrollImage.png';

gsap.registerPlugin(ScrollTrigger);

export default function DynamicScrollSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current && imageRef.current && textRef.current) {
        const section = sectionRef.current;
        const image = imageRef.current;
        const text = textRef.current;

        gsap.set(image, { scale: 0.6 });
        gsap.set(text, { opacity: 0, y: 50 });

        ScrollTrigger.create({
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          onUpdate: (self) => {
            const progress = self.progress;
            const scale = gsap.utils.interpolate(0.6, 1.1, progress <= 0.5 ? progress * 2 : 2 - progress * 2);
            gsap.to(image, {
              scale: scale,
              duration: 0.1,
              ease: 'none',
            });

            if (progress <= 0.5) {
              gsap.to(text, {
                opacity: progress * 2,
                y: 50 - progress * 100,
                duration: 0.1,
                ease: 'none',
              });
            } else {
              gsap.to(text, {
                opacity: 2 - progress * 2,
                y: progress * 100 - 50,
                duration: 0.1,
                ease: 'none',
              });
            }
          },
          scrub: 0.1,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative  dark:bg-gray-900 py-10 flex items-center justify-center overflow-hidden"
    >
      <div className="relative w-full rounded-xl h-full flex justify-center items-center">
        <div className="w-[90%] h-full rounded-xl  relative overflow-hidden">
          <img
            ref={imageRef}
            src={scrollImg}
            alt="Students speaking confidently"
            className="w-full h-full object-cover origin-center"
            loading="lazy"
          />
          <div
            ref={textRef}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
              <span className="text-5xl md:text-7xl text-yellow-400">90%</span>
              <br />
             tələbələrimiz, BrightAcademy bitirdikdən sonra daha səlis danışır.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import Image from "next/image";

const logos = [
  { src: "/logos/abstract.png", alt: "Abstract" },
  { src: "/logos/aha.png", alt: "Aha" },
  { src: "/logos/cabot.png", alt: "Cabot" },
  { src: "/logos/creative.png", alt: "Creative" },
  { src: "/logos/dasani.png", alt: "Dasani" },
  { src: "/logos/fobo.png", alt: "Fobo" },
  { src: "/logos/hoski.png", alt: "Hoski" },
  { src: "/logos/invision.png", alt: "Invision" },
  { src: "/logos/jimador.png", alt: "Jimador" },
  { src: "/logos/liko.png", alt: "Liko" },
  { src: "/logos/mosion.png", alt: "Mosion" },
  { src: "/logos/power.png", alt: "Power" },
  { src: "/logos/simply.png", alt: "Simply" },
  { src: "/logos/super.png", alt: "Super" },
  { src: "/logos/tsa.png", alt: "TSA" },
  { src: "/logos/vision.png", alt: "Vision" },
];

export default function LogoCloud() {
  return (
    <section className=" overflow-hidden py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm hidden xl:block">
              Worked with
            </p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={60}>
              {logos.map((logo) => (
                <div
                  key={logo.alt}
                  className="flex h-12 w-auto items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 dark:invert"
                  />
                </div>
              ))}
            </InfiniteSlider>

            {/* <div className="bg-linear-to-r from-none absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-none absolute inset-y-0 right-0 w-20"></div> */}
            {/* <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-80"
              direction="left"
              blurIntensity={0.9}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

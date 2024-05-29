import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 ">
          <div className="flex flex-col justify-start gap-8">
            <h1 className="h1-bold">The best way to manage your events!</h1>
            <p className="p-regular-20 md:p-regular-24">
              Evently is a platform that helps you manage your events with ease.
              Create, manage, and share your events with the world.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Get Started</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="hero image"
            width={500}
            height={500}
            className="max-h-[70vh] object-contain 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section
        className="wrapper my-8 flex flex-col gap-8 md:gap-12 "
        id="events"
      >
        <h2 className="h2-bold">
          Trusted by <br />
          Thousands of events
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search CategoryFilter
        </div>
      </section>
    </>
  );
}

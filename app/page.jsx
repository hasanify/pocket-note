import Image from "next/image";
import TakingNotes from "../public/images/Taking notes-pana.svg";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section className="-mt-12 text-gray-600 body-font">
        <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="mb-4 font-medium text-gray-900 title-font">
              <h1 className="text-5xl sm:text-4xl">PocketNote</h1>
              <p className="text-xl">Your friendly neighborhood note app!</p>
            </h1>
            <p className="mb-8 leading-relaxed">
              Discover the ultimate note-taking experience with PocketNote!
              Seamlessly crafted with Next.js and powered by PocketBase,
              PocketNote is your friendly neighborhood note app designed to help
              you capture, organize, and explore your ideas effortlessly. With a
              user-friendly interface, customizable tags, and seamless
              synchronization across devices, PocketNote is your go-to platform
              for turning inspiration into reality. Whether you're a student, a
              professional, or just someone who loves to jot down thoughts on
              the go, PocketNote is here to be your creative canvas. Join us
              today and embark on a journey of organized creativity!
            </p>
            <div className="flex justify-center">
              <Link
                href={"/signup"}
                className="inline-flex px-6 py-2 text-lg font-semibold bg-yellow-400 border-0 rounded text-slate-800 focus:outline-none hover:bg-yellow-200"
              >
                Get Started!
              </Link>
            </div>
          </div>
          <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
            <Image
              alt="hero"
              className="object-cover object-center rounded"
              src={TakingNotes}
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
}

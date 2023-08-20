import Image from "next/image";
import TakingNotes from "../public/images/Taking notes-pana.svg";
import Link from "next/link";
const Home = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container flex flex-col items-center mx-auto md:flex-row">
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="mb-4 font-medium text-gray-900 title-font">
              <h1 className="text-5xl sm:text-4xl">PocketNote</h1>
              <p className="text-xl">Your friendly neighborhood note app!</p>
            </h1>
            <p className="mb-8 leading-relaxed">
              PocketNote, powered by Next.js and PocketBase, is the perfect
              note-taking solution for your ideas and thoughts. Organize, sync,
              and access your notes seamlessly. Join us in simplifying your
              note-taking experience today!
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
          <div className="w-72 lg:max-w-lg lg:w-full md:w-1/2">
            <Image
              alt="Illustration"
              className="hidden object-cover object-center rounded md:block"
              src={TakingNotes}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

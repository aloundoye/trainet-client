import { Fragment } from "react";
import Image from "next/image";
export default function Home() {
  return (
    <Fragment>
      <div className="flex justify-center bg-gray-300">
        <div className="mx-4 order-last">
          <Image
            className="rounded-full"
            src="/music.svg"
            alt="Music"
            width="100px"
            height="100px"
          />
        </div>
        <div className="mx-4 self-center text-center">
          <h1 className="text-6xl font-bold text-blue-700">
            Welcome to NorthBy
          </h1>
          <h2 className="text-3xl font-3xl font-semibold text-blue-300">
            A premium in sight and sound
          </h2>
          <button className="my-4 px-4 py-2 border-2 border-black rounded-lg text-white bg-blue-900">
            Learn More
          </button>
        </div>
      </div>
    </Fragment>
  );
}

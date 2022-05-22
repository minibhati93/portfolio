import Image from 'next/image';

export default function Introduction() {
  return (
    <section className="px-8 my-8" id="home">
      <div className="flex">
        <div className="w-8/12 mx-10">
          <h2 className="text-6xl my-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Mini Bhati
          </h2>
          <p className="leading-loose mt-8 tracking-wide font-medium w-10/12 text-gray-700">
            A UI/UX enthusiast currently working as a software engineer at
            Cisco. I ❤️ Angular and I am an active contributor to the Angular
            community. My interests lie in making the user experience memorable
            and performance optimization.
          </p>
          <p className="leading-loose mt-8 tracking-wide font-medium w-10/12 text-gray-700">
            In the past, I have been doing various engineering, and support
            roles delivering Angular applications in the finance and education
            domain.
          </p>
        </div>
        <figure className="block w-2/12 overflow-hidden rounded-full h-full">
          <Image
            width="80%"
            height="80%"
            layout="responsive"
            objectFit="contain"
            src="/assets/headshot.jpeg"
            priority="true"
          ></Image>
        </figure>
      </div>
      <div className="flex mt-6">
        <button className="shadow-md border text-sky-800 text-xl rounded-lg font-semibold mx-10 mr-4 mt-7 p-3 focus:ring-2 ring-blue-400">
          DM on Twitter
        </button>
        <button className="shadow-md border text-sky-800 text-xl rounded-lg font-semibold mt-7 p-3 focus:ring-2 ring-blue-400">
          Connect on Linkedin
        </button>
      </div>
    </section>
  );
}

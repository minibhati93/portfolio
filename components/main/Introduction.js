import Image from 'next/image';

export default function Introduction() {
  return (
    <section className="intro flex p-8">
      <div className="w-8/12 ml-20">
        <h2 className="text-6xl my-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Mini Bhati
        </h2>
        <p className="leading-loose mt-4 tracking-wide font-medium w-10/12	text-gray-700">
          A UI/UX enthusiast currently working as a software engineer at Cisco.
          I ❤️ Angular and I am an active contributor to the Angular community.
          My interests lie in making the user experience memorable and
          performance optimization. In the past, I have been doing various
          engineering, and support roles delivering Angular applications in the
          finance and education domain.
        </p>
      </div>
      <figure className="block w-2/12 overflow-hidden rounded-full">
        <Image
          width="80%"
          height="80%"
          layout="responsive"
          objectFit="contain"
          src="/assets/headshot.jpeg"
          priority="true"
        ></Image>
      </figure>
    </section>
  );
}

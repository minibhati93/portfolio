export default function About() {
  return (
    <section className="p-5 mt-5 md:p-8 md:mx-10" id="about">
      <h2 className="text-3xl my-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        About Me
      </h2>
      <div className="rounded-lg shadow-md border p-8">
        <p className="block leading-loose racking-wide font-medium text-gray-700">
          My name is Mini Bhati. I am a front end engineer based out of Kolkata,
          India 🇮🇳. I am currently working as a Software Engineer at Cisco. I
          have more than 7 years of experience in UI development.
        </p>
        <p className="hidden md:block leading-loose tracking-wide font-medium text-gray-700">
          In the past, I have worked in engineering teams delivering quality
          enterprise applications in Angular in the education and finance
          domains.
        </p>
        <br className="hidden md:block" />
        <p className="hidden md:block leading-loose tracking-wide font-medium text-gray-700">
          I love Angular and my work at Cisco involves me teaching, working and
          talking about it all the time. However, I like to explore other UI
          frameworks as well. I am active community contributer and spends time
          on twitter talking about my learnings.
        </p>
        <br className="hidden md:block" />
        <p className="block leading-loose tracking-wide font-medium text-gray-700">
          In my spare time, I like to read if not code. I love travelling and
          exploring various cuisines across the globe. I am ardent believer of
          living a healthy and happy life.
        </p>
      </div>
    </section>
  );
}

export default function Connect() {
  const socialMediaLinks = [
    { name: 'twitter', href: 'https://twitter.com/devminibhati' },
    { name: 'linkedin', href: 'https://www.linkedin.com/in/minibhati93/' },
    { name: 'hashnode', href: 'https://hashnode.com/@devminibhati' },
    { name: 'github', href: 'https://github.com/minibhati93' },
    { name: 'devto', href: 'https://dev.to/devminibhati' },
    { name: 'instagram', href: 'https://instagram.com/minibhati' },
  ];
  return (
    <section className="p-5 mt-5 md:p-8 md:mx-10" id="connect">
      <h2 className="text-3xl my-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        Connect With Me
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-0 md:gap-4 rounded-lg shadow-md border md:p-4">
        {socialMediaLinks.map((item) => {
          return (
            <article
              className="flex flex-col items-center pb-3"
              key={item.name}
            >
              <h2 className="uppercase leading-loose mt-4 md:mt-8 tracking-wide font-medium text-gray-700 hover:text-sky-900">
                {item.name}
              </h2>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
              >
                <img
                  src={`/assets/social-media/${item.name}.svg`}
                  alt={item.name}
                  className="w-10"
                />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

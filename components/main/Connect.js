export default function Connect() {
  const socialMediaLinks = [
    { name: 'twitter', href: 'https://twitter.com/devminibhati' },
    { name: 'linkedin', href: 'https://twitter.com/devminibhati' },
    { name: 'hashnode', href: 'https://twitter.com/devminibhati' },
    { name: 'github', href: 'https://twitter.com/devminibhati' },
    { name: 'devto', href: 'https://twitter.com/devminibhati' },
    { name: 'instagram', href: 'https://twitter.com/devminibhati' },
  ];
  return (
    <section className="p-8 mx-10 mt-5" id="connect">
      <h2 className="text-3xl my-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        Connect With Me
      </h2>
      <div className="grid grid-cols-6 gap-4 rounded-lg shadow-md border p-4">
        {socialMediaLinks.map((item) => {
          return (
            <article
              className="flex flex-col items-center pb-3 hover:shadow-md hover:rounded"
              key={item.name}
            >
              <h2 className="uppercase leading-loose mt-8 tracking-wide font-medium text-gray-700">
                {item.name}
              </h2>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={`/assets/social-media/${item.name}.svg`}
                  alt={item.name}
                  width="90px"
                  height="90px"
                />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

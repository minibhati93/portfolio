export default function Talks() {
  const talks = [
    {
      title: 'Dependency Injection',
      organiser: 'Angular Community Meetup',
      date: '17/05/2022',
      cover: 'dependencyInjection.png',
      slides: '',
      href: 'https://www.youtube.com/watch?v=cq08bFUrNAA',
    },
  ];

  const openUrl = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <section className="p-5 mt-5 md:p-8 md:mx-10" id="talks">
      <h2 className="text-3xl my-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        Talks
      </h2>
      <div className="grid grid-cols-4 gap-4 rounded-lg shadow-md border p-4">
        {talks.map((talk) => {
          return (
            <article className="flex flex-col items-center" key={talk.title}>
              <h2
                className="cursor-pointer uppercase leading-loose tracking-wide font-semibold text-gray-700"
                onClick={() => openUrl(talk.href)}
              >
                {talk.title}
              </h2>
              <img
                src={`/assets/talks/${talk.cover}`}
                alt={talk.title}
                onClick={() => openUrl(talk.href)}
                className="cursor-pointer"
              />
              <div className="flex justify-between w-full">
                <span className="leading-loose tracking-wide text-xs text-gray-700 font-medium">
                  {talk.date}
                </span>
                <a
                  href="https://twitter.com/angular_meetup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="leading-loose tracking-wide text-xs text-gray-700 font-medium hover:underline">
                    {talk.organiser}
                  </span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

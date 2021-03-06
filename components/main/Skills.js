export default function Skills() {
  const skills = [
    'angular',
    'javascript',
    'typescript',
    'sass',
    'ngrx',
    'git',
    'html5',
    'jquery',
    'vscode',
    'tailwind',
    'css',
    'karma',
    'jasmine',
    'jest',
  ];
  return (
    <section className="p-5 mt-5 md:p-8 md:mx-10" id="skills">
      <h2 className="text-3xl my-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        Skills
      </h2>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 md:gap-4 rounded-lg shadow-md border p-4">
        {skills.map((item) => {
          return (
            <article className="flex flex-col items-center" key={item}>
              <h2 className="uppercase leading-loose mt-2 md:mt-8 tracking-wide font-medium text-gray-700">
                {item}
              </h2>
              <img
                src={`/assets/skills/${item}.svg`}
                alt={item}
                className="w-10 h-15 md:w-20 md:h-60"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
}

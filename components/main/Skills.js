export default function Skills() {
  const skills = [
    'angular',
    'js',
    'ts',
    'sass',
    'ngrx',
    'git',
    'html',
    'jquery',
    'vscode',
    'tailwind',
    'css',
    'karma',
    'jasmine',
    'jest',
  ];
  return (
    <section className="p-8 ml-20 mt-5" id="skills">
      <h2 className="text-3xl my-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        Skills
      </h2>
      <div className="grid grid-cols-4 gap-4 rounded-lg shadow-md border p-4">
        {skills.map((item) => {
          return (
            <article className="flex flex-col items-center" key={item}>
              <h2 className="uppercase leading-loose mt-8 tracking-wide font-medium text-gray-700">
                {item}
              </h2>
              <img
                src={`/assets/skills/${item}.svg`}
                alt={item}
                width="90px"
                height="90px"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
}

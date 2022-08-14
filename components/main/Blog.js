import BlogItem from './BlogItem';

export default function Blog({ publications }) {
  let posts = publications.data.user.publication.posts;

  return (
    <section className="p-5 mt-5 md:p-8 md:mx-10" id="blog">
      <h2 className="text-3xl my-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        Blog Articles
      </h2>
      <div className="grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-4 rounded-lg shadow-md border p-4">
        {posts.map((post, index) => {
          return (
            <div key={index} className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <BlogItem post={post} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

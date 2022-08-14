export default function BlogItem({ post }) {
  const redirectToHashnode = () => {
    window.open('https://minibhati.hashnode.dev/' + post.slug, '_blank');
  };

  return (
    <article className="card mb-3 border-light" onClick={redirectToHashnode}>
      <style jsx>{`
        .card {
          cursor: pointer;
        }
      `}</style>
      <img
        alt={post.title}
        src={post.coverImage}
        className="img-fluid cursor-pointer"
      />
      <div className="card-body">
        <h3 className="card-title cursor-pointer uppercase leading-loose tracking-wide font-semibold text-gray-700 text-left">
          {post.title}
        </h3>
      </div>
    </article>
  );
}

export default function ProjectCard({ project }) {
  const { title, description, tags, shot, demo, code } = project;
  return (
    <article className="project">
      <div className={"shot " + shot} role="img" aria-label={`Screenshot placeholder for ${title}`}>{title}</div>
      <div className="pbody">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tags">{tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
        <div className="plinks">
          <a href={demo} aria-label={`Live demo of ${title}`}>Live demo</a>
          <a href={code} aria-label={`Code for ${title}`}>Code</a>
        </div>
      </div>
    </article>
  );
}

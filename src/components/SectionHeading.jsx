export default function SectionHeading({ title, description }) {
  return (
    <div className="head">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

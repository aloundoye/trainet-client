export default function Container(props) {
  return (
    <div className="md:container md:mx-auto md:px-16">{props.children}</div>
  );
}

export default function Link({url, name, klass}) {
  return (
    <a href={url} className={klass}>
      {name}
    </a>
  )
}

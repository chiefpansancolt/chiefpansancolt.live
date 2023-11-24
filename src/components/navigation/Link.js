import Link from 'next/link'

export default function aLink({ url, name, klass }) {
  return (
    <Link href={url}>
      <span className={klass}>{name}</span>
    </Link>
  )
}

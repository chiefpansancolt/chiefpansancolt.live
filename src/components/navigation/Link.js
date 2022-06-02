import Link from 'next/link'

export default function aLink({ url, name, klass }) {
  return (
    <Link href={url}>
      <a className={klass}>{name}</a>
    </Link>
  )
}

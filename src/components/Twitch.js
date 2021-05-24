import { useEffect } from 'react'
const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js'

export default function Twitch() {
  useEffect(() => {
    const script = document.createElement('script')
    script.setAttribute('src', EMBED_URL)
    script.addEventListener('load', () => {
      new window.Twitch.Embed('twitch-embed', {
        width: '100%',
        height: 500,
        channel: 'chiefpansancolt',
        parent: ['localhost'],
      })

      document.getElementsByTagName('IFrame')[0].classList.add('rounded-lg')
    })
    document.body.appendChild(script)
  }, [])

  return <div id="twitch-embed"></div>
}

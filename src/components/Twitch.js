'use client'

import { useRef } from 'react'
import { TwitchEmbed } from 'react-twitch-embed'

export default function Twitch() {
  const embed = useRef()

  const handleReady = (e) => {
    embed.current = e
  }

  return (
    <TwitchEmbed
      channel="chiefpansancolt"
      autoplay
      muted
      withChat
      darkMode={true}
      hideControls
      onVideoReady={handleReady}
      width="100%"
    />
  )
}

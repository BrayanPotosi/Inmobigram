import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://imgurl.me/images/2020/06/21/facebookb431649c9fa369f0.png'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)

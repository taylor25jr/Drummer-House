import React from 'react'
import "./SocialFooter.css"
import { FacebookIcon } from '../Svg/Facebook'
import { InstagramIcon } from '../Svg/Instagram'
import { WhatsappIcon } from '../Svg/Whatsapp'

export const SocialFooter = () => {
  return (
    <div className='social__footer'>
        <FacebookIcon/>
        <InstagramIcon/>
        <WhatsappIcon/>
    </div>
  )
}

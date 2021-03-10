import { NextSeo } from 'next-seo'
import AboutUs from '../components/AboutUs/AboutUs'


export default function AboutMe(page) {
  const SEO = {
    title: 'Labor Staffer | About',
    description: 'Just your normal about page',

    openGraph: {
      title: 'Labor Staffer | About',
      description: 'Just your normal about page',
    }
  }



  return (
    <div>
      <NextSeo {...SEO} />
       <AboutUs />
    </div>
  )
}

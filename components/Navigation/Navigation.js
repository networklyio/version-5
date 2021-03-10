import React from 'react'
import  Link from 'next/link'
import { parseCookies  } from 'nookies'


export default function Navigation({navigation}) {
  const jwt = parseCookies(ctx).jwt 
  const isNotLog =(!jwt || jwt==='undefined' || jwt === '')
  
  return (
   <ul>
     {navigation.map(item =>(
       <li key={item.id}>
         <Link href={item.slug}><a>{item.page}</a></Link>
       </li>
     ))}
   </ul>
  )
}

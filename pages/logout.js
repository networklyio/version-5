import HeaderJobs from '../components/HeaderJobs/HeaderJobs'
import nookies, { parseCookies,destroyCookie } from 'nookies'
import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/router"
import AboutUs from '../components/AboutUs/AboutUs'
import HeadersJob from '../components/HeaderJobs/HeaderJobs'
import Router from 'next/router'
import { setCookie } from 'nookies'
import Swal from 'sweetalert2'
import redirect from 'nextjs-redirect'


import React from 'react'

export default function logout() {
  const Redirect = redirect('/', { statusCode: 302 })

 const [count, setCount] = useState(0)
    setCookie(null, 'jwt', undefined, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
})  



  return (
    <Redirect>
  <HeaderJobs>Redirecting to google!</HeaderJobs>
</Redirect>
  )
}


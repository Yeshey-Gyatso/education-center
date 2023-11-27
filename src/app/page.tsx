"use client"
import React from 'react'
import PageSelector from './components/pageselector'
import { RecoilRoot } from 'recoil'

const MyApp = () => {
  return (
    <RecoilRoot>
    <PageSelector/>
    </RecoilRoot>
    
  )
}

export default MyApp
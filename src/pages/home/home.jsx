import React from 'react'
import Header from '../../components/header/header'
import Sidebar from "../../components/sidebar/sidebar"
import Posts from "../../components/posts/posts"
import "./home.css"
export default function home() {

  return (
    <>
    <Header />
    <div className='home'>
    <Posts/>
    <Sidebar />
    </div>
    </>
  )
}

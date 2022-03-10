import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import {Sidebar} from '../components/sidebar'
import {Header} from '../components/header'
import {Realtors} from '../components/realtors'
import {Features} from '../components/features'
import {Story} from '../components/story'
import {Homes} from '../components/homes'
import {Gallery} from '../components/gallery'
import {Footer} from '../components/footer'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  )
}

export default Home

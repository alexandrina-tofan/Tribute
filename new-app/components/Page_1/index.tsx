import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Script from 'next/script'
import Image from 'next/image'
import tributeImage from '../images/tribute-page-main-image.jpg'

function Home(): JSX.Element {
  return (
      <><div id="main">
          <Head>
              <title>Tribute Page</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700;display=swap" rel="stylesheet" />
          </Head>
          <section>
              <div className="main-section">
                  <h1 className="tribute">TRIBUTE</h1>
                  <h1 id="title">Dr. Norman Borlaug</h1>
                  <figure id="img-div">
                      <Image src ={tributeImage} alt="tribute-image"/>
                      <caption id="img-caption">Dr. Norman Borlaug, third from the left, trains biologists in Mexico on how to increase wheat yields - part of his life-long war on hunger.</caption>
                  </figure>
                  <p id="tribute-info">The man who saved a billion lives</p>
                  <p id="years">1914 - 2009</p>
                  <a id="tribute-link" href="" target="_blank">About</a>
                  <a id="tribute-link1" href="" target="_blank">Info</a>
              </div>
          </section>
            <br></br>
      </div><Script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></Script></>
  )
}

export default Home
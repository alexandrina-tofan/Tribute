import type { NextPage } from 'next'
import Image from 'next/image';
import Page_one from '../components/Page_1';
import Head from '../components/Head';
import Page_two from '../components/Page_2';
import { styled } from '@mui/system';

const Home: NextPage = () => {
    return (
      <div >
        <Head />
        <Page_one />
        <Page_two />
      </div>
     
    )
  }
  
  
  export default Home;
  

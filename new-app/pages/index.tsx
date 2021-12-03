import type { NextPage } from 'next'
import Image from 'next/image';
import Page_one from '../components/Page_1';
import Page_two from '../components/Page_2';
import { styled } from '@mui/system';
import Page_three from '../components/Page_3';
import Page_four from '../components/Page_4';
import Page_five from '../components/Page_5';
import Page_six from '../components/Page_6';

const Home: NextPage = () => {
    return (
      <div >
        <Page_one />
        <Page_two />
        <Page_three />
        <Page_four />
        <Page_five />
        <Page_six />

      </div>
     
    )
  }
  
  
  export default Home;
  

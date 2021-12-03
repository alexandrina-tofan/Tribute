import styled from '@emotion/styled';

 const Page_one = styled.div`
.center {
  display: flex;
  justify-content: center;
}

a {
  color: inherit;
}


.backgroundp1 {
position: relative;
height: 1024px;
width: 1442px;
margin: 0;
  padding: 0; 

background: #3A4A69;

}

.backgroundw1 {
  position: absolute;
  left: 184px;
  right: 0px;
  top: 9.96%;
  bottom: 10.55%;
  
  background: #FFFFFF;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25);
}

ul, li {
  display: inline;
}

#tribute {
  position: absolute;
  width: 374px;
  height: 62px;
  left: 150px;
  top: 80px;
  
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;
  letter-spacing: 0.285em;
  
  color: #000000;
  
  text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);

}
#about{
position: absolute;
width: 111px;
height: 24px;
right: 300px;
top: 90px;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;

color: #000000;
}

#info{
position: absolute;
width: 63px;
height: 24px;
right: 200px;
top: 90px;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 29px;

color: #000000;


}

.main-image{

position: absolute;
width: 522.57px;
height: 347px;
left: 150px;
top: 200px;

background: url('/public/imageName.png');
filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.25));
}

.first-arrow{
position: absolute;
width: 30px;
height: 45px;
left: 600px;
top: 760px;
}

.main-grid{
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}

#name {
position: absolute;
width: 384px;
height: 50px;
right: 150px;
top: 150px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 43px;
line-height: 50px;

color: #000000;
}

#quote {
position: absolute;
width: 384px;
height: 88px;
right: 150px;
top: 270px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 42px;
letter-spacing: 0.085em;

color: #000000;
}

#years {
position: absolute;
width: 344px;
height: 75px;
left: 715px;
top: 345px;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 64px;
line-height: 75px;
color: rgba(58, 84, 138, 0.87);
}

#description {
position: absolute;
width: 522px;
height: 69px;
left: 150px;
top: 570px;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 19px;
line-height: 22px;

color: #000000;
}
`
export default Page_one;


import styled from '@emotion/styled';

export const Page_six = styled.div`
.center{
    display: flex;
    justify-content: center;
}
.purple-background-6{
    position: relative;
    width: 1442px;
    height: 1024px;
    
    background: #3A4A69;
    }
    
    .background-white-6{
      position: absolute;
      left: 0px;
      right: 138px;
      top: 10.16%;
      bottom: 10.16%;
      
      background: #FFFFFF;
      box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25);
    }
    .date-1-page-6{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px;
      
      position: absolute;
      width: 561px;
      left: calc(50% - 561px/2 - 80.5px);
      top: 18.07%;
      bottom: 76.76%;
      
      background: #B2BDD2;
      box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
    }
    .text-1-page-6{
      position: absolute;
      width: 496.41px;
      top: 210px;
      left: 350px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      color: #000000;
    }
    .image-1-page-6{
      position: absolute;
      left: 380px;
      width: 446px;
      height: 245px;
      top: 450px;
      
      background: url('/public/imageName.png');
      filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.25));
    }
    .year-1-page-6{
      position: absolute;
      width: 146px;
      height: 75px;
      left: 510px;
      top: 260px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 64px;
      line-height: 75px;
      color: rgba(58, 84, 138, 0.87);
    }
    .date-2-page-6{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 5px;
      width: 200px;
      position: absolute;
      left: 472px;
      right: 697px;
      top: 700px;
      left: calc(50% - 200px/2 - 60px);
      background: rgba(83, 106, 153, 0.49);
      box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
    }
    .footer{
      position: absolute;
      width: 402px;
      height: 28px;
      left: calc(50% - 402px/2);
      top: 865px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 23px;
      text-align: right;
      color: #FFFFFF;
    }
`

export default Page_six;
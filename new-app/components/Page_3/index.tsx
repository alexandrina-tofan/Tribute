import Image from "next/dist/client/image";
import { Page_three } from "./styled";

const Page_3 = () => {
    return (
        <Page_three>
        <div className="final-pg-3">
            <div className="center">
            <div className="first-pass"></div>
            </div>

            <div className="center">
            <div className="purple-background-3">
                <div className="background-white-3">
                <div className="grid-page-3">
                    <div className="grid-div-3">
                    <div className="date-1-page-3"><p id="date-1-page-3">  1935 Civilian Conservation Corps</p></div>
                    <div className="text-1-page-3"><p id="text-1-page-3">Stop school<br/>Norman Bourlaug has to stop school and<br/>save up more money. Works in the Civilian Conservation Corps, helping starving Americans.<br/>I saw how food changed them, he said. <br/>All of this left scars on me.<br/></p></div>
                    </div>
                    <div className="image1-page3"><Image src="/foto natonal forest service.png" alt="image 2 page 3" width={470} height={227} /></div>
                    <div className="year-1-page-3"><p id="year-1-page-3">1935</p></div>
                    <div className="year-2-page-3"><p id="year-2-page-3">1937</p></div>
                    <div className="image2-page3"><Image src="/FOTO WORK IN THE FOREST.png" alt="image 1 page 3" width={401} height={243} /></div>
                    <div className="grid-div-4">
                    <div className="date-2-page-3"><p id="date-2-page-3">    1937  US Forestry Service</p></div>
                    <div className="text-2-page-3"><p id="text-2-page-3">Norman Bourlaug finishes university and takes <br/>a job in the US Forestry Service</p></div>
                    <div className="arrow-page-3-up"><a href="#date-2"><Image src="/down arrow.png" alt="main image" width={30} height={45} /></a></div>
                    <div className="arrow-page-3-down"><a href="#date-1-page-4"><Image src="/down arrow.png" alt="main image" width={30} height={45} /></a></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </Page_three>
    )
}


export default Page_3;
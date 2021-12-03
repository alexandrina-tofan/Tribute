import Image from "next/dist/client/image";
import { Page_four } from "./styled";

const Page_4 = () => {
    return (
        <Page_four>
        <div className="final-pg-4">
                <div className="center">
                    <div className="first-pass"></div>
                    </div>

                    <div className="center">
                    <div className="purple-background-4">
                        <div className="background-white-4">
                        <div className="grid-page-4">
                            
                            <div className="image1-page4"><Image src="/foto more women.png" alt="image 1 page 2" width={474} height={239} /></div>
                            <div className="grid-div-5">
                            
                            <div className="date-1-page-4"><p id="date-1-page-4">  Norman Bourlaug marries</p></div>
                            <div className="text-1-page-4"><p id="text-1-page-4">1938    Norman Bourlaug marries his 24-year-old <br /> wife, Margret Gibson. It is made available due to <br />   budget cuts. Inspired by Elvin Charles Stakman, <br /> he returns to school under Stakman, who teaches <br /> him how to grow pest-resistant plants.</p></div>
                            
                            </div>
                            <div className="year-1-page-4"><p id="year-1-page-4">1938</p></div>
                            <div className="year-2-page-4"><p id="year-2-page-4">1944</p></div>


                            
                            <div className="grid-div-6">
                            <div className="date-2-page-4"><p id="date-2-page-4"> Norman Bourlaug in  Mexico <br />head a new plant pathology program</p></div>
                            <div className="text-2-page-4"><p id="text-2-page-4">1944 Norman Bourlaug rejects a 100% salary increase <br /> from Dupont, leaves behind his pregnant wife, and flies to Mexico to <br /> head a new plant pathology program. <br />Over the next 16 years, his team breeds 6,000 different <br /> strains of disease resistent wheat - including different <br /> varieties for each major climate on Earth.</p></div>
                            </div>
                            <div className="image2-page4"><Image src="/wife.png" alt="image 2 page 2" width={389.89} height={243} /></div>
                            <div className="arrow-page-4-up"><a href="#date-2-page-3"><Image src="/down arrow.png" alt="main image" width={30} height={45} /></a></div>
                            <div className="arrow-page-4-down"><a href="#date-2-page-5"><Image src="/down arrow.png" alt="main image" width={30} height={45} /></a></div>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
        </Page_four>
    )
}

export default Page_4;
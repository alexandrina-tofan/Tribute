import Image from "next/dist/client/image";
import { Page_five } from "./styled";

const Page_5 = () => {
    return (
        <Page_five>
        <div className="final-pg-5">
                <div className="center">
                    <div className="first-pass"></div>
                    </div>

                    <div className="center">
                    <div className="purple-background-5">
                        <div className="background-white-5">
                        <div className="grid-page-5">
                            <div className="grid-div-7">
                            <div className="date-1-page-5"><p id="date-1-page-5">   Norman Bourlaug visits Delhi</p></div>
                            <div className="text-1-page-5"><p id="text-1-page-5">1962 Norman Bourlaug Visits Delhi and brings his <br /> high-yielding strains of wheat to the Indian <br /> subcontinent in time to help mitigate mass <br /> starvation due to a rapidly expanding population</p></div>
                            </div>
                            <div className="image1-page5"><Image src="/speaks.png" alt="image 2 page 5" width={480} height={230} /></div>
                            <div className="year-1-page-5"><p id="year-1-page-5">1962</p></div>
                            <div className="year-2-page-5"><p id="year-2-page-5">2005</p></div>
                            <div className="image2-page5"><Image src="/people.png" alt="image 1 page 5" width={401} height={243} /></div>
                            <div className="grid-div-8">
                            <div className="date-2-page-5"><p id="date-2-page-5">Norman Borlaugs 2005 speech</p></div>
                            <div className="text-2-page-5"><p id="text-2-page-5">Norman Bourlaug finishes university and takes <br/>a job in the US Forestry Service</p></div>
                            <div className="arrow-page-5-up"><a href="#date-2-page-4"><Image src="/down arrow.png" alt="main image" width={30} height={45} /></a></div>
                            <div className="arrow-page-5-down"><a href="#date-1-page-6"><Image src="/down arrow.png" alt="main image" width={30} height={45} /></a></div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
        </Page_five>
    )
}

export default Page_5;
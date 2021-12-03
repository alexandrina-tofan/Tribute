import Image from "next/dist/client/image";
import { Page_two } from "./styled";

const Page_2 = () => {
    return (
        <Page_two>
            <div className="final-pg-2">
                    <div className="center">
                <div className="first-pass"></div>
                </div>

                <div className="center">
                <div className="purple-background-2">
                    <div className="background-white-2">
                    <div className="grid-page-2">
                        <div className="grid-div-2">
                        <div className="date-1"><p id="date-1"> March 25, 1914 Born in Cresco, Iowa</p></div>
                        <div className="text-1"><p id="text-1">Norman Borlaug was born to Henry Oliver<br/> (1889–1971) and Clara (Vaala) Borlaug <br/> (1888–1972) on his grandparents farm in Saude <br/> in 1914, the first of four children. His three sisters <br/> were Palma Lillian (Behrens; 1916–2004),<br/>  Charlotte (Culbert; b. 1919) and Helen (b. 1921).</p></div>
                        </div>
                        <div className="image1-page2"><Image src="/FOTO UNIVERSITY.png" alt="image 1 page 2" width={544.86} height={227} /></div>
                        <div className="year-1"><p id="year-1">1914</p></div>
                        <div className="year-2"><p id="year-2">1933</p></div>
                        <div className="image2-page2"><Image src="/FOTO WITH THE FAMILY.png" alt="image 2 page 2" width={389.89} height={243} /></div>
                        <div className="grid-div-3">
                        <div className="date-2"><p id="date-2"> 1933 - Norman Bourlaug Admission to the Minnesota University</p></div>
                        <div className="text-2"><p id="text-2">1933 - Norman Bourlaug leaves his familys farm to attend the University of Minnesota, thanks to a Depression era program known as the National Youth Administration</p></div>
                        <div className="arrow-page-2-up"><a href="#navBar"><Image src="/down arrow.png" alt="main image" width={30} height={45} /></a></div>
                        <div className="arrow-page-2-down"><a href="#date-1-page-3"><Image src="/down arrow.png" alt="main image" width={30} height={45} /></a></div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        </Page_two>
    )
}

export default Page_2;
import Image from "next/dist/client/image";
import { Page_six } from "./styled";

const Page_6 = () => {
    return (
        <Page_six>
        <div className="final-pg-6">
                 <div className="center">
                    <div className="first-pass"></div>
                    </div>

                    <div className="center">
                    <div className="purple-background-6">
                        <div className="background-white-6">
                        <div className="date-1-page-6"><p> Norman Bourlaug dies</p></div>
                        <div className="text-1-page-6"><p>2009 Norman Bourlaug dies at the age of 95.</p></div>
                        <div className="year-1-page-6"><p>2009</p></div>
                        <div className="image-1-page-6"><Image src="/foto N.B. in the green plants.png" alt="foto N.B. in the green plants" width={446} height={245}></Image></div>
                        <div className="date-2-page-6"> <p> More info on the wikipedia</p> </div>
                            
                        <div className="footer">©2021 Gurau Cristian. All Rights Reserved</div>
                        
                    </div>
                    </div>
             </div>
        </div>
        </Page_six>
    )
}

export default Page_6;
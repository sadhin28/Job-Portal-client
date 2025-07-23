import img1 from '../assets/user/microsoft.png'
import img2 from '../assets/user/adobe.png'
import img3 from '../assets/user/adp.png'
import img4 from '../assets/user/broadcom.png'
import img5 from '../assets/user/fiserv.png'
import img6 from '../assets/user/ibm.png'
import img7 from '../assets/user/oracal.png'
import img8 from '../assets/user/salesforce.png'
import img9 from '../assets/user/sap.png'
import img10 from '../assets/user/vmware.png'
import Marquee from 'react-fast-marquee'
const ToptenCompany = () => {
    const images =[
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,

    ]
    return (
        <div className='bg-gray-100 py-4 mb-5'>
            <Marquee pauseOnHover={true} speed={50}>
                {
                    images.map((src,index)=>(
                    <img
                    key={index}
                    src={src}
                    alt={`Logo ${index+1}`}
                    className='mx-6 w-28 h-auto object-contain'
                    />
                    
                    ))
                }
            </Marquee>
        </div>
    );
};

export default ToptenCompany;
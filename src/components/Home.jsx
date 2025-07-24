import Banner from "./Banner";
import JobIndustry from "./JobIndustry";
import ToptenCompany from "./ToptenCompany";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <div>
             <h1 className="text-center py-10 font-bold  md:text-2xl">Top 10 Largest Software Companies In The World</h1>
             <ToptenCompany></ToptenCompany>
           </div>
           <JobIndustry></JobIndustry>
        </div>
    );
};

export default Home;
import FeaturedJob from "../ElemetntCompo/FeaturedJob/FeaturedJob";
import HeroBanner from "../ElemetntCompo/HeroBanner";
import JobCategoryList from "../ElemetntCompo/JobCategoryList/JobCategoryList";

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <JobCategoryList></JobCategoryList>
            <FeaturedJob></FeaturedJob>

        </div>
    );
};

export default Home;
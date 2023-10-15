import './home.css';
import FeaturedInfo from '../../featuredinfo/FeaturedInfo';
import Chart from '../../chart/chart';

function Home(){
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart />
        </div>
    )
}

export default Home;
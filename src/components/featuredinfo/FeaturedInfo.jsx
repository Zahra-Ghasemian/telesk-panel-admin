import "./featuredInfo.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownwardIcon className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">sale</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$5.415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownwardIcon className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1.415</span>
          <span className="featuredMoneyRate">
            1.4 <ArrowUpwardIcon className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">compared to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
import "./featuredInfo.css"
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"
export default function FeaturedInfo() {
    return (
        <div className="featuredInfo">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2.55</span>
                    <span className="featuredMoneyRate">-12.55<ArrowDownward className="featuredIcon negative"/> </span>
                </div>
                <span className="featuredSub">Compere to lest month</span>
            </div>
            
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2.55</span>
                    <span className="featuredMoneyRate">-10.55<ArrowDownward className="featuredIcon negative"/> </span>
                </div>
                <span className="featuredSub">Compere to lest month</span>
            </div>


            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2.55</span>
                    <span className="featuredMoneyRate">+20.55<ArrowUpward className="featuredIcon "/> </span>
                </div>
                <span className="featuredSub">Compere to lest month</span>
            </div>
        </div>
    )
}

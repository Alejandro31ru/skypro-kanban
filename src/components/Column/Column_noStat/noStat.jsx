import CardCopywriting from "../../Card/Card_Copywriting/cardCopywriting";
import CardResearch from "../../Card/Card_Research/cardResearch"
import CardWebDesign from "../../Card/Card_Web-Design/cardWebDesign"

const NoStat = () => {
    return (
        <div className="main__column column">
        <div className="column__title">
            <p>Без статуса</p>
        </div>
        <div className="cards">
            {CardWebDesign()}
            {CardResearch()}
            {CardWebDesign()}   
            {CardCopywriting()}
            {CardWebDesign()}   
        </div>
    </div>

    );
};

export default NoStat;
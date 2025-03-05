import CardCopywriting from "../../Card/Card_Copywriting/cardCopywriting";
import CardResearch from "../../Card/Card_Research/cardResearch"
import CardWebDesign from "../../Card/Card_Web-Design/cardWebDesign"

const AtWork = () => {
    return (
        <div className="main__column">
        <div className="column__title">
            <p>В работе</p>
        </div>
        <div className="cards">
            {CardResearch()}
            {CardCopywriting()}
            {CardWebDesign()}
        </div>
    </div>
    );
};

export default AtWork;
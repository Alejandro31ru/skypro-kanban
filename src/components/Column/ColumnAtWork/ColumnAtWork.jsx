import CardCopywriting from "../../Card/CardCopywriting/CardCopywriting";
import CardResearch from "../../Card/CardResearch/CardResearch"
import CardWebDesign from "../../Card/CardWebDesign/CardWebDesign"

const AtWork = () => {
    return (
        <div className="main__column">
        <div className="column__title">
            <p>В работе</p>
        </div>
        <div className="cards">
            <CardResearch/>
            <CardCopywriting/>
            <CardWebDesign/>
        </div>
    </div>
    );
};

export default AtWork;
import CardCopywriting from "../../Card/CardCopywriting/CardCopywriting";
import CardResearch from "../../Card/CardResearch/CardResearch"
import CardWebDesign from "../../Card/CardWebDesign/CardWebDesign"

const NoStat = () => {
    return (
        <div className="main__column column">
        <div className="column__title">
            <p>Без статуса</p>
        </div>
        <div className="cards">
            <CardWebDesign/>
            <CardResearch/>
            <CardWebDesign/>   
            <CardCopywriting/>
            <CardWebDesign/>   
        </div>
    </div>

    );
};

export default NoStat;
import CardResearch from "../../Card/Card_Research/cardResearch";

const Testing = () => {
    return (
        <div className="main__column">
        <div className="column__title">
            <p>Тестирование</p>
        </div>
        <div className="cards">
            {CardResearch()}
        </div>
    </div>
    );
};

export default Testing;
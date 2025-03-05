import CardResearch from "../../Card/Card_Research/cardResearch";

const Done = () => {
    return (
        <div className="main__column">
        <div className="column__title">
            <p>Готово</p>
        </div>
        <div className="cards">
            {CardResearch()}
        </div>
    </div>
    );
};

export default Done;
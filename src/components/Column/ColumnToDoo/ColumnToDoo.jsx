import CardResearch from "../../Card/CardResearch/CardResearch";

const ToDoo = () => {
    return (
        <div className="main__column">
        <div className="column__title">
            <p>Нужно сделать</p>
        </div>
        <div className="cards">
            <CardResearch/>
        </div>
    </div>
    );
};

export default ToDoo;
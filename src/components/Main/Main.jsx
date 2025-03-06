import NoStat from '../Column/ColumnNoStat/ColumnNoStat'
import ToDoo from '../Column/ColumnToDoo/ColumnToDoo'
import AtWork from '../Column/ColumnAtWork/ColumnAtWork'
import Testing from '../Column/ColumnTesting/ColumnTesting'
import Done from '../Column/ColumnDone/ColumnDone';

const Main = () => {
    return (
        <main className="main">
        <div className="container">
            
            <div className="main__block">
                <div className="main__content">
                    <NoStat/>
                    <ToDoo/>
                    <AtWork/>
                    <Testing/>
                    <Done/>
                </div>
            
            </div>
        </div>
    </main>
    );
};

export default Main;
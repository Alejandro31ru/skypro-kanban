import NoStat from '../Column/Column_noStat/noStat'
import ToDoo from '../Column/Column_toDoo/toDoo'
import AtWork from '../Column/Column_atWork/atWork'
import Testing from '../Column/Column_testing/testing'
import Done from '../Column/Column_done/done';

const Main = () => {
    return (
        <main className="main">
        <div className="container">
            
            <div className="main__block">
                <div className="main__content">
                    {NoStat()}
                    {ToDoo()}
                    {AtWork()}
                    {Testing()}
                    {Done()}                    
                </div>
            
            </div>
        </div>
    </main>
    );
};

export default Main;
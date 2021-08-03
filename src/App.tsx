//Redux
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators, State } from './state';

function App() {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(ActionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank) //Getting bank bc it was named in reducers/index
  return (
    <div className="app-wrapper">
      <h1 className="title-app">Redux / Typescript | ATM</h1>
      <hr />
      <div className="App">
        <h1 className="amount">{amount}</h1>
        <button className="deposit" onClick={() => depositMoney(1000)}>Deposit</button>
        <button className="withdraw" onClick={() => withdrawMoney(500)}>Withdraw</button>
        <button className="bankrupt" onClick={() => bankrupt()}>Bankrupt</button>
      </div>
    </div>
  );
}

export default App;

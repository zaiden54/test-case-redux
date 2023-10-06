import axios from "axios";
import { useEffect } from "react";
import { requestInfo } from "./features/redux/cryptoSlice";
import { useAppDispatch, useAppSelector } from "./features/redux/hooks";
import { CurrencyType } from "./types/CryptoTypes";

interface CryptoProps {
  // info: CryptoSliceType;
  currencies: CurrencyType[]
}

const Crypto = ({ currencies }: CryptoProps): JSX.Element => {
  return (
    <div className="inner-container">
        {currencies.map(curr => {
          return (
            <p>{`${curr.volume} ${curr.unit}`}</p>
          )
        })}
    </div>
  );
};

export default function App() {
  const dispatch = useAppDispatch();

  const crypto = useAppSelector((state) => state.crypto);

  useEffect(() => {
    axios.get("/response.json").then((res) => dispatch(requestInfo(res.data)));
  }, []);

  return (
    <div className="App">
      {Object.keys(crypto).map((item) => {
        return (
          <div className="container">
            <h3>{item}</h3>
            <Crypto currencies={crypto[item]} />
          </div>
        );
      })}
    </div>
  );
}

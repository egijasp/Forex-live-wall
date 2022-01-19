import { FaSearch } from 'react-icons/fa';
import React, { useState } from 'react';
import axios from 'axios';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Table from '../components/Table/Table';
import { ForexData, CurrencyData } from '../helpers/types';
import '../styles/ForexLiveWall.scss';
import Loading from '../components/Loading/Loading';

const APIKEY = '0967641bfcb7274aa000ad67543b1ee2';
const URL = `https://financialmodelingprep.com/api/v3/forex?apikey=${APIKEY}`;

const ForexLiveWall = () => {
  const [forexData, setForexData] = useState<CurrencyData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);

  const getForexData = () => {
    axios.get<ForexData>(`${URL}`)
      .then((res) => {
        setForexData(res.data.forexList);
        setIsLoading(false);
      }).catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  const filterData = forexData.filter((item) => item.ticker.toLowerCase().includes(searchQuery.toLowerCase()));

  const submitHandler = () => {
    if (!searchQuery) {
      return;
    }
    setIsLoading(true);
    getForexData();
    const timer = setInterval(() => {
      getForexData();
    }, 10000);
    // eslint-disable-next-line consistent-return
    return () => {
      clearInterval(timer);
    };
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <header className="live-wall__header">
        <h1
          className="heading1"
        >
          Forex Live Wall
        </h1>
      </header>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <Input
          type="text"
          placeholder="Enter currency name"
          value={searchQuery}
          onChange={changeHandler}
        />
        <Button>
          <FaSearch />
        </Button>
      </form>
      {error && <span className="live-wall__error">{error}</span>}
      {!isLoading ? (
        <Table
          data={filterData}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ForexLiveWall;

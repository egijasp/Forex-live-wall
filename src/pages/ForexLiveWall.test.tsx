// eslint-disable-next-line import/no-extraneous-dependencies
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react';
import ForexLiveWall from './ForexLiveWall';
import { CurrencyData } from '../helpers/types';

const forexData: CurrencyData[] = [
  {
    ticker: 'EUR/USD',
    bid: '1.14154',
    ask: '1.14154',
    changes: -0.0035526924520561257,
  }, {
    ticker: 'USD/JPY',
    bid: '114.185',
    ask: '114.185',
    changes: -8.757641041850795E-6,
  }, {
    ticker: 'GBP/USD',
    bid: '1.36818',
    ask: '1.36818',
    changes: -0.0023697891981362337,
  }, {
    ticker: 'EUR/GBP',
    bid: '0.83442',
    ask: '0.83442',
    changes: -0.001161134320496912,
  },
];

it('renders correctly', () => {
  const component = renderer
    .create(<ForexLiveWall />)
    .toJSON();
  expect(component).toMatchSnapshot();
});

describe('<ForexLiveWall />', () => {
  it('should render', () => {
    render(<ForexLiveWall />);

    expect(screen.queryByText('Forex Live Wall')).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('Enter currency name')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('should focused search input', () => {
    render(<ForexLiveWall />);

    expect(screen.queryByPlaceholderText('Enter currency name')).toHaveFocus();
  });

  it('should be able to fill search field', () => {
    render(<ForexLiveWall />);

    const searchInput = screen.getByPlaceholderText('Enter currency name');

    fireEvent.change(searchInput, { target: { value: 'GBP' } });

    expect(searchInput).toHaveValue('GBP');
  });

  it('should be able click button', () => {
    render(<ForexLiveWall />);

    fireEvent.click(screen.getByRole('button', { name: /search/i }));
  });
});

describe('filterData works correctly', () => {
  it('should return filtered forexData by search word "eur"', () => {
    const searchWord = 'eur';
    const result = forexData.filter((item) => item.ticker.toLowerCase().includes(searchWord.toLowerCase()));

    const resultArray = [
      {
        ticker: 'EUR/USD',
        bid: '1.14154',
        ask: '1.14154',
        changes: -0.0035526924520561257,
      }, {
        ticker: 'EUR/GBP',
        bid: '0.83442',
        ask: '0.83442',
        changes: -0.001161134320496912,
      },
    ];

    expect(result).toEqual(resultArray);
  });
});

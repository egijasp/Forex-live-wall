import renderer from 'react-test-renderer';
import Table from './Table';

const testData = [{
  ticker: 'EUR/USD',
  bid: '1.14154',
  ask: '1.14154',
  changes: -0.0035526924520561257,
}, {
  ticker: 'USD/JPY',
  bid: '114.185',
  ask: '114.185',
  changes: -8.757641041850795E-6,
},
];

it('renders correctly', () => {
  const component = renderer
    .create(<Table data={testData} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});

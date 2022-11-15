import Axios from 'axios';

const CoinList = ({ coinData }) => {
  console.log(coinData);
  return <div></div>;
};

export const getStaticProps = async () => {
  const data = await Axios.get(
    'https://api.coinstats.app/public/v1/coins?skip=0'
  );
  return {
    props: {
      coinData: data.data,
    },
  };
};
export default CoinList;

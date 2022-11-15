import axios from 'axios';

const CoinList = () => {
  return <div></div>;
};

getStaticProps;
export const getStaticProps = async () => {
  const data = await axios.get(
    'https://api.coinstats.app/public/v1/coins?skip=0'
  );
  return {
    props: {
      coindData: data.data,
    },
  };
};
export default CoinList;

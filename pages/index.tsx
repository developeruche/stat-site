import type { NextPage } from 'next';
import Head from 'next/head';
import {SetStateAction, useEffect, useState} from "react";
import Center from '../components/Center';
import Page from '../components/Layout';
import PopModal from '../components/Modal';
import Right from '../components/Right';
import {get_chain, get_balances, get_transaction} from "../utils/action";
import {
  useAccount,
} from 'wagmi';


const Home: NextPage = () => {
  const [chains, setChains] = useState(null);
  const [nft, setNft] = useState(null);
  const [crypto, setCrypto] = useState(null);
  const [stablecoin, setStablecoin] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const [chainName, setChainName] = useState("Ethereum Mainnet");
  const [chainId, setChainId] = useState("1");
  const [popModal, setPopModal] = useState(false);
  const [bal, setBal] = useState(null);
  const [pieData, setPieData] = useState(null);

  const { address } = useAccount();
  const [address_demo] = useState("demo.eth");

  const popSwitch = () => {
    setPopModal(!popModal);
  };

  const reportee = (x: string, y: any) => {
    setChainName(x);
    setChainId(y);
  };

  const _get_chain = async () => {
    let res : SetStateAction<any> = await get_chain();
    setChains(res);
  }

  const _get_balance = async (chainId: string, address: string) => {
    let [r_cryptocurrency, r_stablecoin, r_nft, asset__value, pie_data] = await get_balances(chainId, address);
    setCrypto(r_cryptocurrency);
    setStablecoin(r_stablecoin);
    setNft(r_nft);
    setBal(asset__value);
    setPieData(pie_data);

  }

  const _get_transaction = async (chainId: string, address: string) => {
    let res : SetStateAction<any> = await get_transaction(chainId, address, "15");
    setTransactions(res);
  }
  
  useEffect(() => {
    _get_chain();
    if(address) {
      _get_balance(chainId, address);
      _get_transaction(chainId, address);
    } else {
      _get_balance(chainId, address_demo);
      _get_transaction(chainId, address_demo);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>CoinDAO | Stats</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
      </Head>

      <main>
        {popModal && (
              <PopModal
                blockchainData={chains}
                offPopModal={popSwitch}
                report={reportee}
              />
            )}
        <Page>
          <div className="main">
            <div className="main__setion__one">
              <Center bal={bal} crypto={crypto} stable={stablecoin} transaction={transactions}/>
            </div>
            <div className="main__setion__two">
              <Right nfts={nft} handleChainChange={popSwitch} chainId={chainId} chainName={chainName} pie_data={pieData} />
            </div>
          </div>
        </Page>
      </main>
    </div>
  )
}

export default Home;
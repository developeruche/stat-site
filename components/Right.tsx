import { PieChart } from "./Pie";
import { ConnectButton } from '@rainbow-me/rainbowkit';


interface Props {
    handleChainChange: () => void;
    chainName: string;
    chainId: any;
    pie_data: any;
    nfts: any;
}

function Right({handleChainChange, pie_data, chainName, nfts} : Props) {
    
    console.log(nfts)
    return (
      <div className="right">
        <div className="right__header">
            <div className="right__header__chain">
                <button onClick={handleChainChange}>{chainName ? chainName : "Mainnet"}</button>
            </div>
            <div className="right__header__second">
                <div className="right__header__profile">
                    <ConnectButton accountStatus="avatar" chainStatus="icon" showBalance={false}/>
                </div>
            </div>
        </div>

        <div className="right__stat__wrapper">
            <div className="right__stat">
                {
                    pie_data && <PieChart data={pie_data} />
                }
            </div>
        </div>

        <div className="right__nft__list__wrapper">
            <div className="right__nft__list">
                {
                    nfts && nfts.map((n: any, index: number) => {
                        return (
                            <div className="right__nft__list__item" key={index}>
                                <div className="right__nft__list__item__">
                                    <h5>{n.contract_name}</h5>
                                </div>
                                
            
                                <p>{(n.nft_data[0].token_id).substring(0,6)}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
      </div>
    )
  }
  
  export default Right;
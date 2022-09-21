interface Props {
    stable: any;
    crypto: any;
    transaction: any;
    bal: any;
}

function Center({stable, crypto, transaction, bal}: Props) {
    return (
      <div className="center">
        <div className="center__header">
            <div className="center__header__section__one">
                <h2>CoinDAO | Stats</h2>
            </div>
            <div className="center__header__section__two">
                <div className="center__header__section__two__input__wrapper">
                    <i className="uil uil-search"></i>
                    <input type="text" placeholder="Search assets"/>
                </div>
            </div>
        </div>

        <div className="center__overview">
            <p>Total Tokens Balances</p>
            <h2>{
                (bal)?.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                })
            }</h2>
        </div>

        <div className="center__display">
            <p className="uuu">STABLE COIN</p>
            <div className="center__display__stable">
                {
                    stable && stable.map((token: any, index: number) => {
                        return(
                            <div className="center__display__stable__item" key={index}>
                                <img src={token.logo_url} alt={token.contract_ticker_symbol} />
                                <p>${Number(token.quote).toFixed(2)}</p>
                            </div>
                        )
                    })
                }
            </div>
            <hr />
            <p className="uuu">CRYPTO</p>
            <div className="center__display__coin">
                {
                    crypto && crypto.map((token: any, index: number) => {
                        return(
                            <div className="center__display__crypto__item" key={index}>
                                <img src={token.logo_url} alt={token.contract_ticker_symbol} />
                                <p>${Number(token.quote).toFixed(2)}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <div className="center__last__transaction">
            <div className="center__last__transaction__header">
                <p>Latest Transactions</p>
                <p>view all</p>
            </div>

            {
                transaction && transaction.map((trans: any, index: number) => {
                    return (
                        <div className="center__last__transaction__item" key={index}>
                            <div className="center__last__transaction__item__image__wrapper">
                            <p>{trans.from_address.substring(0,6)}...{trans.from_address.slice(-4)}</p>
                            </div>
                            
                            <div className="center__last__transaction__item__action">
                                <p><i className="uil uil-arrow-growth"></i></p>
                            </div>
            
                            <div className="center__last__transaction__item__status">
                                <p>{trans.to_address.substring(0,6)}...{trans.to_address.slice(-4)}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
    )
  }
  
  export default Center;
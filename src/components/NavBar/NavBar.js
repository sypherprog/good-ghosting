import React,{useState} from 'react'

const NavBar = () => {
    const [currentAccount, setCurrentAccount] = useState(null);



    const connectWalletHandler = async() =>{
        //console.log("Connect");
        const {ethereum} = window;
       // console.log(ethereum);

            if (!ethereum) {
                alert("Please install Metamask!");
              } 

              try{
                const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                const account = accounts[0];
                setCurrentAccount(account)
                        
            } catch(err){
                console.log(err);
            }
    }

    return (
        <div>
            {currentAccount}
         <button type='button' onClick={connectWalletHandler}>Connect to wallet</button>
        <button type='button'>Join our game on KOVAN</button>
        </div>
    )
}

export default NavBar

const { ethers } = require("ethers");
const provider = ethers.providers.getDefaultProvider("rinkeby");
const contractAddress = "0x6E616a4e9336b03ECC68086De077d87BE4FC0D9a";

const hex_to_ascii = _hex => {
  const hex = _hex.toString();
  let str = '';
  for(let i = 0;i< hex.length;i+=2){
    str += String.fromCharCode(parseInt(hex.substr(i,2),16));
  }
  return str;
}

const decodePassword = async() => {
  const storage1 = await provider.getStorageAt(contractAddress,1);
  const result = hex_to_ascii(storage1);
  console.log(result);
  
}

decodePassword();
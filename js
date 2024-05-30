let nftCollection = [];

function mintNFT(name, shoeType, expression, backgroundPattern) {
    const nft = {
        name: name,
        shoeType: shoeType,
        expression: expression,
        backgroundPattern: backgroundPattern,
    };
    nftCollection.push(nft);
}

function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("ID: " + (i + 1));
        console.log("Name: " + nftCollection[i].name);
        console.log("Shoe Type: " + nftCollection[i].shoeType);
        console.log("Expression: " + nftCollection[i].expression);
        console.log("Background Pattern: " + nftCollection[i].backgroundPattern);
       
    }
}

function getTotalSupply() {
    return nftCollection.length;
}

mintNFT("Bhavesh", "Sneakers", "Happy", "Stripes");
mintNFT("shaney", "Boots", "Angry", "Dots");
mintNFT("rahul", "Sandals", "Surprised", "Plain");

listNFTs();

console.log("Total number of NFTs made: " + getTotalSupply());



const getStoredMyDonation = () => {
    const storedMyDonation = localStorage.getItem('myDonation');
    
    if (storedMyDonation) {
        return JSON.parse(storedMyDonation);
    }
    return [];
}

const saveMyDonation = id => {
    const storedMyDonation = getStoredMyDonation();
    const exists = storedMyDonation.find(myDid=> myDid === id);
    if (!exists) {
       
        storedMyDonation.push(id);
        localStorage.setItem('myDonation', JSON.stringify(storedMyDonation))
    }
    
}

export { saveMyDonation, getStoredMyDonation }
const fetchData = async () => {
    const res = await fetch("https://restcountries.eu/rest/v2/alpha/col"); 
  
    const country = await res.json(); 
  
    console.log(country); 
  };
  
  fetchData(); 
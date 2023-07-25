const createGame = async (gameName) => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: gameName }),
    });
  
    const data = await response.json();
    const key = data.result.split('ID: ')[1]; // Extract the game ID (key) from the response
    return key;
  };

const getAPI = async () => {
    const data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/p1BGRg81tEbzBtZCGMML/scores/');
    const result = await data.json();
    return result;
}

const setAPI = async (data) => {
    try {
        const fetchData = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/p1BGRg81tEbzBtZCGMML/scores/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
    
        if (!fetchData.ok) {
            const errorData = await fetchData.json(); // Get error details from response
            throw new Error(`Failed to set scores. Details: ${JSON.stringify(errorData)}`);
          }
      
          const result = await fetchData.json();
          return result;
        } catch (error) {
          console.error('Error:', error);
          throw error;
        }
}


  

export {getAPI,setAPI,createGame};
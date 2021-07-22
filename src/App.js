import { Fragment, useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/Searchbar';
import Photos from './components/Photos/Photos';
import validate from './validation/validateInput';

const App = () => {
  const [textMessage, setMessage] = useState("");
  const [photos, setPhotos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [userInput, setInput] = useState({
    value: "",
    validation: {
      required: true,
      isNumber: true,
    },
    valid: false,
    touched: false,
  });

  const inputHandler = (e) => {
    const updatedUserInput = {
      ...userInput,
      value: e.target.value,
      valid: validate(e.target.value, userInput.validation),
      touched: true,
    };

    setInput(updatedUserInput);
  };

  const handleClick = async () => {
    const albumId = userInput.value;
    setLoading(true);

    try {
      const response = await axios.get(
        `https://albumsphotos.herokuapp.com/api/albums/${albumId}`
      );

	  if(response.data.length === 0) setMessage("no album");

      setPhotos(response.data);
      setLoading(false);
    } catch (err) {
      setMessage(
        "There might be a problem with your internet"
      );
      setLoading(false);
    }
  };

  return (
    <Fragment>

      <div className="container">
        <h1 className="pres">The Album photo</h1>
        <SearchBar value={userInput.value} inputValid={userInput.valid} onchange={inputHandler} onclick={handleClick} />
        {isLoading ? <h4 className="pres">Its Loading ...</h4> : <Photos photos={photos} />}
        {!isLoading && !photos.length > 0 && textMessage && <h2 className="text-center">{textMessage}</h2>}
      </div>
	  
    </Fragment>
  );
};

export default App;

import Btn from "./components/Btn";
import Person from "./components/Person";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState([])
  const url = "https://randomuser.me/api/"

  const getUser = async () => {
    try {
      const { data: { results } } = await axios(url)
      console.log(results[0])
      const {
        picture: { large },
        name: { title, first, last },
        email,
        cell,
        location: { state, country },
        registered: { date, age },
      } = results[0];
      setUserInfo({
        large,
        title,
        first,
        last,
        email,
        cell,
        state,
        country,
        date,
        age,
      });


    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    getUser()
  }, [])




  return (
    <div className="App d-flex m-auto w-100 h-100 bg-primary">
      <div>
        <Person userInfo={userInfo} />
        <Btn getUser={getUser} />
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/auth/authSlice";
import { Circles } from "react-loader-spinner";
import{Header, Footer} from "./components"
import { Outlet } from "react-router-dom";
import authService from "./appwrite/auth"


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {

    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch(() => {
        console.log("Error in App.jsx UseEffect trying to check user login");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [loading]);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-black text-white">
    <div className="w-full block ">
    <Header/>
    <main>
      {/* <Outlet/> */}
    </main>
    <Footer/>
    </div>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default App;

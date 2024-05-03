import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Provider, useSelector} from "react-redux";
import store from "./Store/store";
import LoginPage from "./Screens/Login";
import SignupPage from "./Screens/Signup";
import NewsPage from "./Screens/News";
import Navbar from "./components/Navbar";
import Home from "./Screens/Home";
import AddBudgetScreen from "./Screens/Budget";
import Expences from "./Screens/Expences";
import Progress from "./Screens/Progress";
const App = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Provider store={store}>
      <Router>
        
        <Navbar />
        <Routes>
        <Route path="/Progress" element={<Progress />} />
           <Route path="/budget" element={<AddBudgetScreen />} />
           <Route path="/Expenses" element={<Expences/>} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/News"
            element={isAuthenticated ? <NewsPage /> : <LoginPage />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

import { Navigate, Route, Routes } from "react-router-dom";
import Game from "../components/game";
import GameRedux from "../components/game-redux";
import MainLayout from "../layouts/MainLayout";
import Leaderboard from "../pages/Leaderboard";
import LetterShooter from "../pages/LetterShooter";
import SpeedTest from "../pages/SpeedTest";



function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
      <Route path={'/speed-test'} element={<SpeedTest />} />
      <Route path={'/leaderboard'} element={<Leaderboard />} />
      {/* <Route path='letter-shooter' element={<LetterShooter/>}/> */}
      {/* <Route path="/letter-shooter" element={<Game/>}/> */}
      <Route path="/letter-shooter" element={<GameRedux/>}/>
      </Route>
    </Routes>
  );
}

export default Router

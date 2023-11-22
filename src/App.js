import { BrowserRouter, Route, Routes } from "react-router-dom";
import DC from "./component/DefComponent";
import LCH from "./component/LightCustomeHook";
import CCH from "./component/ComplexCustomHook";
import NotFound from "./component/NotFound";
import CustomNavbar from "./component/CustomNavbar";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* 네비게이션 바 추가 */}
        <CustomNavbar />
        {/* Routes 컴포넌트로 라우트를 정의합니다. */}
        <Routes>
          {/* element prop을 사용하여 각 라우트를 정의합니다. */}
          <Route path="/" element={<DC />} />
          <Route path="/v2" element={<LCH />} />
          <Route path="/v3" element={<CCH />} />

          {/* *은 모든 일치하지 않는 경로에 대한 라우트입니다. */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

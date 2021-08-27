import './App.css';
import ConTact from './Component/ConTact/ConTact';
import End from './Component/End/End';
import KhoiXanh from './Component/KhoiXanh/KhoiXanh';
import Menu from './Component/Menu/Menu';
import PhongTo from './Component/PhongTo/PhongTo';
import SanPham from './Component/SanPham/SanPham';
import About from './Component/About/About';

function App() {
  return (
    <div className="App">
      <body data-spy="scroll" data-target=".navbar-fixed-top" data-offset="50">
        <Menu></Menu>
        <KhoiXanh></KhoiXanh>
        <SanPham></SanPham>
        <About></About>
        <ConTact></ConTact>
        <End></End>
        <PhongTo></PhongTo>
      </body>
    </div>
  );
}

export default App;

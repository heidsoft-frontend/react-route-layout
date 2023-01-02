import { Menu } from "antd"
//图标
import { HomeOutlined,DashboardOutlined,UnorderedListOutlined,UserOutlined,PoweroffOutlined } from "@ant-design/icons"
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      <Menu items={[
        { label: 'Home',icon: <HomeOutlined/> },
        { label: "Dashboard",icon:<DashboardOutlined/> },
        { label: "User List",icon:<UnorderedListOutlined/> },
        { label: "Profiles", icon:<UserOutlined/> },
        { label: "Signout", icon: <PoweroffOutlined/>, danger:true }
      ]}>
      </Menu>
      <Content/>
    </div>
  );
}

function Content(){
  return <div>
   <Routes>
    <Route path="/" element={<div>Home</div>}></Route>
    <Route path="/dashboard" element={<div>Dashboard</div>}></Route>
    <Route path="/profile" element={<div>Profiles</div>}></Route>
    <Route path="signout" element={<div>signout</div>}></Route>
   </Routes>
  </div>;
}

export default App;

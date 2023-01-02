import { Menu } from "antd"
//图标
import { HomeOutlined, DashboardOutlined, UnorderedListOutlined, UserOutlined, PoweroffOutlined } from "@ant-design/icons"
import { Routes, Route, useNavigate } from "react-router-dom"
function App() {
  return (
    <div style={{
      display:"flex",
      flexDirection: "column",
      flex:1,
      height:"100vh"
    }}>
      <Headers />
      <div style={{
        display:"flex",
        flexDirection: "row",
        flex:1
      }}>
        <SideMenu />
        <Content />
      </div>
      <Fouter />
    </div>
  );
}

function Headers() {
  return (<div 
    style={{ 
      height: 60, 
      backgroundColor: "lightblue", 
      color: "black", 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      fontWeight: 'bold'
    }}>Headers</div>);
}

function Fouter() {
  return (<div 
    style={{ 
      height: 60, 
      backgroundColor: "lightgray", 
      color: "white", 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      fontWeight: 'bold'
    }}>Fouter</div>);
}

function SideMenu() {
  const navigate = useNavigate()
  return (<div style={{ display: 'flex', flexDirection: 'row' }}>
    <Menu
      onClick={({ key }) => {
        if (key === 'signout') {
          // 登出操作
        } else {
          console.log(key)
          navigate(key);
        }
      }}
      defaultSelectedKeys={[window.location.pathname]}
      items={[
        { label: 'Home', key: '/', icon: <HomeOutlined /> },
        { label: "Dashboard", key: '/dashboard', icon: <DashboardOutlined /> },
        { label: "User List", key: '/usersList', icon: <UnorderedListOutlined />,
        children:[
          {label: "活动用户", key: '/activeUsers'},
          {label: "禁用用户", key: '/disableUsers'}
        ]},
        { label: "Profiles", key: '/profile', icon: <UserOutlined /> },
        { label: "Signout", key: 'signout', icon: <PoweroffOutlined />, danger: true }
      ]}>
    </Menu>
  </div>);
}

function Content() {
  return <div>
    <Routes>
      <Route path="/" element={<div>Home</div>}></Route>
      <Route path="/dashboard" element={<div>Dashboard</div>}></Route>
      <Route path="/activeUsers" element={<div>活动 List</div>}></Route>
      <Route path="/disableUsers" element={<div>禁用 List</div>}></Route>
      <Route path="/profile" element={<div>Profiles</div>}></Route>
      <Route path="signout" element={<div>signout</div>}></Route>
    </Routes>
  </div>;
}

export default App;

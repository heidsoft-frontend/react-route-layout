import { Menu } from "antd"
function App() {
  return (
    <div>
      <Menu items={[
        { label: 'Home' },
        { label: "Dashboard" },
        { label: "User" },
        { label: "Profiles" },
        { label: "Signout" }
      ]}>
      </Menu>
    </div>
  );
}

export default App;

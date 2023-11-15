import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
const CountryMenu = () => {
  return (
      <Dropdown>
          <MenuButton></MenuButton>
          <Menu>
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
              <MenuItem>Logout</MenuItem>
          </Menu>
      </Dropdown>
  )
}

export default CountryMenu
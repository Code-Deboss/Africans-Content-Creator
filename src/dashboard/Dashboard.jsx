import './styles/Dashboard.css'
import Input from '@mui/joy/Input';
import Search from "@mui/icons-material/Search";

const Dashboard = () => {
  return (
    <div className="home">
        <div className='sidebar'>

        </div>
        <div className="content">
            <div className="content_navbar">
                <div className="content_navbar_title">
                    <h1>Dashboard</h1>
                </div>
                <div className="content_navbar_others">
                  <Input
                    startDecorator={<Search />}
                    color="neutral"
                    placeholder="Search here..."
                    size="md"
                    sx={{ width: 300, backgroundColor: '#F9FAFB', height: '45px'}}
                    variant="soft"
                  />
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
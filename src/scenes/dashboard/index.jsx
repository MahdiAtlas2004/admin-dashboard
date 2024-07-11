import { Box } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
    return ( 
        <Box m="20px">
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Header title="Dashboard" subtitle="Welcome to your dashboard" />
            </Box>
        </Box>
     );
}
 
export default Dashboard;
import * as React from 'react';
import { 
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableChartIcon from '@mui/icons-material/TableChart';
import SettingsIcon from '@mui/icons-material/Settings';
import { Outlet, NavLink, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const navItems = [
    { to: "/", label: "Dashboard", icon: <DashboardIcon /> },
    { to: "/reports", label: "Reports", icon: <TableChartIcon /> },
    { to: "/settings", label: "Settings", icon: <SettingsIcon /> },
];

export default function Layout() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const location = useLocation();
    const toggleDrawer = () => setMobileOpen((x) => !x);

    const drawer = (
        <Box role="presentation" sx={{ height: "100%"}}>
            <Toolbar/>
            <Divider />
            <List>
                {navItems.map((item) => {
                    const selected = location.pathname === item.to
                    return (
                        <ListItemButton
                            key={item.to}
                            component={NavLink}
                            to={item.to}
                            selected={selected}
                            onClick={() => setMobileOpen(false)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    )
                })}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            {/* AppBar */}
            <AppBar 
                position="fixed" 
                elevation={1}
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={toggleDrawer}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        React Dashboards
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Side Drawer - mobile (temp) TODO change */}
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} 
                >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={toggleDrawer}
                    ModalProps={{ keepMounted: true }} // Better open performance on mobile.
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>

            {/* Side Drawer - desktop */}
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            {/* Main Content */}
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                    <Outlet />
            </Box>
        </Box>
    );
}
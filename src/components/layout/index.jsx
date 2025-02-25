import { Box } from '@mui/material'
import Header from './header'
import Footer from './footer'

const Layout = (props) => {
    return (
        <Box>
            <Header />
            {props.children}
            <Footer />
        </Box>
    )
}

export default Layout
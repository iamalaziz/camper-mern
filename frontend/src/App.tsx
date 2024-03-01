import Navbar from './components/Navbar/Navbar'
import HomeScreen from './pages/HomeScreen'
import { ConfigProvider } from 'antd'

function App() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#006DAB',
                },
            }}
        >
            <Navbar />
            <HomeScreen />
        </ConfigProvider>
    )
}

export default App

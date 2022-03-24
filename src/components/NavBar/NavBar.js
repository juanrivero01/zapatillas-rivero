import './NavBar.css'
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
    return(
        <header className='main-header'> 
            <div className='logo-container'> 
                <img className= 'logo'
                    src= "footer-locker.png"
                />
            </div> 
                <ul className= 'navbar'>
                    <li><Button>Shoes</Button></li>
                    <li><Button>Clothing</Button></li>
                    <li><Button>New Releases</Button></li>
                    <li><Button>Size Guide</Button></li>  
                    <li><Button><CartWidget/></Button></li>
                </ul>
            
        </header>
    )
}

export default NavBar
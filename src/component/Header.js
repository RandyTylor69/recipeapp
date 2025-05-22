import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'
import ".././App.css"

export default function Header() {
    return(
        <header>
            <FontAwesomeIcon icon={faRobot} className='iconHeader'/>
            <h1>Claude Chef</h1>
        </header>
    )
}
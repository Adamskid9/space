import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom"

function DestinationNavigator() {
     const dispatch = useDispatch();
     const {cur} = useSelector((x)=>x.currentDes)


    function selectPlant(num){
     dispatch({type:"img",payload:num})

    }

    return (
        <ul className="flex space-x-5 text-xl font-condensed items-center justify-center md:justify-start">
                    <li onClick={()=>selectPlant(0)} className="list relative"><Link className={`${0===cur?"active":""}`} to={"/destination/"} >Moon</Link></li>
                    <li onClick={()=>selectPlant(1)} className="list relative"><Link className={`${1===cur?"active":""}`} to={"mars"}>Mars</Link></li> 
                    <li onClick={()=>selectPlant(2)} className="list relative"><Link className={`${2===cur?"active":""}`} to={"europa"}>Europa</Link></li> 
                    <li onClick={()=>selectPlant(3)} className="list relative"><Link className={`${3===cur?"active":""}`} to={"titan"}>Titan</Link></li> 
        </ul>
    )
}

export default DestinationNavigator

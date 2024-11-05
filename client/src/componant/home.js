import ButtonAppBar from "./navBar";
import newComponant from "./classComponant";
import './Css/home.css'

export default function Home(props){
    return(
        <>
        <ButtonAppBar/>
        <div>
            <h1 className="title">welcome to home page{props.name}</h1>
        </div>
        </>
    )
}
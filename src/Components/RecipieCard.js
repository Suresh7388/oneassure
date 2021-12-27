export default function Recipie({recipies}){
    return <div className="recipie-card" onClick={()=>{
        window.open(recipies['recipe']['url']);
    }}>
        <img className="recipie-image" src={recipies['recipe']['image']}/>
        <p className="recipie-label">{recipies['recipe']['label']}</p>
    </div>
}
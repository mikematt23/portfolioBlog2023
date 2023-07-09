import classes from "./card.module.css"


const Card = (props)=>{
   return (
       <div className={classes.card}>
         {props.children}
         here
       </div>
   )
}

export default Card
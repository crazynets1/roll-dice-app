function Die(props) {
   const styles = {
            backgroundColor: props.isHeld ? "#59E391" : "#FFF"
        }

   return(
    <button onClick={() => props.hold()} style={styles} className="num-btn">{props.value}</button>
   )
}

export default Die
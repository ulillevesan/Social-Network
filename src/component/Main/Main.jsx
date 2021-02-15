import React from 'react';
import k from './Main.module.css'
const Main= () => {
    return(<div>
        <div className={k.inform}>
        <div className={k.name}>Name: Vadim</div>
        <div className={k.surname}>Surname: Kotov</div>
        <div className={k.age}>Age: 17</div>
        <div className={k.country}>Country: Ukraine</div>
        <div className={k.online}>Status: Online</div>
        </div>
    </div>)
}
export default Main

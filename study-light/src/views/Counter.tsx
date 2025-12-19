import {useSelector, useDispatch} from 'react-redux'
import type { RootState } from '../store/store'
import { decrementCounter } from '../store/appDataSlice'

const Counter = () => {
    const count = useSelector((state : RootState)=> state.appData.counter)
    const dispach = useDispatch()
    return (
    <>
        <h1>Counter: {count}</h1>
        <button onClick={()=> dispach(decrementCounter())}>
            Decrement
        </button>
    </>
)
}

export default Counter
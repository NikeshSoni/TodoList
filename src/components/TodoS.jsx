import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todu/todoSlice'

const TodoS = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    // console.log(todos);

    return (
        <>
           <div>
               <h3 className='my-4'>Task's</h3>
           </div>

           <div className='row w-100'>
                {todos.map( (items) => {
                    return(
                        <div className='col-10 col-md-8 my-3 d-flex  justify-content-between mx-auto'>
                             <div className='col-6 '>
                                <li key={items.id}>
                                    {items.text}
                                </li>
                            </div>

                            <div>
                                <button onClick={ () => dispatch(removeTodo(items.id))}>
                                            X
                                    </button>
                            </div>
                        </div>


                           
                    )
                })}
           </div>
        </>
    )
}

export default TodoS;
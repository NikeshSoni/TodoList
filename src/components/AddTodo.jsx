import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import {addTodo} from '../features/todu/todoSlice'

const AddTodoMain = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handleTodo = (e) => {
        e.preventDefault()

        if (input) {
            dispatch(addTodo(input))
            setInput('')
        } else {
            alert('Enter tast In Input')
        }
    }

    return (
        <div className='w-100 text-center'>
             <Form onSubmit={handleTodo} >
                <h1 className='my-4'>Add Your Task</h1>
                <div className='d-flex my-4 gap-5 justify-content-center'>
                            <Form.Group className="" controlId="formBasicEmail">
                                <Form.Control  
                                    value={input} 
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Enter task" 
                                    type="text"/>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                </div>
            </Form>
        </div>
    )
}

export default AddTodoMain;
import React from 'react'
import {Form, redirect} from "react-router-dom";

export default function FormHandling() {


  return (
    <>
        <Form method="POST">
            <input type="number" name="userId" id="" /> <br />
            <input type="text" name="name" id="" /> <br />
            <input type="date" name="date" id="" /> <br />
            <input type="number" name="mobile" id="" /> <br />

            
            <input type="submit" value="Submit"/>
        </Form>
        
    
    
    </>
  )
}

export const addTodo = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  // postData.tags = postData.name.split(" ");


  fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        })
        .then(res => res.json()) 
        .then(console.log);

  console.log(postData);
  return redirect("/todo");
}

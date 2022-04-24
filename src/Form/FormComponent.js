import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory, useLocation } from 'react-router-dom';

const FormComponent = ({AppState}) => {
  console.log(AppState)
  const navigate=useHistory();
  const location=useLocation();
  console.log(location);
  const {title,props}=location.state.state;
  let state=AppState.toDoList || [];
  let setState=AppState.setToDoList;
  return (
 
  <div>
    <h2>{title && title}</h2>
    <Formik
      initialValues={{
       taskName: (props && props.taskName) || '',
       description: (props && props.description) || ''
        
      }}
      validate={(values) => {
        const errors = {};
        if (!values.taskName) {
          errors.title = '**Required';
        }
        if (!values.description) {
          errors.authorName = '**Required';
        }        
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        if (title === 'UPDATE') {
          let temp =
            state &&
            state.map((ele, i) => {
              if (ele.id === props.id) {
                
                return {
                  taskName: values.taskName,
                  description: values.description,                  
                  id: props.id,
                };
              } else {
                return ele;
              }
            });
          setState([...temp]);
        }
        if (title === 'ADD') {
          
          let temp = (state && [...state])||[];  
             
          temp.push({
            taskName: values.taskName,
            description: values.description,  
            id: state.length>0?state[state.length - 1].id + 1:1,
          });
         
          setState([...temp]);
        }
        navigate.push("/");
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <table>
            <tr>
              <th className="table-header-item table-header" >Task Name : </th>
              <td
                className="table-row-item"
                
              >
                <Field
                  type="text"
                  name="taskName"
                  style={{ height: '23px', borderRadius: '0.5rem' }}
                />
                <ErrorMessage name="taskName" component="div" />
              </td>
            </tr>
            <br/>
            <tr>
              <th className="table-header-item table-header" >Description : </th>
              <td
                className="table-row-item"
                
              >
                <Field
                  type="text"
                  name="description"
                  style={{ height: '23px', borderRadius: '0.5rem' }}
                />
                <ErrorMessage name="description" component="div" />
              </td>
            </tr>
            <br/>
            <tr>
              <th>
                <button
                  type="submit"
                  className="btn btn-primary btn-sm" style={{height:"35px"}}
                >
                  {title}
                </button>
              </th>
            </tr>
          </table>
        </Form>
      )}
    </Formik>
  </div>
  )

};

export default FormComponent;
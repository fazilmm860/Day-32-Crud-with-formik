import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const AddBook = ({ onAdd }) => {
    const formik = useFormik({
        initialValues: {
            title: '',
            author: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title is required'),
            author: Yup.string().required('Author is required '),
        }),
        onSubmit: (values, { resetForm }) => {
            onAdd(values);
            resetForm();
        }
    })

    return (
        <div className='add-book'>
            <h2>Add Book</h2>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input 
                    type='text'
                    id='title'
                    name='title'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                    />
                    {formik.touched.title && formik.errors.title && (
                        <div>{formik.errors.title}</div>
                    )}
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <input 
                    type='text'
                    id='authour'
                    name='author'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.author}
                    />
                    {formik.touched.author && formik.errors.author && (
                        <div>{formik.errors.author}</div>
                    )}
                </div>
                <button className='add-btn'type='submit'>Add</button>

            </form>
        </div>
    )
}

export default AddBook

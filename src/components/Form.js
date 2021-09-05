import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import sanityClient from "../client.js";
import createComment from "./createComment.js";

export default function Form ({_id}) {
    // Setting up basic data state
    const [formData, setFormData] = useState()

    // Setting up form state
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [hasSubmitted, setHasSubmitted] = useState(false)

    // Preparing the functions from react-hook-form
    const { register, handleSubmit, watch, errors } = useForm()

    // Function for handling the form submission
    const onSubmit = async data => {
        // Submit Handler
        setIsSubmitting(true)
        setFormData(data)

        try {
            let body = JSON.stringify(data)
            const { _id, name, email, comment } = JSON.parse(body)
            await sanityClient.create({
                _type: 'comment',
                post: {
                    _type: 'reference',
                    _ref: _id,
                },
                name,
                email,
                comment
            })
            setIsSubmitting(false)
            setHasSubmitted(true)
        } catch (err) {
            setFormData(err)
        }
    }

    if (isSubmitting) {
        return <h3>Submitting Comment...</h3>
    }

    if (hasSubmitted) {
        return (
            <>
            <h3>Thanks for your comment!</h3>
            <ul>
                <li>
                    Name: {formData.name} <br />
                    Email: {formData.email} <br />
                    Comment: {formData.comment} <br />
                </li>
            </ul>
            </>
        )
    }

    // Returns the data
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg" disbabled>
            <input {...register('_id')} type="hidden" value={_id} />

            <label className="block mb-5">
                <span className="text-gray-700">
                    Name
                </span>
                <input {...register('name', { required: true })} className="form-input mt-1 block w-full" placeholder="Nabeel Danish"/>
            </label>

            <label className="block mb-5">
                <span className="text-gray-700">
                    Email
                </span>
                <input type="email" {...register('email', { required: true })} className="form-input mt-1 block w-full" placeholder="your@email.com"/>
            </label>

            <label className="block mb-5">
                <span className="text-gray-700">
                    Comment
                </span>
                <textarea {...register('comment', { required: true })} className="form-textarea mt-1 block w-full" rows="8" placeholder="Enter some long form content."></textarea>
            </label>
                                                                                                                                                                
            {/* errors will return when field validation fails  */}
                
            <input type="submit" className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" />
        </form>
    )
}

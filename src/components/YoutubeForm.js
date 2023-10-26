import { useFormik } from "formik";

const initialValues = {
    name : '',
    email : '',
    channel : ''
}

const validate =  values => {
    let errors = {}

    if(!values.name){
        errors.name = "Required"
    }

    if(!values.email){
        errors.email = "Required"
    }
    
    if(!values.channel){
        errors.channel = "Required"
    }
    return errors;
}
const onSubmit = values => console.log(values)

const YoutubeForm = () => {

    const formik = useFormik({
        initialValues ,
        validate,
        onSubmit 
    })


    console.log("Form values : ", formik.values)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" 
                onChange={formik.handleChange} value={formik.values.name} />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}  />

                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel} />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm;
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  }

  if (!values.channel) {
    errors.channel = "Required";
  }
  return errors;
};
const onSubmit = (values) => console.log(values);

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  channel: Yup.string().required("Required"),
});

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    //validate,
    validationSchema,
    onSubmit,
  });

  //console.log(formik)
  console.log("Form values : ", formik.values);
  console.log("Form errors : ", formik.errors);
  console.log("Form touched : ", formik.touched);

  return (
    <div>
      <br />
      <br />
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.touched.channel && formik.errors.channel && (
            <div className="error">{formik.errors.channel}</div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;

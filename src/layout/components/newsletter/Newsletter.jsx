import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { useFormik } from "formik";
import * as Yup from "yup"; // Importa Yup para la validación

export const Newsletter = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is requiered"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log("Formulario enviado", values);
      resetForm();
    },
  });

  const handlerSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 prueba">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pruebaBorder">
        <form onSubmit={handlerSubmit}>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-secondary">
                Subscribe to our newsletter.
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-300">
                Subscribe to our newsletter, we will keep you informed about the
                latest news on our platform{" "}
              </p>

              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />

                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm ">
                  <span className=" font-bold p-2">{formik.errors.email}</span>
                </div>
              ) : null}
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <CalendarDaysIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-white">
                  Weekly articles
                </dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Discover our latest weekly educational resources, packed with
                  relevant information and practical tools for your continued
                  learning.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <HandRaisedIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-white">No spam</dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  On our platform, we promise not to send spam. We respect your
                  privacy and will only send you relevant and useful information
                  about our courses and news.
                </dd>
              </div>
            </dl>
          </div>
        </form>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      ></div>
    </div>
  );
};

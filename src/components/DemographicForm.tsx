'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';

interface DemographicFormProps {
  onNext: (data: any) => void;
}

const validationSchema = Yup.object({
  fullName: Yup.string()
    .required('Full name is required'),
  age: Yup.number()
    .required('Age is required')
    .min(18, 'Must be at least 18 years old'),
  occupation: Yup.string()
    .required('Occupation is required'),
  householdSize: Yup.number()
    .required('Household size is required')
    .min(1, 'Must be at least 1'),
});

export default function DemographicForm({ onNext }: DemographicFormProps) {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      age: '',
      occupation: '',
      householdSize: '',
    },
    validationSchema,
    onSubmit: (values) => {
      onNext(values);
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tell us about yourself</h2>
        <p className="text-gray-600 mb-6">This helps us personalize your experience</p>
      </div>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            {...formik.getFieldProps('fullName')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <div className="text-red-600 text-sm mt-1">{formik.errors.fullName}</div>
          )}
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">
            Age
          </label>
          <input
            id="age"
            type="number"
            {...formik.getFieldProps('age')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {formik.touched.age && formik.errors.age && (
            <div className="text-red-600 text-sm mt-1">{formik.errors.age}</div>
          )}
        </div>

        <div>
          <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
            Occupation
          </label>
          <input
            id="occupation"
            type="text"
            {...formik.getFieldProps('occupation')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {formik.touched.occupation && formik.errors.occupation && (
            <div className="text-red-600 text-sm mt-1">{formik.errors.occupation}</div>
          )}
        </div>

        <div>
          <label htmlFor="householdSize" className="block text-sm font-medium text-gray-700">
            Household Size
          </label>
          <input
            id="householdSize"
            type="number"
            {...formik.getFieldProps('householdSize')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {formik.touched.householdSize && formik.errors.householdSize && (
            <div className="text-red-600 text-sm mt-1">{formik.errors.householdSize}</div>
          )}
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
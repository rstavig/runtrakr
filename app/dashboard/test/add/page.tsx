import { TestForm } from "../../components/test-form"

const FormPage = () => {
  return (
    <div className="p-4">
      <h1 className="font-semibold text-3xl mb-4">Add New Test Item</h1>
      <TestForm />
    </div>
  )
}

export default FormPage
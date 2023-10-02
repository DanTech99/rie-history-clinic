import Layout from "../layouts/Layout"
import FormRegister from "../components/form/FormRegister"

function Form() {
  return (
    <>
    <Layout>
      <main className="p-5 justify-center items-center content-center">
      <FormRegister />
      </main>
     
    </Layout> 
    </>
  )
}

export default Form
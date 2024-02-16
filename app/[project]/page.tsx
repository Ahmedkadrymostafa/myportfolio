import GetProject from "../components/getProject/GetProject"

const page = ( {params}: {params: any} ) => {
  return (
    
    <div>
      <GetProject params={params} />
    </div>
  )
}

export default page
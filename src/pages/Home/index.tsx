import { getOrgList } from "@/api/orgService";

const Home: React.FC = () => {
  
  const getOrgListReq = async ()  => {
    const res = await getOrgList()
    console.log(res);
  }


  useEffect(() => {
    getOrgListReq()
  }, [])


  return <>首页</>
}

export default Home

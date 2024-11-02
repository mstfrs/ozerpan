import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { useEffect } from 'react';
import { getJobCards } from '../services/JobCardService';
import useAuthStore from '../useAuthStore';

const HomeLayout = ({ children }) => {
    const user = useAuthStore((state) => state.user);
    console.log(user)
console.log("édeefgdg")
    let filters = [
        ["operation", "=", "Sac Kesim"]
      ];

    const getJobCard =  () => {
        // if (!user?.custom_operations) return; // Kullanıcı bilgisi yüklü değilse dur
        try {
          const response = getJobCards(filters,5)
          console.log('HomeLayout response',response);
        } catch (error) {
          console.error("Job Cards Fetch Error:", error);
        }
      };
    


    useEffect(() => {
        getJobCard()
    }, [])
    
    return (
        <div>
            <Navbar />
            {/* <main><Outlet /></main> */}
        </div>
    );
};

export default HomeLayout;

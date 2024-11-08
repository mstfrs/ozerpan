import { useFrappeAuth } from "frappe-react-sdk";
import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCurrentUser } from "./services/UserService";
import Layout from "./components/Layout/Layout";
import HomeLayout from "./layouts/HomeLayout";
import JobCards from "./pages/job-card/JobCards"

const ProtectedRoute = () => {
    const { currentUser } = useFrappeAuth();
    const [loading, setLoading] = useState(true); // Yükleniyor durumu için state
    const [activeUser, setActiveUser] = useState()

    useEffect(() => {
      

        // Fonksiyonu çağır
        fetchCurrentUser().then((currentUsr) => {
            // console.log("Mevcut Kullanıcı:", currentUsr);
            setActiveUser(currentUsr)
            setLoading(false)

        });

    }, [currentUser]);

    // Eğer yükleniyorsa, bir yükleniyor göstergesi dönebiliriz
    if (loading) {
        return <div>Loading...</div>;
    }

    // Kullanıcı giriş yapmışsa sayfayı render et, yoksa login sayfasına yönlendir
    if (activeUser) {
        return <JobCards />;
    } else {
        return <Navigate to="/login" />;
    }
};

export default ProtectedRoute;

import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Dna } from 'react-loader-spinner';

const PrivateRoutes = ({children}) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()
    
    if (loader) {
        return (
          <div className="text-center w-1/6 mx-auto">
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        );
    }


    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoutes;
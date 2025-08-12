import React, { useEffect } from 'react';
import Img1 from '../../assets/images/merchant/Img16.png';
import Img2 from '../../assets/images/merchant/Img17.png';
import Img3 from '../../assets/images/merchant/Img18.png';

import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';

function StoreUsersAssign() {

  const { setSections } = useSections();
  const { t } = useTranslation;

  useEffect(() => {
    setSections([
      { id: 'step-1', label: 'Add Store Users' },
      { id: 'step-2', label: 'Store user deactivate' },
    

    ]);
    return () => setSections([]);

  }, [setSections, t]);

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-10 mb-16">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-6">
        Assigning Store Users
      </h1>


      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
        To assign a store user, the merchant must complete the <strong>'Add Store User'</strong> form by providing the user's Full Name, Email Address, and Password.
        An OTP (One-Time Password) will be sent to the entered email address for verification. The user must verify the email before activating their account.
      </p>

      <h3 id='step-1' className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-4">
        Steps to Assign Store Users
      </h3>


      <div className="py-5">
        <p className="text-sm sm:text-base text-gray-700 mb-10">
          <strong>Step 1:</strong> Go to <strong>My Account</strong> and select <strong>Store Users</strong>. Then click the <strong>Add Store User</strong> button.
        </p>
        <img
          src={Img1}
          alt="Navigate to Store Users"
          className="w-full md:w-4/5 mx-auto rounded-md shadow mb-6"
        />
      </div>

      <div className="py-5">
        <p className="text-sm sm:text-base text-gray-700 mb-10">
          <strong>Step 2:</strong> Click the <strong>Add Store User</strong> button to open the form.
        </p>
        <img
          src={Img2}
          alt="Add Store User Form"
          className="w-full md:w-4/5 mx-auto rounded-md shadow mb-6"
        />
      </div>

      <div id='step-2' className="py-3">
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-10">
          To update a store user's information or change their status, click the action menu (three dots) in the row. From there, select <strong>Edit</strong> to modify user details or <strong>Deactivate</strong> to revoke access.
        </p>

        <img
          src={Img3}
          alt="Edit Store User"
          className="w-full md:w-4/5 mx-auto rounded-md shadow mb-6"
        />
      </div>
    </div>
  );
}

export default StoreUsersAssign;

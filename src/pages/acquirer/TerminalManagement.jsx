import React from 'react';
import Img1 from '../../assets/images/acquirer/img340.jpg';
import Img2 from '../../assets/images/acquirer/img342.jpg';
import Img3 from '../../assets/images/acquirer/img344.jpg';
import Img4 from '../../assets/images/acquirer/img351.jpg';



function TerminalManagement() {
    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* Section Title */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>Terminal Management</h1>

            {/* Description */}
            <p className='text-base sm:text-lg text-gray-700 mb-8'>
                Terminal Management allows the Acquirer to configure and associate terminals (typically POS devices or QR interfaces) with each store. This setup is essential for enabling real-time transactions, QR scanning, and accurate transaction mapping per outlet.
            </p>

            {/* Accessing Terminal Management */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Accessing Terminal Management</h3>
                <p className='mb-4'>To manage terminals for a specific store:</p>
                <ol className='list-decimal ml-6 text-gray-700 text-base mb-6'>
                    <li>Go to the <span className='font-semibold'>Stores</span> section.</li>
                    <li>Select <span className='font-semibold'>View</span> (<span className='font-semibold'>: &gt; View</span>) on the desired store.</li>
                    <li>Navigate to the <span className='font-semibold'>Terminals</span> section.</li>
                </ol>
            </div>

            {/* Adding a Terminal */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Adding a Terminal</h3>
                <p className='mb-4'>After a store is approved, you can begin assigning terminals for transactions. A terminal represents a specific POS (Point of Sale) device or checkout point within the store.</p>
                <p className='mb-4'>Click on <span className='font-semibold'>Create New Terminal</span> on the <span className='font-semibold'>Terminal</span> section.</p>
            </div>

            {/* Option Selection Section */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Option Selection – Single vs. Multiple Terminals</h3>
                <img src={Img1} alt='Option Selection – Single vs. Multiple Terminals' className="mx-auto my-6 block md:w-4/5" />
                <p className='mb-4'>Start by selecting whether you want to create a <span className='font-semibold'>Single Terminal</span> or <span className='font-semibold'>Multiple Terminals</span>.</p>
                <ul className='list-disc ml-6 text-gray-700 text-base mb-4'>
                    <li><span className='font-semibold'>Single Terminal:</span> For stores with one checkout or payment point.</li>
                    <li><span className='font-semibold'>Multiple Terminals:</span> For stores with several counters/devices (e.g., supermarkets or chains).</li>
                </ul>
                <p>Click <span className='font-semibold'>Next</span> after making your selection.</p>
            </div>

            {/* Creating a Single Terminal */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Creating a Single Terminal</h3>
                <img src={Img2} alt='Creating a Single Terminal' className="mx-auto my-6 block md:w-4/5" />
                <ul className='list-disc ml-6 text-gray-700 text-base mb-4'>
                    <li><span className='font-semibold'>Terminal ID:</span> A unique identifier (e.g., T001).</li>
                    <li><span className='font-semibold'>Terminal Name:</span> Assign a label (e.g., Terminal A).</li>
                    <li><span className='font-semibold'>Terminals:</span> Shows current number of terminals in the store.</li>
                </ul>
                <p>Click <span className='font-semibold'>Yes</span> to proceed and save the terminal.</p>
            </div>

            {/* Creating Multiple Terminals */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Creating Multiple Terminals</h3>
                <img src={Img3} alt='Creating Multiple Terminals' className="mx-auto my-6 block md:w-4/5" />
                <ul className='list-disc ml-6 text-gray-700 text-base mb-4'>
                    <li><span className='font-semibold'>Enter Number of Terminals</span> you wish to create (e.g., 5).</li>
                </ul>
                <p>Click <span className='font-semibold'>Submit</span> to auto-generate terminal IDs and assign them to the store.</p>
            </div>

            {/* Activate or Deactivate Terminal */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Activate or Deactivate Terminal</h3>
                <img src={Img4} alt='Terminal Status View' className="mx-auto my-6 block md:w-4/5" />
                <ul className='list-disc ml-6 text-gray-700 text-base mb-4'>
                    <li>They will appear in the <span className='font-semibold'>Terminals Table</span>.</li>
                    <li>Status will indicate whether each terminal is <span className='font-semibold'>active</span> or <span className='font-semibold'>deactive</span>.</li>
                    <li>You can manage each terminal individually via the <span className='font-semibold'>Action</span> button.</li>
                </ul>
                <p className='italic text-gray-600 mt-4'>
                    <span className='font-semibold'>Note:</span> When activating or deactivating a terminal, a confirmation model will appear. You must click <span className='font-semibold'>"OK"</span> to proceed with the action.
                </p>
            </div>
        </div>
    );
}

export default TerminalManagement;

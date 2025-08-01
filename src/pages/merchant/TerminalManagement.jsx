import React, { useEffect } from 'react';
import { useSections } from '../../components/SectionContext';
import Img1 from '../../assets/images/merchant/terminal-management/img1.png';
import Img2 from '../../assets/images/merchant/terminal-management/img2.png';
import Img3 from '../../assets/images/merchant/terminal-management/img3.png';
import Img4 from '../../assets/images/merchant/terminal-management/img4.png';
import Img5 from '../../assets/images/merchant/terminal-management/img5.png';
import Img6 from '../../assets/images/merchant/terminal-management/img6.png';
import Img7 from '../../assets/images/merchant/terminal-management/img7.png';




function MerchantTerminalManagement() {
    const { setSections } = useSections();

    // Section titles for right side menu (hardcoded English text)
    const rawTitles = [
        'Accessing Terminal Management',
        'Adding a Terminal',
        'Option Selection – Single vs. Multiple Terminals',
        'Creating a Single Terminal',
        'Creating Multiple Terminals',
        'Activate or Deactivate Terminal',
        'Troubleshooting',
    ];
    const sectionTitles = rawTitles.map(title =>
        title.replace(/^Step\s*\d+[:：]?\s*/i, '').trim()
    );

    useEffect(() => {
        setSections(
            sectionTitles.map((title, idx) => ({
                id: `section${idx + 1}`,
                label: title
            }))
        );
        return () => setSections([]);
    }, [setSections, ...sectionTitles]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* Section Title */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>Terminal Management</h1>

            {/* Description */}
            <p className='text-base sm:text-lg text-gray-700 mb-8'>
                Terminal Management allows the Merchant to configure and associate terminals with each store.
            </p>

            {/* Terminal Management */}
            <div id="section1" className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Accessing Terminal Management</h3>
                <p className='mb-4'>To manage terminals for a specific store</p>
                <ol className='list-decimal ml-6 text-gray-700 text-base mb-6'>
                    <li>Navigate to the Store section.</li>
                    <li>Select the store you want to manage terminals for by clicking on the store.</li>
                    <img src={Img1} className="mx-auto my-6 block md:w-4/5" />
                    <li>View the list of existing terminals or create new ones.</li>
                </ol>
                <p className='mb-4 text-sm font-bold text-gray-500'>important: Terminal management for a store is permitted only once that store’s status has been set to Approved.</p>
            </div>

            {/* Adding a Terminal */}
            <div id="section2" className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Adding a Terminal</h3>
                <p className='mb-4'>After a store is approved, you can begin assigning terminals for transactions. A terminal represents a specific POS (Point of Sale) device or checkout point within the store.</p>
                <p className='mb-4 font-bold'>Terminals can be added from 2 places.</p>
                <ul className='list-disc ml-6 text-gray-700 text-base mb-4'>
                    <li>From Three Dots menu … next to Commision Rate</li>
                </ul>
                <img src={Img2} className="mx-auto my-6 block md:w-4/5" />
                <ul className='list-disc ml-6 text-gray-700 text-base mb-4'>
                    <li>From Terminal Section</li>
                </ul>
                <img src={Img3} className="mx-auto my-6 block md:w-4/5" />
            </div>

            {/* Option Selection Section */}
            <div id="section3" className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Option Selection – Single vs. Multiple Terminals</h3>
                <img src={Img4} alt='Option Selection – Single vs. Multiple Terminals' className="mx-auto my-6 block md:w-4/5" />
                <p className='mb-4'>Start by selecting whether you want to create a Single Terminal or Multiple Terminals.</p>
                <ul className='list-disc ml-6 text-gray-700 text-base mb-4'>
                    <li>Single Terminal: For stores with just one checkout point or counter.</li>
                    <li>Multiple Terminals: For stores with several counters/devices (e.g., supermarkets or chains).</li>
                </ul>
                <p>Click Next after making your selection to proceed with the creation process.</p>
            </div>

            {/* Creating a Single Terminal */}
            <div id="section4" className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Creating a Single Terminal</h3>
                <img src={Img5} alt='Creating a Single Terminal' className="mx-auto my-6 block md:w-4/5" />
                <ul className='list-disc ml-6 text-gray-700 text-base mb-4'>
                    <li>The terminal name will be automatically generated (e.g., Terminal 1).</li>
                    <li>You cannot change the terminal name as it's system-generated for consistency.</li>
                    <li>All created terminals are set to "Active" status by default.</li>
                </ul>
                <p>Click Create to finalize your single terminal setup.</p>
            </div>

            {/* Creating Multiple Terminals */}
            <div id="section5" className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Creating Multiple Terminals</h3>
                <img src={Img6} alt='Creating Multiple Terminals' className="mx-auto my-6 block md:w-4/5" />
                <ul className='list-disc ml-6 text-gray-700 text-base mb-4'>
                    <li>Enter the number of terminals you wish to create (e.g., 5) and click Create to generate multiple terminals at once.</li>
                </ul>
                <p>This will create the specified number of terminals with sequential naming (Terminal 1, Terminal 2, etc.).</p>
            </div>

            {/* Activate or Deactivate Terminal */}
            <div id="section6" className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Activate or Deactivate Terminal</h3>
                <img src={Img7} alt='Terminal Status View' className="mx-auto my-6 block md:w-4/5" />
                <ul className='list-disc ml-6 text-gray-700 text-base mb-4'>
                    <li>To change a terminal's status, locate it in the terminal list.</li>
                    <li>Click the toggle switch in the "Active" column to activate or deactivate it.</li>
                    <li>Inactive terminals will not be available for payment processing until reactivated.</li>
                </ul>
                <p className='italic text-gray-600 mt-4'>
                    <span className='font-semibold'>Note:</span> Status changes take effect immediately, but may require up to 5 minutes to propagate across all systems.
                </p>
            </div>

            
            {/* ---------- TROUBLESHOOTING SECTION ---------- */}
            <div id="section7" className="mt-16 mb-20">
                <div className="bg-blue-50 border border-blue-200 rounded-xl px-6 py-8 shadow-sm">
                    <div className="flex items-center mb-6">
                        <svg className="w-7 h-7 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#e0f2fe" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                        </svg>
                        <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mt-3">Troubleshooting</h2>
                    </div>
                    <ul className="space-y-7 text-sm">
                        <li className="pl-2">
                            <div className="font-medium text-blue-900 mb-1 flex items-center">
                                <span className="mr-2">•</span>I can't add a terminal or the "Add Terminal" button is disabled.
                            </div>
                            <div className="text-blue-800 ml-5">
                                Ensure you have the correct permissions and have selected a merchant/store. If the merchant or store is not approved, you may not be able to add terminals.
                            </div>
                        </li>
                        <li className="pl-2">
                            <div className="font-medium text-blue-900 mb-1 flex items-center">
                                <span className="mr-2">•</span>I can't change the terminal name.
                            </div>
                            <div className="text-blue-800 ml-5">
                                User cannot change the default terminal name. Terminal names are auto-generated based on the terminal count.
                            </div>
                        </li>
                        <li className="pl-2">
                            <div className="font-medium text-blue-900 mb-1 flex items-center">
                                <span className="mr-2">•</span>The page is not loading or is stuck.
                            </div>
                            <div className="text-blue-800 ml-5">
                                Check your internet connection and try reloading the page. If the issue continues, try using a different browser or device.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MerchantTerminalManagement;

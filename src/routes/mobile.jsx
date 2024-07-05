import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Achiverachivers = () => {
    const [achiversClubData, setachiversClubData] = useState(null);
    const [activeTab, setActiveTab] = useState(1); // Default to the first tab (Mobile Achivers)

    const fetchachiversClub = async () => {
        try {
            const response = await axios.get("https://kairaablockchainacademy.com/kait/admin/achivers/achiver_api.php");
            setachiversClubData(response.data);  // assuming response.data is the JSON object
        } catch (error) {
            console.error('Error fetching achivers club data:', error);
            // Handle error state or retry mechanism here
        }
    };

    useEffect(() => {
        fetchachiversClub();
    }, []);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    if (!achiversClubData) {
        return <div>Loading...</div>;
    }

    const renderTabContent = (categoryIndex, imageKey, titleKey) => {
        return (
            <div className="">
                <h1 className='text-center text-[50px] mb-9 font-bold' style={{ fontFamily: "Nunito, sans-serif" }}>{achiversClubData.data[categoryIndex]?.title}</h1>
                <div className="grid center w-[90%] m-auto grid-cols-1 gap-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 mt-[30px] lg:pb-[60px]">
                    {achiversClubData.data[categoryIndex]?.members.map((e, i) => (
                        <div className='flex justify-center box-border rounded-[30px] md:mb-[10px]' key={i}>
                            <div className="transition-all duration-300 hover:scale-110 box-border rounded-[30px]">
                                <img src={e[imageKey]} alt="#" className='w-[350px] h-[300px] box-border rounded-[30px] object-cover' />
                                <div className=''>
                                    <p className='relative bg-white text-center' dangerouslySetInnerHTML={{ __html: e[titleKey] }}></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <>
            <div className='mt-[20px]'>
                <div className="flex justify-center gap-16 text-lg font-bold ">
                    <button className={`tab-btn ${activeTab === 1 ? 'active' : ''} hover:text-[#594f9c] border-b-2  hover:border-[#594f9c]`} onClick={() => handleTabClick(1)}>Mobile Achivers</button>
                    <button className={`tab-btn ${activeTab === 2 ? 'active' : ''} hover:text-[#594f9c] border-b-2  hover:border-[#594f9c]`} onClick={() => handleTabClick(2)}>Laptop Achivers</button>
                    <button className={`tab-btn ${activeTab === 3 ? 'active' : ''} hover:text-[#594f9c] border-b-2  hover:border-[#594f9c]`} onClick={() => handleTabClick(3)}>EV Bike Achivers</button>
                    <button className={`tab-btn ${activeTab === 4 ? 'active' : ''} hover:text-[#594f9c] border-b-2  hover:border-[#594f9c]`} onClick={() => handleTabClick(4)}>Car Achivers</button>
                </div>
                {activeTab === 1 && renderTabContent(1, 'mobile_achivers_image', 'title')}
                {activeTab === 2 && renderTabContent(2, 'laptop_achivers_image', 'title')}
                {activeTab === 3 && renderTabContent(3, 'evbike_achivers_image', 'title')}
                {activeTab === 4 && renderTabContent(4, 'car_achivers_image', 'title')}
            </div>
        </>
    );
};

export default Achiverachivers;

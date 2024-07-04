import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import imge from "../../assets/july-contest.jpeg";

const App = () => {
    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    useEffect(() => {
        // Delay showing the modal by 1000 milliseconds (1 second)
        const delay = setTimeout(() => {
            setShowModal(true);
        }, 1000); // Adjust the delay time as needed

        // Clean up the timeout to prevent memory leaks
        return () => clearTimeout(delay);
    }, []); // Run only once after initial render

    return (
        <div className="App">
            {/* Modal */}
            {showModal && (
                <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
                    <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

                    <div className="modal-container bg-white w-11/12 md:max-w-[600px] mx-auto rounded shadow-lg z-50 overflow-y-auto">

                        <div className="modal-content py-4 text-left px-6">

                            <div className="modal-header">
                                <h3 className="modal-title text-2xl font-bold">Current Contest</h3>
                                <button className="close-modal close absolute top-0 right-0 cursor-pointer z-50" onClick={() => setShowModal(false)}>
                                    <span className="text-3xl">×</span>
                                </button>
                            </div>

                            <div className="modal-body">
                                <div className="text-center text-2xl flex justify-center items-center">
                                    <img className='h-[400px] w-[400px]' src={imge} alt="Contest Image" />
                                </div>
                            </div>

                            <div className="modal-footer mt-4 justify-center">
                                <button className="btn btn-secondary mr-4" onClick={() => setShowModal(false)}>Close</button>
                                <button className="btn btn-primary" onClick={() => setShowModal(false)}><a href='/contest'> View More</a></button>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;

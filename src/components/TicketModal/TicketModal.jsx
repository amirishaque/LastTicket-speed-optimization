import React, { useEffect, useState } from 'react';
import '../../styles/ticketmodal/style.css';
import ProgressBar from "@ramonak/react-progress-bar";
import StadiumImg from '../../assets/images/stadium.jpg';
// import SeatsImg from '../../assets/images/seats.png'
import SeatImg from '../../assets/images/so.png';
import SeatImge from '../../assets/images/se.png';
import SeatSa from '../../assets/images/sa.png';
import SeatSu from '../../assets/images/su.png'

const TicketModal = ({ isOpen, closeModal }) => {
  const [isLoading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let timer;
    if (isOpen) {
      // Simulating loading for 3 seconds
      timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress++;
      setPercentage(progress);
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleOutsideClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      closeModal();
      document.body.classList.remove('modal-content-open');
    }
  };



  useEffect(() => {
    // Add or remove class to body when modal is opened or closed
    if (isOpen) {
      document.body.classList.add('modal-content-open');
    } else {
      document.body.classList.remove('modal-content-open');
    }
  }, [isOpen]);



  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={handleOutsideClick}>
          <div className="modal-content ticket-modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <div className='modal-content-wrapper-ticket'>
              <h2>Tickets are in high demand! Grab yours now before they sell out</h2>
              <div className='eup-wrapper'>
                <div className='eu-wrapper'>
                  <span>
                    <img src={SeatImge} alt='' height={50} width={50}/>
                  </span>
                  <p>Only 10 tickets left online.</p>
                </div>
                <div className='eu-wrapper'>

                  <span>
                      <img src={SeatSa} alt='' width={50} height={50} />
                  </span>
                  <p>This event may sell out.</p>
                </div>
                <div className='eu-wrapper'>
                  <span>
                    <img src={SeatSu} alt='' width={50}  height={50}/>
                  </span>
                  <p>Venue tickets nearing capacity.</p>
                </div>
              </div>
              <div className='loader-wrapper-bar'>
                {/* {isLoading && (
                  <div className='loader-bar-wrapper'>
                    <div className='loader-bar' style={{ width: `${percentage}%` }}></div>
                    <span className='loading-percentage'>{percentage}%</span>
                  </div>
                )} */}
                {/* {!isLoading && <>
                  <div className='loader-bar' style={{ width: `${percentage}%` }}></div>
                    <span className='loading-percentage'>{percentage}%</span>
                </>} */}
                  <div className='loader-bar-wrapper'>
                <ProgressBar
  completed={100}
  className="wrapper-l"
  barContainerClassName="container-l"
  completedClassName="barCompleted-l"
  labelClassName="label-l"
/>
</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TicketModal;

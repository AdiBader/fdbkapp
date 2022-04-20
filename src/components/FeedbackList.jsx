import { useContext } from 'react';

import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

import { motion, AnimatePresence } from "framer-motion"


function FeedbackList() {
  const {feedbacks} = useContext(FeedbackContext);

  if (!feedbacks || feedbacks.length === 0) {
    return <p>No feedbacks</p>
  }  

  return (
    <div className='feedback-list'>
    <AnimatePresence>
    {feedbacks.map((item, index) => (
        <motion.div 
        key={item.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
        <FeedbackItem key={item.id} item={item}  />
        </motion.div>
    ))}
    </AnimatePresence>
    </div>
  )

//   return (
//     <ul className='feedbacl-list'>
//     {feedbacks
//     .map((item, index) => (
//         <li key={item.id}>
//             <FeedbackItem item={item} handleDelete={handleDelete} />
//         </li>
//   ))}
//     </ul>
//   )
}

export default FeedbackList
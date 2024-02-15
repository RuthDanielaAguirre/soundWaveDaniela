import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Circle.css'
// Asegúrate de haber importado el CSS de Bootstrap

const CircleComponentBlue = () => {
  return (
    <div className="Circle Blue d-flex justify-content-center align-items-center" >
      {/* Contenido del círculo */}
      <p>Circle</p>
    </div>
  );
}


// const CircleComponentPink = () => {
//   return (
//     <div className="Circle Pink d-flex justify-content-center align-items-center" style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'blue', color: 'white' }}>
//       {/* Contenido del círculo */}
//       <p>Circle</p>
//     </div>
//   );
// }

export default CircleComponentBlue;


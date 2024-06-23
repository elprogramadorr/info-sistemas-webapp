
import build from '../../assets/build.png';

const Construccion = () => {
  return (
   
      <div style={{ height: '80vh' , display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
        <img src={build} alt='build' width='200px' height='auto' />
        <div>
        <h1>En construcción</h1>
        <p>Esta página aún se encuentra en construcción</p>
        </div>
      </div>
   
  );
};

export default Construccion;
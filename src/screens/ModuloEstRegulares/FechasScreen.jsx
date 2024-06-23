import { useState } from "react";
import Tooltip from '@mui/material/Tooltip';

const events = [
  { paso: 'Paso 1', description: `1. Ingrese al WebSISS\n\n 2. Seleccione la Pestaña de "Inscripción"\n\n3. De clic en el Botón de "Pagar Matrícula"` },
  { paso: 'Paso 2', description: 'Para realizar el pago de la matrícula deberá una vez ingresado en WebSISS:\n\n 1. Dar clic en el botón “PAGO ELECTRONICO”' },
  { paso: 'Paso 3', description: 'Puede realizar el pago por caja aproximandose con los requisitos mencionados o realizar el pago electrónico por Código QR o de pago mediante el sistema de pasarela de pagos.' },
  { paso: 'Paso 4', description: '1.Ingrese al WebSISS\n\n 2. Seleccione "Obtención de Cod. de Acceso para Inscripción" \n\n3.Seleccione "Enviar códigos" para obtenerlos a través de su correo electrónico' },
  { paso: 'Paso 5', description: 'El día habilitado para toma de materias puede realizarlo indicando\n\n 2 códigos de acceso solicitados' }
];

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [seleccionado, setSeleccionado] = useState(null);

  const styles = {
    timelineContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    timeline: {
      display: 'flex',
      justifyContent: 'space-around',
      width: '100%',
      margin: '20px 0',
    },
    timelineEvent: {
      position: 'relative',
      cursor: 'pointer',
    },
    circle: (seleccionado) => ({
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      border: '2px solid #BB0036',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'background-color 0.3s',
      backgroundColor: seleccionado ? '#BB0036' : 'transparent',
    }),
    eventDetails: {
      marginTop: '20px',
      textAlign: 'center',
    }
  };

  return (
    <div style={styles.timelineContainer}>
      <div style={styles.timeline}>
        {events.map((event, index) => (
          <div
            key={index}
            style={styles.timelineEvent}
            onClick={() => setSelectedEvent(event)}
            onMouseEnter={() => setSeleccionado(index)}
            onMouseLeave={() => setSeleccionado(null)}
          >
            <div style={styles.circle(seleccionado === index)}>{event.paso}</div>
          </div>
        ))}
      </div>
      {selectedEvent && (
        <div style={styles.eventDetails}>
          <h2>{selectedEvent.paso}</h2>
          <p>
            {selectedEvent.description.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      )}
    </div>
  );
};

const FechasScreen = () => {
  const styles = {
    field: {
      paddingLeft: 40,
      paddingRight: 30,
      width: '40%',
    },
    fieldMain: {
      backgroundColor: '#020837',
      paddingLeft: 40,
      paddingRight: 30,
      width: '40%',
    },
  };
  return (
    <div>
      <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
        <fieldset style={styles.fieldMain}>
          <legend>Fechas</legend>
          <p><b>Venta de matrículas</b></p>
          <div>25 y 26 de marzo de 2024, a horas 8:30 a 12:00 y 14:30 a 17:00</div>
          <p><b>Apertura del Sistema WEBSIS</b></p>
          <div>25 y 26 de marzo de 2024, a horas 9:30 a 24:00</div>
        </fieldset>
        <fieldset style={styles.field}>
          <legend> Requisitos </legend>
          <p><b>Caja facultativa</b></p>
          <ul>
            <li>Presencia física del estudiante</li>
            <li>Carnet de Identidad</li>
            <li>Monto del total de matrícula Bs.-14</li>
          </ul>
          <p><b>Pago QR</b></p>
          <ul>
            <li>Aplicación de tu banco preferido</li>
            <li>Monto del total de matrícula Bs.-15</li>
          </ul>
          <p><b>Pago por código de pago</b></p>
          <ul>
            <li>Cuenta en el Banco Unión</li>
            <li>UNINET, UNIMÓVIL o cajero de Banco Unión</li>
            <li>Monto del total de matrícula Bs.-15</li>
          </ul>
        </fieldset>
        <fieldset style={{ width: '80%', marginLeft: '3rem' }}>
          <Tooltip title='Haga click en un círculo para conocer más información sobre este'><legend>Proceso de inscripción</legend></Tooltip>
          <Timeline />
        </fieldset>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/wfChD5hxyX4?si=_B4Nk7OSSdnHNHxP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
};
export default FechasScreen;
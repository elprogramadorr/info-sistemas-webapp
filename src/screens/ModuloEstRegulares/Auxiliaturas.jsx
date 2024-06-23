import { useState } from 'react';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { padding, width } from '@mui/system';

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
			margin: '20px 0',
			padding: '5px',
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
		eventDetails: (seleccionado)=> ({
			color: seleccionado ? 'white' : 'black',
			width: '80%'
		}),
		iteem: {
			display: 'flex',
			alignItems: 'center',
			gap: '1rem',
			flexWrap: 'wrap',
			paddingBottom: '1rem',
		},
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
						{index % 2 === 0 &&
						<div style={styles.iteem}>
							<div style={styles.circle(seleccionado === index)}>{event.paso}</div>
							<div style={styles.eventDetails(seleccionado === index)}>
								<div>{event.description}
								</div>
							</div>
						</div>
					}
					{index % 2 === 1 &&
						<div style={styles.iteem}>
							<div style={styles.eventDetails(seleccionado === index)}>
								<div>{event.description}
								</div>
							</div>
							<div style={styles.circle(seleccionado === index)}>{event.paso}</div>
						</div>
					}

					</div>
				))}
			</div>

		</div>
	);
};

const Auxiliaturas = () => {
	const styles = {
		superior: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
		},
		botondescarga: {
			display: 'flex',
			alignItems: 'center',
			padding: '5px 10px',
			margin: '1rem',
			gap: '1rem',
		},
		boton: {
			backgroundColor: '#A9070790',
			color: 'white',
			border: 'none',
			padding: '10px 20px',
			borderRadius: '5px',
			cursor: 'pointer',
			fontSize: '1rem',
			fontWeight: 'bold',
		},
		contenido: {
			display: 'flex',
			justifyContent: 'space-between',
			gap: '2rem',
		}
	}

	return (
		<div>
			<div style={styles.superior}>
				<h1>Proceso de Auxiliatura</h1>
				<div style={styles.botondescarga}>
					<SaveAltIcon />
					<button style={styles.boton}>Descargar Convocatoria</button>
				</div>
			</div>
			<div style={styles.contenido}>
				<div className="info" style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
					<fieldset>
						<legend>Invitación</legend>
						<p>El proceso de auxiliatura se realiza mediante una competencia de méritos y evaluación de capacidades
							sobre la materia a la que se quiere postular, en el cual los estudiantes interesados en ser auxiliares de cátedra deben presentar los documentos requeridos en la convocatoria.</p>
						<p>Se puede postular como auxiliar de Docencia o Servicio.</p>
					</fieldset>
					<fieldset>
						<legend>Requisitos</legend>
						<ul>
							<li>Ser estudiante regular de la carrera de Ingeniería en Informática o Sistemas, inscrito en la gestión.</li>
							<li>Haber aprobado la materia a la que se quiere postular como auxiliar.</li>
							<li>Presentar los documentos requeridos en la convocatoria.</li>
							<li>No haber sid auxiliar por más de 2 años continuos o discontinuos en una materia de investigación, docentecia o servicio.</li>
							<li>Participar y aprobar el concurso de méritos u proceso de pruebas de selección y admisión.</li>
						</ul>
						<h4><b>Para Auxiliar de Servicio o Laboratorio</b></h4>
						<ul>
							<li>Haber vencido la totalidad de asignaturas hasta 6to semestre.</li>
						</ul>

					</fieldset>
				</div>
				<div className="interactivo" style={{ width: '50%' }}>
					<fieldset >
						<legend>Proceso de Auxiliatura</legend>
						<Timeline />
					</fieldset>
				</div>
			</div>
		</div>
	);
}

export default Auxiliaturas;
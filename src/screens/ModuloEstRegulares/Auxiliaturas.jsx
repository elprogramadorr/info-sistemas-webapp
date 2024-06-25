import { useState } from 'react';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const events = [
	{ paso: 'Paso 1', description: 'Presentar los documentos según la convocatoria: <ul><li>carta de solicitud dirigida al jefe del dpto.</li><li>kardex estudiantil</li><li>curriculum vitae</li><li>certificado emitido por la biblioteca</li><li>fotocopia de carnet.</li></ul>' },
	{ paso: 'Paso 2', description: 'La documentación debe ser presentada dentro de un sobre manila en la Secreataría del Dpto. de Informática y Sistemas.' },
	{ paso: 'Paso 3', description: 'Revisar la publicación de postulantes habilitados en la página de Facbook del <a href="https://www.facebook.com/DptoInformaticaSistemas" target="_blank">Dpto de Informática y Sistemas</a>' },
	{ paso: 'Paso 4', description: 'Revisar la calificación de meritos y presentarse en la fecha de evaluación de conocimientos' },
	{ paso: 'Paso 5', description: 'Obtener los resultados de la evaluación de conocimientos, si es satisfactorio presentar certificado de alumno regular 1/2024 a la jefatura del departamento.' },
	{ paso: 'Paso 6', description: 'Elegir horarios y grupos de la materia de auxiliatura. Comunicarse con el docente de la materia para concretar la forma de trabajo.' },
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
		eventDetails: (seleccionado) => ({
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
									<p dangerouslySetInnerHTML={{ __html: event.description }}></p>
								</div>
							</div>
						}
						{index % 2 === 1 &&
							<div style={styles.iteem}>
								<div style={styles.eventDetails(seleccionado === index)}>
									<p dangerouslySetInnerHTML={{ __html: event.description }}></p>
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
					<a href='https://drive.google.com/file/d/1X3qfrO3IxlT1QJdSYpDdPssshCUZSls9/view' target='_blank' style={styles.boton}>Descargar Convocatoria</a>
				</div>
			</div>
			<div style={styles.contenido}>
				<div className="info" style={{ width: '30%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
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
							<li>No haber sido auxiliar por más de 2 años continuos o discontinuos en una materia de investigación, docentecia o servicio.</li>
							<li>Participar y aprobar el concurso de méritos u proceso de pruebas de selección y admisión.</li>
						</ul>
						<h4><b>Para Auxiliar de Servicio o Laboratorio</b></h4>
						<ul>
							<li>Haber vencido la totalidad de asignaturas hasta 6to semestre.</li>
						</ul>

					</fieldset>
				</div>
				<div className="interactivo" style={{ width: '70%' }}>
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
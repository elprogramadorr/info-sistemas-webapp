import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { ButtonGroup, Button, Box } from '@mui/material';
import { useState } from 'react';

const Titulacion = () => {
	const [seleccionado, setSeleccionado] = useState('Adscripcion');

	const styles = {
		contenido2: {
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
			flexDirection: 'row',
			flexWrap: 'wrap',
			gap: '10px',
			width: '100%',
			justifyContent: 'center',
		},
		button: (isSelected) => ({
			fontFamily: "Nunito Sans",
			color: isSelected ? '#051122' : '#D3E5FF',
			border: '1px solid #D3E5FF',
			backgroundColor: isSelected ? '#D3E5FF' : 'transparent',
		}),
	}
	return (
		<div>
			<div style={{marginBottom:'2rem'}}>
				<h1>Modalidades de titulación</h1>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						'& > *': {
							m: 1,
						},
						width: '100%',
					}}
				>
					<ButtonGroup variant="outlined" aria-label="Basic button group">
						<Button style={styles.button(seleccionado === "Adscripcion")} onClick={() => setSeleccionado('Adscripcion')}>Adscripción</Button>
						<Button style={styles.button(seleccionado === "Excelencia")} onClick={() => setSeleccionado('Excelencia')}>Excelencia</Button>
						<Button style={styles.button(seleccionado === "Proyecto")} onClick={() => setSeleccionado('Proyecto')}>Proyecto de grado</Button>
						<Button style={styles.button(seleccionado === "Tesis")} onClick={() => setSeleccionado('Tesis')}>Tesis</Button>
						<Button style={styles.button(seleccionado === "Trabajo")} onClick={() => setSeleccionado('Trabajo')}>Trabajo dirigido</Button>
					</ButtonGroup>
					{seleccionado === 'Adscripcion' &&
						<>
							<h3>Adscripción</h3>
							<p style={{width: '70%',lineHeight:1.7}}>La adscripción consiste en la realización de un trabajo práctico dentro de la Universidad Mayor
								de San Simón que tenga la complejidad suficiente como para ser abordado en un proyecto de
								titulación. Los trabajos a realizar deben encontrarse en los ámbitos académicos, de investigación,
								interacción y/o gestión universitaria. Este trabajo se realiza bajo la supervisión de un guía de la
								unidad universitaria y del tutor</p>
						</>
					}
					{seleccionado === 'Excelencia' && <>
						<h3>Excelencia Académica</h3>
						<p style={{width: '70%',lineHeight:1.7}}>Cada fin de semestre, el o la estudiante que tuviera el mejor promedio de su curso (sin
							abandonos, reprobaciones y aprobaciones con exámenes de mesa) y que sólo le falte aprobar la
							asignatura “Proyecto Final” en un tiempo menor o igual a la duración de su plan de estudios, se
							titulará por excelencia. Es decir, no necesitará cursar la materia “Proyecto Final” y su nota será
							cien (100). </p>
					</>
					}
					{seleccionado === 'Proyecto' && <>
						<h3>Proyecto de grado</h3>
						<p style={{width: '70%',lineHeight:1.7}}>Es un trabajo de investigación aplicada con la complejidad suficiente como para ser abordado en
							un proyecto de titulación. Tiene como objetivo dar respuesta a un problema de manera práctica, a
							través del desarrollo de un sistema computacional a nivel de prototipo. Los proyectos de grado no
							deben efectuarse para solucionar problemas concretos de instituciones, empresas u organismos. </p>
					</>}
					{seleccionado === 'Tesis' && <>
						<h3>Tesis</h3>
						<p style={{width: '70%',lineHeight:1.7}}>Es un trabajo de investigación que cumple con las exigencias del método científico, con el objeto
							de conocer y dar respuesta a un problema a través de análisis crítico bien fundamentado,
							planteando alternativas aplicables y/o proponiendo modelos teóricos.</p>
					</>}
					{seleccionado === 'Trabajo' && <>
						<h3>Trabajo dirigido</h3>
						<p style={{width: '70%',lineHeight:1.7}}>Es un trabajo práctico realizado en instituciones públicas o en organismos sin fines de lucro, con
							la complejidad suficiente como para ser abordado en un proyecto de titulación. Se trata de
							desarrollar un sistema computacional, a nivel de diseño, sobre la base de los términos de
							referencia de la institución. Este trabajo se realiza bajo la supervisión de un guía de la institución
							u organización y del tutor</p>
					</>}
				</Box>
				<p>Para conocer sobre titulación de posgrado puede recurrir a <a href='/graduados'>Graduados</a></p>
			</div>
			<div style={{marginTop:'1rem'}}>
				<div style={styles.contenido2}>
					<h1>Reglamento de titulación</h1>
					<div style={styles.botondescarga}>
						<SaveAltIcon />
						<a href='https://www.cs.umss.edu.bo/archivos/reglamentoTitulacionCarrerasNuevoModif.pdf' download='reglamento.pdf' target='_blank' style={styles.boton}>Descargar Reglamento</a>
					</div>
				</div>
				<div style={{display:'flex', gap:'1rem'}}>
					<fieldset>
					<legend>Antecedentes</legend>
					<p>El proyecto generado en las diferentes modalidades de titulación, en todas sus partes,
						es propiedad intelectual de la Universidad Mayor de San Simón.<br />
						Se considera al Honorable Consejo de Carrera como máximo organismo responsable
						para la nominación de tribunales del proyecto final y para la aprobación de cambios de tema,
						prórrogas y asuntos no contemplados en el presente Reglamento.<br />
					</p>
					</fieldset>
					<fieldset>
					<legend>Tiempo de duración</legend>
					<p>El tema del proyecto final se debe desarrollar en un tiempo de 5 meses como mínimo y de 8 meses como máximo, 300 - 400 horas de trabajo.<br />
						Los temas de perfiles aprobados tendrán vigencia máxima de cuatro semestres
						académicos consecutivos, que se cuentan a partir a la conclusión del semestre en que se aprobó el
						perfil.
					</p>
					</fieldset>
					
				</div>
			</div>

		</div>
	)
}

export default Titulacion;
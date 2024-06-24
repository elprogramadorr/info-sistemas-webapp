import SaveAltIcon from '@mui/icons-material/SaveAlt';
import DropdownNormal from '../../utils/DropdownNormal';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';

const materiasAll = [
	{ value: '10', label: 'Inglés I', convalidable: 'Es posible convalidar' },
	{ value: '11', label: 'Física General', convalidable: 'Es posible convalidar' },
	{ value: '12', label: 'Algebra I', convalidable: 'Es posible convalidar' },
	{ value: '13', label: 'Cálculo I', convalidable: 'Es posible convalidar' },
	{ value: '14', label: 'Intro. a la Programación', convalidable: 'Es posible convalidar' },
	{ value: '15', label: 'Inglés II', convalidable: 'Es posible convalidar' },
	{ value: '16', label: 'Algebra II', convalidable: 'Es posible convalidar' },
	{ value: '17', label: 'Cálculo II', convalidable: 'Es posible convalidar' },
	{ value: '18', label: 'Elem. de progra. y estruct. de datos', convalidable: 'Es posible convalidar' },
	{ value: '19', label: 'Arquitectura de computadoras I', convalidable: 'Es posible convalidar' },
	{ value: '20', label: 'Programación', convalidable: 'No es posible convalidar' },
	{ value: '21', label: 'Calculo Numérico', convalidable: 'Es posible convalidar' },
	{ value: '22', label: 'Lógica', convalidable: 'No es posible convalidar' },
	{ value: '23', label: 'Arquitectura de computadoras II', convalidable: 'Es posible convalidar' },
	{ value: '24', label: 'Metodologias de Investigación', convalidable: 'No es posible convalidar' },
	{ value: '25', label: 'Organización y Métodos', convalidable: 'No es posible convalidar' },
	{ value: '26', label: 'Estadística I', convalidable: 'Es posible convalidar' },
	{ value: '27', label: 'Teoría de grafos', convalidable: 'No es posible convalidar' },
];

const CambioCarrera = () => {
	const [esPosible, setEsPosible] = useState('');
	const [selectedItem, setSelectedItem] = useState('');
	const [origen, setOrigen] = useState('');
	const [destino, setDestino] = useState('');

	useEffect(() => {
		console.log(selectedItem);
		setEsPosible(materiasAll.find((materia) => materia.value === selectedItem)?.convalidable || '');
	}, [selectedItem]);

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
			flexDirection: 'row',
			flexWrap: 'wrap',
			gap: '10px',
			width: '100%',
			justifyContent: 'center',
		}
	}

	return (
		<div>
			<div style={styles.superior}>
				<h1>Cambio de carrera</h1>
				<div style={styles.botondescarga}>
					<SaveAltIcon />
					<button style={styles.boton}>Descargar Reglamento</button>
				</div>
			</div>
			<div style={styles.contenido}>
				<fieldset style={{ width: '45%' }}>
					<legend>Requisitos</legend>
					<p>Para realizar el cambio de carrera, el estudiante debe cumplir con los siguientes requisitos:</p>
					<ul>
						<li>Kardex de estudiante actualizada</li>
						<li>Fotocopia simple del diploma de Bachiller</li>
						<li>Cumplir con afinidad programática y curricular de cursar mínimamente 5 materias</li>
						<li>Estar regularmente inscrito en la carrera, en caso de abandono realizar el trámite de reincorporación.</li>
					</ul>
				</fieldset>
				<fieldset style={{ width: '45%' }}>
					<legend>Procedimiento</legend>
					<p>Para realizar el cambio de carrera, el estudiante debe cumplir con los siguientes pasos:</p>
					<ul>
						<li>Presentar Kardex actualizado de la UTI facultativa</li>
						<li>Extensión de orden de compra de valores para cambio de carrera, previa verificación de documentos en Ventanilla 1</li>
						<li>En Caja Central, comprar el Valorado para cambio de carrera</li>
						<li>Llenar formulario por el operador de Ventanilla de despachos, con la firma del jefe de registros</li>
					</ul>
				</fieldset>
				<div style={{ width: 'calc(90% + 10px)', display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center', backgroundColor:'#F0F6FF', }}>
					<h4 style={{color:'black'}}>Convalidación de materias</h4>
					<div>
						<DropdownNormal 
							label='Carrera de origen' 
							items={[{ value: '1', label: 'Ingeniería en Informática' }, { value: '2', label: 'Ingeniería en Sistemas' }]} 
							onChange={setOrigen}/>
						<DropdownNormal 
							label='Carrera de destino' 
							items={[{ value: '1', label: 'Ingeniería en Informática' }, { value: '2', label: 'Ingeniería en Sistemas' }]}
							onChange={setDestino}
							messageError={origen === destino ? 'La carrera de origen y destino no pueden ser iguales' : ''}
						/>
					</div>
					<p style={{color:'black'}}>Para realizar la convalidación de materias, seleccione una materia para ver si es posible de convalidar:</p>
					<div style={{display:'flex', gap:'15px', alignItems:'center'}}>
						<DropdownNormal
							label='Materias'
							items={materiasAll}
							onChange={setSelectedItem}
						/>

						<TextField
							id='outlined-basic'
							label='¿Es posible convalidar?'
							variant='standard'
							style={{ width: '250px', backgroundColor: 'white', padding: '10px', borderRadius: '5px', fontFamily: 'Nunito Sans'}}
							value={esPosible}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CambioCarrera;
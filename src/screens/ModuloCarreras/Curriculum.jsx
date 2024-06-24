import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Curriculum = () => {
    return (
        <div className="flex flex-col items-center p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Enfoque del Programa</h2>
            <p className="text-center mb-8 text-lg">
                El programa tiene como objetivo equipar a los estudiantes con las herramientas que están en demanda en el mercado laboral actual, con énfasis en las cosas que no "van y vienen", sino que son de importancia universal y ya han pasado la prueba del tiempo. Mientras estudian los algoritmos actualizados que se pueden encontrar en una publicación típica de blog sobre aplicaciones prácticas de aprendizaje automático, los estudiantes van más allá de la superficie y obtienen el conocimiento de por qué las cosas funcionan como lo hacen. Por lo tanto, las matemáticas tienen una parte tan importante en el programa como los algoritmos.
            </p>
            <h2 className="text-3xl font-bold mb-6">Malla Curricular</h2>
            <p className="text-center mb-6 text-lg">
                El currículo incluye los siguientes temas esenciales para los temas más actuales de la informática moderna:
            </p>
            <ul className="list-none flex flex-wrap justify-center gap-4 mb-8">
                <li className="flex items-center mb-2">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    Algoritmos y Estructuras de Datos
                </li>
                <li className="flex items-center mb-2">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    Inteligencia Artificial
                </li>
            </ul>

            <p className="text-center mb-6 text-lg">
                Para poder implementar los algoritmos y desarrollar software, se les dan a los estudiantes las bases de los lenguajes de programación más utilizados:
            </p>
            <ul className="list-none flex flex-wrap justify-center gap-4 mb-8">
                <li className="flex items-center mb-2">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    Python
                </li>
                <li className="flex items-center mb-2">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    Java
                </li>
                <li className="flex items-center mb-2">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    C++
                </li>
            </ul>
            <p className="text-center mb-6 text-lg">
                También se incluyen cursos sobre algunos aspectos fundamentales de los sistemas informáticos modernos:
            </p>
            <ul className="list-none flex flex-wrap justify-center gap-4 mb-8">
                <li className="flex items-center mb-2">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    Sistemas Operativos
                </li>
                <li className="flex items-center mb-2">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    Bases de Datos (3 cursos)
                </li>
            </ul>
            <p className="text-center mb-6 text-lg">
                Los algoritmos informáticos se basan en matemáticas discretas, por lo que el programa contiene cursos dedicados a los fundamentos de las matemáticas discretas:
            </p>
            <ul className="list-none flex flex-wrap justify-center gap-4 mb-8">
                <li className="flex items-center mb-2">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    Lógica
                </li>
                <li className="flex items-center mb-2">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    Grafos (Combinatoria)
                </li>
            </ul>

            <div className="text-center">
                <a href="https://www.umss.edu.bo/wp-content/uploads/2019/07/informatica.jpg" className="text-blue-200 underline text-lg text-blue-400">Malla Curricular completa</a>
            </div>
        </div>
    );
}

export default Curriculum;

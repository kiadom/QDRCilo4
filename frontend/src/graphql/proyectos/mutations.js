import { gql } from '@apollo/client';

const CREAR_PROYECTO = gql`

    mutation CrearProyecto(
        $nombre: String!, 
        $presupuesto: Float!,
        $objetivoGeneral: String!,
        $objetivoEspecifico1: String!,
        $objetivoEspecifico2: String!,
        $fechaInicio: Date!,
        $fechaFin: Date!,
        $lider: String!,
    ) {
        crearProyecto(
            nombre: $nombre, 
            presupuesto: $presupuesto, 
            objetivoGeneral: $objetivoGeneral,
            objetivoEspecifico1: $objetivoEspecifico1,
            objetivoEspecifico2: $objetivoEspecifico2,
            fechaInicio: $fechaInicio,
            fechaFin: $fechaFin,
            lider: $lider,
        ) {
            _id
            nombre
            objetivoGeneral
            objetivoEspecifico1
            objetivoEspecifico2
            presupuesto
            fechaInicio
            fechaFin
            lider {
                _id
            }
            estado
            fase
        }
    }
`;

const EDITAR_PROYECTO = gql`

    mutation EditarProyecto(
        $_id: String, 
        $nombre: String,
        $presupuesto: Float,
        $objetivoGeneral: String,
        $objetivoEspecifico1: String,
        $objetivoEspecifico2: String,
        $estado: Enum_EstadoProyecto,
        $fase: Enum_FaseProyecto,
    ) {
        editarProyecto(
            _id: $_id, 
            nombre: $nombre,
            presupuesto: $presupuesto, 
            objetivoGeneral: $objetivoGeneral,
            objetivoEspecifico1: $objetivoEspecifico1,
            objetivoEspecifico2: $objetivoEspecifico2,
            estado: $estado,
            fase: $fase,
        ) {
            _id
            nombre
            presupuesto
            objetivoGeneral
            objetivoEspecifico1
            objetivoEspecifico2
            fechaInicio
            fechaFin
            lider {
                _id
            }
            estado
            fase
        }
    }
`;

export { CREAR_PROYECTO, EDITAR_PROYECTO };
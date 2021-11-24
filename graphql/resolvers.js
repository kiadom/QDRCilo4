import { resolversUsuario } from "../models/usuario/resolvers.js";
import { resolversProyecto } from "../models/proyecto/resolvers.js";
import { resolversObjetivo } from "../models/objetivo/resolvers.js";
import { resolversInscripcion } from "../models/inscription/resolvers.js";

export const resolvers = [resolversUsuario, resolversProyecto, resolversObjetivo, resolversInscripcion];

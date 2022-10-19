import enum


class ECodigoResultado(enum.IntEnum):
    OK = 0  # No hay errores
    ERROR_TOKEN = -1  # Error token
    ERROR_AUTENTICACION = -2  # Error de autenticación
    ERROR_GENERICO = -3  # Error genérico
    ERROR_INTEGRACION_NO_EXISTE = -4  # No existe la integración indicada
    ERROR_INTEGRACION_NO_POSEE = -5  # El usuario no posee la integración
    ERROR_USUARIO_SIN_ENTIDAD = -6  # El usuario no está asociado a ninguna Entidad
    ERROR_VALIDACION = -300  # Error de validación
    ERROR_NOTFOUND = -400  # Error de datos inexistentes
    ERROR_PERSONALIZADO = -900
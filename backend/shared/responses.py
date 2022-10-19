# Resumen: Clase que gestiona la devolución de una misma respuesta en todos los casos
# Autor: AMR
from rest_framework.exceptions import APIException


class CRespuestas:

    # Provoca el retorno del error
    @staticmethod
    def retorna_error(p_iCodError, p_sMsgError, p_oResultado):
        raise APIException(CRespuestas.generar_respuesta(p_iCodError, p_sMsgError, p_oResultado))

    # Formatea la respuesta en formato JSON
    @staticmethod
    def generar_respuesta(p_iCodError, p_sMsgError, p_oResultado):
        s_retorno = {"cod_resultado": p_iCodError, "msg_resultado": p_sMsgError, "resultado": p_oResultado}
        return s_retorno

    # Convierte una excepción de validación de campos en string
    # Autor: AMR
    @staticmethod
    def generar_cadena_validacion_campos_serializer(p_oDetalle):
        s_cadena = ""
        for campo in p_oDetalle:
            s_cadena += str(campo) + ": " + str(p_oDetalle[campo][0])
            s_cadena += "; "
            print(s_cadena)

        return s_cadena

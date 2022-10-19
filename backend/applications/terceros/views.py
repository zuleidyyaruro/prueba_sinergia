from rest_framework import viewsets
from rest_framework.response import Response
from django.db import transaction

from applications.terceros.models import Tercero, ElementosListas
from applications.terceros.serializers import TercerosSerializer
from shared.enums import ECodigoResultado
from shared.responses import CRespuestas


class TerceroViewSet(viewsets.ModelViewSet):
    queryset = Tercero.objects.all()
    serializer_class = TercerosSerializer

    # Get
    def get_queryset(self):
        return Tercero.objects.all()

    # Post
    def create(self, request, *args, **kwargs):
        codigo_error = int(ECodigoResultado.OK)
        try:
            datos = self.serializer_class(data=request.data)

            if datos.is_valid(raise_exception=True):
                # Se realiza la acción, en este caso es un INSERT
                resultado = super().create(request, *args, **kwargs)
                return Response(CRespuestas.generar_respuesta(codigo_error, "Creado", resultado.data))

        except Exception as e:
            codigo_error = int(ECodigoResultado.ERROR_GENERICO)
            return Response(CRespuestas.generar_respuesta(codigo_error, str(e), None))

    # PUT
    def update(self, request, *args, **kwargs):
        codigo_error = int(ECodigoResultado.OK)
        try:
            # se convierten los datos del request en un objeto de modelo
            datos = self.serializer_class(data=request.data)
            if datos.is_valid(raise_exception=True):
                # se realiza la acción, en este caso es un update
                resultado = super().update(request, *args, **kwargs)
                return Response(CRespuestas.generar_respuesta(codigo_error, "Actualizado", resultado.data))

        except Exception as e:
            codigo_error = int(ECodigoResultado.ERROR_GENERICO)
            return Response(CRespuestas.generar_respuesta(CRespuestas, str(e), None))

    #DELETE
    def destroy(self, request, *args, **kwargs):
        codigo_error = int(ECodigoResultado.OK)
        try:
            resultado = super().destroy(request, *args, **kwargs)
            return Response(CRespuestas.generar_respuesta(codigo_error, "Eliminado", resultado.data))
        except Exception as e:
            codigo_error = int(ECodigoResultado.ERROR_GENERICO)
            return Response(CRespuestas.generar_respuesta(codigo_error, str(e), None))

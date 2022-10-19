from rest_framework import serializers
from rest_flex_fields import FlexFieldsModelSerializer

from applications.terceros.models import Tercero, ElementosListas, TiposListas


class TiposListasSerializer(serializers.ModelSerializer):
    class Meta:
        model = TiposListas
        fields = '__all__'


class ElementosListasSerializer(serializers.ModelSerializer):
    class Meta:
        model = ElementosListas
        fields = '__all__'


class TercerosSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tercero
        fields = '__all__'
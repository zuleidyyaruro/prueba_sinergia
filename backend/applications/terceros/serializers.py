from rest_framework import serializers
from applications.terceros.models import Tercero, ElementosListas, TiposListas, ViewTercero


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


class ViewTercerosSerializer(serializers.ModelSerializer):

    class Meta:
        model = ViewTercero
        fields = '__all__'

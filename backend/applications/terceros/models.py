from django.db import models


# Modelo de datos para tipos_listas
class TiposListas(models.Model):
    nombre = models.CharField(max_length=255)
    tipo_lista_id = models.CharField(max_length=255)

    class Meta:
        db_table = 'tipo_lista'
        verbose_name = 'Tipo de Lista'
        verbose_name_plural = 'Tipos de Listas'

    def __str__(self):
        return self.nombre


# Modelo de datos para elementos_listas
class ElementosListas(models.Model):
    nombre = models.CharField(max_length=255)
    elemento_lista_id = models.CharField(max_length=255)
    tipo_lista_id = models.ForeignKey(TiposListas, on_delete=models.CASCADE)

    class Meta:
        db_table = 'elemento_lista'
        verbose_name = 'Elemento de Lista'
        verbose_name_plural = 'Elementos de Listas'

    def __str__(self):
        return self.nombre


# Modelo de datos para tercero
class Tercero(models.Model):
    tipo_identificacion_id = models.ForeignKey(ElementosListas, on_delete=models.CASCADE,
                                               related_name='tipo_identificacion_tercero')
    numero_identificacion = models.CharField(max_length=15)
    tipo_tercero_id = models.ForeignKey(ElementosListas, on_delete=models.CASCADE, related_name='tipo_tercero_tercero')
    nombre1 = models.CharField(max_length=100)
    nombre2 = models.CharField(max_length=100)
    apellido1 = models.CharField(max_length=100)
    appellido2 = models.CharField(max_length=100)
    departamento_id = models.ForeignKey(ElementosListas, on_delete=models.CASCADE, related_name='departamento_tercero')
    ciudad_id = models.ForeignKey(ElementosListas, on_delete=models.CASCADE, related_name='ciudad_tercero')
    tipo_contribuyente = models.ForeignKey(ElementosListas, on_delete=models.CASCADE,
                                           related_name='tipo_contribuyente_tercero')

    class Meta:
        db_table = 'tercero'
        verbose_name = 'Tercero'
        verbose_name_plural = 'Terceros'

    def __str__(self):
        return self.nombre1 + self.apellido1


#
class ViewTercero(models.Model):
    id = models.IntegerField(db_column='id', primary_key=True)
    departamento_id = models.IntegerField(db_column='departamento_id')
    departamento = models.CharField(db_column='departamento', max_length=255)
    municipio_id = models.IntegerField(db_column='municipio_id')
    municipio = models.CharField(db_column='municipio', max_length=255)
    tipo_identifcacion_id = models.IntegerField(db_column='tipo_identifcacion_id')
    tipo_identifacion = models.CharField(db_column='tipo_identificacion', max_length=255)
    identificacion = models.CharField(db_column='identifacion', max_length=255)
    nombres = models.CharField(db_column='nombres', max_length=255)
    tipo_tercero_id = models.IntegerField(db_column='tipo_tercero_id')
    tipo_tercero = models.CharField(db_column='tipo_tercero', max_length=255)
    nombre1 = models.CharField(db_column='nombre1', max_length=255)
    nombre2 = models.CharField(db_column='nombre2', max_length=255)
    apellido1 = models.CharField(db_column='apellido1', max_length=255)
    appellido2 = models.CharField(db_column='appellido2', max_length=255)
    tipo_contribuyente = models.CharField(db_column='tipo_contribuyente', max_length=255)
    tipo_contribuyente_id = models.IntegerField(db_column='tipo_contribuyente_id')

    class Meta:
        managed = False
        db_table = 'vwterceros'
        verbose_name = 'Vista Tercero'
        verbose_name_plural = 'Vistas Terceros'

    def __str__(self):
        return self.nombres

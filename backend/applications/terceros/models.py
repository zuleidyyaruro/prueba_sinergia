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

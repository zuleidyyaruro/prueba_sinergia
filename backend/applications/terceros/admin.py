from django.contrib import admin

# Register your models here.
from applications.terceros.models import TiposListas, ElementosListas, Tercero, ViewTercero

admin.site.register(TiposListas)
admin.site.register(ElementosListas)
admin.site.register(Tercero)
admin.site.register(ViewTercero)

NOTA: El modelo de la base de datos se diseñó de acuerdo con lo planteado en el pdf y se se hizo tal cual se solicitaba; anque creo que al modelo se le pudo haber aplicado la normalización ,pero por cuestiones de tiempo se dejó tal cual.


DESPLIEGUE LOCAL DEL BACKEND CON DJANGO REST FRAMEWORK

1. Se debe crear una base de datos llamada 'pruebadesa_zuleidy_yaruro'.
2. Se crea un entorno virtual para alojar las dependencias de  python que se utilizarán. A continuación dejo una guia de cómo hacerlo -> https://roylans.dev/creando-un-entorno-virtual-para-django-framework.
3. Se instalan cada una de las dependecias que tengo expecificadas en el archivo requirements.txt.
4. Posteriormente se deben hacer las migraciones con 'python manage.py migrate'.
5. Una vez hechas las respectivas migraciones se insertan los datos en la base de datos exactamente en el orden  en el que se encuetran en el script.sql y además se ejecuta la vista. 
6. El puerto donde corre el backend es el 8000
7. Se deja una copia de la base de datos en el caso de que llegara a fallar algo con las migraciones. Lo ideal sería que se hicieran los pasos anteriores.

Cualquier duda quedo a disposición de explicar cualquier duda con el desarrollo del ejercicio.


Capturas del ejercicio:

https://github.com/zuleidyyaruro/prueba_sinergia/blob/main/Screenshot_339.png

https://github.com/zuleidyyaruro/prueba_sinergia/blob/main/Screenshot_340.png

https://github.com/zuleidyyaruro/prueba_sinergia/blob/main/Screenshot_341.png

https://github.com/zuleidyyaruro/prueba_sinergia/blob/main/Screenshot_342.png

https://github.com/zuleidyyaruro/prueba_sinergia/blob/main/Screenshot_345.png

https://github.com/zuleidyyaruro/prueba_sinergia/blob/main/Screenshot_346.png

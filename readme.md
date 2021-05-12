

## CHALLENGE BIRRAS SANTANDER 
## Descripción general



## Se utilizó Node Js y Express, Mongo Db Atlas como BD.
#

# Para poder utilizarla es necesario crear un archivo .env e insertar las variables de entorno listadas a continuación:

*MONGO_SRC=mongodb+srv://superbirra:birra@cluster0.vxvsr.mongodb.net/birras?retryWrites=true&w=majority*
-Que permite conectarse satisfactoriamente a la base de datos. Se puede acceder desde cualquier IP

*API_KEY=2a3323b0143b884f65648b18245ca344*
-Que permite consumir la API del clima (Open Weather)

Documentación de la API: basepath/swagger. Ejemplo: localhost:3000/swagger 
Está comprendida por tres endpoints los cuales son:

# 1.- /meet/beers que nos indicara la cantidad de paquetes de birras que seran necesarias para aprovisionar la meet
y al cual solo pueden acceder administradores.
1.1-Se utilizó una función que tomaba la cantidad de personas de la meet indicada por id y la temperatura que 
se obtuvo consumiendo la API Open Weather. 


# 2.- /meet/temp en el que podremos conocer la temperatura del día de la meet, siendo permitida tanto para admins
como para users

# 3.-/meet para crear una reunión indicando el nombre, fecha y cantidad de gente que asistirá 

*Todos pasan por un middleware previamente que verifica el role de cada usuario y autoriza acceder.*

# Datos de prueba (usuarios):
Exiten en la raiz del proyecto, una coleccion de Postman para probar. 

## LiIMITACIONES
# La API que devuelve la temperatura solo accede a estimación de los 7 próximos días. 

# Se realizaron algunos test unitarios con Jest en la función Beers 
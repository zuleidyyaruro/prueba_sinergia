INSERT INTO tipo_lista (nombre,tipo_lista_id) VALUES
	 ('Tipo Identificación','tipo_identificacion'),
	 ('Tipo Tercero','tipo_tercero'),
	 ('Departamento','departamento'),
	 ('Ciudad','ciudad'),
	 ('Tipo contribuyente','tipo_contribuyente');


INSERT INTO elemento_lista (nombre,elemento_lista_id,tipo_lista_id_id) VALUES
	 ('Cedula de Ciudanía','CC',1),
	 ('Tarjeta de identidad','TI',1),
	 ('NIT','nit',1),
	 ('Paciente','paciente',2),
	 ('Empleado','empleado',2),
	 ('Contratista','contratista',2),
	 ('Gran contribuyente','Gran contribuyente',5),
	 ('Responsable de Iva','Res. IVA',5),
	 ('Régimen Especial','R. Especial',5),
	 ('Cundinamarca','Cudinamarca',3),
	('Bogotá','Bogota',4);


INSERT INTO tercero (numero_identificacion,nombre1,nombre2,apellido1,appellido2,ciudad_id_id,departamento_id_id,tipo_contribuyente_id,tipo_identificacion_id_id,tipo_tercero_id_id) VALUES
	 ('24524245','Sofia','Andrea','Bermudez','Urrego',11,10,8,2,4),
	 ('254245243','Tali','So','Gutierrez','Pedrozo',11,10,8,2,4),
	 ('364567567','Eduardo','Andres','Vargas','jimenez',11,10,8,2,4),
	 ('46723245','Felipe','Jose','Torres','Jaramillo',11,10,8,2,4),
	 ('54635635','Javier','Eduardo','Cordoba','Vergara',11,10,8,2,4),
	 ('35635635','Ivan','Jose','Camacho','Rodriguez',11,10,8,2,4),
	 ('243524','Andres','Javier','Escobar','Santiago',11,10,8,2,4);


CREATE VIEW vwterceros
 AS
 select t.id as id,
 ela.tipo_lista_id_id as departamento_id,
 ela.nombre as departamento,
 ele.tipo_lista_id_id  as ciudad_id,
 ele.nombre as ciudad,
 eli.tipo_lista_id_id as tipo_identificacion_id,
 eli.nombre as tipo_identificacion,
 t.numero_identificacion as identificacion,
 CONCAT(t.nombre1, ' ',t.nombre2 , ' ', t.apellido1, ' ', t.appellido2) as nombres,
 t.nombre1 as nombre1,
 t.nombre2 as nombre2,
 t.apellido1 as apellido1,
 t.appellido2 as appellido2,
 elo.tipo_lista_id_id as tipo_tercero_id,
 elo.nombre as tipo_tercero,
 elu.nombre as tipo_contribuyente,
 elu.tipo_lista_id_id as tipo_contribuyente_id
 FROM tercero t 
 JOIN elemento_lista ela on t.departamento_id_id  = ela.id
 JOIN elemento_lista ele on t.ciudad_id_id  = ele.id
 JOIN elemento_lista eli on t.tipo_identificacion_id_id  = eli.id
 JOIN elemento_lista elo on t.tipo_tercero_id_id  = elo.id
 JOIN elemento_lista elu on t.tipo_contribuyente_id  = elu.id
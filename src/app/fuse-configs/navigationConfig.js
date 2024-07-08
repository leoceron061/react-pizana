import i18next from "i18next";
import ar from "./navigation-i18n/ar";
import en from "./navigation-i18n/en";
import tr from "./navigation-i18n/tr";
import es from "./navigation-i18n/es";

i18next.addResourceBundle("en", "navigation", en);
i18next.addResourceBundle("tr", "navigation", tr);
i18next.addResourceBundle("ar", "navigation", ar);
i18next.addResourceBundle("es", "navigation", es);



const navigationConfig = [
  {
    id: "MODULO",
    title: "MODULO",
    translate: "MODULO",
    type: "group",
    icon: "apps",
    children: [
      {
        title: "INICIO",
        translate: "INICIO",
        type: "item",
        icon: "dashboard",
        url: "/academy",
      },
    ],
  },

  {
    id: 'PERFIL',
    title: 'PERFIL',
    translate: 'PERFIL',
    type: 'item',
    icon: 'person',
    url: '/profile'
  },  

  // CLIENTES solamente en modo user de type admin 
  {
    id: "CLIENTES",
    title: "CLIENTES",
    translate: "CLIENTES",
    type: "collapse",
    icon: "insert_drive_file",
    url: "/users",
    // children: [
    //   {
    //     id: "e-commerce-new-material",
    //     title: "Nuevo",
    //     type: "item",
    //     icon: "align_horizontal_left",
    //     url: "/e-commerce/materials/new",
    //     exact: true,
    //   },
    // ],
  },

    // CREAR se debe mostrar en modo user de type clientes 
    {
      id: "CREAR",
      title: "CREAR",
      translate: "CREAR",
      type: "item",
      icon: "align_horizontal_left",
      url: "/users/hoja/new"
    },


  {
    id: 'CALENDARIO',
    title: 'CALENDARIO',
    translate: 'CALENDARIO',
    type: 'item',
    icon: 'today',
    url: '/calendar',
  },

  {
    id: "ALMACENAMIENTO",
    title: "ALMACENAMIENTO",
    translate: "ALMACENAMIENTO",
    type: "item",
    icon: "folder_special",
    url: "/file-manager",
    
  },

 
  {
    id: "SALIR",
    title: "SALIR",
    translate: "SALIR",
    type: "item",
    icon: "exit_to_app",
    url: "/login/logout",
  },

{
  id: "DetalleCaso",
  title: "DetalleCaso",
  translate: "DetalleCaso",
},
{
  id: "HojaAzul",
  title: "HojaAzul",
  translate: "HojaAzul",
},

{
  id: "HojaAmarilla",
  title: "HojaAmarilla",
  translate: "HojaAmarilla",
},
{
  id: "HojaNaranja",
  title: "HojaNaranja",
  translate: "HojaNaranja",
},
{
  id: "HojaRoja",
  title: "HojaRoja",
  translate: "HojaRoja",
},
{
  id: "HojaRosa",
  title: "HojaRosa",
  translate: "HojaRosa",
},
{
  id: "Documentos",
  title: "Documentos",
  translate: "Documentos",
},
{
  id: "DatosPersonales",
  title: "DatosPersonales",
  translate: "DatosPersonales",
},
{
  id: "NombreCliente",
  title: "NombreCliente",
  translate: "NombreCliente",
},
{
id: "ApellidoCliente",
title: "ApellidoCliente",
translate: "ApellidoCliente",
},
{
  id: "genero",
  title: "genero",
  translate: "genero",
  },
  {
    id: "Telefono",
    title: "Telefono",
    translate: "Telefono",
  },
  {
    id: "fechacumpleanos",
    title: "fechacumpleanos",
    translate: "fechacumpleanos",
  },
  {
    id: "fechacumpleanos",
    title: "fechacumpleanos",
    translate: "fechacumpleanos",
  },
  {
    id: "TipoUsuario",
    title: "TipoUsuario",
    translate: "TipoUsuario",
  },
  {
    id: "Administrador",
    title: "Administrador",
    translate: "Administrador",
  },
  {
    id: "Cliente",
    title: "Cliente",
    translate: "Cliente",
  },
  {
    id: "invitacion",
    title: "invitacion",
    translate: "invitacion",
  },
  {
    id: "email",
    title: "email",
    translate: "email",
  },
  {
    id: "contrasena",
    title: "contrasena",
    translate: "contrasena",
  },
  {
    id: "informacion",
    title: "informacion",
    translate: "informacion",
  },
  {
    id: "nombrecaso",
    title: "nombrecaso",
    translate: "nombrecaso",
  },
  {
    id: "descripcioncaso",
    title: "descripcioncaso",
    translate: "descripcioncaso",
  },
  {
    id: "codigoRossy",
    title: "codigoRossy",
    translate: "codigoRossy",
  },
  {
    id: "actualizar",
    title: "actualizar",
    translate: "actualizar",
  },
  {
    id: "guardar",
    title: "guardar",
    translate: "guardar",
  },
  ////////////////////////////////////////HOJA--AZUL//////////////////////////
  {
    id: "datosbiograficos",
    title: "datosbiograficos",
    translate: "datosbiograficos",
  },
  {
    id: "NombreActaNacimiento",
    title: "NombreActaNacimiento",
    translate: "NombreActaNacimiento",
  },
  {
    id: "fechannac",
    title: "fechannac",
    translate: "fechannac",
  },
  {
    id: "lugarnacimiento",
    title: "lugarnacimiento",
    translate: "lugarnacimiento",
  },
  {
    id: "etnicidad",
    title: "etnicidad",
    translate: "etnicidad",
  },

  {
    id: "raza",
    title: "raza",
    translate: "raza",
  },
  {
    id: "estatura",
    title: "estatura",
    translate: "estatura",
  },
  {
    id: "estatura",
    title: "estatura",
    translate: "estatura",
  },
  {
    id: "peso",
    title: "peso",
    translate: "peso",
  },
  {
    id: "colorojos",
    title: "colorojos",
    translate: "colorojos",
  },
  {
    id: "colorcabello",
    title: "colorcabello",
    translate: "colorcabello",
  },
  {
    id: "numeropasaporte",
    title: "numeropasaporte",
    translate: "numeropasaporte",
  },
  {
    id: "pais",
    title: "pais",
    translate: "pais",
  },
  {
    id: "datosmadretitulo",
    title: "datosmadretitulo",
    translate: "datosmadretitulo",
  },
  {
    id: "nombremadre",
    title: "nombremadre",
    translate: "nombremadre",
  },
  {
    id: "dirmadre",
    title: "dirmadre",
    translate: "dirmadre",
  },
  {
    id: "datospadreTitulo",
    title: "datospadreTitulo",
    translate: "datospadreTitulo",
  },
  {
    id: "nombrepadre",
    title: "nombrepadre",
    translate: "nombrepadre",
  },
 
  {
    id: "dirpadre",
    title: "dirpadre",
    translate: "dirpadre",
  },
  {
    id: "fechanacmadre",
    title: "fechanacmadre",
    translate: "fechanacmadre",
  },
  {
    id: "fechanacpadre",
    title: "fechanacpadre",
    translate: "fechanacpadre",
  },
  {
    id: "nompadrastro",
    title: "nompadrastro",
    translate: "nompadrastro",
  },
  {
    id: "nommadrastra",
    title: "nommadrastra",
    translate: "nommadrastra",
  },
  {
    id: "dirmadrastra",
    title: "dirmadrastra",
    translate: "dirmadrastra",
  },
  {
    id: "dirpadrastro",
    title: "dirpadrastro",
    translate: "dirpadrastro",
  },
  {
    id: "nomactanacimiento",
    title: "nomactanacimiento",
    translate: "nomactanacimiento",
  },
  {
    id: "diractanacimiento",
    title: "diractanacimiento",
    translate: "diractanacimiento",
  },
  {
    id: "feexpactanacimiento",
    title: "feexpactanacimiento",
    translate: "feexpactanacimiento",
  },
  {
    id: "nompasaporte",
    title: "nompasaporte",
    translate: "nompasaporte",
  },
  {
    id: "dirpasaporte",
    title: "dirpasaporte",
    translate: "dirpasaporte",
  },
  {
    id: "feexppasaporte",
    title: "feexppasaporte",
    translate: "feexppasaporte",
  },
  {
    id: "nomvisalaser",
    title: "nomvisalaser",
    translate: "nomvisalaser",
  },
  {
    id: "dirvisalaser",
    title: "dirvisalaser",
    translate: "dirvisalaser",
  },
  {
    id: "feexpvisalaser",
    title: "feexpvisalaser",
    translate: "feexpvisalaser",
  },
  {
    id: "nommatriculaconsular",
    title: "nommatriculaconsular",
    translate: "nommatriculaconsular",
  },
  {
    id: "dirmatriculaconsular",
    title: "dirmatriculaconsular",
    translate: "dirmatriculaconsular",
  },
  {
    id: "feexpmatriculaconsular",
    title: "feexpmatriculaconsular",
    translate: "feexpmatriculaconsular",
  },
  {
    id: "nomlicenciamatrimonio",
    title: "nomlicenciamatrimonio",
    translate: "nomlicenciamatrimonio",
  },
  {
    id: "dirlicenciamatrimonio",
    title: "dirlicenciamatrimonio",
    translate: "dirlicenciamatrimonio",
  },
  {
    id: "feexplicenciamatrimonio",
    title: "feexplicenciamatrimonio",
    translate: "feexplicenciamatrimonio",
  },
  {
    id: "nomactamatrimonio",
    title: "nomactamatrimonio",
    translate: "nomactamatrimonio",
  },
  {
    id: "diractamatrimonio",
    title: "diractamatrimonio",
    translate: "diractamatrimonio",
  },
  {
    id: "feexpactamatrimonio",
    title: "feexpactamatrimonio",
    translate: "feexpactamatrimonio",
  },
  {
    id: "nomtarjetaife",
    title: "nomtarjetaife",
    translate: "nomtarjetaife",
  },
  {
    id: "dirtarjetaife",
    title: "dirtarjetaife",
    translate: "dirtarjetaife",
  },
  {
    id: "feexptarjetaife",
    title: "feexptarjetaife",
    translate: "feexptarjetaife",
  },
  {
    id: "nomactdivorcio1",
    title: "nomactdivorcio1",
    translate: "nomactdivorcio1",
  },
  {
    id: "diractdivorcio1",
    title: "diractdivorcio1",
    translate: "diractdivorcio1",
  },
  {
    id: "feactdivorcio1",
    title: "feactdivorcio1",
    translate: "feactdivorcio1",
  },
  {
    id: "nomactdivorcio2",
    title: "nomactdivorcio2",
    translate: "nomactdivorcio2",
  },
  {
    id: "diractdivorcio2",
    title: "diractdivorcio2",
    translate: "diractdivorcio2",
  },
  {
    id: "feactdivorcio2",
    title: "feactdivorcio2",
    translate: "feactdivorcio2",
  },
  {
    id: "datosmadrastratitulo",
    title: "datosmadrastratitulo",
    translate: "datosmadrastratitulo",

  },
  {
    id: "datospadrastrotitulo",
    title: "datospadrastrotitulo",
    translate: "datospadrastrotitulo",

  },
  {
    id: "documentosdirecciones",
    title: "documentosdirecciones",
    translate: "documentosdirecciones",

  },
  {
    id: "datosmatrimonio",
    title: "datosmatrimonio",
    translate: "datosmatrimonio",

  },
  {
    id: "datosdivorcio",
    title: "datosdivorcio",
    translate: "datosdivorcio",

  },

  //////////////////////HOJA-AMARILLA////////////////////////
  {
    id: "informacionmarital",
    title: "informacionmarital",
    translate: "informacionmarital",

  },
  {
    id: "datospersonalestitulo",
    title: "datospersonalestitulo",
    translate: "datospersonalestitulo",

  },

  
  {
    id: "nombreesposoactual",
    title: "nombreesposoactual",
    translate: "nombreesposoactual",

  },
  {
    id: "fechadenacesposo",
    title: "fechadenacesposo",
    translate: "fechadenacesposo",

  },
  {
    id: "lugardenacesposo",
    title: "lugardenacesposo",
    translate: "lugardenacesposo",

  },
  {
    id: "domicilioactualesposo",
    title: "domicilioactualesposo",
    translate: "domicilioactualesposo",

  },
  {
    id: "lugardeempleoesposo",
    title: "lugardeempleoesposo",
    translate: "lugardeempleoesposo",

  }, {
    id: "nombreprevioesposo",
    title: "nombreprevioesposo",
    translate: "nombreprevioesposo",


  },
    
  {
    id: "matrimoniotitulo",
    title: "matrimoniotitulo",
    translate: "matrimoniotitulo",

  },
  
  {
    id: "fechadematrimonio",
    title: "fechadematrimonio",
    translate: "fechadematrimonio",

  }, {
    id: "lugardematrimonio",
    title: "lugardematrimonio",
    translate: "lugardematrimonio",

  }, {
    id: "numerohijosjuntos",
    title: "numerohijosjuntos",
    translate: "numerohijosjuntos",

  }, {
    id: "numerohijastros",
    title: "numerohijastros",
    translate: "numerohijastros",

  }, {
    id: "numeromatrimoniosesposo",
    title: "numeromatrimoniosesposo",
    translate: "numeromatrimoniosesposo",

  },
  {
    id: "divorciotitulo",
    title: "divorciotitulo",
    translate: "divorciotitulo",

  },

  {
    id: "numerodivorciosesposo",
    title: "numerodivorciosesposo",
    translate: "numerodivorciosesposo",

  }, {
    id: "lugardedivorcioesposo",
    title: "lugardedivorcioesposo",
    translate: "lugardedivorcioesposo",

  }, 
  {
    id: "fechadivorcioesposo",
    title: "fechadivorcioesposo",
    translate: "fechadivorcioesposo",

  }, 

  {
    id: "estatusmigracionesposo",
    title: "estatusmigracionesposo",
    translate: "estatusmigracionesposo",

  }, {
    id: "numeroalienesposo",
    title: "numeroalienesposo",
    translate: "numeroalienesposo",

  }, {
    id: "aliases",
    title: "aliases",
    translate: "aliases",

  },
  {
    id: "pasado_marital",
    title: "pasado_marital",
    translate: "pasado_marital",

  },
  
  {
    id: "nombredeexesposo",
    title: "nombredeexesposo",
    translate: "nombredeexesposo",

  }, {
    id: "estatusmigracionexesposo",
    title: "estatusmigracionexesposo",
    translate: "estatusmigracionexesposo",

  }, {
    id: "fechanacimientoexesposo",
    title: "fechanacimientoexesposo",
    translate: "fechanacimientoexesposo",

  }, {
    id: "paisnacimientoexesposo",
    title: "paisnacimientoexesposo",
    translate: "paisnacimientoexesposo",

  }, {
    id: "fechamatrimonioexesposo",
    title: "fechamatrimonioexesposo",
    translate: "fechamatrimonioexesposo",

  }, {
    id: "fechadedivorcioexesposo",
    title: "fechadedivorcioexesposo",
    translate: "fechadedivorcioexesposo",

  }, {
    id: "terminacionmatrimonioant",
    title: "terminacionmatrimonioant",
    translate: "terminacionmatrimonioant",

  }, 
  /////////////////HOJA-NARANJA/////////////////////
  
  
  {
    id: "historiatitulo",
    title: "historiatitulo",
    translate: "historiatitulo",

  }, {
    id: "ciudad_domicilio",
    title: "ciudad_domicilio",
    translate: "ciudad_domicilio",

  }, {
    id: "calleynumero_domicilio",
    title: "calleynumero_domicilio",
    translate: "calleynumero_domicilio",

  }, {
    id: "codigopostal_domicilio",
    title: "codigopostal_domicilio",
    translate: "codigopostal_domicilio",

  }, {
    id: "estado_domicilio",
    title: "estado_domicilio",
    translate: "estado_domicilio",

  }, {
    id: "desdemes_annio_domicilio_actual",
    title: "desdemes_annio_domicilio_actual",
    translate: "desdemes_annio_domicilio_actual",

  }, {
    id: "hastames_annio_domicilio_actual",
    title: "hastames_annio_domicilio_actual",
    translate: "hastames_annio_domicilio_actual",

  }, {
    id: "historiadetrabajotitulo",
    title: "historiadetrabajotitulo",
    translate: "historiadetrabajotitulo",

  }, {
    id: "nombreydomiciliodelempleador",
    title: "nombreydomiciliodelempleador",
    translate: "nombreydomiciliodelempleador",

  }, {
    id: "ocupaciontrabajo",
    title: "ocupaciontrabajo",
    translate: "ocupaciontrabajo",

  }, {
    id: "desdetrabajo",
    title: "desdetrabajo",
    translate: "desdetrabajo",

  }, {
    id: "hastatrabajo",
    title: "hastatrabajo",
    translate: "hastatrabajo",

  },
  {
    id: "ultimodomiciliotitulo",
    title: "ultimodomiciliotitulo",
    translate: "ultimodomiciliotitulo",

  },
  {
    id: "calleynumero_domicilio",
    title: "calleynumero_domicilio",
    translate: "calleynumero_domicilio",

  },
  
  {
    id: "ciudad_ultimo_domicilio",
    title: "ciudad_ultimo_domicilio",
    translate: "ciudad_ultimo_domicilio",

  },
  
  {
    id: "estado_ultimo_domicilio",
    title: "estado_ultimo_domicilio",
    translate: "estado_ultimo_domicilio",

  },
  
  {
    id: "pais_domicilio",
    title: "pais_domicilio",
    translate: "pais_domicilio",

  },
  
  {
    id: "codigopostal_domicilio",
    title: "codigopostal_domicilio",
    translate: "codigopostal_domicilio",

  },
  
  {
    id: "desdemes_annio_domicilio",
    title: "desdemes_annio_domicilio",
    translate: "desdemes_annio_domicilio",

  },
  
  {
    id: "hastames_annio_domicilio",
    title: "hastames_annio_domicilio",
    translate: "hastames_annio_domicilio",

  },
  
  {
    id: "ultimoempleotitulo",
    title: "ultimoempleotitulo",
    translate: "ultimoempleotitulo",

  },
  
  {
    id: "nombre_ultimo_empleo",
    title: "nombre_ultimo_empleo",
    translate: "nombre_ultimo_empleo",

  },
  
  {
    id: "ciudad_ultimo_empleo",
    title: "ciudad_ultimo_empleo",
    translate: "ciudad_ultimo_empleo",

  },
  
  {
    id: "codigopostal_ultimo_empleo",
    title: "codigopostal_ultimo_empleo",
    translate: "codigopostal_ultimo_empleo",

  },
  
  {
    id: "estado_ultimo_empleo",
    title: "estado_ultimo_empleo",
    translate: "estado_ultimo_empleo",

  },
  
  {
    id: "desdemes_annio_ultimo_empleo",
    title: "desdemes_annio_ultimo_empleo",
    translate: "desdemes_annio_ultimo_empleo",

  },
  
  {
    id: "hastames_annio_ultimo_empleo",
    title: "hastames_annio_ultimo_empleo",
    translate: "hastames_annio_ultimo_empleo",

  },
  
  {
    id: "detencionestitulo",
    title: "detencionestitulo",
    translate: "detencionestitulo",

  },
  {
    id: "lugar_detenciones",
    title: "lugar_detenciones",
    translate: "lugar_detenciones",

  },
  {
    id: "fecha_detenciones",
    title: "fecha_detenciones",
    translate: "fecha_detenciones",

  },
  
  {
    id: "motivo_detenciones",
    title: "motivo_detenciones",
    translate: "motivo_detenciones",

  },
  
  {
    id: "policiatitulo",
    title: "policiatitulo",
    translate: "policiatitulo",

  },
  
  {
    id: "lugar_policia",
    title: "lugar_policia",
    translate: "lugar_policia",

  },
  
  {
    id: "fecha_policia",
    title: "fecha_policia",
    translate: "fecha_policia",

  },
  
  {
    id: "cargo_policia",
    title: "cargo_policia",
    translate: "cargo_policia",

  },
  
  {
    id: "resultado_policia",
    title: "resultado_policia",
    translate: "resultado_policia",

  },
  
  {
    id: "entradatitulo",
    title: "entradatitulo",
    translate: "entradatitulo",

  },
  {
    id: "lugar_inspeccion",
    title: "lugar_inspeccion",
    translate: "lugar_inspeccion",

  },
  
  {
    id: "fecha_inspeccion",
    title: "fecha_inspeccion",
    translate: "fecha_inspeccion",

  },
  
  {
    id: "metodo_inspeccion",
    title: "metodo_inspeccion",
    translate: "metodo_inspeccion",

  },
  
  {
    id: "resultado_inspeccion",
    title: "resultado_inspeccion",
    translate: "resultado_inspeccion",

  },
  
  
  {
    id: "ultimatitulo",
    title: "ultimatitulo",
    translate: "ultimatitulo",

  },
  
  {
    id: "lugar_ultima",
    title: "lugar_ultima",
    translate: "lugar_ultima",

  },
  {
    id: "fechadecruze_ultima",
    title: "fechadecruze_ultima",
    translate: "fechadecruze_ultima",

  },
  {
    id: "manera_ultima",
    title: "manera_ultima",
    translate: "manera_ultima",

  },
  {
    id: "informaciontitulo",
    title: "informaciontitulo",
    translate: "informaciontitulo",

  },
  {
    id: "nombrecompleto",
    title: "nombrecompleto",
    translate: "nombrecompleto",

  },
  {
    id: "fechanacimientohijo",
    title: "fechanacimientohijo",
    translate: "fechanacimientohijo",

  },
  {
    id: "estatusmigracion",
    title: "estatusmigracion",
    translate: "estatusmigracion",

  },
  {
    id: "lugarnac",
    title: "lugarnac",
    translate: "lugarnac",

  },
  {
    id: "ssnumero",
    title: "ssnumero",
    translate: "ssnumero",

  },
  {
    id: "anumero",
    title: "anumero",
    translate: "anumero",

  },
  {
    id: "domicilioactual",
    title: "domicilioactual",
    translate: "domicilioactual",

  },
  //////////////////////////////////////////PERFIL///////////////////////
  {
    id: "miperfiltitulo",
    title: "miperfiltitulo",
    translate: "miperfiltitulo",

  },
  {
    id: "nombrecliente",
    title: "nombrecliente",
    translate: "nombrecliente",

  },
  {
    id: "nombrecliente",
    title: "nombrecliente",
    translate: "nombrecliente",

  },
  {
    id: "apellidocliente",
    title: "apellidocliente",
    translate: "apellidocliente",

  },
  {
    id: "generocliente",
    title: "generocliente",
    translate: "generocliente",

  },
  {
    id: "generomasculino",
    title: "generomasculino",
    translate: "generomasculino",

  },
  {
    id: "generofemenino",
    title: "generofemenino",
    translate: "generofemenino",

  },{
    id: "fechacumpleanoscliente",
    title: "fechacumpleanoscliente",
    translate: "fechacumpleanoscliente",

  },
  {
    id: "telefonoclientes",
    title: "telefonoclientes",
    translate: "telefonoclientes",

  },
  
  
  
  

  





  









];



export default navigationConfig;

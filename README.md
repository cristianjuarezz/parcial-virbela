# parcial-virbela
Para este proyecto, nos contratan desde una plataforma de e-learning para desarrollar una landing page para el evento del año de la plataforma de e-learning en el metaverso Virbela.
Figma: https://www.figma.com/file/9aZr4JRG06JCbJAkKAKUYc/Parcial?type=design&node-id=0%3A1&t=fkjF2JjD24vQd2SZ-1

# Tecnologias aplicadas
♠ Html
♦ JavaScript
♥ TailwindCSS
♣ Css
☺ Figma

# Modo de trabajo
TailwindCSS es un framework diseñado para trabajar con la metodología Mobile First, sin embargo, decidí no trabajar de esta manera porque primero diseñé la versión de escritorio en donde solo establecí una base para trabajar e improvisar a lo largo del proyecto, ya que era necesario para llegar en tiempo a la entrega.

![image](https://github.com/cristianjuarezz/parcial-virbela/assets/84170516/5abcce1f-f4d5-492a-b9c7-88ebffdcb31c)
• Lo primero que hago es ver la pagina original para conocer la paleta de colores, fuentes y formatos que pueda necesitar.
A lo largo de la página veo 3 secciones principales con la informacion mas relevante para el evento, me convence esa idea asi que la tomaré tal cual.

![image](https://github.com/cristianjuarezz/parcial-virbela/assets/84170516/4d22976f-69d3-4883-ad63-7cabced143ee)
• La paleta tiene 3 colores analogos pero utiliza un amarillo, un violeta y un lila extra. Estos no parecen tener buena armonía y de todos modos 6 colores son demasiado.
Por esto me reduje a la paleta principal mas el amarillo. Este genera un fuerte contraste pero aun asi no funciona como call to action, se ve fuera de lugar.
El unico motivo por el que me quedo con el amarillo es para que haya un poco de ruido, lo que resulta en que parezca mas llena.

![image](https://github.com/cristianjuarezz/parcial-virbela/assets/84170516/8082d869-ebe4-4112-9ed2-73c48701f12d)
• Dentro de figma hago un layout para la hero section. Este es probablemente el diseño mas comun y generico, teniendo en CTA a la izquierda y una ilustracion a la derecha.
Sin embargo, puede notarse que el degradado del fondo es algo diferente al orignial. Esto es porque extraje la imagen original y la volvi transparente, solo me quedo con las torres.
Ahora tengo la ilustracion transparente y mas control sobre el fondo, mientras conservo la paleta y la calidad de imagen. Puedo posicionar la ilustracion donde quiera.

![image](https://github.com/cristianjuarezz/parcial-virbela/assets/84170516/66e6f17e-7c42-4825-b0a6-06015ac250d4)
• El diseño es iterado varias veces hasta llegar a esta versión, la cual me es suficiente. Aunque de momento se ve bastante vacio, continuo a hacer una segunda seccion que combina las dos ultimas de la pagina original.

![image](https://github.com/cristianjuarezz/parcial-virbela/assets/84170516/d872f292-5e32-4acc-ac21-b61afac6e99a)
• No hay mucho que decir sobre esta sección, pero en general aca establezco los tamaños de fuente, los textos a usar, imagenes, y el layout.
La version final no deberia verse asi, sino tomar este prototipo como referencia e incorporar todo a medida que lo hago. 

![image](https://github.com/cristianjuarezz/parcial-virbela/assets/84170516/a98a3788-325a-4458-bb10-a487f75054cb)
• Clono el repositorio y creo los archivos necesarios con la siguiente estructura:
src
- index.html
- register.html
- css
  - globals.css
- js
  - main.js

![image](https://github.com/cristianjuarezz/parcial-virbela/assets/84170516/c949e744-9475-4a9f-957b-1c88b84f0cbd)
• Antes de empezar a trabajar, hago un boilerplate e importo las CDN de TailwindCSS (PlayCDN porque no tengo un bundler) y de FontAwesome para iconos.
Estos son importados antes de mi archivo globals.css para evitar que me sobreescriban alguna regla.
El archivo main.js de igual manera es importado solo que al final de todo, para que cuando cargue, ya tenga el DOM disponible para trabajar.
El inconveniente de utilizar la PlayCDN de Tailwind es que no puedo generar clases dinamicas tales como "ml-[2rem]", pero no es particularmente necesario para este trabajo.

![image](https://github.com/cristianjuarezz/parcial-virbela/assets/84170516/9f47fe6e-f611-43f4-b206-f2648e41b1db)
Luego de tener una version base, lo publico y configuro Github Pages incluso cuando aun falta la version mobile, solo para tener automatizado ese paso y verificar que lo actual no se haya roto.
Para la version mobile creare un archivo responsive.css donde organizare los media queries, aun asi, Tailwind ya provee diferenciadores como ":md" por lo que me ahorrara algo de trabajo.













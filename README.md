jqueryNotificationPlugin
========================

Jquery Notification Plugin

C'est tout simplement un plugin de Nofiication que j'ai créé basé sur Jquery et Mustache.js

Utilisation
===========

Vous n'avez qu'à importer les fichiers et repertoires suivants:

- style.css
- animate.css
- img/
- img/close.png
- jQuery ( vous pouvez l'inclure via le CDN, ce qui est recommandé )
- jQuery.notif.js


Test
====

$('body').notif({
	title:'Alert', 
	content:"You're hired !!",
	timeout:4000		
});

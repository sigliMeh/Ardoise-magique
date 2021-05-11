// **********************************************************************************
// ********************************* Classe Slate ***********************************
// **********************************************************************************

class Slate {

    constructor(pen) {
        // Récupération du <canvas>
        
        // Récupération du contexte du canvas
        
        // Au début on ne sait pas où se trouve la souris
        
        // Au début on ne dessine pas
        
        // Stockage de l'objet crayon
        
        // Installation des gestionnaires d'évènements de l'ardoise.
    }
    
    // Méthode de nettoyage de l'ardoise
     
        // Effacement de tout le contenu de l'ardoise.
        
        
    // Méthode de récupération des coordonnées X,Y de la souris relative à l'ardoise
    getMouseLocation(event) {
        
        // Récupération des coordonnées de l'ardoise.
        
        // Création d'un objet contenant les coordonnées X,Y de la souris relative à l'ardoise.
        
        //on oubli pas de retourner
    }
    
    // Gestionnaire d'évènement d'appui sur un bouton de la souris.
    onMouseDown(event) {
        
        // On peut dessiner sur l'ardoise.
        
        // Enregistrement de la position actuelle de la souris.
    }
    
    // Gestionnaire d'évènement de sortie de l'ardoise par la souris.
    onMouseLeave() {
        
        // On ne peut plus dessiner sur l'ardoise.
    }
    
    // Gestionnaire d'évènement de déplacement de la souris sur l'ardoise.
    onMouseMove(event) {
        
        // Récupération de la position actuelle de la souris.
        
        // Est-ce qu'on peut dessiner sur l'adoise ?
        
            // Préparation de l'ardoise à l'exécution d'un dessin.
            
            // Début du dessin.
            
            // Dessine un trait entre les précédentes coordonnées de la souris et les nouvelles
            
            
            // Fin du dessin.
            
            // Applique les changements dans le canvas.
            
            // Enregistrement de la nouvelle position de la souris.
            
    }      
    
    // Gestionnaire d'évènement de relachement d'un bouton de la souris.
    onMouseUp() {
        // On ne peut plus dessiner sur l'ardoise.
        
    }
}

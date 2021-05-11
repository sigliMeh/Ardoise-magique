// **********************************************************************************
// ********************************* Classe ColorPalette ****************************
// **********************************************************************************

class ColorPalette {
    
    constructor() {
        // Récupération du <canvas>
        // Récupération du contexte du canvas
        // couleur
        this.canvas = document.querySelector('#color-palette');
        this.context = this.canvas.getContext('2d');
        this.pickedColor = {red: 0, green: 0, blue: 0};
        // Installation des gestionnaires d'évènements de la palette de couleurs.
        this.canvas.addEventListener('click', this.onClick.bind(this)); // on va référer l'événement à l'objet ColorPalette
        // Dessine la palette de couleurs possibles.
        this.build();
    }
    
    // Méthode de construction graphique de la palette de couleurs
    build() {
        let gradient = this.context.createLinearGradient(0, 0, this.canvas.width, 0);
        // Dégradé rouge -> vert -> bleu horizontal.
        gradient.addColorStop(0, 'rgb(255,   0,   0)');
        gradient.addColorStop(0.15, 'rgb(255,   0, 255)');
        gradient.addColorStop(0.32, 'rgb(0,     0, 255)');
        gradient.addColorStop(0.49, 'rgb(0,   255, 255)');
        gradient.addColorStop(0.66, 'rgb(0,   255,   0)');
        gradient.addColorStop(0.83, 'rgb(255, 255,   0)');
        gradient.addColorStop(1, 'rgb(255,   0,   0)');

        this.context.fillStyle = gradient; //on colore notre canvas avec le dégradé
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);//ici il pose la couleur sur toute la surface.
        
        gradient = this.context.createLinearGradient(0, 0, 0, this.canvas.height);
         // Dégradé blanc opaque -> transparent -> noir opaque vertical.
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(0.5, 'rgba(0,     0,   0, 0)');
        gradient.addColorStop(1, 'rgba(0,     0,   0, 1)');

        this.context.fillStyle = gradient;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    } 
    
    // Méthode de récupération de la couleur sur laquelle l'utilisateur a cliqué
    getPickedColor() {
        return this.pickedColor
    }
    
    // Gestionnaire d'évènement de clic sur un pixel de couleur de la palette
    onClick(event) {
        //getBoundingClientRect() event.clientX , event.clientY
        // Récupération des coordonnées de la souris au moment du clic.
        const rectangle = this.canvas.getBoundingClientRect();
        
        const x = event.clientX - rectangle.left;
        const y = event.clientY - rectangle.top;
        /*
         * Création d'un tableau contenant les valeurs RGBA du pixel sur
         * lequel l'utilisateur a cliqué. getImageData(x,y, 1, 1)
        */
        let palette = this.context.getImageData(x, y, 1, 1)
        console.log("palette",palette)
        // Enregistrement des valeurs RGB.
       this.pickedColor.red = palette.data[0];
        this.pickedColor.green = palette.data[1];
        this.pickedColor.blue = palette.data[2];
        /*
         * Déclenchement de l'évènement de l'application,
         * annonçant que l'utilisateur a sélectionné une nouvelle couleur.
        */
    }
}



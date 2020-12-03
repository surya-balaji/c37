class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton("play");
        this.greeting = createElement('h3');
    }
    hide() {
        this.input.hide(); 
        this.button.hide(); 
        this.greeting.hide();
    }
    display() {
        var title = createElement('h2'); 
        title.html("Car Racing Game");
        title.position(150,30);

        input.position(300,160);
        
        button.position(300,200);

        this.button.mousePressed(()=> {
            this.input.hide();
            this.button.hide();

            Player.name = this.input.value();

            this.greeting.html("Hello " + name);
            this.greeting.position(300,160);

            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update(name);
            player.updateCount(playerCount);
        });       
    }
}

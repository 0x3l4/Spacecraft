class SpaceshipBuilderDirector {
    #builder;

    constructor(builder) {
        this.#builder = builder;
    }

    ConstructSpaceship() {
        
    }

    GetSpaceship() {
        return this.#builder.Build();
    }
}
class Singleton {
    private static uniqueInstance: Singleton | null = null;

    private constructor() { }

    static getInstance(): Singleton {
        if (this.uniqueInstance == null) {
            this.uniqueInstance = new Singleton();
        }
        return this.uniqueInstance;
    }
}

let client3 = Singleton.getInstance();
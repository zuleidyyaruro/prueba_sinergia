export class column {
    public data: string;
    public name: string;

    constructor(a: string, b: string) {
        this.name = a;
        this.data = b;
    }
}

export class datatable {
    public start: number;
    public length: number;
    public sort: string;
    public order: string;
    public columns: column[];
    public id?: number;
    public filtro?: string;
    public gettotal: boolean;

    public total: number;

    constructor() {
        this.start = 0;
        this.length = 50;
        this.sort = '';
        this.order = '';
        this.gettotal = true;
        this.columns = [];

        this.total = 0;
    }
}

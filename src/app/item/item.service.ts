import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Nappali", status: true },
        { id: 3, name: "Szoba 1", status: false },
        { id: 4, name: "Szoba 2", status: false },
        { id: 5, name: "Műhely bejárat", status: false },
        { id: 6, name: "Műhely hátsó bejárat", status: false },
    );

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }

    setItem(id: number, status: boolean): Item {
        var z = this.items.filter((item) => item.id === id)[0].status = status;
    }
}

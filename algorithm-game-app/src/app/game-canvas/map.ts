export const map = {
    images: {},
    cols: 8,
    rows: 8,
    tsize: 64,
    layers: [[
        5, 5, 5, 5, 5, 5, 5, 5,
        5, 9, 9, 9, 9, 9, 9, 5,
        5, 9, 2, 5, 5, 2, 9, 5,
        5, 9, 5, 3, 5, 5, 9, 5,
        5, 9, 5, 9, 9, 9, 9, 5,
        5, 9, 2, 5, 5, 5, 9, 5,
        5, 9, 9, 9, 9, 9, 9, 5,
        5, 9, 5, 5, 5, 5, 5, 5
    ], [
        // start at [1][7]
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0 ,0, 0, 0, 0, 0,
        0, 0, 0 ,0, 0, 0, 0, 0,
        0, 0, 0 ,0, 0, 0, 0, 0,
        0, 0, 0 ,0, 0, 0, 0, 0,
        0, 0, 0 ,0, 0, 0, 0, 0,
        0, 0, 0 ,0, 0, 0, 0, 0,
        0, 3, 0 ,0, 0, 0, 0, 0
    ]], 
    
    getTile: function (layer: number, col: number, row: number) {
        return map.layers[layer][row * map.cols + col];
    },
    isSolidTileAtXY: function (x, y) {
        var col = Math.floor(x / this.tsize);
        var row = Math.floor(y / this.tsize);

        // tiles 3 and 5 are solid -- the rest are walkable
        // loop through all layers and return TRUE if any tile is solid
        return this.layers.reduce(function (res, layer, index) {
            var tile = this.getTile(index, col, row);
            var isSolid = tile === 4
            return res || isSolid;
        }.bind(this), false);
    },
    getCol: function (x) {
        return Math.floor(x / this.tsize);
    },
    getRow: function (y) {
        return Math.floor(y / this.tsize);
    },
    getX: function (col) {
        return col * this.tsize;
    },
    getY: function (row) {
        return row * this.tsize;
    }
};
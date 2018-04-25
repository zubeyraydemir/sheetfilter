var app = {
    templateColumn: "",
    columns: null,
    initialize: function () {
        this.templateColumn = $("#templateColumn").html();
        this.columns = $("#columns");

        this.addColumn("Uzunluk", "<option>10</option>", true, false, 123, 243, 513.712);
        this.addColumn("Genişlik", "<option>500</option>", true, false, 431, 563, 54.162);
        this.addColumn("Kalınlık", "<option>410</option>", true, true, 33, 543, 34.142);
        this.addColumn("Zaman", "<option>120</option>", false, true, 5, 6, 12.132);
    },

    addColumn: function (columnName, filterOptions, showFilter, showDetails, min, max, avg) {
        var temp = this.templateColumn;
        temp = temp.replace("#columnName#", columnName);
        temp = temp.replace("#filterOptions#", filterOptions);

        if (showFilter)
            temp = temp.replace("#filterVisible#", "");
        else
            temp = temp.replace("#filterVisible#", "hidden");

        if (showDetails)
            temp = temp.replace("#visible#", "");
        else
            temp = temp.replace("#visible#", "hidden");

        temp = temp.replace("#min#", min);
        temp = temp.replace("#max#", max);
        temp = temp.replace("#avg#", avg);
        this.columns.append(temp);
    }
};

function Column() {

    columnName = null;
        filterOptions= null,
            showFilter= true,
                showDetails= true,
                    min= 0,
                        max= 0,
                            avg= 0
}
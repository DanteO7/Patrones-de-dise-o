class archivoPDF {
    exportar() {
        return "exportando PDF";
    }
}
class archivoEXCEL {
    exportar() {
        return "exportando EXCEL";
    }
}
class factory {
    exportarDesdeFactory() {
        const archivo = this.factoryMethod();
        return archivo.exportar();
    }
}
class factoryPDF extends factory {
    factoryMethod() {
        return new archivoPDF();
    }
}
class factoryEXCEL extends factory {
    factoryMethod() {
        return new archivoEXCEL();
    }
}
var reportes;
(function (reportes) {
    reportes["PDF"] = "PDF";
    reportes["EXCEL"] = "EXCEL";
})(reportes || (reportes = {}));
const factoryReports = new Map([
    [reportes.PDF, () => new factoryPDF()],
    [reportes.EXCEL, () => new factoryEXCEL()],
]);
const PDF = factoryReports.get(reportes.PDF);
const EXCEL = factoryReports.get(reportes.EXCEL);
if (PDF)
    console.log(PDF().exportarDesdeFactory());
if (EXCEL)
    console.log(EXCEL().exportarDesdeFactory());

interface exportable {
  exportar(): string;
}

class archivoPDF implements exportable {
  public exportar(): string {
    return "exportando PDF";
  }
}

class archivoEXCEL implements exportable {
  public exportar(): string {
    return "exportando EXCEL";
  }
}

abstract class factory {
  public abstract factoryMethod(): exportable;

  public exportarDesdeFactory(): string {
    const archivo = this.factoryMethod();
    return archivo.exportar();
  }
}

class factoryPDF extends factory {
  public factoryMethod(): exportable {
    return new archivoPDF();
  }
}

class factoryEXCEL extends factory {
  public factoryMethod(): exportable {
    return new archivoEXCEL();
  }
}

enum reportes {
  PDF = "PDF",
  EXCEL = "EXCEL",
}

const factoryReports: Map<reportes, () => factory> = new Map([
  [reportes.PDF, () => new factoryPDF()],
  [reportes.EXCEL, () => new factoryEXCEL()],
]);

const PDF = factoryReports.get(reportes.PDF);
const EXCEL = factoryReports.get(reportes.EXCEL);

if (PDF) console.log(PDF().exportarDesdeFactory());
if (EXCEL) console.log(EXCEL().exportarDesdeFactory());

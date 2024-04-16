import { useReducer, useState } from "react";
import { useInView } from "react-intersection-observer";
import MainLayout from "../../containers/layout/MainLayout";
import { useTranslation } from 'react-i18next';
import MyCollapse from "./collapse";
import '@preline/collapse';

const Index = (props) => {
  const { t }  = useTranslation(['page']);
  const [menu, setMenu] = useState(-1);
  const [open, setOpen] = useReducer((state) => {
    setMenu(-1);
    return !state;
  }, false);
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <MainLayout {...props} menu={menu} setMenu={setMenu} open={open} setOpen={setOpen}>
      <div>
        <div className="w-full pt-[53px] lg:pt-[181px]">
          <div className="w-full text-blue-1 text-center text-2xl font-bold lg:text-3xl">
            IMPRESSUM
          </div>
          <div className="w-full text-blue-5 text-justify pt-20 px-10 font-bold sm:px-20">
            <div className="w-full text-blue-1 text-justify font-bold text-lg">
              VERANTWORTLICH FÜR DEN INHALT
            </div>

            <div className="w-full text-blue-1 text-justify font-bold text-md pt-8">
              Adresse
              <br/>
              Helopha Beratungs GmbH
            </div>
            <div className="w-full text-blue-1 text-justify font-medium text-md">
              Badstraße 20
              <br/>
              13357 Berlin
              <br/>
              Tel.: +49 30 / 9210 118 -0
              <br/>
              Fax: +49 30 / 9210 118 -99
              <br/>
              E-Mail: info@helopha.com
              <br/>
              <br/>
              Geschäftsführer: Ekaterina Vidyaeva
              <br/>
              Amtsgericht Berlin- Charlottenburg
              <br/>
              HRB 203462 B
              <br/>
              Finanzamt Körperschaften IV
              <br/>
              Steuernummer: 30/339/50466
              <br/>
              Ust-ID: DE322169528#
            </div>

            <div className="w-full text-blue-1 text-justify font-bold text-md pt-10">
              TECHNIK UND LAYOUT
            </div>
            
            <div className="w-full text-blue-1 text-justify font-bold text-md pt-8">
              Coduro Lab UG
            </div>
            <div className="w-full text-blue-1 text-justify font-medium text-md">
              an@coduro-lab.com
              <br/>
              Wilhelmsruher Damm 199
              <br/>
              13435 Berlin
            </div>
            
            <div className="w-full text-blue-1 text-justify font-bold text-md pt-8">
              FOTOS
            </div>
            <div className="w-full text-blue-1 text-justify font-medium text-md">
              Bilddatenbank:
              <br/>
              Figma Software I Freepik.de
            </div>
          </div>
        </div>
        
        <div className="w-full pt-[53px] lg:pt-[181px]">
          <div className="w-full text-blue-1 text-center text-2xl font-bold lg:text-3xl">
            DATENSCHUTZBESTIMMUNGEN
          </div>
          <div className="w-full text-blue-5 text-justify pt-20 px-10 font-bold sm:px-20">
            <div className="w-full text-blue-1 text-justify font-medium text-md">
              Datenschutzerklärung
              <br/>
              <br/>
              Allgemeiner Hinweis und Pflichtinformationen
              <br/>
              Benennung der verantwortlichen Stelle
              <br/>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </div>

            <div className="w-full text-blue-1 text-justify font-bold text-md pt-8">
              Adresse
              <br/>
              Helopha Beratungs GmbH
            </div>
            <div className="w-full text-blue-1 text-justify font-medium text-md">
              Badstraße 20
              <br/>
              13357 Berlin/ Germany
            </div>

            <div className="w-full text-blue-1 text-justify font-medium text-md pt-8">
              Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).
            </div>
          </div>
        </div>

        <div className="w-full pt-[53px] pb-[53px] px-10 lg:pt-[100px] lg:px-20">
          <MyCollapse id="hs-basic-collapse-1" title="Widerruf Ihrer Einwilligung zur Datenverarbeitung" description="Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt." />
          <MyCollapse id="hs-basic-collapse-2" title="Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde" description="Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html." />
          <MyCollapse id="hs-basic-collapse-3" title="Recht auf Datenübertragbarkeit" description="Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist." />
          <MyCollapse id="hs-basic-collapse-4" title="Recht auf Auskunft, Berichtigung, Sperrung, Löschung" description="Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden." />
          <MyCollapse id="hs-basic-collapse-5" title="SSL- bzw. TLS-Verschlüsselung" description="Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile." />
          <MyCollapse id="hs-basic-collapse-6" title="Kontaktformular" description="Per Kontaktformular übermittelte Daten werden einschließlich Ihrer Kontaktdaten gespeichert, um Ihre Anfrage bearbeiten zu können oder um für Anschlussfragen bereitzustehen. Eine Weitergabe dieser Daten findet ohne Ihre Einwilligung nicht statt. Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt. Über das Kontaktformular übermittelte Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder keine Notwendigkeit der Datenspeicherung mehr besteht. Zwingende gesetzliche Bestimmungen - insbesondere Aufbewahrungsfristen - bleiben unberührt." />
          <MyCollapse id="hs-basic-collapse-7" title="Cookies" description="Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
Einige Cookies sind “Session-Cookies.” Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website wiederzuerkennen.
Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen, einschränken oder unterbinden. Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem Schließen des Programms von selbst gelöscht werden. Die Deaktivierung von Cookies kann eine eingeschränkte Funktionalität unserer Website zur Folge haben.
Das Setzen von Cookies, die zur Ausübung elektronischer Kommunikationsvorgänge oder der Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorb) notwendig sind, erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und reibungslosen Bereitstellung unserer Dienste. Sofern die Setzung anderer Cookies (z.B. für Analyse-Funktionen) erfolgt, werden diese in dieser Datenschutzerklärung separat behandelt." />
          <MyCollapse id="hs-basic-collapse-8" title="IP-Anonymisierung" description="Wir setzen Google Analytics in Verbindung mit der Funktion IP-Anonymisierung ein. Sie gewährleistet, dass Google Ihre IP-Adresse innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA kürzt. Es kann Ausnahmefälle geben, in denen Google die volle IP-Adresse an einen Server in den USA überträgt und dort kürzt. In unserem Auftrag wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über Websiteaktivitäten zu erstellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber uns zu erbringen. Es findet keine Zusammenführung der von Google Analytics übermittelten IP-Adresse mit anderen Daten von Google statt." />
          <MyCollapse id="hs-basic-collapse-9" title="Browser Plugin" description="Das Setzen von Cookies durch Ihren Webbrowser ist verhinderbar. Einige Funktionen unserer Website könnten dadurch jedoch eingeschränkt werden. Ebenso können Sie die Erfassung von Daten bezüglich Ihrer Website-Nutzung einschließlich Ihrer IP-Adresse mitsamt anschließender Verarbeitung durch Google unterbinden. Dies ist möglich, indem Sie das über folgenden Link erreichbare Browser-Plugin herunterladen und installieren: https://tools.google.com/dlpage/gaoptout?hl=de.​" />
          <MyCollapse id="hs-basic-collapse-10" title="Widerspruch gegen die Datenerfassung" description="Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen Besuchen unserer Website verhindert: Google Analytics deaktivieren. Einzelheiten zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: https://support.google.com/analytics/answer/6004245?hl=de." />
          <MyCollapse id="hs-basic-collapse-11" title="Auftragsverarbeitung" description="Zur vollständigen Erfüllung der gesetzlichen Datenschutzvorgaben haben wir mit Google einen Vertrag über die Auftragsverarbeitung abgeschlossen." />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;

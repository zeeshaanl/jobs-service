import XingImplementation from '../../../src/infrastructure/provider/Xing/XingImplementation';
import ImportJobsFromXingFilesystem from '../../unit/mock/ApiServiceFilesystemMock';
import Job from '../../../src/domain/entity/Job';

test('Test Xing Import job mapping', async () => {
    try {
        const apiService = ImportJobsFromXingFilesystem;
        const xing = new XingImplementation(apiService);
        const mappedJobs = await xing.importJobs();
        const expectedJob = new Job({
            id: 'f79ff8f4cd59283b526935bee1b0a723',
            title: 'SAP Inhouse Consultant - Application Management',
            companyName: 'mindsquare GmbH',
            description: '\n\nWir bieten dir:\n\n\n\n\nDein Einstieg als in die SAP-Beratungswelt erfolgt durch direkte\nKundenprojekte mit dir als SAP Inhouse Consultant (m/w) in Bielefeld,\nDüsseldorf oder Berlin!\nWir sind DER Vorreiter im Application Management – von uns lernst du, wie es richtig geht!\nUnser Startup-Charakter sorgt für volle Flexibilität und top Karrierechancen.\nDu erhältst eine strukturierte, intensive und exzellente Einarbeitung mit Plan!\nDu kannst direkt Verantwortung übernehmen – du übernimmst die\nRemotebetreuung diverser Kundenprojekte im Bereich SAP Systemanalyse und\n Applikationsbetreuung.\nEigenverantwortliche Kommunikation – du bist für die Abstimmung der\nverschiedenen Anforderungen zwischen den Fachbereichen und der\nEntwicklungsabteilungen zuständig.\nDein eigener Mentor unterstützt dich jederzeit fachlich sowie persönlich. Du bekommst beständig Weiterbildungen.\nBei uns hast du alle Möglichkeiten auf deine Karriere – wir haben Platz für dich, deine Ambitionen und deine Ideen.\nLegendäre mindsquare Events, Teamevents, Spieleabende, Stammtische,\nZocken im hauseigenen Starcraft2-Clan – all das wartet auf dich!\n\n\n\n\nDas bringst du mit:\n\n\n\n\nDu hast ein abgeschlossenes Hochschulstudium oder eine relevante Ausbildung mit IT-Hintergrund.\nDu liebst die IT und möchtest dein Hobby zum Beruf machen.\nDu bringst eine hohe Kommunikationsfähigkeit mit und möchtest deine Kunden glücklich machen.\nDu arbeitest sehr genau und bringst ein hohes Verantwortungsgefühl mit.\nDu strebst nach Exzellenz und möchtest in einem Enterprise-2.0-Unternehmen arbeiten.\nDu hast Lust auf permanente Weiterbildung und lebenslanges Lernen.\nDu möchtest Freunde statt Kollegen haben.\nDaten und Fakten:\n\n2017: geplanter Jahresumsatz\n     18 Millionen € und 185 Mitarbeiter.\nmindsquare ist eines der\n     erfolgreichsten und am schnellsten wachsenden Beratungsunternehmen\n     Deutschlands. Seit der Geschäftsgründung lag das Wachstum jedes Jahr bei\n     40 Prozent.\nWir haben fünf Standorte in\n     Deutschland: Düsseldorf, Berlin, Seelze, Bielefeld und Hamburg.\n18 der DAX30 Unternehmen\n     sowie über 100 Konzerne und Firmen aus dem Mittelstand gehören zu unseren\n     Kunden.\nWir tragen die Auszeichnung\n     „Deutschlands beste Arbeitgeber“ 2013, 2014, 2015 und 2016.\n',
            applyLink: 'https://www.xing.com/jobs/bielefeld-sap-inhouse-consultant-application-management-27846785?_source=affc1f1b2a5',
            city: 'Bielefeld',
            tags: 'mindsquare, applikationsbetreuung, applikationmanagement, sap, sap betreuung, systemanalyse, itil framework, application management service, it-support, second level, first level,\n\t\t\t\tsap inhouse consultant, sap, inhouse, consultant, sap-beratung, it-beratung, it-consultant, it-consulting, applikationsbetreuer, consulting, informatik, wirtschaftsinformatik, it, sap\n\t\t\t\ttrainee, traineeprogramm, bielefeld, berlin, düsseldorf\n\t\t\t'
        });
        expect(mappedJobs).toBeDefined();
        expect(mappedJobs[0]).toBeInstanceOf(Job);
        expect(mappedJobs[0]).toEqual(expectedJob);
    } catch (e) {
        console.dir(e);
        throw e;
    }
}, 5000);

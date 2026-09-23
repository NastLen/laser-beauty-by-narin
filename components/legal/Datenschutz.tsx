"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import LegalPage from "@/components/legal/LegalPage";
import { BUSINESS } from "@/components/legal/businessInfo";

function Ext({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {href.replace(/^https:\/\//, "")}
    </a>
  );
}

function Controller({ phoneLabel, emailLabel }: { phoneLabel: string; emailLabel: string }) {
  return (
    <p>
      {BUSINESS.owner}
      <br />
      {BUSINESS.brand}
      <br />
      {BUSINESS.street}
      <br />
      {BUSINESS.city}
      <br />
      {phoneLabel}: <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
      <br />
      {emailLabel}: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
    </p>
  );
}

function PrivacyDe() {
  return (
    <>
      <h2>1. Verantwortliche</h2>
      <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
      <Controller phoneLabel="Telefon" emailLabel="E-Mail" />

      <h2>2. Allgemeines</h2>
      <p>
        Wir verarbeiten personenbezogene Daten nur, soweit dies für die Bereitstellung dieser Website, die
        Beantwortung Ihrer Anfragen und die Vereinbarung von Terminen erforderlich ist oder Sie eingewilligt
        haben. Wir selbst setzen keine Analyse-, Tracking- oder Werbedienste ein. Eine automatisierte
        Entscheidungsfindung einschließlich Profiling findet nicht statt.
      </p>
      <p>
        Personenbezogene Daten löschen wir, sobald der Zweck der Verarbeitung entfällt, sofern keine
        gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>

      <h2>3. Hosting und Server-Logfiles</h2>
      <p>
        Diese Website wird bei Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA gehostet. Beim
        Aufruf der Website übermittelt Ihr Browser automatisch folgende Informationen, die in sogenannten
        Server-Logfiles verarbeitet werden:
      </p>
      <ul>
        <li>IP-Adresse</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>aufgerufene Seite bzw. Datei</li>
        <li>Referrer-URL (zuvor besuchte Seite)</li>
        <li>Browsertyp und -version sowie Betriebssystem</li>
      </ul>
      <p>
        Diese Daten sind technisch erforderlich, um die Website auszuliefern und ihre Stabilität und
        Sicherheit zu gewährleisten, etwa zur Abwehr von Angriffen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
        DSGVO; unser berechtigtes Interesse liegt in der sicheren und fehlerfreien Bereitstellung der Website.
        Eine Zusammenführung mit anderen Datenquellen findet nicht statt.
      </p>
      <p>
        Vercel verarbeitet die Daten in unserem Auftrag (Art. 28 DSGVO) auf Grundlage seines
        Auftragsverarbeitungsvertrags (Data Processing Addendum). Dabei können Daten in die USA übermittelt
        werden. Vercel Inc. ist nach dem EU-US Data Privacy Framework zertifiziert; für die Übermittlung
        besteht damit ein Angemessenheitsbeschluss der EU-Kommission (Art. 45 DSGVO). Weitere Informationen:{" "}
        <Ext href="https://vercel.com/legal/privacy-notice" />
      </p>

      <h2>4. SSL- bzw. TLS-Verschlüsselung</h2>
      <p>
        Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
        Verbindung erkennen Sie an „https://“ und dem Schloss-Symbol in der Adresszeile Ihres Browsers.
      </p>

      <h2>5. Einwilligung und Spracheinstellung</h2>
      <p>
        Den externen Dienst Google Maps laden wir erst, nachdem Sie direkt an der Karte über die
        Schaltfläche „Karte laden“ eingewilligt haben. Ihre Auswahl – ob Sie Google Maps erlaubt haben
        und wann –
        speichern wir im lokalen Speicher (localStorage) Ihres Browsers unter dem Namen „lbn-consent“,
        damit wir Sie nicht bei jedem Seitenaufruf erneut fragen müssen. Diese Information wird nicht an uns
        oder Dritte übertragen. Nach 12 Monaten fragen wir erneut.
      </p>
      <p>
        Die Speicherung ist unbedingt erforderlich, um Ihre Auswahl umzusetzen (§ 25 Abs. 2 Nr. 2 TDDDG).
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. c DSGVO in Verbindung mit Art. 7 Abs. 1 DSGVO. Ihre Auswahl
        können Sie jederzeit über „Cookie-Einstellungen“ am Ende jeder Seite ändern. Einzelheiten finden Sie
        in unserer <Link href="/cookie-richtlinie">Cookie-Richtlinie</Link>.
      </p>

      <p>
        Wenn Sie die Sprache der Website wechseln, speichern wir Ihre Wahl ebenfalls im lokalen Speicher Ihres
        Browsers (Name „lbn-language“), damit die Website beim nächsten Aufruf in dieser Sprache erscheint. Auch
        diese Information wird nicht an uns übertragen. Die Speicherung ist für die von Ihnen gewünschte
        Sprachauswahl unbedingt erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG) und bleibt bestehen, bis Sie die
        Websitedaten in Ihrem Browser löschen.
      </p>

      <h2>6. Kontaktaufnahme</h2>
      <p>
        Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, verarbeiten wir
        die von Ihnen mitgeteilten Daten (z. B. Name, E-Mail-Adresse, Telefonnummer, gewünschte Behandlung und
        Ihre Nachricht), um Ihre Anfrage zu bearbeiten und Anschlussfragen zu beantworten.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage mit einem Vertrag oder
        vorvertraglichen Maßnahmen, etwa einer Terminvereinbarung, zusammenhängt. Im Übrigen beruht die
        Verarbeitung auf unserem berechtigten Interesse an der Beantwortung von Anfragen (Art. 6 Abs. 1
        lit. f DSGVO).
      </p>
      <p>
        Angaben zu Ihrer Gesundheit (z. B. Hauterkrankungen oder Medikamente) besprechen wir am besten
        persönlich im Beratungsgespräch – bitte senden Sie sie möglichst nicht per WhatsApp oder E-Mail.
      </p>
      <p>
        Wir geben Ihre Daten nicht ohne Ihre Einwilligung weiter. Sie verbleiben bei uns, bis Ihre
        Anfrage abschließend bearbeitet ist oder Sie die Löschung verlangen. Gesetzliche
        Aufbewahrungsfristen, insbesondere handels- und steuerrechtliche, bleiben unberührt.
      </p>
      <h3>WhatsApp</h3>
      <p>
        Auf den Seiten „Termin buchen“ und „Kontakt“ öffnet ein Button WhatsApp mit einer vorbereiteten
        Nachricht. Das
        ist ein einfacher Link: Daten werden erst übertragen, wenn Sie ihn anklicken und die Nachricht
        in WhatsApp absenden. Wenn Sie uns über WhatsApp schreiben, erfolgt die Kommunikation über den
        Dienst der WhatsApp Ireland
        Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland. WhatsApp erhält dabei unter
        anderem Ihre Telefonnummer und Metadaten der Kommunikation und verarbeitet Daten auch in den USA; die
        Nachrichteninhalte sind Ende-zu-Ende-verschlüsselt. Die Nutzung ist freiwillig – Sie erreichen uns
        ebenso per Telefon oder E-Mail. Weitere Informationen:{" "}
        <Ext href="https://www.whatsapp.com/legal/privacy-policy-eea" />
      </p>

      <h2>7. Google Maps</h2>
      <p>
        Auf unserer Startseite binden wir eine Karte von Google Maps ein, damit Sie unser Studio leicht finden.
        Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“).
      </p>
      <p>
        Die Karte wird erst geladen, wenn Sie durch Klick auf „Karte laden“ eingewilligt haben. Dann
        stellt Ihr Browser eine Verbindung zu Servern von Google her. Dabei werden
        insbesondere Ihre IP-Adresse und die aufgerufene Seite an Google übermittelt, und Google kann Cookies
        oder ähnliche Technologien einsetzen. Die Daten können an die Google LLC in den USA übertragen werden.
        Google LLC ist nach dem EU-US Data Privacy Framework zertifiziert; für die Übermittlung besteht damit
        ein Angemessenheitsbeschluss der EU-Kommission (Art. 45 DSGVO).
      </p>
      <p>
        Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG), die Sie
        jederzeit über „Cookie-Einstellungen“ mit Wirkung für die Zukunft widerrufen können. Weitere
        Informationen: <Ext href="https://policies.google.com/privacy" />
      </p>

      <h2>8. Schriftarten</h2>
      <p>
        Die auf dieser Website verwendeten Schriftarten werden über unseren Hosting-Anbieter ausgeliefert.
        Beim Aufruf der Seiten wird keine Verbindung zu Servern von Google Fonts oder anderen Schriftanbietern
        hergestellt.
      </p>

      <h2>9. Link zu Instagram</h2>
      <p>
        Wir verlinken auf unser Instagram-Profil. Es handelt sich um einen einfachen Link – beim Besuch
        unserer Website werden keine Daten an Instagram übermittelt. Erst wenn Sie den Link anklicken, gelangen
        Sie zu Instagram, einem Dienst der Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5,
        Irland. Dort gelten die Datenschutzbestimmungen von Instagram:{" "}
        <Ext href="https://privacycenter.instagram.com/policy" />
      </p>

      <h2>10. Ihre Rechte</h2>
      <p>Sie haben im Rahmen der gesetzlichen Vorgaben das Recht auf</p>
      <ul>
        <li>Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO),</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO),</li>
        <li>Löschung (Art. 17 DSGVO),</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO),</li>
        <li>
          Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO) – für externe
          Dienste jederzeit über „Cookie-Einstellungen“ am Seitenende.
        </li>
      </ul>
      <p>Wenden Sie sich dazu einfach an die oben genannten Kontaktdaten.</p>

      <h2>11. Widerspruchsrecht nach Art. 21 DSGVO</h2>
      <p className="font-semibold">
        Soweit wir Daten auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO)
        verarbeiten, können Sie aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit
        Widerspruch gegen diese Verarbeitung einlegen. Wir verarbeiten Ihre Daten dann nicht mehr, es sei denn,
        wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte
        und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung
        von Rechtsansprüchen.
      </p>

      <h2>12. Beschwerderecht bei einer Aufsichtsbehörde</h2>
      <p>
        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Für
        uns zuständig ist: Der Hessische Beauftragte für Datenschutz und Informationsfreiheit,
        Gustav-Stresemann-Ring 1, 65189 Wiesbaden, <Ext href="https://datenschutz.hessen.de" />
      </p>
    </>
  );
}

function PrivacyEn() {
  return (
    <>
      <h2>1. Controller</h2>
      <p>The controller responsible for data processing on this website is:</p>
      <Controller phoneLabel="Phone" emailLabel="Email" />

      <h2>2. General Information</h2>
      <p>
        We only process personal data to the extent necessary to provide this website, respond to your
        inquiries and arrange appointments, or where you have given your consent. We do not use any analytics,
        tracking or advertising services ourselves. No automated decision-making, including profiling, takes
        place.
      </p>
      <p>
        We delete personal data as soon as the purpose of processing no longer applies, unless statutory
        retention obligations require otherwise.
      </p>

      <h2>3. Hosting and Server Log Files</h2>
      <p>
        This website is hosted by Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA. When you
        visit the website, your browser automatically transmits the following information, which is processed
        in so-called server log files:
      </p>
      <ul>
        <li>IP address</li>
        <li>date and time of access</li>
        <li>page or file requested</li>
        <li>referrer URL (previously visited page)</li>
        <li>browser type and version, operating system</li>
      </ul>
      <p>
        This data is technically necessary to deliver the website and to ensure its stability and security,
        e.g. to defend against attacks. The legal basis is Art. 6(1)(f) GDPR; our legitimate interest lies in
        providing the website securely and without errors. This data is not combined with other data sources.
      </p>
      <p>
        Vercel processes the data on our behalf (Art. 28 GDPR) under its Data Processing Addendum. Data may be
        transferred to the USA in the process. Vercel Inc. is certified under the EU-U.S. Data Privacy
        Framework, so the transfer is covered by an adequacy decision of the European Commission (Art. 45
        GDPR). More information: <Ext href="https://vercel.com/legal/privacy-notice" />
      </p>

      <h2>4. SSL/TLS Encryption</h2>
      <p>
        For security reasons, this website uses SSL/TLS encryption. You can recognise an encrypted connection
        by “https://” and the padlock icon in your browser&apos;s address bar.
      </p>

      <h2>5. Consent and Language Setting</h2>
      <p>
        We only load the external service Google Maps after you have given your consent directly at the
        map using the “Load map” button. Your choice – whether you have allowed Google Maps and when –
        is
        stored in your browser&apos;s local storage under the name “lbn-consent”, so that we don&apos;t
        have to ask you again on every page view. This information is not transmitted to us or to third
        parties. We ask again after 12 months.
      </p>
      <p>
        This storage is strictly necessary to implement your choice (§ 25(2) no. 2 TDDDG). The legal basis is
        Art. 6(1)(c) in conjunction with Art. 7(1) GDPR. You can change your choice at any time via “Cookie
        Settings” at the bottom of every page. Details can be found in our{" "}
        <Link href="/cookie-richtlinie">Cookie Policy</Link>.
      </p>

      <p>
        If you change the website&apos;s language, we also store your choice in your browser&apos;s
        local storage
        (name “lbn-language”) so that the website appears in that language on your next visit. This information
        is not transmitted to us either. This storage is strictly necessary to provide the language you have
        chosen (§ 25(2) no. 2 TDDDG) and remains until you delete the website data in your browser.
      </p>

      <h2>6. Contacting Us</h2>
      <p>
        If you contact us by email, phone or WhatsApp, we process the data you provide
        (e.g. name, email address, phone number, desired treatment and your message) to handle your inquiry and
        answer follow-up questions.
      </p>
      <p>
        The legal basis is Art. 6(1)(b) GDPR insofar as your inquiry relates to a contract or pre-contractual
        measures, such as booking an appointment. Otherwise, processing is based on our legitimate
        interest in responding to inquiries (Art. 6(1)(f) GDPR).
      </p>
      <p>
        We prefer to discuss health information (e.g. skin conditions or medication) in person during
        your consultation – please avoid sending it via WhatsApp or email.
      </p>
      <p>
        We do not share your data without your consent. It remains with us until your inquiry has been
        fully dealt with or you request its deletion. Statutory retention periods, in
        particular under commercial and tax law, remain unaffected.
      </p>
      <h3>WhatsApp</h3>
      <p>
        On the “Book Appointment” and “Contact” pages, a button opens WhatsApp with a prepared message.
        This is a
        simple link: data is only transmitted once you click it and send the message in WhatsApp. If you
        message us via WhatsApp, communication takes place via the service of WhatsApp Ireland Limited,
        4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland. WhatsApp receives, among other things,
        your phone number and communication metadata and also processes data in the USA; message contents are
        end-to-end encrypted. Using WhatsApp is voluntary – you can also reach us by phone or email. More
        information: <Ext href="https://www.whatsapp.com/legal/privacy-policy-eea" />
      </p>

      <h2>7. Google Maps</h2>
      <p>
        On our home page, we embed a Google Maps map so that you can easily find our studio. The provider is
        Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland (“Google”).
      </p>
      <p>
        The map is only loaded after you have given your consent by clicking “Load map”. Your browser
        then connects to Google&apos;s servers. In particular, your IP address and the page
        visited are transmitted to Google, and Google may use cookies or similar technologies. The data may be
        transferred to Google LLC in the USA. Google LLC is certified under the EU-U.S. Data Privacy Framework,
        so the transfer is covered by an adequacy decision of the European Commission (Art. 45 GDPR).
      </p>
      <p>
        The legal basis is your consent (Art. 6(1)(a) GDPR, § 25(1) TDDDG), which you can withdraw at any time
        with effect for the future via “Cookie Settings”. More information:{" "}
        <Ext href="https://policies.google.com/privacy" />
      </p>

      <h2>8. Fonts</h2>
      <p>
        The fonts used on this website are delivered by our hosting provider. No connection to Google Fonts or
        other font providers is established when you visit our pages.
      </p>

      <h2>9. Link to Instagram</h2>
      <p>
        We link to our Instagram profile. This is a simple link – no data is transmitted to Instagram when you
        visit our website. Only when you click the link will you be taken to Instagram, a service of Meta
        Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Ireland, where Instagram&apos;s privacy
        policy applies: <Ext href="https://privacycenter.instagram.com/policy" />
      </p>

      <h2>10. Your Rights</h2>
      <p>Within the scope of the statutory provisions, you have the following rights:</p>
      <ul>
        <li>access to the data we hold about you (Art. 15 GDPR),</li>
        <li>rectification of inaccurate data (Art. 16 GDPR),</li>
        <li>erasure (Art. 17 GDPR),</li>
        <li>restriction of processing (Art. 18 GDPR),</li>
        <li>data portability (Art. 20 GDPR),</li>
        <li>
          withdrawal of your consent with effect for the future (Art. 7(3) GDPR) – for external services at
          any time via “Cookie Settings” at the bottom of the page.
        </li>
      </ul>
      <p>Simply contact us using the contact details above.</p>

      <h2>11. Right to Object under Art. 21 GDPR</h2>
      <p className="font-semibold">
        Where we process data on the basis of our legitimate interest (Art. 6(1)(f) GDPR), you may object to
        this processing at any time on grounds relating to your particular situation. We will then no longer
        process your data unless we can demonstrate compelling legitimate grounds for the processing which
        override your interests, rights and freedoms, or the processing serves the establishment, exercise or
        defence of legal claims.
      </p>

      <h2>12. Right to Lodge a Complaint</h2>
      <p>
        You have the right to lodge a complaint with a data protection supervisory authority (Art. 77 GDPR).
        The authority responsible for us is: Der Hessische Beauftragte für Datenschutz und
        Informationsfreiheit (Hessian Commissioner for Data Protection and Freedom of Information),
        Gustav-Stresemann-Ring 1, 65189 Wiesbaden, Germany, <Ext href="https://datenschutz.hessen.de" />
      </p>
    </>
  );
}

function PrivacyRu() {
  return (
    <>
      <h2>1. Ответственное лицо</h2>
      <p>Ответственным за обработку данных на этом сайте является:</p>
      <Controller phoneLabel="Телефон" emailLabel="E-mail" />

      <h2>2. Общие положения</h2>
      <p>
        Мы обрабатываем персональные данные только в той мере, в какой это необходимо для работы сайта, ответа
        на ваши запросы и записи на процедуры, либо если вы дали на это согласие. Сами мы не используем сервисы
        аналитики, отслеживания или рекламы. Автоматизированное принятие решений, включая профилирование, не
        осуществляется.
      </p>
      <p>
        Мы удаляем персональные данные, как только цель обработки отпадает, если этому не препятствуют
        установленные законом сроки хранения.
      </p>

      <h2>3. Хостинг и журналы сервера</h2>
      <p>
        Сайт размещён у Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, США. При посещении сайта
        ваш браузер автоматически передаёт следующие сведения, которые обрабатываются в так называемых журналах
        сервера (лог-файлах):
      </p>
      <ul>
        <li>IP-адрес;</li>
        <li>дата и время доступа;</li>
        <li>запрошенная страница или файл;</li>
        <li>адрес страницы, с которой был совершён переход (referrer);</li>
        <li>тип и версия браузера, операционная система.</li>
      </ul>
      <p>
        Эти данные технически необходимы для работы сайта, обеспечения его стабильности и безопасности,
        например для защиты от атак. Правовое основание — ст. 6(1)(f) GDPR; наш законный интерес состоит в
        безопасной и бесперебойной работе сайта. Эти данные не объединяются с другими источниками данных.
      </p>
      <p>
        Vercel обрабатывает данные по нашему поручению (ст. 28 GDPR) на основании договора об обработке данных
        (Data Processing Addendum). При этом данные могут передаваться в США. Vercel Inc. сертифицирована по
        программе EU-U.S. Data Privacy Framework, поэтому для такой передачи действует решение Европейской
        комиссии об адекватности (ст. 45 GDPR). Подробнее: <Ext href="https://vercel.com/legal/privacy-notice" />
      </p>

      <h2>4. SSL/TLS-шифрование</h2>
      <p>
        В целях безопасности сайт использует SSL/TLS-шифрование. Зашифрованное соединение можно узнать по
        «https://» и значку замка в адресной строке браузера.
      </p>

      <h2>5. Согласие и выбор языка</h2>
      <p>
        Внешний сервис Google Maps загружается только после того, как вы дали согласие прямо на месте
        карты — кнопкой «Загрузить карту». Ваш выбор — разрешили ли вы Google Maps и когда —
        сохраняется в локальном хранилище (localStorage) вашего браузера под именем «lbn-consent»,
        чтобы не спрашивать вас при каждом открытии страницы. Эти сведения не передаются ни нам, ни третьим
        лицам. Через 12 месяцев мы спросим снова.
      </p>
      <p>
        Такое хранение строго необходимо для выполнения вашего выбора (§ 25(2) № 2 TDDDG). Правовое основание —
        ст. 6(1)(c) во взаимосвязи со ст. 7(1) GDPR. Изменить выбор можно в любое время через «Настройки
        cookie» внизу каждой страницы. Подробности — в нашей <Link href="/cookie-richtlinie">Политике cookie</Link>.
      </p>

      <p>
        Если вы меняете язык сайта, ваш выбор также сохраняется в локальном хранилище браузера (имя
        «lbn-language»), чтобы при следующем посещении сайт открылся на этом языке. Эти сведения нам также не
        передаются. Такое хранение строго необходимо для выбранного вами языка (§ 25(2) № 2 TDDDG) и
        сохраняется, пока вы не удалите данные сайта в браузере.
      </p>

      <h2>6. Обращение к нам</h2>
      <p>
        Если вы связываетесь с нами по e-mail, телефону или в WhatsApp, мы обрабатываем
        переданные вами данные (например, имя, адрес электронной почты, номер телефона, интересующую процедуру
        и текст сообщения), чтобы ответить на ваш запрос и на возможные уточняющие вопросы.
      </p>
      <p>
        Правовое основание — ст. 6(1)(b) GDPR, если ваш запрос связан с договором или преддоговорными мерами,
        например с записью на процедуру. В остальных случаях обработка основана на нашем законном
        интересе в ответе на запросы (ст. 6(1)(f) GDPR).
      </p>
      <p>
        Сведения о здоровье (например, о заболеваниях кожи или принимаемых лекарствах) лучше обсудить
        лично на консультации — по возможности не присылайте их в WhatsApp или по e-mail.
      </p>
      <p>
        Мы не передаём ваши данные третьим лицам без вашего согласия. Они хранятся у нас до
        окончательной обработки запроса или до вашего требования удалить их. Установленные законом сроки
        хранения, в частности торговые и налоговые, остаются в силе.
      </p>
      <h3>WhatsApp</h3>
      <p>
        На страницах «Записаться» и «Контакты» кнопка открывает WhatsApp с готовым сообщением. Это
        обычная ссылка:
        данные передаются, только когда вы нажмёте на неё и отправите сообщение в WhatsApp. Если вы
        пишете нам в WhatsApp, общение происходит через сервис WhatsApp Ireland Limited, 4 Grand Canal
        Square, Grand Canal Harbour, Dublin 2, Ирландия. WhatsApp получает, в частности, ваш номер телефона и
        метаданные переписки и обрабатывает данные в том числе в США; содержание сообщений защищено сквозным
        шифрованием. Использование WhatsApp добровольно — с нами также можно связаться по телефону или e-mail.
        Подробнее: <Ext href="https://www.whatsapp.com/legal/privacy-policy-eea" />
      </p>

      <h2>7. Google Maps</h2>
      <p>
        На главной странице мы встраиваем карту Google Maps, чтобы вам было легче найти нашу студию. Поставщик —
        Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ирландия («Google»).
      </p>
      <p>
        Карта загружается только после вашего согласия — нажатием кнопки «Загрузить карту». Затем ваш
        браузер соединяется с серверами Google. При этом Google получает, в частности, ваш
        IP-адрес и сведения о просматриваемой странице и может использовать cookie или аналогичные технологии.
        Данные могут передаваться Google LLC в США. Google LLC сертифицирована по программе EU-U.S. Data
        Privacy Framework, поэтому для такой передачи действует решение Европейской комиссии об адекватности
        (ст. 45 GDPR).
      </p>
      <p>
        Правовое основание — ваше согласие (ст. 6(1)(a) GDPR, § 25(1) TDDDG), которое вы можете в любое время
        отозвать на будущее через «Настройки cookie». Подробнее: <Ext href="https://policies.google.com/privacy" />
      </p>

      <h2>8. Шрифты</h2>
      <p>
        Шрифты на этом сайте загружаются с серверов нашего хостинг-провайдера. При посещении страниц соединение
        с серверами Google Fonts или других поставщиков шрифтов не устанавливается.
      </p>

      <h2>9. Ссылка на Instagram</h2>
      <p>
        Мы размещаем ссылку на наш профиль в Instagram. Это обычная ссылка — при посещении нашего сайта данные
        в Instagram не передаются. Только нажав на ссылку, вы перейдёте в Instagram — сервис Meta Platforms
        Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Ирландия, где действует политика конфиденциальности
        Instagram: <Ext href="https://privacycenter.instagram.com/policy" />
      </p>

      <h2>10. Ваши права</h2>
      <p>В рамках законодательства вы имеете право на:</p>
      <ul>
        <li>получение информации о хранящихся у нас ваших данных (ст. 15 GDPR);</li>
        <li>исправление неверных данных (ст. 16 GDPR);</li>
        <li>удаление данных (ст. 17 GDPR);</li>
        <li>ограничение обработки (ст. 18 GDPR);</li>
        <li>переносимость данных (ст. 20 GDPR);</li>
        <li>
          отзыв данного согласия на будущее (ст. 7(3) GDPR) — для внешних сервисов в любое время через
          «Настройки cookie» внизу страницы.
        </li>
      </ul>
      <p>Для этого просто свяжитесь с нами по указанным выше контактам.</p>

      <h2>11. Право на возражение согласно ст. 21 GDPR</h2>
      <p className="font-semibold">
        Если мы обрабатываем данные на основании нашего законного интереса (ст. 6(1)(f) GDPR), вы вправе в
        любое время возразить против такой обработки по причинам, связанным с вашей особой ситуацией. После
        этого мы прекратим обработку, если только не сможем доказать наличие веских законных оснований, которые
        перевешивают ваши интересы, права и свободы, либо если обработка служит предъявлению, осуществлению или
        защите правовых требований.
      </p>

      <h2>12. Право на подачу жалобы</h2>
      <p>
        Вы вправе подать жалобу в надзорный орган по защите данных (ст. 77 GDPR). Компетентный для нас орган:
        Der Hessische Beauftragte für Datenschutz und Informationsfreiheit (Уполномоченный земли Гессен по
        защите данных и свободе информации), Gustav-Stresemann-Ring 1, 65189 Wiesbaden, Германия,{" "}
        <Ext href="https://datenschutz.hessen.de" />
      </p>
    </>
  );
}

const content = {
  de: { title: "Datenschutzerklärung", Body: PrivacyDe },
  en: { title: "Privacy Policy", Body: PrivacyEn },
  ru: { title: "Политика конфиденциальности", Body: PrivacyRu },
};

export default function Datenschutz() {
  const { language } = useLanguage();
  const { title, Body } = content[language];

  return (
    <LegalPage title={title}>
      <Body />
    </LegalPage>
  );
}

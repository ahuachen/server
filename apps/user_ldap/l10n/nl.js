OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Niet gelukt de vertalingen leeg te maken.",
    "Failed to delete the server configuration" : "Verwijderen serverconfiguratie mislukt",
    "Invalid configuration: Anonymous binding is not allowed." : "De configuratie is ongeldig: anonieme bind is niet toegestaan.",
    "Valid configuration, connection established!" : "Geldige configuratie, verbinding tot stand gebracht",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "Geldige configuratie, maar Binding mislukte. Controleer de serverinstellingen en inloggegevens.",
    "Invalid configuration. Please have a look at the logs for further details." : "Ongeldige configuratie. Bekijk de logbestanden voor meer details.",
    "No action specified" : "Geen actie opgegeven",
    "No configuration specified" : "Geen configuratie opgegeven",
    "No data specified" : "Geen gegevens verstrekt",
    " Could not set configuration %s" : "Kon configuratie %s niet instellen",
    "Action does not exist" : "Actie bestaat niet",
    "LDAP user and group backend" : "LDAP gebruikers en groep backend",
    "Renewing …" : "Herstellen ...",
    "Very weak password" : "Zeer zwak wachtwoord",
    "Weak password" : "Zwak wachtwoord",
    "So-so password" : "Matig wachtwoord",
    "Good password" : "Goed wachtwoord",
    "Strong password" : "Sterk wachtwoord",
    "The Base DN appears to be wrong" : "De Basis DN lijkt onjuist",
    "Testing configuration…" : "Testen van de configuratie…",
    "Configuration incorrect" : "Configuratie onjuist",
    "Configuration incomplete" : "Configuratie incompleet",
    "Configuration OK" : "Configuratie OK",
    "Select groups" : "Selecteer groepen",
    "Select object classes" : "Selecteer objectklasse",
    "Please check the credentials, they seem to be wrong." : "Controleer de inloggegevens, ze lijken onjuist.",
    "Please specify the port, it could not be auto-detected." : "Geef de poort op, die kon niet automatisch worden vastgesteld.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Basis DN kon niet automatisch worden vastgesteld, herstel inloggegevens, server en poort.",
    "Could not detect Base DN, please enter it manually." : "Kon basis DN niet vaststellen, voer de gegevens handmatig in.",
    "{nthServer}. Server" : "{nthServer}. Server",
    "No object found in the given Base DN. Please revise." : "Geen object gevonden in de basis DN. Review instellingen.",
    "More than 1,000 directory entries available." : "Meer dan 1000 directorynamen beschikbaar.",
    "_{objectsFound} entry available within the provided Base DN_::_{objectsFound} entries available within the provided Base DN_" : ["{objectsFound} account beschikbaar binnen de provider Basis DN","{objectsFound} accounts beschikbaar binnen de provider Basis DN"],
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Er trad een fout op. Controleer de Basis DN en de verbindingsinstellingen en inloggegevens.",
    "Do you really want to delete the current Server Configuration?" : "Wilt je werkelijk de huidige Serverconfiguratie verwijderen?",
    "Confirm Deletion" : "Bevestig verwijderen",
    "Mappings cleared successfully!" : "Mappings succesvol schoongemaakt!",
    "Error while clearing the mappings." : "Fout bij opschonen mappings.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "Anonieme bind is niet toegestaan. Geef een gebruikers DN en wachtwoord op.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "LDAP operatie fout. Anonieme bind is misschien niet toegstaan.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Opslaan mislukt. Verifieer dat de database draait. Herlaad voordat je verder gaat.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Omschakelen van de modus schakelt automatische LDAP opvragingen in. Afhankelijk van je LDAP omvang kan dat even duren. Wil je nog steeds omschakelen?",
    "Mode switch" : "Omschakelen modus",
    "Select attributes" : "Selecteer attributen",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>" : "Gebruiker niet gevonden. Verifieer je inloggegevens en gebruikersnaam. Geldig filter (kopiëren en plakken voor commandoregel validatie): <br/>",
    "User found and settings verified." : "Gebruiker gevonden en instellingen geverifieerd.",
    "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in." : "Bekijk of je je zoekopdracht kunt verfijnen daar het nu meerdere gebruikers treft en alleen de eerste gebruiker zal kunnen inloggen.",
    "An unspecified error occurred. Please check log and settings." : "Er trad een ongedefinieerde fout op. Controleer de log en de instellingen.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "Het zoekfilter is ongeldig, waarschijnlijk door syntax problemen zoals een ongelijk aantal open- en sluithaakjes. Graag aanpassen.",
    "A connection error to LDAP / AD occurred, please check host, port and credentials." : "Er trad een verbindingsfout naar LDAP / AD op, verifieer servernaam, poort en inloggegevens.",
    "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP / AD." : "De \"%uid\" opvultekst ontbreekt. Die wordt vervangen door de inlognaam bij het bevragen van LDAP / AD.",
    "Please provide a login name to test against" : "Geef een inlognaam op om opnieuw tegen te testen",
    "The group box was disabled, because the LDAP / AD server does not support memberOf." : "De groepsbox was uitgeschakeld, omdat de LDAP / AD server het attribuut memberOf niet ondersteunt.",
    "Password change rejected. Hint: " : "Wachtwoordwijziging geweigerd. Hint:",
    "Please login with the new password" : "Login met je nieuwe wachtwoord",
    "Your password will expire tomorrow." : "Je wachtwoord vervalt morgen.",
    "Your password will expire today." : "Je wachtwoord vervalt vandaag.",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["Je wachtwoord verloopt binnen %n dag.","Je wachtwoord verloopt binnen %n dagen."],
    "LDAP / AD integration" : "LDAP / AD integratie",
    "_%s group found_::_%s groups found_" : ["%s groep gevonden","%s groepen gevonden"],
    "_%s user found_::_%s users found_" : ["%s gebruiker gevonden","%s gebruikers gevonden"],
    "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings." : "Kon het weergavenaam attribuut van de gebruiker niet vinden. Geef het zelf op in de geavanceerde LDAP instellingen.",
    "Could not find the desired feature" : "Kon de gewenste functie niet vinden",
    "Invalid Host" : "Ongeldige server",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory." : "Deze applicatie laat beheerders Nextcloud verbinden met een LDAP-gebruikersdatabase.",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory for authentication and provisioning users, groups and user attributes. Admins can configure this application to connect to one or more LDAP directories or Active Directories via an LDAP interface. Attributes such as user quota, email, avatar pictures, group memberships and more can be pulled into Nextcloud from a directory with the appropriate queries and filters.\n\nA user logs into Nextcloud with their LDAP or AD credentials, and is granted access based on an authentication request handled by the LDAP or AD server. Nextcloud does not store LDAP or AD passwords, rather these credentials are used to authenticate a user and then Nextcloud uses a session for the user ID. More information is available in the LDAP User and Group Backend documentation." : "Met deze applicatie kunnen beheerders Nextcloud verbinden met een LDAP-gebruikersdirectory voor authenticatie en beheer van gebruikers, groepen en gebruikersattributen. Beheerders kunnen deze toepassing configureren om verbinding te maken met één of meer LDAP-directory's of Active Directory's via een LDAP-interface. Attributen zoals gebruikersquota, e-mail, avatarafbeeldingen, groepslidmaatschappen en meer kunnen in NextCloud met de juiste zoekopdrachten en filters vanuit een map worden opgehaald.\n\nEen gebruiker meldt zich aan bij Nextcloud met zijn LDAP- of AD-referenties en krijgt toegang op basis van een authenticatieverzoek dat door de LDAP- of AD-server wordt afgehandeld. Nextcloud slaat geen LDAP- of AD-wachtwoorden op, maar deze inloggegevens worden alleen gebruikt om een gebruiker te verifiëren en vervolgens gebruikt Nextcloud een sessie voor de gebruikers-ID. Meer informatie is beschikbaar in de documentatie LDAP-gebruiker en groepsbackend.",
    "Test Configuration" : "Test configuratie",
    "Help" : "Help",
    "Groups meeting these criteria are available in %s:" : "Groepsafspraken die voldoen aan deze criteria zijn beschikbaar in %s:",
    "Only these object classes:" : "Alleen deze objectklassen:",
    "Only from these groups:" : "Alleen van deze groepen:",
    "Search groups" : "Zoeken groepen",
    "Available groups" : "Beschikbare groepen",
    "Selected groups" : "Geselecteerde groepen",
    "Edit LDAP Query" : "Bewerken LDAP opvraging",
    "LDAP Filter:" : "LDAP Filter:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "Dit filter geeft aan welke LDAP groepen toegang hebben tot %s.",
    "Verify settings and count the groups" : "Verifiëren instellingen en tellen groepen",
    "When logging in, %s will find the user based on the following attributes:" : "Bij inloggen vindt %s de gebruiker gebaseerd op de volgende attributen:",
    "LDAP / AD Username:" : "LDAP / AD gebruikersnaam:",
    "Allows login against the LDAP / AD username, which is either \"uid\" or \"sAMAccountName\" and will be detected." : "Maakt inloggen tegen de LDAP / AD gebruikersnaam mogelijk, zowel \"uid\" en \"sAMAccountname\" wordt gedetecteerd.",
    "LDAP / AD Email Address:" : "LDAP / AD e-mailadres:",
    "Allows login against an email attribute. \"mail\" and \"mailPrimaryAddress\" allowed." : "Maak inloggen tegen een e-mailattribuut mogelijk. \"mail\" en \"mailPrimaryAddress\" zijn mogelijk.",
    "Other Attributes:" : "Overige attributen:",
    "Defines the filter to apply, when login is attempted. \"%%uid\" replaces the username in the login action. Example: \"uid=%%uid\"" : "Definiëert het toe te passen filter als er geprobeerd wordt in te loggen. \"%%uid\" vervangt de gebruikersnaam bij het inloggen. Bijvoorbeeld: \"uid=%%uid\"",
    "Test Loginname" : "Test inlognaam",
    "Verify settings" : "Verifiëren instellingen",
    "%s. Server:" : "%s. Server:",
    "Add a new configuration" : "Toevoegen nieuwe configuratie",
    "Copy current configuration into new directory binding" : "Kopieer de huidige configuratie naar een nieuwe directory binding",
    "Delete the current configuration" : "Verwijder de huidige configuratie",
    "Host" : "Host",
    "You can omit the protocol, unless you require SSL. If so, start with ldaps://" : "Je kunt het protocol weglaten, tenzij je SSL vereist. Start in dat geval met ldaps://",
    "Port" : "Poort",
    "Detect Port" : "Detecteer poort",
    "User DN" : "User DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "De DN van de client gebruiker waarmee de verbinding zal worden gemaakt, bijv. uid=agent,dc=example,dc=com. Voor anonieme toegang laat je het DN en het wachtwoord leeg.",
    "Password" : "Wachtwoord",
    "For anonymous access, leave DN and Password empty." : "Voor anonieme toegang, laat de DN en het wachtwoord leeg.",
    "Save Credentials" : "Opslaan inloggegevens",
    "One Base DN per line" : "Een Base DN per regel",
    "You can specify Base DN for users and groups in the Advanced tab" : "Je kunt het Base DN voor gebruikers en groepen specificeren in het tab Geavanceerd.",
    "Detect Base DN" : "Detecteren basis DN",
    "Test Base DN" : "Testen basis DN",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Voorkom automatische LDAP opvragingen. Weliswaar beter voor grote installaties, maar vergt LDAP kennis.",
    "Manually enter LDAP filters (recommended for large directories)" : "Handmatig invoeren LDAP filters (aanbevolen voor grote directories)",
    "Listing and searching for users is constrained by these criteria:" : "De volgende beperkingen voor gebruikers om te zoeken of een overzicht te verkrijgen zijn van toepassing:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "De meest gebruikelijke objectklassen voor gebruikers zijn organizationalPerson, persoon, gebruiker, en inetOrgPerson. Als je niet zeker weet welke objectklasse moet worden geselecteerd, raadpleeg dan je directorybeheerder.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "Dit filter geeft aan welke LDAP gebruikers toegang hebben tot %s.",
    "Verify settings and count users" : "Verifiëren instellingen en tellen gebruikers",
    "Saving" : "Opslaan",
    "Back" : "Terug",
    "Continue" : "Verder",
    "Please renew your password." : "Herstel je wachtwoord",
    "An internal error occurred." : "Er heeft zich een interne fout voorgedaan.",
    "Please try again or contact your administrator." : "Probeer het opnieuw of neem contact op met je beheerder.",
    "Current password" : "Huidig wachtwoord",
    "New password" : "Nieuw wachtwoord",
    "Renew password" : "Herstel wachtwoord",
    "Wrong password." : "Onjuist wachtwoord.",
    "Cancel" : "Annuleren",
    "Server" : "Server",
    "Users" : "Gebruikers",
    "Login Attributes" : "Inlogattributen",
    "Groups" : "Groepen",
    "Expert" : "Expert",
    "Advanced" : "Geavanceerd",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Waarschuwing:</b> De PHP LDAP module is niet geïnstalleerd, het backend zal niet werken. Vraag je systeembeheerder om de module te installeren.",
    "Connection Settings" : "Verbindingsinstellingen",
    "Configuration Active" : "Configuratie actief",
    "When unchecked, this configuration will be skipped." : "Als dit niet is ingeschakeld wordt deze configuratie overgeslagen.",
    "Backup (Replica) Host" : "Backup (Replica) Host",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Opgeven optionele backup host. Het moet een replica van de hoofd LDAP/AD server.",
    "Backup (Replica) Port" : "Backup (Replica) Poort",
    "Disable Main Server" : "Deactiveren hoofdserver",
    "Only connect to the replica server." : "Maak alleen een verbinding met de replica server.",
    "Turn off SSL certificate validation." : "Schakel SSL certificaat validatie uit.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Niet aanbevolen, gebruik dit alleen om te testen! Als de verbinding alleen werkt met deze optie, importeer dan het SSL-certificaat van de LDAP-server naar je %s server.",
    "Cache Time-To-Live" : "Cache time-to-live",
    "in seconds. A change empties the cache." : "in seconden. Een verandering maakt de cache leeg.",
    "Directory Settings" : "Mapinstellingen",
    "User Display Name Field" : "Veld gebruikers weergavenaam",
    "The LDAP attribute to use to generate the user's display name." : "Het te gebruiken LDAP attribuut voor het genereren van de weergavenaam voor de gebruiker.",
    "2nd User Display Name Field" : "2e gebruiker weergavenaam veld",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "Optioneel. Een LDAP attribuut wat word toegevoegd aan de weergave neem tussen haakjes. Bijvoorbeeld \"John Doe (john.doe@voorbeeld.org)\".",
    "Base User Tree" : "Basis Gebruikers Structuur",
    "One User Base DN per line" : "Een User Base DN per regel",
    "User Search Attributes" : "Attributen voor gebruikerszoekopdrachten",
    "Optional; one attribute per line" : "Optioneel; één attribuut per regel",
    "Group Display Name Field" : "Groep Schermnaam Veld",
    "The LDAP attribute to use to generate the groups's display name." : "Het te gebruiken LDAP attribuut voor het genereren van de weergavenaam voor de groepen.",
    "Base Group Tree" : "Basis groepsstructuur",
    "One Group Base DN per line" : "Een Group Base DN per regel",
    "Group Search Attributes" : "Attributen voor groepszoekopdrachten",
    "Group-Member association" : "Groepslid associatie",
    "Dynamic Group Member URL" : "Dynamisch Groepslid URL",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "Het LDAP attribuut wat op groep object een LDAP zoek URL bevat wat gebruikt word om groep lidmaatschap op te halen. (Een leeg veld schakeld dynamisch groep lidmaatschap uit.)",
    "Nested Groups" : "Geneste groepen",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Wanneer ingeschakeld worden groepen binnen groepen ondersteund. (Werkt alleen als het groepslid attribuut DNs bevat)",
    "Paging chunksize" : "Paging chunkgrootte",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "De chunkgrootte die wordt gebruikt voor LDAP opvragingen die in grote aantallen resulteren, zoals gebruiker- of groepsverzamelingen. (Instellen op 0 deactiveert gepagede LDAP opvragingen in dergelijke situaties.)",
    "Enable LDAP password changes per user" : "Activeren LDAP wachtwoordwijziging per gebruiker:",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : "Sta LDAP gebruikers toe om hun wachtwoord te wijzigen en sta Superbeheerders en Groepsbeheerder toe om het wachtwoord van hun LDAP gebruikers te wijzigen. Dit werkt alleen als het toegangsbeveiligingsbeleid als zodanig ook op de LDAP server is ingericht. Omdat wachtwoorden in leesbare tekst naar de LDAP worden verstuurd, moet transportversleuteling worden gebruikt en moet wachtwoord hashing zijn geconfigureerd op de LDAP server.",
    "(New password is sent as plain text to LDAP)" : "(Nieuw wachtwoord is als leesbare tekst verstuurd naar LDAP)",
    "Default password policy DN" : "Standaard wachtwoordbeleid DN",
    "The DN of a default password policy that will be used for password expiry handling. Works only when LDAP password changes per user are enabled and is only supported by OpenLDAP. Leave empty to disable password expiry handling." : "Het DN of standaard wachtwoordbeleid dat wordt gebruikt voor het verlopen van wachtwoorden. Wordt alleen ondersteund in combinaite met OpenLDAP wanneer paswoord wijzigingen per gebruiker is ingeschakeld. Leeg laten wanneer wanneer je wachtwoord verloop wil uitschakelen.",
    "Special Attributes" : "Speciale attributen",
    "Quota Field" : "Quota veld",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "Laat leeg voor het standaard gebruikersquotum. Of specificeer een LDAP/AD attribuut.",
    "Quota Default" : "Quota standaard",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "Overschrijf de standaardquota voor LDAP gebruikers waarvoor geen qutum hoeft de worden ingevuld in het Quotum veld.",
    "Email Field" : "E-mailveld",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "Stel het e-mailadres van de gebruiker op het LDAP attribuut. Vul niets in voor de standaardwijze.",
    "User Home Folder Naming Rule" : "Gebruikers Home map naamgevingsregel",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Laat leeg voor de gebruikersnaam (standaard). Of specificeer een LDAP/AD attribuut.",
    "Internal Username" : "Interne gebruikersnaam",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users." : "Standaard wordt de interne gebruikersnaam afgeleid van het UUID attribuut. dat zorgt ervoor dat de gebruikersnaam uniek is en dat tekens niet hoeven te worden geconverteerd. De interne gebruikersnaam heeft de beperking dat alleen deze tekens zijn toegestaan: [ a-zA-Z0-9_.@- ].  Andere tekens worden vervangen door hun overeenkomstige ASCII-waarde of simpelweg weggelaten. Bij conflicten wordt een nummer toegevoegd/verhoogd. De interne gebruikersnaam wordt gebruikt om een gebruiker intern te identificeren. Het is ook de standaardnaam voor de thuis-map van de gebruiker. Het is ook onderdeel van de externe URLs, bijvoorbeeld voor alle *DAV services. Met deze instelling kan het standaardgedrag worden overschreven. Laat het leeg voor de standaardwerkwijze. Wijzigingen hebben alleen effect voor nieuw gekoppelde (toegevoegde) LDAP gebruikers.",
    "Internal Username Attribute:" : "Interne gebruikersnaam attribuut:",
    "Override UUID detection" : "Negeren UUID detectie",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Standaard wordt het UUID-attribuut automatisch herkend. Het UUID attribuut wordt gebruikt om LDAP-gebruikers en -groepen uniek te identificeren. Ook zal de interne gebruikersnaam worden aangemaakt op basis van het UUID, tenzij deze hierboven anders is aangegeven. Je kunt de instelling overschrijven en zelf een waarde voor het attribuut opgeven. Je moet ervoor zorgen dat het ingestelde attribuut kan worden opgehaald voor zowel gebruikers als groepen en dat het uniek is. Laat het leeg voor standaard gedrag. Veranderingen worden alleen doorgevoerd op nieuw gekoppelde (toegevoegde) LDAP-gebruikers en-groepen.",
    "UUID Attribute for Users:" : "UUID attribuut voor gebruikers:",
    "UUID Attribute for Groups:" : "UUID attribuut voor groepen:",
    "Username-LDAP User Mapping" : "Gebruikersnaam-LDAP gebruikers vertaling",
    "Usernames are used to store and assign metadata. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Gebruikersnamen worden gebruikt om metadata op te slaan en toe te wijzen. Om gebruikers uniek te identificeren, krijgt elke LDAP-gebruiker ook een interne gebruikersnaam. Dit vereist een koppeling van de gebruikersnaam naar een ​​LDAP-gebruiker. De gecreëerde gebruikersnaam is gekoppeld aan de UUID van de LDAP-gebruiker. Aanvullend wordt ook de 'DN' gecached om het aantal LDAP-interacties te verminderen, maar dit wordt niet gebruikt voor identificatie. Als de DN verandert, zullen de veranderingen worden gevonden. De interne gebruikersnaam wordt overal gebruikt. Het wissen van de koppeling zal overal resten achterlaten. Het wissen van koppelingen is niet configuratiegevoelig, maar het raakt wel alle LDAP instellingen! Zorg ervoor dat deze koppelingen nooit in een productieomgeving gewist worden. Maak ze alleen leeg in een test- of ontwikkelomgeving.",
    "Clear Username-LDAP User Mapping" : "Leegmaken Gebruikersnaam-LDAP gebruikers vertaling",
    "Clear Groupname-LDAP Group Mapping" : "Leegmaken Groepsnaam-LDAP groep vertaling",
    " entries available within the provided Base DN" : "accounts beschikbaar binnen de provider Basis DN",
    "1. Server" : "1. Server",
    "Wrong password. Reset it?" : "Onjuist wachtwoord. Resetten?",
    "LDAP" : "LDAP",
    "<b>Warning:</b> Apps user_ldap and user_webdavauth are incompatible. You may experience unexpected behavior. Please ask your system administrator to disable one of them." : "<b>Waarschuwing:</b> De Apps user_ldap en user_webdavauth zijn incompatibel. Je kunt onverwacht gedrag ervaren. Vraag je beheerder om een van beide apps de deactiveren.",
    "Usernames are used to store and assign (meta) data. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Gebruikersnamen worden gebruikt om (meta) data op te slaan en toe te wijzen. Om gebruikers uniek te identificeren, krijgt elke LDAP-gebruiker ook een interne gebruikersnaam. Dit vereist een koppeling van de gebruikersnaam naar een ​​LDAP-gebruiker. De gecreëerde gebruikersnaam is gekoppeld aan de UUID van de LDAP-gebruiker. Aanvullend wordt ook de 'DN' gecached om het aantal LDAP-interacties te verminderen, maar dit wordt niet gebruikt voor identificatie. Als de DN verandert, zullen de veranderingen worden gevonden. De interne gebruikersnaam wordt overal gebruikt. Het wissen van de koppeling zal overal resten achterlaten. Het wissen van koppelingen is niet configuratiegevoelig, maar het raakt wel alle LDAP instellingen! Zorg ervoor dat deze koppelingen nooit in een productieomgeving gewist worden. Maak ze alleen leeg in een test- of ontwikkelomgeving."
},
"nplurals=2; plural=(n != 1);");

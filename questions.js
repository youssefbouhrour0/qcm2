const questions = [
    {
        question: "1. Qu'est-ce que l'acronyme 'LAN' signifie en informatique réseau?",
        answers: [
            "Local Area Network",
            "Large Area Network",
            "Local Access Network",
            "Longitudinal Access Node"
        ],
        correct: 0
    },
    {
        question: "2. Quelle est la couche du modèle OSI responsable du routage des paquets?",
        answers: [
            "Couche physique",
            "Couche réseau",
            "Couche application",
            "Couche de transport"
        ],
        correct: 1
    },
    {
        question: "3. Quel protocole est utilisé pour attribuer dynamiquement des adresses IP?",
        answers: [
            "DNS",
            "DHCP",
            "FTP",
            "SMTP"
        ],
        correct: 1
    },
    {
        question: "4. Quelle est la principale fonction du DNS?",
        answers: [
            "Traduire les adresses IP en noms de domaine",
            "Attribuer des adresses IP",
            "Transférer des fichiers",
            "Configurer les routeurs"
        ],
        correct: 0
    },
    {
        question: "5. Quel type de câble est couramment utilisé pour les connexions Ethernet?",
        answers: [
            "Fibre optique",
            "Câble coaxial",
            "Câble à paires torsadées",
            "Câble HDMI"
        ],
        correct: 2
    },
    {
        question: "6. Quelle adresse IP est utilisée pour désigner la boucle locale?",
        answers: [
            "192.168.1.1",
            "127.0.0.1",
            "255.255.255.255",
            "10.0.0.1"
        ],
        correct: 1
    },
    {
        question: "7. Quel protocole est utilisé pour sécuriser les transactions sur Internet?",
        answers: [
            "HTTP",
            "HTTPS",
            "FTP",
            "SMTP"
        ],
        correct: 1
    },
    {
        question: "8. Quelle commande est utilisée pour tester la connectivité réseau sous Windows?",
        answers: [
            "ping",
            "ipconfig",
            "traceroute",
            "netstat"
        ],
        correct: 0
    },
    {
        question: "9. Quel est le rôle d'un pare-feu?",
        answers: [
            "Stocker des données",
            "Bloquer le trafic non autorisé",
            "Analyser les performances réseau",
            "Configurer les adresses IP"
        ],
        correct: 1
    },
    {
        question: "10. Quelle est la plage d'adresses IP privées de classe C?",
        answers: [
            "192.168.0.0 - 192.168.255.255",
            "10.0.0.0 - 10.255.255.255",
            "172.16.0.0 - 172.31.255.255",
            "169.254.0.0 - 169.254.255.255"
        ],
        correct: 0
    },
    {
        question: "11. Quel est le but de la commande 'tracert'?",
        answers: [
            "Afficher la table de routage",
            "Suivre le chemin des paquets",
            "Afficher la configuration IP",
            "Configurer les périphériques réseau"
        ],
        correct: 1
    },
    {
        question: "12. Quel équipement est utilisé pour connecter plusieurs réseaux ensemble?",
        answers: [
            "Routeur",
            "Switch",
            "Hub",
            "Modem"
        ],
        correct: 0
    },
    {
        question: "13. Quelle est la taille d'une adresse IPv6?",
        answers: [
            "32 bits",
            "64 bits",
            "128 bits",
            "256 bits"
        ],
        correct: 2
    },
    {
        question: "14. Quel protocole est utilisé pour envoyer des e-mails?",
        answers: [
            "SMTP",
            "IMAP",
            "POP3",
            "HTTP"
        ],
        correct: 0
    },
    {
        question: "15. Quel type de serveur traduit les noms de domaine en adresses IP?",
        answers: [
            "Serveur web",
            "Serveur DHCP",
            "Serveur DNS",
            "Serveur FTP"
        ],
        correct: 2
    },
    {
        question: "16. Quelle est la fonction principale d'un commutateur (switch)?",
        answers: [
            "Répéter les signaux",
            "Interconnecter des appareils sur un réseau local",
            "Convertir les signaux analogiques en numériques",
            "Filtrer les paquets réseau"
        ],
        correct: 1
    },
    {
        question: "17. Quel protocole est utilisé pour sécuriser les connexions sans fil?",
        answers: [
            "WEP",
            "WPA2",
            "SSID",
            "AES"
        ],
        correct: 1
    },
    {
        question: "18. Quelle est la vitesse maximale théorique de l'Ethernet Gigabit?",
        answers: [
            "100 Mbps",
            "1 Gbps",
            "10 Gbps",
            "100 Gbps"
        ],
        correct: 1
    },
    {
        question: "19. Quel est le port standard utilisé par HTTP?",
        answers: [
            "80",
            "443",
            "21",
            "8080"
        ],
        correct: 0
    },
    {
        question: "20. Quelle technologie permet de créer un réseau privé virtuel?",
        answers: [
            "VPN",
            "VLAN",
            "WLAN",
            "LAN"
        ],
        correct: 0
    },
    {
        question: "21. Quel protocole est utilisé pour le transfert de fichiers?",
        answers: [
            "FTP",
            "HTTP",
            "SMTP",
            "POP3"
        ],
        correct: 0
    },
    {
        question: "22. Quelle adresse MAC est une adresse de diffusion?",
        answers: [
            "FF:FF:FF:FF:FF:FF",
            "00:00:00:00:00:00",
            "FF:00:00:00:00:FF",
            "01:23:45:67:89:AB"
        ],
        correct: 0
    },
    {
        question: "23. Quel est le rôle principal d'un serveur DHCP?",
        answers: [
            "Attribuer des adresses IP dynamiques",
            "Résoudre des noms de domaine",
            "Stocker des fichiers",
            "Configurer des routeurs"
        ],
        correct: 0
    },
    {
        question: "24. Quel outil permet de surveiller le trafic réseau en temps réel?",
        answers: [
            "Wireshark",
            "Notepad",
            "Photoshop",
            "MS Paint"
        ],
        correct: 0
    },
    {
        question: "25. Quel type d'attaque réseau consiste à submerger un système avec du trafic?",
        answers: [
            "Phishing",
            "DDoS",
            "Man-in-the-middle",
            "Spoofing"
        ],
        correct: 1
    },
    {
        question: "26. Quelle est la commande Linux pour afficher la configuration réseau?",
        answers: [
            "ifconfig",
            "netstat",
            "ps",
            "ping"
        ],
        correct: 0
    },
    {
        question: "27. Quel est le protocole par défaut pour les connexions sécurisées à distance?",
        answers: [
            "Telnet",
            "SSH",
            "RDP",
            "SMTPS"
        ],
        correct: 1
    },
    {
        question: "28. Quelle technologie réseau utilise des faisceaux lumineux pour transmettre des données?",
        answers: [
            "Ethernet",
            "Fibre optique",
            "Wi-Fi",
            "Bluetooth"
        ],
        correct: 1
    },
    {
        question: "29. Quel est le rôle d'un proxy dans un réseau?",
        answers: [
            "Filtrer les requêtes réseau",
            "Attribuer des adresses IP",
            "Connecter des réseaux",
            "Configurer des routeurs"
        ],
        correct: 0
    },
    {
        question: "30. Quel protocole est utilisé pour l'accès à distance aux bureaux Windows?",
        answers: [
            "RDP",
            "FTP",
            "HTTP",
            "SSH"
        ],
        correct: 0
    },
    {
        question: "31. Quel type de câble est utilisé pour les longues distances et les débits élevés?",
        answers: [
            "Câble à paires torsadées",
            "Câble coaxial",
            "Fibre optique",
            "Câble HDMI"
        ],
        correct: 2
    },
    {
        question: "32. Quel est le port utilisé par défaut pour SMTP?",
        answers: [
            "25",
            "53",
            "80",
            "110"
        ],
        correct: 0
    },
    {
        question: "33. Quelle est la fonction principale d'un routeur dans un réseau?",
        answers: [
            "Filtrer le trafic réseau",
            "Connecter des périphériques sur un même réseau",
            "Transmettre des paquets entre différents réseaux",
            "Sécuriser les données utilisateur"
        ],
        correct: 2
    },
    {
        question: "34. Qu'est-ce que l'acronyme 'SSID' signifie dans les réseaux sans fil?",
        answers: [
            "Security Standard Identifier",
            "Service Set Identifier",
            "System Server Identifier",
            "Signal Strength Indicator"
        ],
        correct: 1
    },
    {
        question: "35. Quel est le rôle du NAT (Network Address Translation) dans un réseau?",
        answers: [
            "Traduction d'adresses IP privées en adresses publiques",
            "Filtrage des paquets réseau",
            "Configuration des routeurs",
            "Analyse de la bande passante"
        ],
        correct: 0
    },
    {
        question: "36. Quel est le rôle d'un pare-feu (firewall) dans un réseau informatique?",
        answers: [
            "Filtrer le trafic non autorisé",
            "Stocker des données",
            "Gérer les adresses IP",
            "Configurer les routeurs"
        ],
        correct: 0
    },
    {
        question: "37. Quel est le protocole utilisé pour la consultation de sites web?",
        answers: [
            "SMTP",
            "HTTP",
            "FTP",
            "SSH"
        ],
        correct: 1
    },
    {
        question: "38. Quelle commande est utilisée pour tester la connectivité réseau sous Linux?",
        answers: [
            "ping",
            "ifconfig",
            "tracert",
            "ipconfig"
        ],
        correct: 0
    },
    {
        question: "39. Quel type de câble est utilisé pour les transmissions à très haute vitesse sur de courtes distances?",
        answers: [
            "Câble à paires torsadées",
            "Câble coaxial",
            "Fibre optique",
            "Câble HDMI"
        ],
        correct: 2
    },
    {
        question: "40. Quelle est la fonction principale d'un serveur DNS dans un réseau?",
        answers: [
            "Attribuer des adresses IP dynamiques",
            "Traduire les noms de domaine en adresses IP",
            "Filtrer le trafic réseau",
            "Configurer les routeurs"
        ],
        correct: 1
    },
    {
        question: "41. Quel protocole est utilisé pour le transfert sécurisé de fichiers?",
        answers: [
            "FTP",
            "HTTP",
            "SMTPS",
            "SSH"
        ],
        correct: 3
    },
    {
        question: "42. Quelle commande est utilisée pour vérifier la configuration IP sur un périphérique Windows?",
        answers: [
            "ifconfig",
            "ping",
            "ipconfig",
            "netstat"
        ],
        correct: 2
    },
    {
        question: "43. Quel est le service permettant la conversion des noms de domaine en adresses IP?",
        answers: [
            "DNS",
            "DHCP",
            "FTP",
            "SNMP"
        ],
        correct: 0
    },
    {
        question: "44. Quel protocole est utilisé pour la gestion à distance des périphériques réseau?",
        answers: [
            "SMTP",
            "SNMP",
            "HTTP",
            "SSH"
        ],
        correct: 1
    },
    {
        question: "45. Quelle est la bande de fréquence utilisée par le Wi-Fi 5 (802.11ac)?",
        answers: [
            "2,4 GHz",
            "5 GHz",
            "60 GHz",
            "900 MHz"
        ],
        correct: 1
    },
    {
        question: "46. Quel est le rôle principal d'un firewall (pare-feu) dans un réseau informatique?",
        answers: [
            "Bloquer le trafic non autorisé",
            "Filtrer les spams",
            "Gérer les noms de domaine",
            "Amplifier les signaux réseau"
        ],
        correct: 0
    },
    {
        question: "47. Quel est le protocole utilisé pour la résolution de noms sur Internet?",
        answers: [
            "SMTP",
            "DNS",
            "HTTP",
            "FTP"
        ],
        correct: 1
    },
    {
        question: "48. Quel dispositif réseau est utilisé pour segmenter un réseau en sous-réseaux?",
        answers: [
            "Switch",
            "Hub",
            "Routeur",
            "Bridge"
        ],
        correct: 0
    },
    {
        question: "49. Quel type de câble est utilisé pour connecter un routeur à un modem?",
        answers: [
            "Câble coaxial",
            "Câble à paires torsadées",
            "Câble fibre optique",
            "Câble RJ45"
        ],
        correct: 3
    },
    {
        question: "50. Quel est le rôle du NAT (Network Address Translation) dans un réseau?",
        answers: [
            "Traduction d'adresses IP publiques en adresses IP privées",
            "Filtrage de paquets réseau",
            "Configuration de routeurs",
            "Analyse de la bande passante"
        ],
        correct: 0
    },
    {
        question: "51. Quel est le protocole utilisé pour la gestion à distance des périphériques réseau?",
        answers: [
            "SMTP",
            "SSH",
            "SNMP",
            "HTTP"
        ],
        correct: 2
    },
    {
        question: "52. Quelle est la technologie utilisée pour étendre un réseau local via une connexion sans fil?",
        answers: [
            "VLAN",
            "VPN",
            "WLAN",
            "DNS"
        ],
        correct: 2
    },
    {
        question: "53. Quel est le rôle principal d'un serveur DHCP dans un réseau?",
        answers: [
            "Fournir des adresses IP statiques",
            "Attribuer des adresses IP dynamiques",
            "Gérer les connexions VPN",
            "Filtrer les paquets réseau"
        ],
        correct: 1
    },
    {
        question: "54. Quel protocole est utilisé pour sécuriser les transactions sur Internet?",
        answers: [
            "HTTP",
            "HTTPS",
            "FTP",
            "SMTP"
        ],
        correct: 1
    },
    {
        question: "55. Quelle commande est utilisée pour tester la connectivité réseau sous Windows?",
        answers: [
            "ping",
            "ipconfig",
            "traceroute",
            "netstat"
        ],
        correct: 0
    },
    {
        question: "56. Quel est le rôle d'un pare-feu?",
        answers: [
            "Stocker des données",
            "Bloquer le trafic non autorisé",
            "Analyser les performances réseau",
            "Configurer les adresses IP"
        ],
        correct: 1
    },
    {
        question: "57. Quelle est la plage d'adresses IP privées de classe C?",
        answers: [
            "192.168.0.0 - 192.168.255.255",
            "10.0.0.0 - 10.255.255.255",
            "172.16.0.0 - 172.31.255.255",
            "169.254.0.0 - 169.254.255.255"
        ],
        correct: 0
    },
    {
        question: "58. Quel est le but de la commande 'tracert'?",
        answers: [
            "Afficher la table de routage",
            "Suivre le chemin des paquets",
            "Afficher la configuration IP",
            "Configurer les périphériques réseau"
        ],
        correct: 1
    },
    {
        question: "59. Quel équipement est utilisé pour connecter plusieurs réseaux ensemble?",
        answers: [
            "Routeur",
            "Switch",
            "Hub",
            "Modem"
        ],
        correct: 0
    },
    {
        question: "60. Quelle est la taille d'une adresse IPv6?",
        answers: [
            "32 bits",
            "64 bits",
            "128 bits",
            "256 bits"
        ],
        correct: 2
    },
    // Add more questions as needed
];


// Ce fichier source regroupe des objets représentant des données d'API du site
// permettant ainsi de visualiser la structure de ces données ou de les exploiter 
// directement pour des tests.


// productPost : Objets représentant un article de Blog
const blogPost = {
    "id": 5,
    "meta": {
        "type": "blog.BlogDetailPage",
        "detail_url": "http://localhost/api/v2/pages/5/",
        "html_url": "http://localhost/blog/esp32-pinout-reference/",
        "slug": "esp32-pinout-reference",
        "show_in_menus": false,
        "seo_title": "",
        "search_description": "",
        "first_published_at": "2023-06-19T07:41:49.159069Z",
        "alias_of": null,
        "locale": "fr"
    },
    "title": "ESP32 Pinout Reference",
    "post_date": "2023-06-19",
    "sub_title": "ESP32 Pinout Reference: Which GPIO pins should you use?",
    "icone": {
        "id": 11,
        "meta": {
            "type": "wagtailimages.Image",
            "detail_url": "http://localhost/api/v2/images/11/",
            "download_url": "/media/original_images/ESP32_PINOUT_pDdJcGG.png"
        },
        "title": "ESP32_PINOUT"
    },
    "body": [
        {
            "type": "Paragraphe",
            "value": "<p data-block-key=\"sopne\"></p><h1 data-block-key=\"7i9td\"><b>ESP32 Pinout Reference: Which GPIO pins should you use?</b></h1><p data-block-key=\"8u3h0\">The ESP32 chip comes with 48 pins with multiple functions. Not all pins are exposed in all ESP32 development boards, and some pins cannot be used.</p><p data-block-key=\"4q7c3\">There are many questions on how to use the ESP32 GPIOs. What pins should you use? What pins should you avoid using in your projects? This post aims to be a simple and easy-to-follow reference guide for the ESP32 GPIOs.</p><p data-block-key=\"cmskm\">The figure below illustrates the ESP-WROOM-32 pinout. You can use it as a reference if you’re using an <b>ESP32 bare chip</b> to build a custom board:</p>",
            "id": "fbe5283e-7fcc-41d3-af94-30fd6fd24a01"
        },
        {
            "type": "Image",
            "value": 11,
            "id": "af414201-202a-4d39-8666-9e1f980c390d"
        },
        {
            "type": "Paragraphe",
            "value": "<blockquote data-block-key=\"zam6l\"><b>Note:</b> not all GPIOs are accessible in all development boards, but each specific GPIO works in the same way regardless of the development board you’re using. If you’re just getting started with the ESP32, we recommend reading our guide: <a href=\"https://randomnerdtutorials.com/getting-started-with-esp32/\">Getting Started with the ESP32 Development Board</a>.</blockquote><p data-block-key=\"65vhu\"></p><h2 data-block-key=\"1m6em\"><b>ESP32 Peripherals</b></h2><p data-block-key=\"a1429\">The ESP32 peripherals include:</p><ul><li data-block-key=\"fqutu\"><a href=\"https://randomnerdtutorials.com/esp32-adc-analog-read-arduino-ide/\">18 Analog-to-Digital Converter (ADC) channels</a></li><li data-block-key=\"fdrtb\"><a href=\"https://randomnerdtutorials.com/esp32-spi-communication-arduino/\">3 SPI interfaces</a></li><li data-block-key=\"dhn36\">3 UART interfaces</li><li data-block-key=\"fciam\"><a href=\"https://randomnerdtutorials.com/esp32-i2c-communication-arduino-ide/\">2 I2C interfaces</a></li><li data-block-key=\"5u2lq\"><a href=\"https://randomnerdtutorials.com/esp32-pwm-arduino-ide/\">16 PWM output channels</a></li><li data-block-key=\"ev30c\">2 Digital-to-Analog Converters (DAC)</li><li data-block-key=\"4ibc3\">2 I2S interfaces</li><li data-block-key=\"ctk3q\"><a href=\"https://randomnerdtutorials.com/esp32-touch-pins-arduino-ide/\">10 Capacitive sensing GPIOs</a></li></ul><p data-block-key=\"5t45\">The ADC (analog to digital converter) and DAC (digital to analog converter) features are assigned to specific static pins. However, you can decide which pins are UART, I2C, SPI, PWM, etc – you just need to assign them in the code. This is possible due to the ESP32 chip’s multiplexing feature.</p><p data-block-key=\"fpet2\">Although you can define the pins properties on the software, there are pins assigned by default as shown in the following figure (this is an example for the <a href=\"https://makeradvisor.com/tools/esp32-dev-board-wi-fi-bluetooth/\">ESP32 DEVKIT V1 DOIT board</a> with 36 pins – the pin location can change depending on the manufacturer).</p><p data-block-key=\"b5a7k\"></p><p data-block-key=\"0i2cg\"></p>",
            "id": "07ff3861-0aa4-4a88-bb8a-a1c364be3e83"
        },
        {
            "type": "Deux_colonnes",
            "value": {
                "position": "middle",
                "left_column": [
                    {
                        "type": "paragraph",
                        "value": "<p data-block-key=\"myrlv\">Rapport d’informations système écrit à l’emplacement : 03/12/23 00:01:16<br/>Nom du système : ANDYSMART<br/>[Résumé système]<br/>Élément Valeur<br/>Nom du système d’exploitation Microsoft Windows 10 Professionnel<br/>Version 10.0.19041 Build 19041<br/>Autre description du système d’exploitation Non disponible<br/>Fabricant du système d’exploitation Microsoft Corporation<br/>Ordinateur ANDYSMART<br/>Fabricant HP<br/>Modèle HP ProBook 655 G3<br/>Type PC à base de x64<br/>Référence (SKU) du système Y7C12AV<br/>Processeur AMD PRO A10-8730B R5, 10 COMPUTE CORES 4C+6G, 2400 MHz, 4 cœur(s), 4 processeur(s) l<br/>ogique(s)<br/>Version du BIOS/Date HP P82 Ver. 01.26, 09/01/2019<br/>Version SMBIOS 3.0<br/>Version du contrôleur embarqué 57.66<br/>Mode BIOS UEFI<br/>Fabricant de la carte de base HP<br/>Produit de la carte de base 823A<br/>Version de la carte de base KBC Version 39.42<br/>Rôle de la plateforme Mobile<br/>État du démarrage sécurisé Désactivé<br/>Configuration de PCR 7 Élévation requise à afficher<br/>Répertoire Windows C:\\Windows<br/>Répertoire système C:\\Windows\\system32<br/>Périphérique de démarrage \\Device\\HarddiskVolume1<br/>Option régionale France<br/>Couche d’abstraction matérielle Version = &quot;10.0.19041.1&quot;<br/>Utilisateur ANDYSMART\\SIWA Andy<br/>Fuseaux horaires Afr. centrale Ouest<br/>Mémoire physique (RAM) installée 8,00 Go<br/>Mémoire physique totale 7,43 Go<br/>Mémoire physique disponible 5,30 Go<br/>Mémoire virtuelle totale 9,24 Go<br/>Mémoire virtuelle disponible 7,00 Go<br/>Espace pour le fichier d’échange 1,81 Go<br/>Fichier d’échange C:\\pagefile.sys<br/>Protection DMA du noyau Désactivé<br/>Sécurité basée sur la virtualisation Désactivé<br/>Prise en charge du chiffrement d’appareil%s Élévation requise à afficher<br/>Hyper-V - Extensions du mode de moniteur des ordinateurs virtuels Oui<br/>Hyper-V - Extensions de la conversion des adresses de second niveau Oui<br/>Hyper-V - Virtualisation activée dans le microprogramme Oui<br/>Hyper-V - Protection de l’exécution des données Oui<br/>[Ressources matérielles]<br/>[Conflits/Partage]<br/>Ressource Périphérique<br/>Port d’E/S 0x00000000-0x0000000F Contrôleur d&#x27;accès direct à la mémoire<br/>Port d’E/S 0x00000000-0x0000000F Racine complexe PCI Express<br/>Port d’E/S 0x00002000-0x00002FFF Port racine PCI Express<br/>Port d’E/S 0x00002000-0x00002FFF Realtek PCIe GbE Family Controller<br/>Adresse mémoire 0xE0D00000-0xE0DFFFFF Port racine PCI Express<br/>Adresse mémoire 0xE0D00000-0xE0DFFFFF Realtek PCIe GbE Family Controller<br/></p>",
                        "id": "cec5d44d-82e3-43e9-8510-63177a545515"
                    }
                ],
                "right_column": [
                    {
                        "type": "paragraph",
                        "value": "<p data-block-key=\"ajbn8\">Adresse mémoire 0xE0A00000-0xE0AFFFFF Port racine PCI Express<br/>Adresse mémoire 0xE0A00000-0xE0AFFFFF Surface NVM Express Controller<br/>Adresse mémoire 0xE0000-0xE3FFF Racine complexe PCI Express<br/>Adresse mémoire 0xE0000-0xE3FFF Carte système<br/>Adresse mémoire 0xD0000000-0xF7FFFFFF Racine complexe PCI Express<br/>Adresse mémoire 0xD0000000-0xF7FFFFFF AMD Radeon R5 Graphics<br/>Adresse mémoire 0xA0000-0xBFFFF Racine complexe PCI Express<br/>Adresse mémoire 0xA0000-0xBFFFF AMD Radeon R5 Graphics<br/>[DMA]<br/>Ressource Périphérique Statut<br/>Canal 4 Contrôleur d&#x27;accès direct à la mémoire OK<br/>[Matériel requis]<br/>Périphérique ID de périphérique Plug-and-Play<br/>[E/S]<br/>Ressource Périphérique Statut<br/>0x00000062-0x00000062 Contrôleur embarqué compatible ACPI Microsoft OK<br/>0x00000066-0x00000066 Contrôleur embarqué compatible ACPI Microsoft OK<br/>0x00000000-0x0000000F Contrôleur d&#x27;accès direct à la mémoire OK<br/>0x00000000-0x0000000F Racine complexe PCI Express OK<br/>0x00000081-0x0000008F Contrôleur d&#x27;accès direct à la mémoire OK<br/>0x000000C0-0x000000DF Contrôleur d&#x27;accès direct à la mémoire OK<br/>0x00002000-0x00002FFF Port racine PCI Express OK<br/>0x00002000-0x00002FFF Realtek PCIe GbE Family Controller OK<br/>0x000000F0-0x000000FE Coprocesseur arithmétique OK<br/>0x00000010-0x0000001F Ressources de la carte mère OK<br/>0x0000002E-0x0000002F Ressources de la carte mère OK<br/>0x00000072-0x00000073 Ressources de la carte mère OK<br/>0x00000080-0x00000080 Ressources de la carte mère OK<br/>0x000000B0-0x000000B1 Ressources de la carte mère OK<br/>0x00000092-0x00000092 Ressources de la carte mère OK<br/>0x00000400-0x000004CF Ressources de la carte mère OK<br/>0x000004D0-0x000004D1 Ressources de la carte mère OK<br/>0x000004D6-0x000004D6 Ressources de la carte mère OK<br/>0x00000680-0x000006FF Ressources de la carte mère OK<br/>0x0000077A-0x0000077A Ressources de la carte mère OK<br/>0x00000C00-0x00000C01 Ressources de la carte mère OK<br/>0x00000C14-0x00000C14 Ressources de la carte mère OK<br/>0x00000C50-0x00000C52 Ressources de la carte mère OK<br/>0x00000C6C-0x00000C6C Ressources de la carte mère OK<br/>0x00000C6F-0x00000C6F Ressources de la carte mère OK<br/>0x00000CD0-0x00000CDB Ressources de la carte mère OK<br/>0x00000840-0x00000847 Ressources de la carte mère OK<br/>0x00000061-0x00000061 Haut-parleur système OK<br/>0x00000D00-0x0000FFFF Racine complexe PCI Express OK<br/>0x00000040-0x00000043 Horloge système OK<br/>0x00000200-0x0000023F Ressources de la carte mère OK<br/>0x00000060-0x00000060 Clavier standard PS/2 OK<br/>0x00000064-0x00000064 Clavier standard PS/2 OK<br/>0x00003118-0x0000311F Contrôleur AHCI SATA standard OK<br/>0x00003124-0x00003127 Contrôleur AHCI SATA standard OK<br/>0x00003110-0x00003117 Contrôleur AHCI SATA standard OK<br/>0x00003120-0x00003123 Contrôleur AHCI SATA standard OK<br/>0x00003100-0x0000310F Contrôleur AHCI SATA standard OK<br/>0x00003000-0x000030FF AMD Radeon R5 Graphics OK<br/>0x000003B0-0x000003BB AMD Radeon R5 Graphics OK<br/></p>",
                        "id": "7d318b77-fb21-4882-8130-9d59123d27dc"
                    }
                ]
            },
            "id": "1fe14016-95a1-4183-a144-33f2cea16763"
        },
        {
            "type": "Image",
            "value": 32,
            "id": "3b17e3d4-5eed-4d8f-a7ab-09b0520b2e0b"
        }
    ],
    "gallery_images": [
        {
            "id": 12,
            "meta": {
                "type": "wagtailimages.Image",
                "detail_url": "http://localhost/api/v2/images/12/",
                "download_url": "/media/original_images/esp32_img.jpg"
            },
            "title": "esp32_img",
            "type": "wagtailimages.Image",
            "detail_url": "http://localhost/api/v2/images/12/",
            "download_url": "/media/original_images/esp32_img.jpg"
        },
        {
            "id": 11,
            "meta": {
                "type": "wagtailimages.Image",
                "detail_url": "http://localhost/api/v2/images/11/",
                "download_url": "/media/original_images/ESP32_PINOUT_pDdJcGG.png"
            },
            "title": "ESP32_PINOUT",
            "type": "wagtailimages.Image",
            "detail_url": "http://localhost/api/v2/images/11/",
            "download_url": "/media/original_images/ESP32_PINOUT_pDdJcGG.png"
        }
    ],
    "date_formatee": "19 June 2023"
}

// productPost : Objets représentant un article de produit
const productPost = {
    "id": 9,
    "meta": {
        "type": "produits.ProductDetailPage",
        "detail_url": "http://localhost/api/v2/pages/9/",
        "html_url": "http://localhost/produits/couveuse/",
        "slug": "couveuse",
        "show_in_menus": false,
        "seo_title": "",
        "search_description": "",
        "first_published_at": "2023-07-06T00:07:26.764361Z",
        "alias_of": null,
        "locale": "fr"
    },
    "title": "Couveuse",
    "post_date": "2023-07-06",
    "description": "Couveuse néonatale",
    "photo": {
        "id": 16,
        "meta": {
            "type": "wagtailimages.Image",
            "detail_url": "http://localhost/api/v2/images/16/",
            "download_url": "/media/original_images/IMG_3591.jpg"
        },
        "title": "Couveuse"
    },
    "price": "----",
    "details": [
        {
            "type": "paragraph",
            "value": "<p data-block-key=\"pm5x2\"> </p><h2 data-block-key=\"1cc5k\">What is Lorem Ipsum?</h2><p data-block-key=\"36ulp\"><b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#x27;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p data-block-key=\"7f348\"> </p><h2 data-block-key=\"c19vq\">Where does it come from?</h2><p data-block-key=\"5v6mb\">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.</p>",
            "id": "ba5264f0-46fb-452c-861a-292b5d1a1c19"
        }
    ],
    "product_gallery_images": [
        {
            "id": 16,
            "meta": {
                "type": "wagtailimages.Image",
                "detail_url": "http://localhost/api/v2/images/16/",
                "download_url": "/media/original_images/IMG_3591.jpg"
            },
            "title": "Couveuse",
            "type": "wagtailimages.Image",
            "detail_url": "http://localhost/api/v2/images/16/",
            "download_url": "/media/original_images/IMG_3591.jpg"
        },
        {
            "id": 17,
            "meta": {
                "type": "wagtailimages.Image",
                "detail_url": "http://localhost/api/v2/images/17/",
                "download_url": "/media/original_images/Couveuse_01.jpg"
            },
            "title": "Couveuse_01",
            "type": "wagtailimages.Image",
            "detail_url": "http://localhost/api/v2/images/17/",
            "download_url": "/media/original_images/Couveuse_01.jpg"
        }
    ],
    "icone": {
        "url": "/media/images/IMG_3591.2e16d0ba.fill-400x400.jpg",
        "full_url": "http://microqqtech.com/media/images/IMG_3591.2e16d0ba.fill-400x400.jpg",
        "width": 400,
        "height": 400,
        "alt": "Couveuse"
    },
    "date_formatee": "06 July 2023"
}
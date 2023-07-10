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
            "value": "<p data-block-key=\"sopne\"> </p><h1 data-block-key=\"7i9td\"><b>ESP32 Pinout Reference: Which GPIO pins should you use?</b></h1><p data-block-key=\"8u3h0\">The ESP32 chip comes with 48 pins with multiple functions. Not all pins are exposed in all ESP32 development boards, and some pins cannot be used.</p><p data-block-key=\"4q7c3\">There are many questions on how to use the ESP32 GPIOs. What pins should you use? What pins should you avoid using in your projects? This post aims to be a simple and easy-to-follow reference guide for the ESP32 GPIOs.</p><p data-block-key=\"cmskm\">The figure below illustrates the ESP-WROOM-32 pinout. You can use it as a reference if you’re using an <b>ESP32 bare chip</b> to build a custom board:</p>",
            "id": "fbe5283e-7fcc-41d3-af94-30fd6fd24a01"
        },
        {
            "type": "Image",
            "value": 11,
            "id": "af414201-202a-4d39-8666-9e1f980c390d"
        },
        {
            "type": "Paragraphe",
            "value": "<blockquote data-block-key=\"zam6l\"><b>Note:</b> not all GPIOs are accessible in all development boards, but each specific GPIO works in the same way regardless of the development board you’re using. If you’re just getting started with the ESP32, we recommend reading our guide: <a href=\"https://randomnerdtutorials.com/getting-started-with-esp32/\">Getting Started with the ESP32 Development Board</a>. </blockquote><p data-block-key=\"65vhu\"> </p><h2 data-block-key=\"1m6em\"><b>ESP32 Peripherals</b></h2><p data-block-key=\"a1429\">The ESP32 peripherals include:</p><ul><li data-block-key=\"fqutu\"><a href=\"https://randomnerdtutorials.com/esp32-adc-analog-read-arduino-ide/\">18 Analog-to-Digital Converter (ADC) channels</a></li><li data-block-key=\"fdrtb\"><a href=\"https://randomnerdtutorials.com/esp32-spi-communication-arduino/\">3 SPI interfaces</a></li><li data-block-key=\"dhn36\">3 UART interfaces</li><li data-block-key=\"fciam\"><a href=\"https://randomnerdtutorials.com/esp32-i2c-communication-arduino-ide/\">2 I2C interfaces</a></li><li data-block-key=\"5u2lq\"><a href=\"https://randomnerdtutorials.com/esp32-pwm-arduino-ide/\">16 PWM output channels</a></li><li data-block-key=\"ev30c\">2 Digital-to-Analog Converters (DAC)</li><li data-block-key=\"4ibc3\">2 I2S interfaces</li><li data-block-key=\"ctk3q\"><a href=\"https://randomnerdtutorials.com/esp32-touch-pins-arduino-ide/\">10 Capacitive sensing GPIOs</a></li></ul><p data-block-key=\"5t45\">The ADC (analog to digital converter) and DAC (digital to analog converter) features are assigned to specific static pins. However, you can decide which pins are UART, I2C, SPI, PWM, etc – you just need to assign them in the code. This is possible due to the ESP32 chip’s multiplexing feature.</p><p data-block-key=\"fpet2\">Although you can define the pins properties on the software, there are pins assigned by default as shown in the following figure (this is an example for the <a href=\"https://makeradvisor.com/tools/esp32-dev-board-wi-fi-bluetooth/\">ESP32 DEVKIT V1 DOIT board</a> with 36 pins – the pin location can change depending on the manufacturer).</p><p data-block-key=\"b5a7k\"></p><embed alt=\"ESP32_VROOM_Pinout\" embedtype=\"image\" format=\"fullwidth\" id=\"32\"/><p data-block-key=\"2b94c\"></p>",
            "id": "07ff3861-0aa4-4a88-bb8a-a1c364be3e83"
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